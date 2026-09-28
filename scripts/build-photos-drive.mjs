/**
 * 從公開的 Google Drive 資料夾產生照片清單，網站直接向 Google 取壓縮過的圖。
 *
 *   node scripts/build-photos-drive.mjs <資料夾ID>      （或 npm run photos:drive -- <資料夾ID>）
 *
 * 輸入：攝影組的 Drive 資料夾（需設為「知道連結的人都能檢視」），
 *       底下的中文子資料夾對應 src/data/2026/albums.json 的 "dir" 欄位。
 *       子資料夾裡若還有資料夾（例如 贊助商/趨勢科技），會一併收進同一區。
 *
 * 輸出：src/data/2026/photos.json，每筆 { id, album, driveId, w, h }
 *
 * 跟 build-photos.mjs 的差別：照片不下載、不進 repo。圖片網址由 gallery.js 的
 * photoUrl() 組成 lh3.googleusercontent.com 的縮圖網址，Google 會依指定尺寸壓縮，
 * 並剝除大部分 EXIF（實測只剩攝影師名稱與拍攝時間，沒有 GPS）。
 *
 * 清單來自 Drive 的公開嵌入頁 embeddedfolderview，不需要 API 金鑰。這不是官方
 * 文件記載的介面，所以只在匯入時用一次；產生的 photos.json 進 repo 之後，
 * 網站執行時完全不依賴它。
 *
 * 原始檔名只拿來排序（≈ 拍攝順序），不寫進 photos.json。
 */

import { readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT_FOLDER = process.argv[2];

const ROOT     = fileURLToPath(new URL('..', import.meta.url));
const ALBUMS   = join(ROOT, 'src', 'data', '2026', 'albums.json');
const MANIFEST = join(ROOT, 'src', 'data', '2026', 'photos.json');

// 放大檢視用的尺寸，要跟 gallery.js 的 photoUrl() 一致（長邊 1600px）
const FULL_LONG_EDGE = 1600;
// 量長寬時抓的小圖，只用來算比例，讀完就丟
const PROBE = 's400';
const CONCURRENCY = 8;

const ACCEPTED = new Set(['.jpg', '.jpeg', '.png', '.webp', '.heic', '.heif', '.tif', '.tiff']);

const collator = new Intl.Collator('zh-Hant', { numeric: true });

function decodeEntities(s) {
    return s
        .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
        .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
        .replace(/&quot;/g, '"')
        .replace(/&#39;|&apos;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
}

async function fetchWithRetry(url, tries = 4) {
    for (let i = 1; ; i++) {
        const res = await fetch(url, { redirect: 'follow' });
        if (res.ok) return res;
        if (i >= tries || (res.status !== 429 && res.status < 500)) {
            throw new Error(`HTTP ${res.status}：${url}`);
        }
        await new Promise(r => setTimeout(r, 1000 * 2 ** i));
    }
}

/** 列出一個公開資料夾底下的項目：{ id, name, isFolder } */
async function listFolder(folderId) {
    const res = await fetchWithRetry(`https://drive.google.com/embeddedfolderview?id=${folderId}`);
    const html = await res.text();

    const entries = [];
    for (const chunk of html.split('<div class="flip-entry" id="entry-').slice(1)) {
        const id = chunk.match(/^([A-Za-z0-9_-]+)"/)?.[1];
        const title = chunk.match(/<div class="flip-entry-title">([^<]*)</)?.[1];
        if (!id || title === undefined) continue;
        entries.push({
            id,
            name: decodeEntities(title).trim(),
            isFolder: chunk.includes(`/drive/folders/${id}`),
        });
    }

    if (entries.length === 0 && !html.includes('flip-entries')) {
        throw new Error(`讀不到資料夾 ${folderId}，請確認已設為「知道連結的人都能檢視」`);
    }
    return entries;
}

/** 遞迴收集資料夾裡的圖片，子資料夾依名稱排序、排在後面 */
async function collectImages(folderId) {
    const entries = await listFolder(folderId);
    const files = entries
        .filter(e => !e.isFolder && ACCEPTED.has(extname(e.name).toLowerCase()))
        .sort((a, b) => collator.compare(a.name, b.name));
    const ignored = entries.filter(e => !e.isFolder && !ACCEPTED.has(extname(e.name).toLowerCase()));
    const subfolders = entries
        .filter(e => e.isFolder)
        .sort((a, b) => collator.compare(a.name, b.name));

    for (const sub of subfolders) {
        const nested = await collectImages(sub.id);
        files.push(...nested.files);
        ignored.push(...nested.ignored);
    }
    return { files, ignored };
}

/** 抓小圖量比例，換算成長邊 FULL_LONG_EDGE 時的長寬 */
async function measure(driveId) {
    const res = await fetchWithRetry(`https://lh3.googleusercontent.com/d/${driveId}=${PROBE}`);
    const meta = await sharp(Buffer.from(await res.arrayBuffer())).metadata();

    // EXIF 方向 5–8 表示瀏覽器會轉 90 度顯示，長寬要對調
    const rotated = (meta.orientation ?? 1) >= 5;
    const w = rotated ? meta.height : meta.width;
    const h = rotated ? meta.width : meta.height;

    return w >= h
        ? { w: FULL_LONG_EDGE, h: Math.round(FULL_LONG_EDGE * h / w) }
        : { w: Math.round(FULL_LONG_EDGE * w / h), h: FULL_LONG_EDGE };
}

/** 有上限的平行處理，保持輸出順序 */
async function mapLimit(items, limit, fn) {
    const out = new Array(items.length);
    let next = 0;
    await Promise.all(Array.from({ length: limit }, async () => {
        while (next < items.length) {
            const i = next++;
            out[i] = await fn(items[i], i);
        }
    }));
    return out;
}

async function main() {
    if (!ROOT_FOLDER) {
        console.error('請指定 Drive 資料夾 ID：npm run photos:drive -- <資料夾ID>');
        process.exitCode = 1;
        return;
    }

    const albums = JSON.parse(await readFile(ALBUMS, 'utf8'));
    const top = await listFolder(ROOT_FOLDER);
    const byName = new Map(top.filter(e => e.isFolder).map(e => [e.name, e]));

    const manifest = [];
    const missing = [];
    const failed = [];

    for (const album of albums) {
        const folder = byName.get(album.dir);
        if (!folder) {
            missing.push(album.dir);
            continue;
        }

        const { files, ignored } = await collectImages(folder.id);
        const sizes = await mapLimit(files, CONCURRENCY, async f => {
            try {
                return await measure(f.id);
            } catch (err) {
                failed.push(`${album.dir}/${f.name}：${err.message}`);
                return null;
            }
        });

        let n = 0;
        files.forEach((f, i) => {
            if (!sizes[i]) return;
            const id = `${album.id}-${String(++n).padStart(3, '0')}`;
            manifest.push({ id, album: album.id, driveId: f.id, ...sizes[i] });
        });

        console.log(`  ${album.dir.padEnd(6)} → ${album.id.padEnd(10)} ${String(n).padStart(4)} 張`);
        for (const f of ignored) console.log(`      略過非圖片檔：${f.name}`);
    }

    await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
    console.log(`\n完成：${manifest.length} 張，已寫入 src/data/2026/photos.json`);
    console.log('請到 Drive 對照各資料夾張數是否一致。');

    if (failed.length > 0) {
        console.log(`\n有 ${failed.length} 張量不到尺寸，沒有收錄：`);
        for (const f of failed) console.log(`  ${f}`);
        process.exitCode = 1;
    }
    if (missing.length > 0) {
        console.log(`\n以下分區在 Drive 資料夾裡找不到：`);
        for (const d of missing) console.log(`  ${d}`);
    }

    const known = new Set(albums.map(a => a.dir));
    const strays = [...byName.keys()].filter(name => !known.has(name));
    if (strays.length > 0) {
        console.log(`\n以下資料夾不在 albums.json 裡，被忽略了：`);
        for (const d of strays) console.log(`  ${d}`);
    }
}

main().catch(err => {
    console.error(err);
    process.exitCode = 1;
});

/**
 * 把攝影組交付的原始照片轉成網站要用的格式。
 *
 *   node scripts/build-photos.mjs          （或 npm run photos）
 *
 * 輸入：photos-src/<資料夾>/*.{jpg,jpeg,png,heic,webp,tif}
 *       資料夾名稱要對應 src/data/2026/albums.json 裡的 "dir" 欄位，
 *       也就是攝影組原本的中文資料夾名（上機照、大合照、工人 …）。
 *
 * 輸出：public/photos/2026/thumb/<id>.webp   400px，相簿牆用
 *       public/photos/2026/full/<id>.webp    1600px，放大檢視用
 *       src/data/2026/photos.json            照片清單
 *
 * 這支腳本順手處理了三件隱私相關的事：
 *   1. 輸出 WebP 時不帶 EXIF —— 拍攝時間、GPS 座標、相機序號都不會跟著上線。
 *   2. 檔名一律重新編號成 ASCII（practice-001），原始檔名可能含姓名，不會出現在網址裡。
 *   3. 原始檔留在 photos-src/，該目錄已加入 .gitignore，不會進 repo。
 */

import { readdir, mkdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT     = fileURLToPath(new URL('..', import.meta.url));
const SRC_DIR  = join(ROOT, 'photos-src');
const OUT_DIR  = join(ROOT, 'public', 'photos', '2026');
const ALBUMS   = join(ROOT, 'src', 'data', '2026', 'albums.json');
const MANIFEST = join(ROOT, 'src', 'data', '2026', 'photos.json');

const SIZES = {
    thumb: { width: 400,  quality: 72 },
    full:  { width: 1600, quality: 80 },
};

const ACCEPTED = new Set(['.jpg', '.jpeg', '.png', '.webp', '.heic', '.heif', '.tif', '.tiff']);

async function exists(path) {
    try { await stat(path); return true; } catch { return false; }
}

async function main() {
    const albums = JSON.parse(await readFile(ALBUMS, 'utf8'));

    if (!(await exists(SRC_DIR))) {
        console.error(`找不到來源目錄：${SRC_DIR}\n`);
        console.error('請建立 photos-src/，並在底下開這些資料夾（名稱要一模一樣）：');
        for (const a of albums) console.error(`  photos-src/${a.dir}/`);
        process.exitCode = 1;
        return;
    }

    for (const size of Object.keys(SIZES)) {
        await mkdir(join(OUT_DIR, size), { recursive: true });
    }

    const manifest = [];
    const missing = [];
    let skipped = 0;

    for (const album of albums) {
        const dir = join(SRC_DIR, album.dir);

        if (!(await exists(dir))) {
            missing.push(album.dir);
            continue;
        }

        const files = (await readdir(dir))
            .filter(f => ACCEPTED.has(extname(f).toLowerCase()))
            .sort();                       // 檔名排序 ≈ 拍攝順序

        let n = 0;
        for (const file of files) {
            const id = `${album.id}-${String(++n).padStart(3, '0')}`;

            try {
                // rotate() 依 EXIF 方向轉正；之後輸出的 WebP 不再帶任何 metadata
                const base = sharp(join(dir, file)).rotate();
                let outW = 0;
                let outH = 0;

                for (const [size, { width, quality }] of Object.entries(SIZES)) {
                    const info = await base
                        .clone()
                        .resize({ width, withoutEnlargement: true })
                        .webp({ quality })
                        .toFile(join(OUT_DIR, size, `${id}.webp`));

                    if (size === 'full') { outW = info.width; outH = info.height; }
                }

                manifest.push({ id, album: album.id, w: outW, h: outH });
            } catch (err) {
                n--;                       // 這張沒成功，編號還給下一張
                skipped++;
                console.warn(`  略過 ${album.dir}/${file}：${err.message}`);
            }
        }

        console.log(`  ${album.dir.padEnd(6)} → ${album.id.padEnd(10)} ${String(n).padStart(4)} 張`);
    }

    // photos-src/ 底下有、但 albums.json 沒定義的資料夾
    const known = new Set(albums.map(a => a.dir));
    const strays = (await readdir(SRC_DIR, { withFileTypes: true }))
        .filter(e => e.isDirectory() && !known.has(e.name))
        .map(e => e.name);

    await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
    console.log(`\n完成：${manifest.length} 張，已寫入 src/data/2026/photos.json`);

    if (skipped > 0) console.log(`有 ${skipped} 個檔案處理失敗，詳見上方訊息。`);
    if (missing.length > 0) {
        console.log(`\n以下分區在 photos-src/ 底下找不到資料夾，這次沒有產生照片：`);
        for (const d of missing) console.log(`  ${d}`);
    }
    if (strays.length > 0) {
        console.log(`\n以下資料夾不在 albums.json 裡，被忽略了：`);
        for (const d of strays) console.log(`  ${d}`);
        console.log('若要收錄，請先到 src/data/2026/albums.json 補上對應的分區。');
    }
}

main().catch(err => {
    console.error(err);
    process.exitCode = 1;
});

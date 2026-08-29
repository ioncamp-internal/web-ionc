// 2026 營隊相簿的資料定義。
//
// 這個檔案只描述「照片檔案要去哪裡拿」以及提供查詢函式，不含資料本身：
//   albums.json  分區定義（人工維護）
//   photos.json  照片清單，由 scripts/build-photos.mjs 掃描產生

import albumList from './albums.json';
import manifest from './photos.json';

// ── 照片來源 ────────────────────────────────────────────────────────────────
// 目前照片放在 public/photos/2026/ 底下，跟著網站一起部署。
// 之後若要搬到 Cloudflare R2 或 Vercel Blob，只要改這三個常數，
// 其餘所有程式碼都不用動。
const SOURCE      = 'local';           // 'local' | 'remote'
const LOCAL_BASE  = '/photos/2026';
const REMOTE_BASE = '';                // 例如 'https://photos.ioncamp.org/2026'

/**
 * 取得單張照片的網址。
 * @param {{id: string}} photo  photos.json 裡的一筆記錄
 * @param {'thumb'|'full'} size thumb = 相簿牆用 400px，full = 放大檢視用 1600px
 */
export function photoUrl(photo, size = 'thumb') {
    const base = SOURCE === 'remote' ? REMOTE_BASE : LOCAL_BASE;
    return `${base}/${size}/${photo.id}.webp`;
}

// ── 分區 ────────────────────────────────────────────────────────────────────
//
// albums.json 的每一筆：
//   id     程式用的識別碼，也是照片檔名的前綴（ASCII，會出現在網址裡）
//   dir    攝影組交付的資料夾名稱，build-photos.mjs 靠它找檔案
//   title  顯示名稱
//   when   時間標籤，選填 —— 沒有固定時段的分區（大合照、工人、贊助商）就不放
//   band   分帶標題，把「營期紀錄」和「幕後與夥伴」在版面上分開
//   blurb  一句話說明
export const albums = albumList;

// ── 查詢 ────────────────────────────────────────────────────────────────────
//
// photos.json 的每一筆：
//   { "id": "practice-007", "album": "practice", "w": 1600, "h": 1067 }
//
// 刻意不存姓名、不存原始檔名、不存拍攝地點 —— 照片旁一旦帶上姓名，
// 性質就從「一張有人的照片」變成「姓名與長相的對應資料」。

/** 取得某一區的照片，依 id 排序（等同拍攝順序）。 */
export function photosOf(albumId) {
    return manifest
        .filter(p => p.album === albumId)
        .sort((a, b) => a.id.localeCompare(b.id));
}

/** 全部照片張數。0 表示還沒上傳，頁面會顯示整理中的狀態。 */
export const totalPhotos = manifest.length;

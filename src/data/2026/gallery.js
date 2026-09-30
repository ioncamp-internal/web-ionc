// 2026 營隊相簿的資料定義。
//
// 這個檔案只描述「照片檔案要去哪裡拿」以及提供查詢函式，不含資料本身：
//   albums.json  分區定義（人工維護）
//   photos.json  照片清單，由 scripts/build-photos-drive.mjs（或 build-photos.mjs）產生

import albumList from './albums.json';
import manifest from './photos.json';

// ── 照片來源 ────────────────────────────────────────────────────────────────
// 'drive'：照片留在攝影組的公開 Drive 資料夾，由 Google 依尺寸壓縮後直接供圖。
//          photos.json 由 scripts/build-photos-drive.mjs 產生，每筆帶 driveId。
// 'local'：照片由 scripts/build-photos.mjs 壓好放在 public/photos/2026/，跟著網站部署。
// 'remote'：同 local 的檔案結構，但搬到 Cloudflare R2 / Vercel Blob。
//
// 注意：lh3.googleusercontent.com 不是 Google 公開文件記載的介面。
// 若哪天失效，改用 build-photos.mjs 把照片下載壓縮、SOURCE 切回 'local' 即可。
const SOURCE      = 'drive';           // 'drive' | 'local' | 'remote'
const LOCAL_BASE  = '/photos/2026';
const REMOTE_BASE = '';                // 例如 'https://photos.ioncamp.org/2026'

// thumb 用寬度 400（相簿牆的 4:3 方塊是 cover 裁切，直式照片要夠寬才不糊）；
// full 用長邊 1600，直式照片不會變成 1600×2400 的大檔。
// 要跟 build-photos-drive.mjs 的 FULL_LONG_EDGE 一致。
const DRIVE_SIZE = { thumb: 'w400', full: 's1600' };

/**
 * 取得單張照片的網址。
 * @param {{id: string, driveId?: string}} photo  photos.json 裡的一筆記錄
 * @param {'thumb'|'full'} size thumb = 相簿牆用，full = 放大檢視用
 */
export function photoUrl(photo, size = 'thumb') {
    if (SOURCE === 'drive') {
        return `https://lh3.googleusercontent.com/d/${photo.driveId}=${DRIVE_SIZE[size]}`;
    }
    const base = SOURCE === 'remote' ? REMOTE_BASE : LOCAL_BASE;
    return `${base}/${size}/${photo.id}.webp`;
}

// 攝影組的公開 Drive 資料夾，放全部原始高解析照片
const DRIVE_FOLDER = '1GJ56UQhHnZclYSLqYQubbTqrQCsLO_-E';

/** 整個相簿在 Drive 上的資料夾網址；照片不在 Drive 時回傳 null。 */
export const driveFolderUrl =
    SOURCE === 'drive' ? `https://drive.google.com/drive/folders/${DRIVE_FOLDER}` : null;

/** 單張照片在 Drive 上的原始頁面（可看原圖、下載）；照片不在 Drive 時回傳 null。 */
export function driveFileUrl(photo) {
    if (SOURCE !== 'drive' || !photo.driveId) return null;
    return `https://drive.google.com/file/d/${photo.driveId}/view`;
}

// ── 分區 ────────────────────────────────────────────────────────────────────
//
// albums.json 的每一筆：
//   id     程式用的識別碼，也是照片檔名的前綴（ASCII，會出現在網址裡）
//   dir    攝影組交付的資料夾名稱，匯入腳本靠它找檔案
//   title  顯示名稱
//   when   時間標籤，選填 —— 沒有固定時段的分區（大合照、工人、贊助商）就不放
//   band   分帶標題，把「營期紀錄」和「幕後與夥伴」在版面上分開
//   blurb  一句話說明
export const albums = albumList;

// ── 查詢 ────────────────────────────────────────────────────────────────────
//
// photos.json 的每一筆：
//   { "id": "practice-007", "album": "practice", "driveId": "…", "w": 1600, "h": 1067 }
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

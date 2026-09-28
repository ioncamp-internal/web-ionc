import Head from 'next/head';
import { Fragment, useState, useCallback, useEffect, useRef } from 'react';
import Header from '@/components/2026/Header';
import Footer from '@/components/2026/Footer';
import Background from '@/components/2026/Background';
import Lightbox from '@/components/2026/Lightbox';
import { albums, photosOf, photoUrl, totalPhotos, driveFolderUrl } from '@/data/2026/gallery';

const BLUE   = '#1D03F1';
const IRIS   = '#4D5BDA';
const VIOLET = '#A361DD';
const PAPER  = '#FCFCFE';
const RULE   = 'rgba(29,3,241,0.18)';
const MONO   = 'ui-monospace, SFMono-Regular, Menlo, monospace';

// 還沒有照片時，每一區顯示幾個示意方塊 —— 讓版面在照片到位前就看得出長相。
const PLACEHOLDER_TILES = 6;

// 每一區先顯示幾張，按「顯示更多」再加同樣張數。
// 48 可以被 2、3、4、6 整除，各種欄數下最後一列都是滿的。
const PAGE_SIZE = 48;

export default function Gallery() {
    // 一次只顯示一個分區，避免 1,000 多張縮圖同時塞進頁面
    const [activeId, setActiveId] = useState(albums[0].id);
    // 目前這一區顯示前幾張，按「顯示更多」再往下加
    const [shown, setShown] = useState(PAGE_SIZE);
    // 放大檢視：目前這一區的第幾張，null 表示關閉
    const [viewIndex, setViewIndex] = useState(null);
    const tabsRef = useRef(null);

    const activeAlbum  = albums.find(a => a.id === activeId);
    const activePhotos = photosOf(activeId);

    // 網址帶 #practice 之類的錨點時直接打開那一區，方便分享連結
    useEffect(() => {
        const fromHash = () => {
            const id = decodeURIComponent(window.location.hash.slice(1));
            if (albums.some(a => a.id === id)) {
                setActiveId(id);
                setShown(PAGE_SIZE);
            }
        };
        fromHash();
        window.addEventListener('hashchange', fromHash);
        return () => window.removeEventListener('hashchange', fromHash);
    }, []);

    const selectAlbum = useCallback((id) => {
        setActiveId(id);
        setShown(PAGE_SIZE);
        // replaceState 更新網址但不會讓瀏覽器跳到錨點
        window.history.replaceState(null, '', `#${id}`);
        // 已經捲到分區列下面時，切換後回到分區列，才看得到新分區的開頭
        const bar = tabsRef.current;
        if (bar) {
            const top = bar.getBoundingClientRect().top + window.scrollY;
            if (window.scrollY > top) window.scrollTo({ top });
        }
    }, []);

    const close = useCallback(() => setViewIndex(null), []);
    const step = useCallback((delta) => {
        setViewIndex(i => {
            if (i === null || activePhotos.length === 0) return i;
            return (i + delta + activePhotos.length) % activePhotos.length;
        });
    }, [activePhotos.length]);

    return (
        <>
            <Head>
                <title>2026 IONC 營隊回顧</title>
                <meta name="description" content="2026 IONCamp 清大暑期程式競賽集訓營的活動紀錄。" />
            </Head>

            <div className="min-h-screen flex flex-col relative" style={{ background: PAPER }}>
                <Background currentPage={1} />
                <Header />

                <main className="flex-grow relative z-10 pt-8 pb-20">
                    <div className="max-w-6xl mx-auto px-4">

                        {/* ── 標題 ───────────────────────────────────────────── */}
                        <header className="mb-6">
                            <p
                                className="text-xs mb-2 tracking-widest uppercase"
                                style={{ color: 'rgba(29,3,241,0.45)', fontFamily: MONO }}
                            >
                                7/17 – 7/21 · 國立清華大學
                            </p>
                            <h1 className="text-2xl md:text-4xl font-bold mb-3" style={{ color: BLUE }}>
                                2026 IONC 營隊回顧
                            </h1>
                            {driveFolderUrl && (
                                <p className="text-sm" style={{ color: 'rgba(77,91,218,0.85)' }}>
                                    網頁上是壓縮過的照片，高解析原圖請到{' '}
                                    <a
                                        href={driveFolderUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline underline-offset-2"
                                        style={{ color: VIOLET }}
                                    >
                                        Google Drive 相簿 ↗
                                    </a>
                                </p>
                            )}
                        </header>

                        {/* ── 分區切換 ───────────────────────────────────────── */}
                        {/* 黏在畫面頂端，捲到很下面也能直接換區。
                            手機上橫向捲動、不換行，才不會佔掉半個螢幕。
                            分帶標題（營期紀錄 / 幕後與夥伴）夾在按鈕之間。 */}
                        <div
                            ref={tabsRef}
                            className="sticky top-0 z-20 -mx-4 px-4 py-3 mb-8"
                            style={{ background: PAPER, borderBottom: `1px solid ${RULE}` }}
                        >
                            <nav
                                className="flex items-center gap-2 overflow-x-auto"
                                style={{ scrollbarWidth: 'none' }}
                                aria-label="相簿分區"
                            >
                                {albums.map((album, i) => (
                                    <Fragment key={album.id}>
                                        {album.band !== albums[i - 1]?.band && (
                                            <span
                                                className={`text-xs tracking-widest whitespace-nowrap flex-shrink-0 ${i > 0 ? 'ml-3' : ''}`}
                                                style={{ color: 'rgba(29,3,241,0.45)', fontFamily: MONO }}
                                            >
                                                {album.band}
                                            </span>
                                        )}
                                        <AlbumTab
                                            album={album}
                                            count={photosOf(album.id).length}
                                            active={album.id === activeId}
                                            onSelect={selectAlbum}
                                        />
                                    </Fragment>
                                ))}
                            </nav>
                        </div>

                        {/* ── 照片還沒進來時的說明 ───────────────────────────── */}
                        {totalPhotos === 0 && (
                            <div
                                className="rounded-xl px-4 md:px-5 py-4 mb-10 flex items-start gap-3"
                                style={{
                                    background: 'rgba(163,97,221,0.08)',
                                    border: `1.5px solid ${VIOLET}`,
                                }}
                            >
                                <span className="text-lg leading-none mt-0.5" aria-hidden="true">📷</span>
                                <div>
                                    <p className="font-bold text-sm md:text-base mb-1" style={{ color: VIOLET }}>
                                        相簿整理中
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* ── 目前的分區 ─────────────────────────────────────── */}
                        <AlbumSection
                            album={activeAlbum}
                            photos={activePhotos}
                            shown={shown}
                            onShowMore={() => setShown(n => n + PAGE_SIZE)}
                            onOpen={setViewIndex}
                        />

                        {/* ── 下架管道 ───────────────────────────────────────── */}
                        <p
                            className="mt-16 pt-6 text-xs leading-relaxed"
                            style={{ color: 'rgba(29,3,241,0.45)', borderTop: `1px solid ${RULE}` }}
                        >
                            照片皆已取得肖像使用同意。若你出現在其中並希望撤下某張照片，
                            請透過{' '}
                            <a
                                href="https://www.facebook.com/nthuioncamp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                                style={{ color: VIOLET }}
                            >
                                IONCamp 粉絲專頁
                            </a>
                            {' '}私訊告知，我們會盡快處理。
                        </p>
                    </div>
                </main>

                <Lightbox
                    photos={activePhotos}
                    album={activeAlbum}
                    index={viewIndex}
                    onClose={close}
                    onPrev={() => step(-1)}
                    onNext={() => step(1)}
                />

                <Footer />
            </div>
        </>
    );
}

// ── 分區按鈕 ────────────────────────────────────────────────────────────────
function AlbumTab({ album, count, active, onSelect }) {
    return (
        <button
            onClick={() => onSelect(album.id)}
            aria-pressed={active}
            className="px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors duration-150"
            style={
                active
                    ? { color: '#fff', border: `1.5px solid ${BLUE}`, background: BLUE }
                    : { color: BLUE, border: `1.5px solid ${RULE}`, background: '#fff' }
            }
            onMouseEnter={e => {
                if (active) return;
                e.currentTarget.style.borderColor = VIOLET;
                e.currentTarget.style.color = VIOLET;
            }}
            onMouseLeave={e => {
                if (active) return;
                e.currentTarget.style.borderColor = RULE;
                e.currentTarget.style.color = BLUE;
            }}
        >
            {album.title}
            <span
                className="ml-2 tabular-nums"
                style={{ color: active ? 'rgba(255,255,255,0.7)' : 'rgba(29,3,241,0.4)', fontFamily: MONO }}
            >
                {count > 0 ? count : '—'}
            </span>
        </button>
    );
}

// ── 單一分區 ────────────────────────────────────────────────────────────────
function AlbumSection({ album, photos, shown, onShowMore, onOpen }) {
    const isEmpty = photos.length === 0;
    const visible = photos.slice(0, shown);
    const remaining = photos.length - visible.length;

    return (
        <section aria-labelledby={`album-${album.id}`}>
            {/* 分區標頭：時間 / 名稱 / 張數，沿用課表的時間欄語彙 */}
            <div className="mb-4">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                    {/* 時間標籤只在這一區真的有固定時段時才出現 */}
                    {album.when && (
                        <span
                            className="text-xs px-2 py-0.5 rounded tabular-nums whitespace-nowrap"
                            style={{
                                color: IRIS,
                                background: 'rgba(77,91,218,0.08)',
                                border: `1px solid ${RULE}`,
                                fontFamily: MONO,
                            }}
                        >
                            {album.when}
                        </span>
                    )}
                    <h2 id={`album-${album.id}`} className="text-lg md:text-xl font-bold" style={{ color: BLUE }}>
                        {album.title}
                    </h2>
                    <span
                        className="text-xs tabular-nums"
                        style={{ color: 'rgba(29,3,241,0.4)', fontFamily: MONO }}
                    >
                        {isEmpty ? '尚未上傳' : `${photos.length} 張`}
                    </span>
                </div>
                <p className="text-sm" style={{ color: 'rgba(77,91,218,0.85)' }}>
                    {album.blurb}
                </p>
            </div>

            <div
                className="grid gap-3"
                style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 11rem), 1fr))' }}
            >
                {isEmpty
                    ? Array.from({ length: PLACEHOLDER_TILES }, (_, i) => (
                        <PlaceholderTile key={i} />
                    ))
                    : visible.map((photo, i) => (
                        <PhotoTile
                            key={photo.id}
                            photo={photo}
                            onClick={() => onOpen(i)}
                        />
                    ))}
            </div>

            {remaining > 0 && (
                <div className="mt-8 flex flex-col items-center gap-2">
                    <button
                        onClick={onShowMore}
                        className="px-5 py-2 rounded-lg text-sm font-medium transition-transform duration-150"
                        style={{
                            color: BLUE,
                            background: '#fff',
                            border: `1.5px solid ${BLUE}`,
                            boxShadow: `3px 3px 0 ${BLUE}`,
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px, -2px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}
                    >
                        顯示更多
                    </button>
                    <span
                        className="text-xs tabular-nums"
                        style={{ color: 'rgba(29,3,241,0.45)', fontFamily: MONO }}
                    >
                        {/* 組成單一字串：瀏覽器翻譯會把文字節點換成 <font>，
                            多段文字節點時 React 只更新被換掉的舊節點，數字就不會變 */}
                        {`${visible.length} / ${photos.length}`}
                    </span>
                </div>
            )}
        </section>
    );
}

// ── 照片方塊 ────────────────────────────────────────────────────────────────
function PhotoTile({ photo, onClick }) {
    return (
        <button
            onClick={onClick}
            className="relative overflow-hidden rounded-lg transition-transform duration-150"
            style={{
                aspectRatio: '4 / 3',
                border: `1.5px solid ${BLUE}`,
                boxShadow: `3px 3px 0 ${BLUE}`,
                background: '#fff',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px, -2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}
            aria-label="放大檢視這張照片"
        >
            {/* 原生 img：縮圖已由來源（Drive 或 build-photos.mjs）壓好，不需要再走 next/image 的最佳化額度 */}
            <img
                src={photoUrl(photo, 'thumb')}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
            />
        </button>
    );
}

// ── 尚未上傳時的示意方塊 ────────────────────────────────────────────────────
function PlaceholderTile() {
    return (
        <div
            className="rounded-lg flex items-center justify-center select-none"
            style={{
                aspectRatio: '4 / 3',
                border: `1.5px dashed ${RULE}`,
                background:
                    'repeating-linear-gradient(45deg, rgba(77,91,218,0.04) 0 8px, transparent 8px 16px)',
            }}
            aria-hidden="true"
        >
            <span className="text-lg" style={{ color: 'rgba(29,3,241,0.18)' }}>
                ▨
            </span>
        </div>
    );
}

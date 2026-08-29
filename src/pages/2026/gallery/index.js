import Head from 'next/head';
import { Fragment, useState, useCallback } from 'react';
import Header from '@/components/2026/Header';
import Footer from '@/components/2026/Footer';
import Background from '@/components/2026/Background';
import Lightbox from '@/components/2026/Lightbox';
import { albums, photosOf, photoUrl, totalPhotos } from '@/data/2026/gallery';

const BLUE   = '#1D03F1';
const IRIS   = '#4D5BDA';
const VIOLET = '#A361DD';
const PAPER  = '#FCFCFE';
const RULE   = 'rgba(29,3,241,0.18)';
const MONO   = 'ui-monospace, SFMono-Regular, Menlo, monospace';

// 還沒有照片時，每一區顯示幾個示意方塊 —— 讓版面在照片到位前就看得出長相。
const PLACEHOLDER_TILES = 6;

export default function Gallery() {
    // 放大檢視的狀態：正在看哪一區的第幾張
    const [viewing, setViewing] = useState({ albumId: null, index: null });

    const open = useCallback((albumId, index) => setViewing({ albumId, index }), []);
    const close = useCallback(() => setViewing({ albumId: null, index: null }), []);

    const activeAlbum  = albums.find(a => a.id === viewing.albumId) ?? null;
    const activePhotos = viewing.albumId ? photosOf(viewing.albumId) : [];

    const step = useCallback((delta) => {
        setViewing(v => {
            if (v.index === null) return v;
            const list = photosOf(v.albumId);
            if (list.length === 0) return v;
            return { ...v, index: (v.index + delta + list.length) % list.length };
        });
    }, []);

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
                        <header className="mb-8">
                            <p
                                className="text-xs mb-2 tracking-widest uppercase"
                                style={{ color: 'rgba(29,3,241,0.45)', fontFamily: MONO }}
                            >
                                7/17 – 7/21 · 國立清華大學
                            </p>
                            <h1 className="text-2xl md:text-4xl font-bold mb-3" style={{ color: BLUE }}>
                                2026 IONC 營隊回顧
                            </h1>
                        </header>

                        {/* ── 分區快速跳轉 ───────────────────────────────────── */}
                        <nav className="flex flex-wrap gap-2 mb-10" aria-label="相簿分區">
                            {albums.map(album => {
                                const count = photosOf(album.id).length;
                                return (
                                    <a
                                        key={album.id}
                                        href={`#${album.id}`}
                                        className="px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-150"
                                        style={{ color: BLUE, border: `1.5px solid ${RULE}`, background: '#fff' }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.borderColor = VIOLET;
                                            e.currentTarget.style.color = VIOLET;
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.borderColor = RULE;
                                            e.currentTarget.style.color = BLUE;
                                        }}
                                    >
                                        {album.title}
                                        <span
                                            className="ml-2 tabular-nums"
                                            style={{ color: 'rgba(29,3,241,0.4)', fontFamily: MONO }}
                                        >
                                            {count > 0 ? count : '—'}
                                        </span>
                                    </a>
                                );
                            })}
                        </nav>

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

                        {/* ── 各分區 ─────────────────────────────────────────── */}
                        {/* 分區來自攝影組的七個資料夾，性質分兩帶：
                            前五個是營期現場，後兩個是幕後的人與夥伴。 */}
                        <div className="flex flex-col gap-12">
                            {albums.map((album, i) => (
                                <Fragment key={album.id}>
                                    {album.band !== albums[i - 1]?.band && (
                                        <BandHeading name={album.band} />
                                    )}
                                    <AlbumSection
                                        album={album}
                                        photos={photosOf(album.id)}
                                        onOpen={open}
                                    />
                                </Fragment>
                            ))}
                        </div>

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
                    index={viewing.index}
                    onClose={close}
                    onPrev={() => step(-1)}
                    onNext={() => step(1)}
                />

                <Footer />
            </div>
        </>
    );
}

// ── 分帶標題 ────────────────────────────────────────────────────────────────
function BandHeading({ name }) {
    return (
        <div className="flex items-center gap-3" aria-hidden="true">
            <span
                className="text-xs tracking-widest whitespace-nowrap"
                style={{ color: 'rgba(29,3,241,0.45)', fontFamily: MONO }}
            >
                {name}
            </span>
            <span className="flex-grow" style={{ borderTop: `1px solid ${RULE}` }} />
        </div>
    );
}

// ── 單一分區 ────────────────────────────────────────────────────────────────
function AlbumSection({ album, photos, onOpen }) {
    const isEmpty = photos.length === 0;

    return (
        <section id={album.id} style={{ scrollMarginTop: '5rem' }}>
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
                    <h2 className="text-lg md:text-xl font-bold" style={{ color: BLUE }}>
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
                    : photos.map((photo, i) => (
                        <PhotoTile
                            key={photo.id}
                            photo={photo}
                            onClick={() => onOpen(album.id, i)}
                        />
                    ))}
            </div>
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
            {/* 原生 img：縮圖已預先壓好，不需要再走 next/image 的最佳化額度 */}
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

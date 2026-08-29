import { useEffect, useCallback, useRef } from 'react';
import { photoUrl } from '@/data/2026/gallery';

const PAPER  = '#FCFCFE';
const VIOLET = '#A361DD';

/**
 * 照片放大檢視。
 *
 * photos  目前這一區的照片陣列
 * index   目前顯示第幾張；null 表示關閉
 * onClose / onPrev / onNext 由頁面控制
 */
export default function Lightbox({ photos, index, album, onClose, onPrev, onNext }) {
    const closeRef = useRef(null);
    const isOpen = index !== null && photos.length > 0;

    // 鍵盤操作：← → 換頁、Esc 關閉
    const onKeyDown = useCallback((e) => {
        if (!isOpen) return;
        if (e.key === 'Escape')     { e.preventDefault(); onClose(); }
        if (e.key === 'ArrowLeft')  { e.preventDefault(); onPrev(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); onNext(); }
    }, [isOpen, onClose, onPrev, onNext]);

    useEffect(() => {
        if (!isOpen) return;
        window.addEventListener('keydown', onKeyDown);
        // 背景不要跟著捲動
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeRef.current?.focus();
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = prev;
        };
    }, [isOpen, onKeyDown]);

    if (!isOpen) return null;

    const photo = photos[index];

    return (
        <div
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ background: 'rgba(29,3,241,0.90)', backdropFilter: 'blur(6px)' }}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={`${album?.title ?? '相簿'} 放大檢視`}
        >
            {/* 上方列：區名 + 計數 + 關閉 */}
            <div
                className="flex items-center justify-between px-4 md:px-6 py-3 flex-shrink-0"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}
                onClick={e => e.stopPropagation()}
            >
                <div className="flex items-baseline gap-3 min-w-0">
                    <span className="text-sm font-bold truncate" style={{ color: PAPER }}>
                        {album?.title}
                    </span>
                    <span
                        className="text-xs tabular-nums flex-shrink-0"
                        style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'ui-monospace, monospace' }}
                    >
                        {String(index + 1).padStart(3, '0')} / {String(photos.length).padStart(3, '0')}
                    </span>
                </div>
                <button
                    ref={closeRef}
                    onClick={onClose}
                    aria-label="關閉"
                    className="text-2xl leading-none px-2 rounded transition-opacity duration-150"
                    style={{ color: PAPER, opacity: 0.7 }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '1'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '0.7'; }}
                >
                    ×
                </button>
            </div>

            {/* 照片 */}
            <div className="flex-grow flex items-center justify-center relative px-2 md:px-16 py-4 min-h-0">
                <NavButton side="left"  onClick={onPrev} disabled={photos.length < 2} />
                {/* 用原生 img：縮圖與大圖都已在 build-photos.mjs 預先壓好，
                    走 next/image 只會多消耗 Vercel 的圖片最佳化額度。 */}
                <img
                    src={photoUrl(photo, 'full')}
                    width={photo.w}
                    height={photo.h}
                    alt=""
                    onClick={e => e.stopPropagation()}
                    className="max-h-full max-w-full object-contain rounded-lg"
                    style={{ background: 'rgba(255,255,255,0.06)' }}
                />
                <NavButton side="right" onClick={onNext} disabled={photos.length < 2} />
            </div>

            {/* 下方提示 */}
            <div className="flex-shrink-0 text-center pb-4 px-4">
                <span
                    className="text-xs hidden md:inline"
                    style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'ui-monospace, monospace' }}
                >
                    ← → 換頁 · Esc 關閉
                </span>
                <span className="text-xs md:hidden" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    點擊背景關閉
                </span>
            </div>
        </div>
    );
}

function NavButton({ side, onClick, disabled }) {
    if (disabled) return null;
    const isLeft = side === 'left';
    return (
        <button
            onClick={e => { e.stopPropagation(); onClick(); }}
            aria-label={isLeft ? '上一張' : '下一張'}
            className="absolute top-1/2 -translate-y-1/2 z-10 rounded-full flex items-center justify-center transition-colors duration-150"
            style={{
                [isLeft ? 'left' : 'right']: '0.25rem',
                width: '2.75rem',
                height: '2.75rem',
                background: 'rgba(255,255,255,0.12)',
                color: PAPER,
                border: `1px solid rgba(255,255,255,0.25)`,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = VIOLET; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={isLeft ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
                />
            </svg>
        </button>
    );
}

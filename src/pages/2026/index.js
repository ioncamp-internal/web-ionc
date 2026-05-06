import Head from "next/head";
import { useEffect, useRef, useState } from 'react';
import Header from '@/components/2026/Header';
import Footer from '@/components/2026/Footer';
import Background from "@/components/2026/Background";

const REGISTRATION_LINK = "/2026/register";
const FOOTER_HEIGHT = 64;

// ── Early-bird countdown ─────────────────────────────────────────────────────
function RegistrationFeeInfo() {
    const [timeLeft, setTimeLeft] = useState(null);
    const [isEarlyBird, setIsEarlyBird] = useState(true);

    useEffect(() => {
        const calculate = () => {
            const diff = new Date("2026-05-11T23:59:59+08:00").getTime() - Date.now();
            if (diff > 0) {
                setIsEarlyBird(true);
                return {
                    days:    Math.floor(diff / 86400000),
                    hours:   Math.floor((diff / 3600000) % 24),
                    minutes: Math.floor((diff / 60000) % 60),
                    seconds: Math.floor((diff / 1000)  % 60),
                };
            }
            setIsEarlyBird(false);
            return null;
        };
        setTimeLeft(calculate());
        const t = setInterval(() => setTimeLeft(calculate()), 1000);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="p-4 md:p-5 rounded-xl relative overflow-hidden"
            style={{ background: '#fff', border: '1.5px solid #1D03F1', boxShadow: '3px 3px 0 #1D03F1' }}>
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-base md:text-lg font-bold" style={{ color: '#1D03F1' }}>報名費用</h3>
                <a href={REGISTRATION_LINK}
                    className="px-3 py-1 text-sm font-bold rounded-lg transition-all duration-200"
                    style={{ color: '#1D03F1', border: '1.5px solid #1D03F1' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#1D03F1'; e.currentTarget.style.color = '#FCFCFE'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1D03F1'; }}
                >
                    點擊立刻報名
                </a>
            </div>

            {isEarlyBird ? (
                <div className="flex flex-col gap-2">
                    <div className="p-3 rounded-lg" style={{ background: 'rgba(163,97,221,0.08)', border: '1px solid rgba(163,97,221,0.3)' }}>
                        <div className="flex items-center justify-between text-sm font-semibold mb-3" style={{ color: '#A361DD' }}>
                            <span>早鳥優惠 (5/11 23:59 前)</span>
                            <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(163,97,221,0.15)', color: '#A361DD' }}>限時優惠</span>
                        </div>
                        <div className="text-xl md:text-2xl font-bold tracking-widest mb-3 text-center" style={{ color: '#1D03F1' }}>
                            早鳥報名：7500元
                        </div>
                        {timeLeft && (
                            <div className="flex gap-2 justify-center items-center p-2 rounded-lg" style={{ background: 'rgba(77,91,218,0.06)' }}>
                                {[['days','天'],['hours','時'],['minutes','分'],['seconds','秒']].map(([k, label], i) => (
                                    <>
                                        {i > 0 && <span key={`sep-${i}`} className="font-bold text-lg" style={{ color: 'rgba(29,3,241,0.4)' }}>:</span>}
                                        <div key={k} className="flex flex-col items-center rounded w-11 md:w-14 p-1.5 font-mono"
                                            style={{ background: 'rgba(163,97,221,0.12)', border: '1px solid rgba(163,97,221,0.3)' }}>
                                            <span className="text-lg md:text-xl font-semibold" style={{ color: '#A361DD' }}>
                                                {String(timeLeft[k]).padStart(2, '0')}
                                            </span>
                                            <span className="text-[10px]" style={{ color: 'rgba(29,3,241,0.5)' }}>{label}</span>
                                        </div>
                                    </>
                                ))}
                            </div>
                        )}
                    </div>
                    <span className="text-sm" style={{ color: 'rgba(29,3,241,0.45)', textDecoration: 'line-through' }}>個人報名：8000元</span>
                    <span className="text-sm font-bold" style={{ color: '#4D5BDA' }}>兩人團報：7800元</span>
                    <span className="text-sm font-bold" style={{ color: '#4D5BDA' }}>三人團報：7500元</span>
                </div>
            ) : (
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold" style={{ color: '#4D5BDA' }}>個人報名：8000元</span>
                    <span className="text-sm font-bold" style={{ color: '#4D5BDA' }}>兩人團報：7800元</span>
                    <span className="text-sm font-bold" style={{ color: '#4D5BDA' }}>三人團報：7500元</span>
                </div>
            )}
        </div>
    );
}

// ── Info card ────────────────────────────────────────────────────────────────
function InfoCard({ title, children }) {
    return (
        <div className="p-4 md:p-5 rounded-xl"
            style={{ background: '#fff', border: '1.5px solid #1D03F1', boxShadow: '3px 3px 0 #1D03F1' }}>
            <h3 className="text-base md:text-lg font-bold mb-2" style={{ color: '#1D03F1' }}>{title}</h3>
            <div className="text-sm md:text-base leading-relaxed" style={{ color: '#4D5BDA' }}>{children}</div>
        </div>
    );
}

// ── Page content sections ────────────────────────────────────────────────────
const pageContents = [
    /* Page 0 — Hero (Plan A: dark gradient) */
    (
        <div className="w-full max-w-6xl z-10 px-6 md:px-12 relative">
            {/* Desktop: three-column layout */}
            <div className="hidden lg:flex items-center justify-between">
                {/* Left: stacked IONCamp watermark */}
                <div className="flex flex-col gap-1 select-none pointer-events-none overflow-hidden"
                    style={{ width: 'clamp(120px, 15vw, 180px)' }}>
                    {[...Array(8)].map((_, i) => (
                        <span key={i} className="font-black italic"
                            style={{ fontSize: 'clamp(13px, 1.3vw, 18px)', color: 'rgba(255,255,255,0.11)', letterSpacing: '-0.01em' }}>
                            IONCamp
                        </span>
                    ))}
                </div>

                {/* Center spacer — background computer+script live here */}
                <div style={{ width: 'clamp(280px, 34vw, 440px)', flexShrink: 0 }} />

                {/* Right: title + description + CTA */}
                <div className="flex flex-col items-end text-right" style={{ width: 'clamp(210px, 26vw, 340px)' }}>
                    <div className="mb-4 px-3 py-1 rounded-full text-xs font-bold tracking-[0.15em]"
                        style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.25)' }}>
                        2026 JULY
                    </div>
                    <h1 className="font-black leading-none"
                        style={{ fontSize: 'clamp(4.5rem, 8vw, 7.5rem)', color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 0.88 }}>
                        IONC
                    </h1>
                    <div className="font-black mb-5"
                        style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.8rem)', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
                        Camp
                    </div>
                    <p className="text-sm leading-relaxed mb-7"
                        style={{ color: 'rgba(255,255,255,0.72)' }}>
                        對於初學程式設計感到迷惘嗎？<br />
                        或是在各大比賽感到挫折呢？<br />
                        讓 IONCamp 帶你突破困境！
                    </p>
                    <a href={REGISTRATION_LINK}
                        className="px-7 py-3 text-base font-bold rounded-xl transition-all duration-200"
                        style={{ color: '#1D03F1', background: '#ffffff' }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.85)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; }}
                    >
                        點擊立刻報名
                    </a>
                </div>
            </div>

            {/* Mobile */}
            <div className="flex lg:hidden flex-col items-center text-center gap-4" style={{ marginTop: '-8vh' }}>
                <div className="px-3 py-1 rounded-full text-xs font-bold tracking-[0.15em]"
                    style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.25)' }}>
                    2026 JULY
                </div>
                <h1 className="font-black leading-none"
                    style={{ fontSize: 'clamp(4rem, 20vw, 7rem)', color: '#ffffff', letterSpacing: '-0.03em' }}>
                    IONC
                </h1>
                <div className="font-black"
                    style={{ fontSize: 'clamp(1.3rem, 7vw, 2.5rem)', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', marginTop: '-0.5rem' }}>
                    Camp
                </div>
                <p className="text-sm leading-relaxed max-w-xs"
                    style={{ color: 'rgba(255,255,255,0.72)' }}>
                    對於初學程式設計感到迷惘嗎？或是在各大比賽感到挫折呢？
                    讓 IONCamp 帶你突破困境！
                </p>
                <a href={REGISTRATION_LINK}
                    className="px-7 py-3 text-base font-bold rounded-xl transition-all duration-200"
                    style={{ color: '#1D03F1', background: '#ffffff' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.85)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; }}
                >
                    點擊立刻報名
                </a>
            </div>
        </div>
    ),

    /* Page 1 — Audience */
    (
        <div className="w-full max-w-2xl">
            <h2 className="text-xl md:text-3xl font-black mb-4 md:mb-6" style={{ color: '#1D03F1' }}>誰適合這個營隊</h2>
            <div className="flex flex-col gap-4">
                <InfoCard title="競程新手">
                    不管你是國中生、高中生還是大學生，只要你具備{' '}
                    <strong style={{ color: '#A361DD' }}>C++ 語法基礎</strong>
                    ，想踏入競程世界，就適合我們的營隊！
                </InfoCard>
                <InfoCard title="想在各大競賽中嶄露頭角">
                    我們的課程涵蓋許多競程領域的重要範圍，對各大競賽、資訊奧林匹亞都有很大的幫助。
                </InfoCard>
                <InfoCard title="想進一步提升實力">
                    希望透過密集的課程，精進演算法實力、學習進階競程技巧，並從講師身上學習{' '}
                    <strong style={{ color: '#A361DD' }}>實用經驗</strong>與<strong style={{ color: '#A361DD' }}>學習心法</strong>。
                </InfoCard>
            </div>
        </div>
    ),

    /* Page 2 — Q&A */
    (
        <div className="w-full max-w-2xl">
            <h2 className="text-xl md:text-3xl font-black mb-4 md:mb-6" style={{ color: '#1D03F1' }}>Q&amp;A</h2>
            <div className="flex flex-col gap-4">
                <InfoCard title="有提供住宿嗎？">
                    我們會安排在清大校內住宿，住宿需求會在錄取確認後調查。
                </InfoCard>
                <InfoCard title="有營隊參加證明嗎？">
                    因應教育部規定，營隊將不會提供參加證明，請確認可接受此規定後再報名。
                </InfoCard>
                <InfoCard title="需要自備筆電嗎？">
                    營隊課程不會需要用到筆電，但建議同學們可以自備筆電，以便練習題目。
                </InfoCard>
            </div>
        </div>
    ),

    /* Page 3 — Registration */
    (
        <div className="w-full max-w-2xl">
            <h2 className="text-xl md:text-3xl font-black mb-4 md:mb-6" style={{ color: '#1D03F1' }}>報名資訊</h2>
            <div className="flex flex-col gap-4">
                <RegistrationFeeInfo />
                <InfoCard title="報名時程">
                    <ul className="list-disc list-inside space-y-1">
                        <li>報名期限：即日起～05/31 23:59</li>
                        <li>公布錄取名單：06/01</li>
                    </ul>
                </InfoCard>
            </div>
        </div>
    ),
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
    const [currentPage, setCurrentPage] = useState(0);
    const isScrolling = useRef(false);
    const touchStartY = useRef(0);
    const scrollRefs = useRef([]);
    const pageCount = pageContents.length;

    useEffect(() => { document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = ''; }; }, []);
    useEffect(() => { const el = scrollRefs.current[currentPage]; if (el) el.scrollTop = 0; }, [currentPage]);

    const isAtBottom = (idx) => { const el = scrollRefs.current[idx]; if (!el) return true; return el.scrollHeight - el.scrollTop <= el.clientHeight + 2; };
    const isAtTop    = (idx) => { const el = scrollRefs.current[idx]; if (!el) return true; return el.scrollTop <= 0; };

    const handleWheel = (e) => {
        if (isScrolling.current) return;
        if (Math.abs(e.deltaY) < 50) return;
        if (e.deltaY > 0 && currentPage < pageCount - 1) {
            if (!isAtBottom(currentPage)) return;
            isScrolling.current = true;
            setCurrentPage(p => p + 1);
            setTimeout(() => { isScrolling.current = false; }, 1000);
        } else if (e.deltaY < 0 && currentPage > 0) {
            if (!isAtTop(currentPage)) return;
            isScrolling.current = true;
            setCurrentPage(p => p - 1);
            setTimeout(() => { isScrolling.current = false; }, 1000);
        }
    };

    const handleTouchStart = (e) => { if (isScrolling.current) return; touchStartY.current = e.touches[0].clientY; };
    const handleTouchEnd   = (e) => {
        if (isScrolling.current) return;
        const diff = touchStartY.current - e.changedTouches[0].clientY;
        if (Math.abs(diff) < 50) return;
        if (diff > 0 && currentPage < pageCount - 1) {
            if (!isAtBottom(currentPage)) return;
            isScrolling.current = true;
            setCurrentPage(p => p + 1);
            setTimeout(() => { isScrolling.current = false; }, 1000);
        } else if (diff < 0 && currentPage > 0) {
            if (!isAtTop(currentPage)) return;
            isScrolling.current = true;
            setCurrentPage(p => p - 1);
            setTimeout(() => { isScrolling.current = false; }, 1000);
        }
    };

    useEffect(() => {
        window.addEventListener('wheel', handleWheel);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);
        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [currentPage]);

    return (
        <>
            <Head><title>2026 IONCamp 清大暑期程式競賽集訓營</title></Head>
            <div className="h-screen w-screen flex flex-col overflow-hidden relative" style={{ background: '#FCFCFE' }}>
                <Background currentPage={currentPage} />
                <Header isHero={currentPage === 0} />
                <main className="flex-grow relative overflow-hidden" style={{ paddingBottom: `${FOOTER_HEIGHT}px` }}>
                    {pageContents.map((content, idx) => (
                        <div
                            key={idx}
                            className="absolute inset-0 transition-all duration-700 ease-in-out"
                            style={{
                                transform: `translateY(${(idx - currentPage) * 100}%)`,
                                opacity: idx === currentPage ? 1 : 0,
                                pointerEvents: idx === currentPage ? 'auto' : 'none',
                            }}
                        >
                            <div className="h-full overflow-y-auto" ref={el => scrollRefs.current[idx] = el}>
                                <div className="min-h-full flex flex-col items-center justify-center p-4 md:p-20">
                                    {content}
                                </div>
                            </div>

                            {/* Scroll hint */}
                            {idx !== pageContents.length - 1 && idx === currentPage && (
                                <div
                                    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 cursor-pointer select-none"
                                    onClick={() => setCurrentPage(p => p + 1)}
                                    style={{ color: currentPage === 0 ? 'rgba(255,255,255,0.7)' : '#A361DD' }}
                                >
                                    <span className="text-sm font-medium">向下滑動</span>
                                    <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Scroll indicator dots */}
                    <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
                        {pageContents.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentPage(idx)}
                                className="rounded-full transition-all duration-300"
                                style={{
                                    width: '10px',
                                    height: idx === currentPage ? '36px' : '10px',
                                    background: idx === currentPage
                                        ? (currentPage === 0 ? '#ffffff' : '#A361DD')
                                        : (currentPage === 0 ? 'rgba(255,255,255,0.3)' : 'rgba(29,3,241,0.2)'),
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

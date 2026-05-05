import Image from 'next/image'
import {Inter} from 'next/font/google'
import Header from '@/components/2026/Header'
import Footer from '@/components/2026/Footer'
import ioncTS from "@/images/2026/ionc-re.png";
import Background from "@/components/2026/Background";
import Head from "next/head";
import { useEffect, useRef, useState } from 'react';

const inter = Inter({subsets: ['latin']})

const FOOTER_HEIGHT = 64; // 假設footer高度為64px，可根據實際調整
const REGISTRATION_LINK = "/2026/register"; // 報名表單連結

const RegistrationFeeInfo = () => {
    const [timeLeft, setTimeLeft] = useState(null);
    const [isEarlyBird, setIsEarlyBird] = useState(true);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const deadline = new Date("2026-05-11T23:59:59+08:00").getTime();
            const now = new Date().getTime();
            const difference = deadline - now;

            if (difference > 0) {
                setIsEarlyBird(true);
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                };
            } else {
                setIsEarlyBird(false);
                return null;
            }
        };

        setTimeLeft(calculateTimeLeft());
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-gray-800 p-3 md:p-5 rounded-lg relative overflow-hidden">
            <div className="flex items-center justify-between mb-2 md:mb-3">
                <h3 className="text-base md:text-xl font-semibold text-white">報名費用</h3>
                <a 
                    href={REGISTRATION_LINK}
                    rel="noopener noreferrer"
                    className="px-3 md:px-5 py-1 md:py-1.5 text-sm md:text-base font-semibold text-white bg-transparent border-2 border-[#8DD6F7] rounded-lg hover:bg-[#8DD6F7] hover:text-[#070B14] transition-all duration-200"
                >
                    點擊立刻報名
                </a>
            </div>
            {isEarlyBird ? (
                <div className="flex flex-col gap-2">
                    <div className="mb-2 p-3 md:p-4 bg-gradient-to-br from-slate-800/80 to-slate-700/80 rounded-lg border border-slate-600/50">
                        <div className="text-sm md:text-base font-semibold text-sky-200 mb-3 flex items-center justify-between">
                            <span>早鳥優惠 (5/11 23:59 前)</span>
                            <span className="text-xs bg-slate-700/50 border border-slate-600/50 px-2 py-1 rounded-full text-sky-200 animate-pulse">限時優惠</span>
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-gray-100 tracking-widest mb-3 text-center">
                            早鳥報名：7500元
                        </div>
                        {timeLeft && (
                            <div className="flex gap-2 justify-center items-center bg-black/20 p-2 rounded-lg backdrop-blur-sm">
                                <div className="flex flex-col items-center bg-black/30 rounded w-11 md:w-14 p-1.5 font-mono text-sky-200 border border-slate-700/50">
                                    <span className="text-lg md:text-xl font-medium">{timeLeft.days}</span>
                                    <span className="text-[10px] md:text-xs text-slate-400">天</span>
                                </div>
                                <span className="text-slate-500 font-medium -mt-3 text-lg md:text-xl">:</span>
                                <div className="flex flex-col items-center bg-black/30 rounded w-11 md:w-14 p-1.5 font-mono text-sky-200 border border-slate-700/50">
                                    <span className="text-lg md:text-xl font-medium">{timeLeft.hours.toString().padStart(2, '0')}</span>
                                    <span className="text-[10px] md:text-xs text-slate-400">時</span>
                                </div>
                                <span className="text-slate-500 font-medium -mt-3 text-lg md:text-xl">:</span>
                                <div className="flex flex-col items-center bg-black/30 rounded w-11 md:w-14 p-1.5 font-mono text-sky-200 border border-slate-700/50">
                                    <span className="text-lg md:text-xl font-medium">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                                    <span className="text-[10px] md:text-xs text-slate-400">分</span>
                                </div>
                                <span className="text-slate-500 font-medium -mt-3 text-lg md:text-xl animate-pulse">:</span>
                                <div className="flex flex-col items-center bg-black/30 rounded w-11 md:w-14 p-1.5 font-mono text-sky-200 border border-slate-700/50">
                                    <span className="text-lg md:text-xl font-medium">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                                    <span className="text-[10px] md:text-xs text-slate-400">秒</span>
                                </div>
                            </div>
                        )}
                    </div>
                    <span className="text-sm md:text-base text-gray-400 line-through">個人報名：8000元</span>
                    <span className="text-sm md:text-base font-bold" style={{color: "#8DD6F7"}}>兩人團報：7800元</span>
                    <span className="text-sm md:text-base font-bold" style={{color: "#8DD6F7"}}>三人團報：7500元</span>
                </div>
            ) : (
                <>
                    <span className="text-sm md:text-base font-bold" style={{color: "#8DD6F7"}}>個人報名：8000元</span> <br/>
                    <span className="text-sm md:text-base font-bold" style={{color: "#8DD6F7"}}>兩人團報：7800元</span> <br/>
                    <span className="text-sm md:text-base font-bold" style={{color: "#8DD6F7"}}>三人團報：7500元</span> <br/>
                </>
            )}
        </div>
    );
};

const pageContents = [
    (
        <>
            <Image
                className="z-10"
                style={{marginTop: "-15px"}}
                src={ioncTS}
                alt=""
                width={200}
                height={400}
                priority
                unoptimized
            />
            <div className="text-center z-10">
                <h1 className="text-2xl md:text-5xl font-bold" style={{color: "#FFF"}}>2026 IONCamp</h1>
                <div className="text-lg md:text-3xl font-semibold my-4 md:my-5" style={{color: "#FFF"}}>清大暑期程式競賽集訓營</div>
                <p className="px-4 md:px-6 text-sm md:text-xl font-medium my-4 md:my-5 leading-6 md:leading-9" style={{color: "#8DD6F7"}}>
                    對於初學程式設計感到迷惘嗎？或是在挑戰大大小小的程式設計比賽感到挫折呢？<br/>
                    讓 IONCamp 透過連續五天密集且扎實的課程，帶領你突破目前的困境吧！
                </p>
                <a 
                    href={REGISTRATION_LINK}
                    rel="noopener noreferrer"
                    className="mt-8 md:mt-16 px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold text-white bg-transparent border-2 border-[#8DD6F7] rounded-lg hover:bg-[#8DD6F7] hover:text-[#070B14] transition-all duration-200"
                >
                    點擊立刻報名
                </a>
            </div>
        </>
    ),
    (
        <div className="w-full max-w-2xl">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-7">誰適合這個營隊</h2>
            <div className="flex flex-col gap-4 md:gap-7">
                <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
                    <h3 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-3">競程新手</h3>
                    <p className="text-sm md:text-base text-white">不管你是國中生、高中生還是大學生，只要你具備 <span className="font-bold" style={{color: "#8DD6F7"}}>C++ 語法基礎</span>，想踏入競程世界，就適合我們的營隊！</p>
                </div>
                <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
                    <h3 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-3">想在各大競賽中嶄露頭角</h3>
                    <p className="text-sm md:text-base text-white">我們的課程涵蓋許多競程領域的重要範圍，對各大競賽、資訊奧林匹亞都有很大的幫助。</p>
                </div>
                <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
                    <h3 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-3">想進一步提升實力</h3>
                    <p className="text-sm md:text-base text-white">希望透過密集的課程，精進演算法實力、學習進階競程技巧，並從講師身上學習<span className="font-bold " style={{color: "#8DD6F7"}}>實用經驗</span>與<span className="font-bold " style={{color: "#8DD6F7"}}>學習心法</span>。</p>
                </div>
            </div>
        </div>
    ),
    (
        <div className="w-full max-w-2xl">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-7">Q&A</h2>
            <div className="flex flex-col gap-4 md:gap-7">
                <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
                    <h3 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-3">有提供住宿嗎？</h3>
                    <p className="text-sm md:text-base text-white">我們會安排在清大校內住宿，需要住宿請在報名表單註明。</p>
                </div>
                <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
                    <h3 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-3">有營隊參加證明嗎？</h3>
                    <p className="text-sm md:text-base text-white">因應教育部規定，營隊將不會提供參加證明，請確認可接受此規定後再報名。</p>
                </div>
                <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
                    <h3 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-3">需要自備筆電嗎？</h3>
                    <p className="text-sm md:text-base text-white">營隊課程不會需要用到筆電，但建議同學們可以自備筆電，以便練習題目。</p>
                </div>
            </div>
        </div>
    ),
    (
        <div className="w-full max-w-2xl">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-7">報名資訊</h2>
            <div className="flex flex-col gap-4 md:gap-7">
                <RegistrationFeeInfo />
                <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
                    <h3 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-3">報名時程</h3>
                    <ul className="list-disc list-inside">
                        <li>報名期限：即日起~05/31 23:59</li>
                        <li>公布錄取名單：06/01</li>
                    </ul>
                </div>
            </div>
        </div>
    )
];

export default function Home() {
    const [currentPage, setCurrentPage] = useState(0);
    const isScrolling = useRef(false);
    const touchStartY = useRef(0);
    const scrollRefs = useRef([]);
    const pageCount = pageContents.length;

    // 禁止body滾動
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    // 換頁時將新頁捲回頂端
    useEffect(() => {
        const el = scrollRefs.current[currentPage];
        if (el) el.scrollTop = 0;
    }, [currentPage]);

    const isAtBottom = (idx) => {
        const el = scrollRefs.current[idx];
        if (!el) return true;
        return el.scrollHeight - el.scrollTop <= el.clientHeight + 2;
    };

    const isAtTop = (idx) => {
        const el = scrollRefs.current[idx];
        if (!el) return true;
        return el.scrollTop <= 0;
    };

    // 處理滾動事件
    const handleWheel = (e) => {
        if (isScrolling.current) return;

        const scrollThreshold = 50;
        if (Math.abs(e.deltaY) < scrollThreshold) return;

        if (e.deltaY > 0 && currentPage < pageCount - 1) {
            if (!isAtBottom(currentPage)) return;
            isScrolling.current = true;
            setCurrentPage(prev => prev + 1);
            setTimeout(() => { isScrolling.current = false; }, 1000);
        } else if (e.deltaY < 0 && currentPage > 0) {
            if (!isAtTop(currentPage)) return;
            isScrolling.current = true;
            setCurrentPage(prev => prev - 1);
            setTimeout(() => { isScrolling.current = false; }, 1000);
        }
    };

    // 處理觸控開始事件
    const handleTouchStart = (e) => {
        if (isScrolling.current) return;
        touchStartY.current = e.touches[0].clientY;
    };

    // 處理觸控結束事件
    const handleTouchEnd = (e) => {
        if (isScrolling.current) return;
        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchStartY.current - touchEndY;

        const touchThreshold = 50;
        if (Math.abs(diff) < touchThreshold) return;

        if (diff > 0 && currentPage < pageCount - 1) {
            if (!isAtBottom(currentPage)) return;
            isScrolling.current = true;
            setCurrentPage(prev => prev + 1);
            setTimeout(() => { isScrolling.current = false; }, 1000);
        } else if (diff < 0 && currentPage > 0) {
            if (!isAtTop(currentPage)) return;
            isScrolling.current = true;
            setCurrentPage(prev => prev - 1);
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
        <div className="h-screen w-screen flex flex-col overflow-hidden relative bg-[#070B14]">
            <Background/>
            <Header/>
            <main className="flex-grow relative overflow-hidden" style={{paddingBottom: `${FOOTER_HEIGHT}px`}}>
                {pageContents.map((content, idx) => (
                    <div
                        key={idx}
                        className="absolute inset-0 transition-all duration-700 ease-in-out"
                        style={{
                            transform: `translateY(${(idx - currentPage) * 100}%)`,
                            opacity: idx === currentPage ? 1 : 0,
                            pointerEvents: idx === currentPage ? 'auto' : 'none',
                            color: '#FFFFFF'
                        }}
                    >
                        <div className="h-full overflow-y-auto" ref={el => scrollRefs.current[idx] = el}>
                            <div className="min-h-full flex flex-col items-center justify-center p-3 md:p-20">
                                {content}
                            </div>
                        </div>
                        {idx !== pageContents.length - 1 && idx === currentPage && (
                            <div
                                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 select-none cursor-pointer"
                                onClick={() => setCurrentPage(prev => prev + 1)}
                            >
                                <span className="text-white text-base md:text-lg">向下滑動</span>
                                <svg className="w-10 h-10 md:w-12 md:h-12 text-white animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        )}
                    </div>
                ))}

                {/* 側邊導覽點 (Scroll Indicator) */}
                <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
                    {pageContents.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentPage(idx)}
                            className={`w-2.5 md:w-3 rounded-full transition-all duration-300 ${
                                currentPage === idx 
                                    ? 'bg-[#8DD6F7] h-8 md:h-10' 
                                    : 'bg-white/30 h-2.5 md:h-3 hover:bg-white/60'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </main>
            <Footer className="fixed bottom-0 left-0 right-0 z-50"/>
        </div>
    )
}

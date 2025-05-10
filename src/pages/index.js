import Image from 'next/image'
import {Inter} from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ioncTS from "@/images/ionc-re.png";
import Background from "@/components/Background";
import Head from "next/head";
import { useEffect, useRef, useState } from 'react';

const inter = Inter({subsets: ['latin']})

const FOOTER_HEIGHT = 64; // 假設footer高度為64px，可根據實際調整
const REGISTRATION_LINK = "https://forms.gle/HDcLnJJU7TZHs5R88"; // 報名表單連結

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
                <h1 className="text-3xl md:text-5xl font-bold" style={{color: "#FFF"}}>2025 IONCamp</h1>
                <div className="text-xl md:text-3xl font-semibold my-5" style={{color: "#FFF"}}>清大暑期程式競賽集訓營</div>
                <p className="px-6 text-base md:text-xl font-medium my-5 leading-7 md:leading-9" style={{color: "#8DD6F7"}}>
                    對於初學程式設計感到迷惘嗎？或是在挑戰 APCS 或大大小小的程式設計比賽感到挫折呢？<br/>
                    讓 IONCamp 透過連續五天密集且扎實的課程，帶領你突破目前的困境吧！
                </p>
                <a 
                    href={REGISTRATION_LINK} // 這裡之後可以替換為實際的報名表單連結
                    className="mt-12 md:mt-16 px-8 py-3 text-lg font-semibold text-white bg-transparent border-2 border-[#8DD6F7] rounded-lg hover:bg-[#8DD6F7] hover:text-[#070B14] transition-all duration-200"
                >
                    點擊立刻報名
                </a>
            </div>
        </>
    ),
    (
        <div className="w-full max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 md:mb-7">誰適合這個營隊</h2>
            <div className="flex flex-col gap-5 md:gap-7">
                <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">競程新手</h3>
                    已有 <span className="font-bold" style={{color: "#8DD6F7"}}>C++ 語法基礎</span>，想踏入競程世界的學生。
                </div>
                <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">想進一步提升實力的人</h3>
                    希望精進演算法實力、學習進階競程技巧。
                </div>
                <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">渴望學習經驗者</h3>
                    想從講師身上學習<span className="font-bold " style={{color: "#8DD6F7"}}>實用經驗</span>與<span className="font-bold " style={{color: "#8DD6F7"}}>學習心法</span>。
                </div>
            </div>
        </div>
    ),
    // (
    //     <div className="w-full max-w-2xl">
    //         <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 md:mb-7">營隊特色</h2>
    //         <div className="flex flex-col gap-5 md:gap-7">
    //             <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
    //                 <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">專業師資</h3>
    //                 <p className="text-gray-300">由競賽經驗豐富的學長姐們親自授課。</p>
    //             </div>
    //             <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
    //                 <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">實戰演練</h3>
    //                 <p className="text-gray-300">五天的練習賽，讓你感受競賽氛圍。</p>
    //             </div>
    //             <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
    //                 <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">同儕相伴</h3>
    //                 <p className="text-gray-300">認識其他對競程有興趣的同學，一起學習、一起成長。</p>
    //             </div>
    //         </div>
    //     </div>
    // ),
    (
        <div className="w-full max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 md:mb-7">Q&A</h2>
            <div className="flex flex-col gap-5 md:gap-7">
                <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">有提供住宿嗎？</h3>
                    <p className="text-gray-300">我們會安排在清大校內住宿，需要住宿請在報名表單註明。</p>
                </div>
                <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">有營隊參加證明嗎？</h3>
                    <p className="text-gray-300">因應教育部規定，營隊將不會提供參加證明，請確認可接受此規定後再報名。</p>
                </div>
                <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">需要自備筆電嗎？</h3>
                    <p className="text-gray-300">營隊課程不會需要用到筆電，但建議同學們可以自備筆電，以便練習題目。</p>
                </div>
            </div>
        </div>
    ),
    (
        <div className="w-full max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 md:mb-7">報名資訊</h2>
            <div className="flex flex-col gap-5 md:gap-7">
                <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">報名費用</h3>
                    <span className="font-bold" style={{color: "#8DD6F7"}}>7000元</span>
                </div>
                <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">報名時程</h3>
                    <ul className="list-disc list-inside">
                        <li>報名期限：05/10~06/10</li>
                        <li>公布錄取名單：06/15</li>
                    </ul>
                </div>
                <a 
                href={REGISTRATION_LINK} // 這裡之後可以替換為實際的報名表單連結
                className="mt-16 md:mt-20 px-8 py-3 text-lg font-semibold text-white bg-transparent border-2 border-[#8DD6F7] rounded-lg hover:bg-[#8DD6F7] hover:text-[#070B14] transition-all duration-200"
            >
                點擊立刻報名
            </a>
            </div>
        </div>
    )
];

export default function Home() {
    const [currentPage, setCurrentPage] = useState(0);
    const isScrolling = useRef(false);
    const touchStartY = useRef(0);
    const pageCount = pageContents.length;

    // 禁止body滾動
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    // 處理滾動事件
    const handleWheel = (e) => {
        if (isScrolling.current) return;
        isScrolling.current = true;
        if (e.deltaY > 0 && currentPage < pageCount - 1) {
            setCurrentPage(prev => prev + 1);
        } else if (e.deltaY < 0 && currentPage > 0) {
            setCurrentPage(prev => prev - 1);
        }
        setTimeout(() => {
            isScrolling.current = false;
        }, 1000);
    };

    // 處理觸控開始事件
    const handleTouchStart = (e) => {
        touchStartY.current = e.touches[0].clientY;
    };

    // 處理觸控結束事件
    const handleTouchEnd = (e) => {
        if (isScrolling.current) return;
        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchStartY.current - touchEndY;

        // 如果滑動距離大於50像素才觸發翻頁
        if (Math.abs(diff) > 50) {
            isScrolling.current = true;
            if (diff > 0 && currentPage < pageCount - 1) {
                setCurrentPage(prev => prev + 1);
            } else if (diff < 0 && currentPage > 0) {
                setCurrentPage(prev => prev - 1);
            }
            setTimeout(() => {
                isScrolling.current = false;
            }, 1000);
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
            <main className="flex-grow relative" style={{paddingBottom: `${FOOTER_HEIGHT}px`}}>
                {pageContents.map((content, idx) => (
                    <div
                        key={idx}
                        className="absolute inset-0 flex flex-col items-center justify-center p-3 md:p-20 transition-all duration-700 ease-in-out"
                        style={{
                            transform: `translateY(${(idx - currentPage) * 100}%)`,
                            opacity: idx === currentPage ? 1 : 0,
                            pointerEvents: idx === currentPage ? 'auto' : 'none',
                            color: '#FFFFFF'
                        }}
                    >
                        {content}
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
            </main>
            <Footer className="fixed bottom-0 left-0 right-0 z-50"/>
        </div>
    )
}

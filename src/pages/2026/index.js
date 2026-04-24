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
                <h1 className="text-2xl md:text-5xl font-bold" style={{color: "#FFF"}}>2026 IONCamp</h1>
                <div className="text-lg md:text-3xl font-semibold my-4 md:my-5" style={{color: "#FFF"}}>清大暑期程式競賽集訓營</div>
                <p className="px-4 md:px-6 text-sm md:text-xl font-medium my-4 md:my-5 leading-6 md:leading-9" style={{color: "#8DD6F7"}}>
                    對於初學程式設計感到迷惘嗎？或是在挑戰 APCS 或大大小小的程式設計比賽感到挫折呢？<br/>
                    讓 IONCamp 透過連續五天密集且扎實的課程，帶領你突破目前的困境吧！
                </p>
                <a 
                    href={REGISTRATION_LINK}
                    target="_blank" rel="noopener noreferrer"
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
                    <p className="text-sm md:text-base text-white">我們的課程涵蓋許多競程領域的重要範圍，對 APCS、各大競賽、資訊奧林匹亞都有很大的幫助。</p>
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
                <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
                    <h3 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-3">報名費用</h3>
                    <span className="text-sm md:text-base font-bold" style={{color: "#8DD6F7"}}>7000元</span>
                </div>
                <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
                    <h3 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-3">報名時程</h3>
                    <ul className="list-disc list-inside">
                        <li>報名期限：即日起~06/10 23:59</li>
                        <li>公布錄取名單：06/15</li>
                    </ul>
                </div>
                <div className="bg-gray-800 p-3 md:p-5 rounded-lg">
                    <h3 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-3">中低收補助申請</h3>
                    <ul className="list-disc list-inside">
                        <li>感謝 SYSTEX精誠資訊 的慷慨贊助，提供今年 IONCamp 三位全額補助的名額！</li>
                        <li>請在 06/10 23:59 前填寫 <a href="https://forms.gle/JXH62eWjUXr7JosQ6" style={{color: "#8DD6F7"}} target="_blank" rel="noopener noreferrer">本表單（點我）</a>，會同錄取報名表單一同公布資格。</li>
                    </ul>
                </div>
                <a 
                href={REGISTRATION_LINK}
                target="_blank" rel="noopener noreferrer"
                className="mt-1 md:mt-1 px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold text-white bg-transparent border-2 border-[#8DD6F7] rounded-lg hover:bg-[#8DD6F7] hover:text-[#070B14] transition-all duration-200"
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
        
        // 防止連續觸發
        isScrolling.current = true;
        
        // 增加最小滾動閾值
        const scrollThreshold = 50;
        if (Math.abs(e.deltaY) < scrollThreshold) {
            isScrolling.current = false;
            return;
        }

        if (e.deltaY > 0 && currentPage < pageCount - 1) {
            setCurrentPage(prev => prev + 1);
        } else if (e.deltaY < 0 && currentPage > 0) {
            setCurrentPage(prev => prev - 1);
        }
        
        // 增加防抖時間
        setTimeout(() => {
            isScrolling.current = false;
        }, 1000);
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

        // 增加最小滑動閾值
        const touchThreshold = 50;
        if (Math.abs(diff) < touchThreshold) {
            return;
        }

        isScrolling.current = true;
        if (diff > 0 && currentPage < pageCount - 1) {
            setCurrentPage(prev => prev + 1);
        } else if (diff < 0 && currentPage > 0) {
            setCurrentPage(prev => prev - 1);
        }
        
        // 增加防抖時間
        setTimeout(() => {
            isScrolling.current = false;
        }, 1000);
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

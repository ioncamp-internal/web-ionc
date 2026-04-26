import {Inter} from 'next/font/google'
import Header from '@/components/2026/Header'
import Footer from '@/components/2026/Footer'
import Background from "@/components/2026/Background";
import Lecturer from "@/components/2026/Lecturer";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { useState, useCallback, useEffect } from 'react';

const lecturers = [
    {
        name: "范釗維",
        id: "SorahISA",
        experiences: [
            "晉級 2025 ICPC World Finals",
            "APIO 2020 🥉 銅牌",
            "2023、2024 IONCamp 講師",
        ],
    },
    {
        name: "歐育淇",
        id: "ub33",
        experiences: [
            "2025 ICPC World Finalist",
            "2025 ICPC Asia Taichung Regional 🥇 金牌",
            "2025 NCPC 第二名",
            "2025 TOPC 🥇 金牌",
            "109 學年度高中資訊學科能力競賽全國賽二等獎",
            "高中三年 TOI 一階",
            "NPSC 第四名",  
            "交大校內賽和個人賽第一名",
            "codeforces 1e8-th submission"
        ],
    },
    {
        name: "林鼎陽",
        experiences: [
            "2024 ICPC Taichung Regional Contest 🥈 Silver Award",
            "2024 ICPC Jakarta Regional Contest 🥉 Bronze Award",
            "2025 ICPC Asia Pacific Championship Participant",
            "全國高中資訊能力競賽 🥉 三等獎",
            "台北市學科能力競賽資訊科 🥈 二等獎",
        ],
    },
    {
        name: "黃頂軒",
        // avatarUrl: RAT,
        experiences: [
            "2022 ICPC Asia Taoyuan Regional Programming Contest 🥈 銀牌",
            "2023 ICPC Asia Taoyuan Regional Programming Contest 🥈 銀牌",
            "2025 ICPC Asia Taichung Regional Programming Contest 🥈 銀牌",
            "2023 ~ 2025 IONCamp 進階資料結構 講師"
        ],
    },
    {
        name: "張晏誠",
        id: "chyen",
        experiences: [
            "2024, 2025 ICPC Asia Taichung Regional Programming Contest 🥈 銀牌",
            "114 NCPC 第三名",
            "2024 ~ 2025 IONCamp 進階資料結構 講師",
            "清大演算法、資料結構助教"
        ]
    },
    {
        name: "李昕威",
        id: "PolarisChiba",
        experiences: [
            "晉級 2022 ICPC World Finals",
            "2022 ICPC Asia Taoyuan Regional 🥇 金牌 (Rk. 7)",
            "2022 National Collegiate Programming Contest 第三名 (Rk. 8)",
            "2022 Google Code Jam Round 3 第 266 名",
            "2022 HP CodeWars Taiwan University Edition 第二名",
            "107 學年度高中資訊學科能力競賽全國賽二等獎",
            "高中三年 TOI 一階",
            "2020、2022~2025 IONCamp 講師 ；資訊之芽竹區講師",
            "清大計算機程式設計、計算方法設計、競技程式設計課程助教"
        ],
    },
    {
        name: "葉宥辰",
        id: "littlepants",
        experiences: [
            "高中兩年 TOI 一階",
            "2022 ICPC Asia Taoyuan Regional 🥇 金牌",
            "2025 National Collegiate Programming Contest 第三名",
            "2023~2025 IONCamp",
            "清大演算法、資料結構、作業系統助教"
        ],
    },
    {
        name: "張皓崴",
        experiences: [
            "2023 ICPC World Finalist",
            "2025 ICPC Asia Pacific Championship 🥈 銀牌 (Rk. 15)",
            "2022 ICPC Asia Taoyuan Regional 🥇 金牌 (Rk. 8)",
            "2025 ICPC Asia Jakarta Regional 🥇 金牌 (Rk. 3)",
            "2025 ICPC Asia Taichung Regional 🥇 金牌 (Rk. 10)"
        ],
    },
    {
        name: "何晏甫",
        experiences: [
            "2024 ICPC Asia Taichung Regional Programming Contest 🥉 Bronze Award",
            "2025 ICPC Asia Taichung Regional Programming Contest 🥉 Bronze Award",
            "2025 ICPC Jakarta Regional  Contest 🥉 Bronze Award (Rk. 9)"
        ],
    },
    {
        name: "李其樺",
        experiences: [
            "2022 NPSC 第三名",
            "2022 ISSC 第二名",
            "2023 ICPC Asia Taoyuan Regional Programming Contest 🥉 Bronze Award",
            "2024 ICPC Asia Taichung Regional Programming Contest 🥉 Bronze Award",
            "2025 ICPC Asia Taichung Regional Programming Contest 🥉 Bronze Award"
        ],
    },
    {
        name: "詹凱智",
        experiences: [
            "2023, 2024 台北市學科能力競賽資訊科 🥈 二等獎",
            "2024 TOI 一階",
            "2024 ICPC Taichung Regional Contest 🥈 Silver Award",
            "2024 ICPC Jakarta Regional Contest 🥉 Bronze Award",
            "2025 ICPC Asia Taichung Regional Contest 🥈 Silver Award"
        ],
    }
];
export default function Home() {
    const [isPlaying, setIsPlaying] = useState(true);
    
    // 使用 Embla Carousel 與 AutoScroll 外掛
    // playOnInit: 初次載入就播放
    // stopOnInteraction: false -> 我們手動控制，這樣配合 stopOnMouseEnter/drag 才能自訂 2 秒恢復
    // stopOnMouseEnter: false
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, dragFree: true },
        [AutoScroll({ playOnInit: true, speed: 1.5, stopOnInteraction: false, stopOnMouseEnter: false })]
    );

    // 切換播放/暫停
    const togglePlay = useCallback(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll;
        if (!autoScroll) return;

        if (isPlaying) {
            autoScroll.stop();
        } else {
            autoScroll.play();
        }
        setIsPlaying(!isPlaying);
    }, [emblaApi, isPlaying]);

    // 監聽使用者互動事件，實作「暫停動畫 -> 2秒後恢復」
    useEffect(() => {
        if (!emblaApi) return;
        const autoScroll = emblaApi.plugins()?.autoScroll;
        if (!autoScroll) return;

        let resumeTimeout = null;

        // 當使用者開始拖拉或點擊時，強制暫停動畫
        const onInteract = () => {
            if (resumeTimeout) clearTimeout(resumeTimeout);
            autoScroll.stop();
        };

        // 當使用者結束互動時，設定 2 秒後重新啟動動畫（前提是按鈕處於 isPlaying 狀態）
        const onInteractEnd = () => {
            if (resumeTimeout) clearTimeout(resumeTimeout);
            if (isPlaying) {
                resumeTimeout = setTimeout(() => {
                    autoScroll.play();
                }, 2000); // 暫停 2 秒後恢復
            }
        };

        emblaApi.on('pointerDown', onInteract);
        emblaApi.on('pointerUp', onInteractEnd);

        return () => {
            if (resumeTimeout) clearTimeout(resumeTimeout);
            emblaApi.off('pointerDown', onInteract);
            emblaApi.off('pointerUp', onInteractEnd);
        };
    }, [emblaApi, isPlaying]);

    return (
        <>
            <Header/>
            <main className="flex min-h-screen flex-col items-center justify-between px-0 py-10 md:pt-20 md:pb-10"
                  style={{backgroundColor: "#070B14"}}>
                <Background/>
                
                {/* 標題與控制按鈕區域 */}
                <div className="text-center z-10 mb-8 mt-8 flex flex-col items-center">
                    <h1 className="text-5xl font-bold mb-6" style={{color: "#FFF"}}>師資陣容</h1>
                    
                    <button 
                        onClick={togglePlay}
                        className={`flex items-center space-x-2 px-6 py-2 rounded-full font-bold text-sm tracking-widest transition-all duration-300 shadow-lg ${
                            isPlaying 
                            ? 'bg-blue-600/20 text-blue-400 border border-blue-500/50 hover:bg-blue-600/40' 
                            : 'bg-red-600/20 text-red-400 border border-red-500/50 hover:bg-red-600/40'
                        }`}
                    >
                        <span>{isPlaying ? 'PAUSE 暫停動畫' : 'PLAY 播放動畫'}</span>
                        <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-blue-400 animate-pulse' : 'bg-red-500'}`} />
                    </button>
                </div>

                {/* 輪播跑馬燈容器 */}
                <div className="z-50 w-full overflow-hidden cursor-grab active:cursor-grabbing mb-20" ref={emblaRef}>
                    <div className="flex backface-hidden touch-pan-y">
                        {lecturers.map((lecturer, index) => (
                            <div className="flex-[0_0_auto] min-w-0 px-4 md:px-6" key={index}>
                                <Lecturer name={lecturer.name} id={lecturer.id} experiences={lecturer.experiences} avatarUrl={lecturer.avatarUrl}/>
                            </div>
                        ))}
                    </div>
                </div>

            </main>
            <Footer/>
        </>
    )
}

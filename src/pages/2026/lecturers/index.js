import Header from '@/components/2026/Header'
import Footer from '@/components/2026/Footer'
import Background from "@/components/2026/Background";
import Lecturer from "@/components/2026/Lecturer";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { useState, useCallback, useEffect } from 'react';

const lecturers = [
    {
        name: "詹凱智",
        avatarUrl: "/images/2026/Lecturers/詹凱智.png",
        experiences: [
            "2022, 2023 臺北市資訊學科能力競賽 🥉 三等獎",
            "2024 TOI 一階 🎖️",
            "2024 ICPC Asia Taichung Regional Programming Contest 🥈 Silver Award",
            "2024 ICPC Asia Jakarta Regional Programming Contest 🥉 Bronze Award",
            "2025 ICPC Asia Taichung Regional Programming Contest 🥈 Silver Award"
        ],
    },
    {
        name: "范釗維",
        experiences: [
            "2025 ICPC World Finalist",
            "2020 APIO 🥉 Bronze Award",
            "2023 ~ 2025 IONCamp 講師"
        ],
    },
    {
        name: "林鼎陽",
        experiences: [
            "2024 ICPC Asia Taichung Regional Programming Contest 🥈 Silver Award",
            "2024 ICPC Asia Jakarta Regional Programming Contest 🥉 Bronze Award",
            "2025 ICPC Asia Pacific Championship Participant",
            "2023 全國資訊學科能力競賽 🥉 三等獎",
            "2023 臺北市資訊學科能力競賽 🥈 二等獎"
        ],
    },
    {
        name: "黃頂軒",
        avatarUrl: "/images/2026/Lecturers/黃頂軒.jpg",
        experiences: [
            "2022 ICPC Asia Taoyuan Regional Programming Contest 🥈 Silver Award",
            "2023 ICPC Asia Taoyuan Regional Programming Contest 🥈 Silver Award",
            "2025 ICPC Asia Taichung Regional Programming Contest 🥈 Silver Award",
            "2023 ~ 2025 IONCamp 進階資料結構 講師"
        ],
    },
    {
        name: "李其樺",
        avatarUrl: "/images/2026/Lecturers/李其樺.png",
        experiences: [
            "2022 NPSC 🥉 第三名",
            "2022 ISSC 🥈 第二名",
            "2023 ICPC Asia Taoyuan Regional Programming Contest 🥉 Bronze Award",
            "2024 ICPC Asia Taichung Regional Programming Contest 🥉 Bronze Award",
            "2025 ICPC Asia Taichung Regional Programming Contest 🥉 Bronze Award"
        ],
    },
    {
        name: "何晏甫",
        avatarUrl: "/images/2026/Lecturers/何晏甫.jpg",
        experiences: [
            "2024 ICPC Asia Taichung Regional Programming Contest 🥉 Bronze Award",
            "2025 ICPC Asia Taichung Regional Programming Contest 🥉 Bronze Award",
            "2025 ICPC Asia Jakarta Regional Programming Contest 🥉 Bronze Award (Rk. 9)"
        ],
    },
    {
        name: "張晏誠",
        experiences: [
            "2024, 2025 ICPC Asia Taichung Regional Programming Contest 🥈 Silver Award",
            "2025 National Collegiate Programming Contest 🥉 第三名",
            "2024 ~ 2025 IONCamp 進階圖論 講師",
            "清大演算法、資料結構助教"
        ]
    },
    {
        name: "李昕威",
        avatarUrl: "/images/2026/Lecturers/李昕威.jpg",
        experiences: [
            "2022 ICPC World Finalist",
            "2022 ICPC Asia Taoyuan Regional Programming Contest 🥇 Gold Award (Rk. 7)",
            "2022 National Collegiate Programming Contest 🥉 第三名 (Rk. 8)",
            "2022 Google Code Jam Round 3 第 266 名",
            "2022 HP CodeWars Taiwan University Edition 🥈 第二名",
            "2018 全國資訊學科能力競賽 🥈 二等獎",
            "2018 ~ 2020 TOI 一階 🎖️",
            "2020, 2022 ~ 2025 IONCamp 講師；資訊之芽竹區講師",
            "清大計算機程式設計、計算方法設計、競技程式設計助教"
        ],
    },
    {
        name: "張皓崴",
        experiences: [
            "2023 ICPC World Finalist",
            "2025 ICPC Asia Pacific Championship 🥈 Silver Award (Rk. 15)",
            "2022 ICPC Asia Taoyuan Regional Programming Contest 🥇 Gold Award (Rk. 8)",
            "2025 ICPC Asia Jakarta Regional Programming Contest 🥇 Gold Award (Rk. 3)",
            "2025 ICPC Asia Taichung Regional Programming Contest 🥇 Gold Award (Rk. 10)"
        ],
    },
    {
        name: "葉宥辰",
        experiences: [
            "2021 ~ 2022 TOI 一階 🎖️",
            "2022 ICPC Asia Taoyuan Regional Programming Contest 🥇 Gold Award",
            "2025 National Collegiate Programming Contest 🥉 第三名",
            "2023 ~ 2025 IONCamp 講師",
            "清大演算法、資料結構、作業系統助教"
        ],
    },
    {
        name: "歐育淇",
        avatarUrl: "/images/2026/Lecturers/歐育淇.jpg",
        experiences: [
            "2025 ICPC World Finalist",
            "2025 ICPC Asia Taichung Regional Programming Contest 🥇 Gold Award",
            "2025 National Collegiate Programming Contest 🥈 第二名",
            "2025 TOPC 🥇 Gold Award",
            "2020 全國資訊學科能力競賽 🥈 二等獎",
            "2019 ~ 2021 TOI 一階 🎖️",
            "2019 NPSC 第四名",
            "2025 交大校內賽、個人賽 🥇 第一名"
        ],
    }
];

export default function Lecturers() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [shuffledLecturers, setShuffledLecturers] = useState(lecturers);

    useEffect(() => {
        setShuffledLecturers([...lecturers].sort(() => Math.random() - 0.5));
    }, []);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, dragFree: true },
        [AutoScroll({ playOnInit: true, speed: 1.5, stopOnInteraction: false, stopOnMouseEnter: false })]
    );

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

    useEffect(() => {
        if (!emblaApi) return;
        const autoScroll = emblaApi.plugins()?.autoScroll;
        if (!autoScroll) return;
        if (isPlaying) return;

        const interval = setInterval(() => {
            if (autoScroll.isPlaying()) autoScroll.stop();
        }, 100);

        return () => clearInterval(interval);
    }, [emblaApi, isPlaying]);

    useEffect(() => {
        if (!emblaApi) return;
        const autoScroll = emblaApi.plugins()?.autoScroll;
        if (!autoScroll) return;

        let resumeTimeout = null;

        const onInteract = () => {
            if (resumeTimeout) clearTimeout(resumeTimeout);
            autoScroll.stop();
        };

        const onInteractEnd = () => {
            if (resumeTimeout) clearTimeout(resumeTimeout);
            if (isPlaying) {
                resumeTimeout = setTimeout(() => { autoScroll.play(); }, 2000);
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
        <div className="min-h-screen flex flex-col relative" style={{ background: '#FCFCFE' }}>
            <Background currentPage={1} />
            <Header />

            <main className="flex-grow relative z-10 flex flex-col items-center py-10">
                {/* Title + controls */}
                <div className="text-center mb-8 mt-4 flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1D03F1' }}>師資陣容</h1>

                    <button
                        onClick={togglePlay}
                        className="flex items-center gap-2 px-5 py-2 rounded-full font-bold text-sm tracking-widest transition-all duration-200"
                        style={{
                            color: isPlaying ? '#A361DD' : '#4D5BDA',
                            border: `1.5px solid ${isPlaying ? '#A361DD' : '#4D5BDA'}`,
                            background: isPlaying ? 'rgba(163,97,221,0.08)' : 'rgba(77,91,218,0.08)',
                        }}
                    >
                        <span>{isPlaying ? 'PAUSE 暫停動畫' : 'PLAY 播放動畫'}</span>
                        <div
                            className={`w-2 h-2 rounded-full ${isPlaying ? 'animate-pulse' : ''}`}
                            style={{ background: isPlaying ? '#A361DD' : '#4D5BDA' }}
                        />
                    </button>
                </div>

                {/* Carousel */}
                <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing mb-10" ref={emblaRef}>
                    <div className="flex backface-hidden touch-pan-y">
                        {shuffledLecturers.map((lecturer, index) => (
                            <div className="flex-[0_0_auto] min-w-0 px-4 md:px-6" key={index}>
                                <Lecturer
                                    name={lecturer.name}
                                    id={lecturer.id}
                                    experiences={lecturer.experiences}
                                    avatarUrl={lecturer.avatarUrl}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

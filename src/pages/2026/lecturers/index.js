import {Inter} from 'next/font/google'
import Header from '@/components/2026/Header'
import Footer from '@/components/2026/Footer'
import Background from "@/components/2026/Background";
import Lecturer from "@/components/2026/Lecturer";

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
    return (
        <>
            <Header/>
            <main className="flex min-h-screen flex-col items-center justify-between px-4 py-10 md:p-20"
                  style={{backgroundColor: "#070B14"}}>
                <Background/>
                <div className="text-center z-10 mb-12 mt-8">
                    <h1 className="text-5xl font-bold" style={{color: "#FFF"}}>師資陣容</h1>
                </div>
                <div className="z-50 w-full max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-16">
                    {lecturers.map((lecturer) => (
                        <Lecturer key={lecturer.name} name={lecturer.name} id={lecturer.id} experiences={lecturer.experiences}
                                  avatarUrl={lecturer.avatarUrl}/>
                    ))}
                </div>
            </main>
            <Footer/>
        </>

    )
}

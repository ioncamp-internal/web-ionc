import {Inter} from 'next/font/google'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Background from "@/components/Background";
import Lecturer from "@/components/Lecturer";

const lecturers = [
    {
        name: "李昕威",
        id: "PolarisChiba",
        experiences: [
            "NTHU Competitive Programming Lecture Teaching Assistant",
            "2021 ICPC Asia Taipei Regional🥈Sliver Award",
            "2020 ICPC Asia Taipei-Hsinchu Regional🥈Sliver Award",
            "TOI 1!",
            "全國高中資訊能力競賽🥈二等獎",
            "北市資訊能力競賽🥈二等獎",
        ],
    },
    {
        name: "范釗維",
        experiences: [
            "2023 IONCamp 講師",
            "2023 資訊之芽竹區算法班 講師",
            "2023 ICPC Asia Taoyuan Regional  金牌",
            "2020 APIO 🥉 銅牌",
            "2020 ~ 2022 ICPC Taiwan Regional 🥈 Silver Award",
        ],
    },
    {
        name: "蔣昀成",
        experiences: ['2022 ICPC Asia Taoyuan Regional🥈Sliver Award',
        '2023 ICPC Asia Taoyuan Regional🥈Sliver Award'],
    },
    {
        name: "周宜勳",
        experiences: ['2023 ICPC Asia Taoyuan Regional🥈Sliver Award',
        '2021~2023 TOI 1!',
        '111全國資訊學科能力競賽 二等獎'],
    },
    {
        name: "葉宥辰",
        experiences: ['2022 ICPC Asia Taoyuan Regional🥇Golden Award', 
            '2023 ICPC Asia Taoyuan RegionalSliver Award', 
            'TOI 1!'
        ],
    },
    {
        name: "黃頂軒",
        // avatarUrl: RAT,
        experiences: [
            '2022 ICPC Asia Taoyuan Regional🥈Sliver Award',
            '2023 ICPC Asia Taoyuan Regional🥈Sliver Award'
        ],
    },
    {
        name: "林敬珣",
        experiences: [
            '2023 ICPC Asia Taoyuan Regional 🥈Sliver Award',
            'TOI 1!',
            '北市資訊能力競賽 三等獎'
        ],
    },
    {
        name: "謝師誠",
        experiences: [
            '2023 ICPC Asia Taoyuan Regional🥉Bronze Award',
            '110 竹市學科能力競賽 佳作',
            'CPE 大學程式能力檢定7/7'
        ],
    },
    {
        name: "李其樺",
        experiences: [
            '2023 ICPC Asia Taoyuan Regional🥉Bronze Award',
        ],
    },
    {
        name: "張晏誠",
        experiences: [
            '2023 清大個人賽第一名'
        ]
    }
];
export default function Home() {
    return (
        <>
            <Header/>
            <main className="flex min-h-screen flex-col items-center justify-between px-4 py-10 md:p-20"
                  style={{backgroundColor: "#070B14"}}>
                <Background/>
                <div className="text-center z-10">
                    <h1 className="text-5xl font-bold" style={{color: "#FFF"}}>師資陣容</h1>
                </div>
                <div className="z-50 w-4/5">
                    {lecturers.map((lecturer) => (
                        <Lecturer name={lecturer.name} id={lecturer.id} experiences={lecturer.experiences}
                                  avatarUrl={lecturer.avatarUrl}/>
                    ))}
                </div>
            </main>
            <Footer/>
        </>

    )
}

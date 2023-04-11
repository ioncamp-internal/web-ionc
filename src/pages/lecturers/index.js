import Image from 'next/image'
import {Inter} from 'next/font/google'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Background from "@/components/Background";
import Lecturer from "@/components/Lecturer";
import HNO2 from "@/images/hno2.jpg";
import RAT from "@/images/rat.jpg";

const inter = Inter({subsets: ['latin']})
const lecturers = [
    {
        name: "李旺陽",
        experiences: [
            "2015~ 清華大學競技程式設計助教",
            "2015~2022 新竹資訊之芽講師 (C 語法 / Python / 算法)",
            "2019 ICPC Asia Taipei-Hsinchu Regional🥈Sliver Award",
            "2017 ICPC Taiwan Online Programming Contest 第五名",
            "清大資工程式大帝程式設計競賽🥇金牌獎",
            "2017 兩岸清華程式競賽 第三名",
            "2016 ACM-ICPC Manila🎖Sinag Award",
            "TOI 2!",
            "2015 成大暑期高中生程式設計邀請賽 第一名",
        ],
    },
    {
        name: "李昕威",
        id: "PolarisChiba",
        experiences: [
            "2021 ICPC Asia Taipei Regional🥈Sliver Award",
            "2020 ICPC Asia Taipei-Hsinchu Regional🥈Sliver Award",
            "TOI 1!",
            "全國高中資訊能力競賽🥈二等獎",
            "北市資訊能力競賽🥈二等獎",
        ],
    },
    {
        name: "郭軒語",
        id: "HNO2",
        // avatarUrl: HNO2,
        experiences: [
            "2021 ICPC World Finalist",
            // "110 全國大專電腦軟體設計競賽🥈第四名",
            "2022 ICPC asia Taoyuan Regional 🥇Golden Award",
            "2018 ~ 2020 TOI 1!",
            "108 全國資訊學科能力競賽🥈二等獎",
        ],
    },
    {
        name: "曹瀚文",
        id: "grorge",
        experiences: ['新竹資訊之芽 講師', 'ICPC Asia Taipei Regional🥈Sliver Award', '北市資訊能力競賽 三等獎'],
    },
    {
        name: "楊景遇",
        experiences: ['2022 ICPC Gold', 'TOI 1!', '學科能力競賽決賽 二等獎'],
    },
    {
        name: "葉宥辰",
        experiences: ['2022 ICPC Asia Taoyuan Regional🥇Golden Award', 'TOI 1!'],
    },
    {
        name: "黃頂軒",
        // avatarUrl: RAT,
        experiences: ['2022 ICPC Asia Taoyuan Regional🥈Sliver Award'],
    },
    {
        name: "林敬珣",
        experiences: [
            'TOI 1!',
            '北市資訊能力競賽 三等獎'
        ],
    },
    {
        name: "謝師誠",
        experiences: [
            '110 竹市學科能力競賽 佳作',
            'CPE 大學程式能力檢定7/7'
        ],
    },
];
export default function Home() {
    return (
        <>
            <Header/>
            <main className="flex min-h-screen flex-col items-center justify-between p-20"
                  style={{backgroundColor: "#070B14"}}>
                <Background/>
                <div className="text-center z-10" style={{marginTop: "-15px"}}>
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

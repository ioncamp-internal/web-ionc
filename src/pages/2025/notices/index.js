import Image from 'next/image'
import {Inter} from 'next/font/google'
import Header from '@/components/2025/Header'
import Footer from '@/components/2025/Footer'

import backgroundImage from "@/images/2025/background2.png";
import ioncTS from "@/images/2025/ionc-re.png";
import Background from "@/components/2025/Background";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Header/>
            <main className="flex min-h-screen flex-col items-center justify-between px-4 py-10 md:p-20"
                  style={{backgroundColor: "#070B14"}}>
                <Background/>
                <div className="text-left z-10">
                    <h1 className="text-5xl font-bold text-center" style={{color: "#FFF"}}>注意事項</h1>
                    <ul className="px-6 text-2xl font-medium my-5 leading-10" style={{color: "#8DD6F7"}}>
                        <li>1. 請攜帶自己的睡袋、盥洗用具以及四天份的衣物，如有其他需求也可自行攜帶。</li>
                        <li>2. 請攜帶健保卡，如有任何特殊狀況或疾病請告知，並攜帶相關藥品。</li>
                        <li>3. 請攜帶口罩，帶著一顆快樂的心一同參加活動。</li>
                        <li>4. 如有任何問題，請私訊我們的 FB 粉專。</li>
                    </ul>
                </div>
                <div></div>
            </main>
            <Footer/>
        </>
    )
}

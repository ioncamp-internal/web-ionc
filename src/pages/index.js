import Image from 'next/image'
import {Inter} from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ioncTS from "@/images/ionc-re.png";
import Background from "@/components/Background";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Header/>
                <main className="flex min-h-screen flex-col items-center justify-between p-20" style={{backgroundColor:"#070B14" }}>
                    <Background/>
                    <Image
                        className="z-10"
                        style={{marginTop:"-15px"}}
                        src={ioncTS}
                        alt=""
                        width={200}
                        height={400}
                        priority
                        unoptimized
                    />
                    <div className="text-center z-10" style={{marginTop:"-15px"}}>
                        <h1 className="text-6xl font-bold"style={{color:"#FFF"}}>2023 IONCamp</h1>
                        <div className="text-4xl font-semibold my-5"style={{color:"#FFF"}}>清大暑期程式競賽集訓營</div>
                        <p className="px-6 text-2xl font-medium my-5 leading-10"style={{color:"#8DD6F7"}}>
                            對於初學程式設計感到迷惘嗎？或是在挑戰 APCS 或大大小小的程式設計比賽感到挫折呢？<br/>
                            讓 IONCamp 透過連續五天密集且扎實的培訓課程，帶領你突破目前的困境吧！
                        </p>
                    </div>
                    <div></div>
                </main>
            <Footer/>
        </>

    )
}

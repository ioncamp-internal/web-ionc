import Image from 'next/image'
import {Inter} from 'next/font/google'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import backgroundImage from "@/images/background2.png"
import ioncTS from "@/images/ionc-re.png"

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Header/>
            <main className="flex min-h-screen flex-col items-center justify-between p-20" style={{backgroundColor:"#070B14" }}>
                <Image
                    className="absolute top-28 translate-y-[-18%] z-0"
                    // className="absolute left-7 top-14 translate-x-[-55%] translate-y-[-20%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
                    src={backgroundImage}
                    alt=""
                    width={1000}
                    height={1200}
                    priority
                    unoptimized
                    oncontextmenu="return false;"
                    onselectstart="return false;"

                />
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
                <div className="text-center" style={{marginTop:"-15px"}}>
                    <h1 className="text-6xl font-bold"style={{color:"#FFF"}}>2025 IONCamp</h1>
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

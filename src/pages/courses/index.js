import Image from 'next/image'
import {Inter} from 'next/font/google'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Background from "@/components/Background";
import coursesImage from "@/images/courses1.png";
const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Header/>
            <main className="flex min-h-screen flex-col items-center justify-between p-20" style={{backgroundColor:"#070B14" }}>
                <Background/>
                <div className="text-center z-10" style={{marginTop:"-15px"}}>
                    <h1 className="text-5xl font-bold"style={{color:"#FFF"}}>營隊課表</h1>
                </div>
                <div>
                    <h3 className="mt-5 mb-2 text-base font-semibold leading-6 text-white text-center"
                        style={{color: "#8DD6F7"}}>*部分課程同時段將分為基礎與進階兩班同時授課</h3>
                </div>
                <Image
                    src={coursesImage}
                    alt=""
                    className="mt-5 z-50 rounded-lg"
                    width={800}
                />
            </main>
            <Footer/>
        </>

    )
}

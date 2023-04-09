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
            <main className="flex min-h-screen flex-col items-center p-20" style={{backgroundColor:"#070B14" }}>
                <Background/>
                <div className="text-center z-10" style={{marginTop:"-15px"}}>
                    <h1 className="text-5xl font-bold"style={{color:"#FFF"}}>贊助單位</h1>
                </div>
                <div className="z-50">
                    <h3 className="z-50 text-3xl mt-5 mb-2 font-semibold text-white text-center"
                        style={{color: "#8DD6F7"}}>
                        *尚待尋找中*<br/>若有合作意願歡迎來信聯繫！
                    </h3>
                    <a className="z-10 text-3xl mt-5 mb-2 font-semibold text-white text-center"
                       href="mailto:nthu.ioncamp@gmail.com"style={{color: "#8DD6F7"}}>
                        nthu.ioncamp@gmail.com
                    </a>
                </div>

            </main>
            <Footer/>
        </>

    )
}

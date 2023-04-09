import Image from 'next/image'
import {Inter} from 'next/font/google'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Travel from '../../components/Travel'
import backgroundImage from "@/images/background2.png";
import Background from "@/components/Background";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Header/>
            <main className="flex min-h-screen flex-col items-center justify-between p-20" style={{backgroundColor:"#070B14" }}>
                <Background/>
                <Travel/>
            </main>
            <Footer/>
        </>

    )
}

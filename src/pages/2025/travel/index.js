import Image from 'next/image'
import {Inter} from 'next/font/google'
import Header from '@/components/2025/Header'
import Footer from '@/components/2025/Footer'
import Travel from '@/components/2025/Travel'
import backgroundImage from "@/images/2025/background2.png";
import Background from "@/components/2025/Background";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Header/>
            <main className="flex min-h-screen flex-col items-center justify-between px-4 py-10 md:p-20" style={{backgroundColor:"#070B14" }}>
                <Background/>
                <Travel/>
            </main>
            <Footer/>
        </>

    )
}

import Image from 'next/image'
import {Inter} from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ioncTS from "@/images/ionc-re.png";
import Background from "@/components/Background";
import Head from "next/head";
import { useEffect, useRef, useState } from 'react';

const inter = Inter({subsets: ['latin']})

const FOOTER_HEIGHT = 64; // 假設footer高度為64px，可根據實際調整

const pageContents = [
    // 第一頁
    (
        <>
            <Image
                className="z-10"
                style={{marginTop: "-15px"}}
                src={ioncTS}
                alt=""
                width={200}
                height={400}
                priority
                unoptimized
            />
            <div className="text-center z-10">
                <h1 className="text-6xl font-bold" style={{color: "#FFF"}}>2025 IONCamp</h1>
                <div className="text-4xl font-semibold my-5" style={{color: "#FFF"}}>清大暑期程式競賽集訓營</div>
                <p className="px-6 text-2xl font-medium my-5 leading-10" style={{color: "#8DD6F7"}}>
                    對於初學程式設計感到迷惘嗎？或是在挑戰 APCS 或大大小小的程式設計比賽感到挫折呢？<br/>
                    讓 IONCamp 透過連續五天密集且扎實的培訓課程，帶領你突破目前的困境吧！
                </p>
            </div>
        </>
    ),
    // 第二頁
    (
        <div className="w-full max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-8">誰適合我們營隊</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-white mb-4">初學者</h3>
                    <p className="text-gray-300">適合剛開始學習程式設計的學生，我們會從基礎開始教起。</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-white mb-4">APCS 考生</h3>
                    <p className="text-gray-300">準備參加 APCS 考試的學生，我們提供專業的考試準備課程。</p>
                </div>
            </div>
        </div>
    ),
    // 第三頁
    (
        <div className="w-full max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-8">營隊特色</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-white mb-4">專業師資</h3>
                    <p className="text-gray-300">由清大資工系教授及業界專家親自授課。</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-white mb-4">實戰演練</h3>
                    <p className="text-gray-300">透過大量實作練習，提升程式設計能力。</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-white mb-4">小班教學</h3>
                    <p className="text-gray-300">確保每位學員都能獲得充分的指導與關注。</p>
                </div>
            </div>
        </div>
    ),
    // 第四頁
    (
        <div className="w-full max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-8">營隊特色</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-white mb-4">專業師資</h3>
                    <p className="text-gray-300">由清大資工系教授及業界專家親自授課。</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-white mb-4">實戰演練</h3>
                    <p className="text-gray-300">透過大量實作練習，提升程式設計能力。</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-white mb-4">小班教學</h3>
                    <p className="text-gray-300">確保每位學員都能獲得充分的指導與關注。</p>
                </div>
            </div>
        </div>
    )
];

export default function Home() {
    const [currentPage, setCurrentPage] = useState(0);
    const isScrolling = useRef(false);
    const pageCount = pageContents.length;

    // 禁止body滾動
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    // 處理滾動事件
    const handleWheel = (e) => {
        if (isScrolling.current) return;
        isScrolling.current = true;
        if (e.deltaY > 0 && currentPage < pageCount - 1) {
            setCurrentPage(prev => prev + 1);
        } else if (e.deltaY < 0 && currentPage > 0) {
            setCurrentPage(prev => prev - 1);
        }
        setTimeout(() => {
            isScrolling.current = false;
        }, 1000);
    };

    useEffect(() => {
        window.addEventListener('wheel', handleWheel);
        return () => window.removeEventListener('wheel', handleWheel);
    }, [currentPage]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isScrolling.current) return;
            isScrolling.current = true;
            if ((e.key === 'ArrowDown' || e.key === 'PageDown') && currentPage < pageCount - 1) {
                setCurrentPage(prev => prev + 1);
            } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentPage > 0) {
                setCurrentPage(prev => prev - 1);
            }
            setTimeout(() => {
                isScrolling.current = false;
            }, 1000);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentPage]);

    return (
        <div className="h-screen w-screen flex flex-col overflow-hidden relative">
            <Header/>
            <main className="flex-grow relative" style={{paddingBottom: `${FOOTER_HEIGHT}px`}}>
                <Background/>
                {pageContents.map((content, idx) => (
                    <div
                        key={idx}
                        className="absolute inset-0 flex flex-col items-center justify-center p-3 md:p-20 transition-all duration-700 ease-in-out"
                        style={{
                            transform: `translateY(${(idx - currentPage) * 100}%)`,
                            opacity: idx === currentPage ? 1 : 0,
                            pointerEvents: idx === currentPage ? 'auto' : 'none'
                        }}
                    >
                        {content}
                    </div>
                ))}
            </main>
            <Footer className="fixed bottom-0 left-0 right-0 z-50"/>
        </div>
    )
}

import Image from 'next/image'
import {Inter} from 'next/font/google'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Background from "@/components/Background";
import IONCcourse from "@/images/IONCcourse.png";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Header/>
            <main className="flex min-h-screen flex-col items-center justify-start px-4 py-10 sm:p-20"
                  style={{backgroundColor: "#070B14"}}>
                <Background/>
                <div className="text-center z-10" style={{marginTop: "-15px"}}>
                    <h1 className="text-5xl font-bold" style={{color: "#FFF"}}>營隊課表</h1>
                </div>
                <div>
                    <h3 className="mt-5 mb-2 text-base font-semibold leading-6 text-white text-center"
                        style={{color: "#8DD6F7"}}>*部分課程同時段將分為基礎與進階兩班同時授課</h3>
                </div>
                <div class="flex flex-wrap">
                    <Image
                        src={IONCcourse}
                        alt=""
                        className="mt-5 z-50 rounded-lg"
                        width={3539}
                        height={1755}
                    />

                    <div class="w-full md:w-1/2 mb-8">
                        <div class="flex flex-col h-full border border-l-8 border-blue-400 shadow rounded-lg mt-8 mx-3 px-2">
                            <h3 class="text-3xl font-bold text-white m-5 border-b">基本技巧</h3>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">先備知識</p>
                            <ul class="text-white ml-5 px-4 list-disc mb-4">
                                <li class="mb-1">C++ 語法</li>
                                <li class="mb-1">C++ 語法練習題單 1: <br></br><a href="https://vjudge.net/article/3610" class="border-b">題單連結</a></li>
                                <li class="mb-1">C++ 語法練習題單 2: <br></br><a href="https://codeforces.com/contestInvitation/4fbbb17a50631203c8c6a34861f7bf5a0bd0c71f" class="border-b">題單連結</a></li>
                            </ul>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">課程大綱</p>
                            <ul class="text-white ml-5 px-4 list-disc">
                                <li class="mb-1">遞迴</li>
                                <li class="mb-1">基本分治法</li>
                                <li class="mb-1">二分搜尋法</li>
                                <li class="mb-1">三分搜尋法</li>
                                <li class="mb-1">倍增法</li>
                                <li class="mb-1">基本枚舉技巧</li>
                                <li class="mb-1">雙指針</li>
                                <li class="mb-1">常見排序法</li>
                            </ul>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 mb-8">
                        <div class="flex flex-col h-full border border-l-8 border-blue-400 shadow rounded-lg mt-8 mx-3 px-2">
                            <h3 class="text-3xl font-bold text-white m-5 border-b">基礎資料結構</h3>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">先備知識</p>
                            <ul class="text-white ml-5 px-4 list-disc mb-4">
                                <li class="mb-1">基本 C++ 語法</li>
                                <li class="mb-1">基本遞迴概念</li>
                            </ul>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">課程大綱</p>
                            <ul class="text-white ml-5 px-4 list-disc">
                                <li class="mb-1">常用 STL</li>
                                <li class="mb-1">並查集</li>
                                <li class="mb-1">前綴和／差分序列</li>
                                <li class="mb-1">線段樹</li>
                                <li class="mb-1">樹狀數組 (Binary Indexed Tree)</li>
                            </ul>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 mb-8">
                        <div class="flex flex-col h-full border border-l-8 border-blue-400 shadow rounded-lg mt-8 mx-3 px-2">
                            <h3 class="text-3xl font-bold text-white m-5 border-b">進階資料結構</h3>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">先備知識</p>
                            <ul class="text-white ml-5 px-4 list-disc mb-4">
                                <li class="mb-1">樹狀數組 (Binary Indexed Tree)</li>
                                <li class="mb-1">基本線段樹 + 懶人標記</li>
                                <li class="mb-1">基礎圖論知識</li>
                            </ul>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">課程大綱</p>
                            <ul class="text-white ml-5 px-4 list-disc">
                                <li class="mb-1">線段樹進階操作</li>
                                <li class="mb-1">持久化</li>
                                <li class="mb-1">均攤分析 (Amortized Analysis)</li>
                                <li class="mb-1">吉如一線段樹 (Segment Tree Beats)</li>
                                <li class="mb-1">Treap</li>
                                <li class="mb-1">Euler Tour Tree</li>
                            </ul>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 mb-8">
                        <div class="flex flex-col h-full border border-l-8 border-blue-400 shadow rounded-lg mt-8 mx-3 px-2">
                            <h3 class="text-3xl font-bold text-white m-5 border-b">基礎動態規劃</h3>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">先備知識</p>
                            <ul class="text-white ml-5 px-4 list-disc mb-4">
                                <li class="mb-1">基本 C++ 語法</li>
                            </ul>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">課程大綱</p>
                            <ul class="text-white ml-5 px-4 list-disc">
                                <li class="mb-1">DP 介紹</li>
                                <li class="mb-1">Frog</li>
                                <li class="mb-1">LIS（最長遞增子序列）</li>
                                <li class="mb-1">選數字</li>
                                <li class="mb-1">Vacation</li>
                                <li class="mb-1">LCS（最長相同子序列）</li>
                                <li class="mb-1">背包問題</li>
                                <li class="mb-1">旅行推銷員問題</li>
                                <li class="mb-1">Slimes</li>
                                <li class="mb-1">其他經典例題</li>
                            </ul>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 mb-8">
                        <div class="flex flex-col h-full border border-l-8 border-blue-400 shadow rounded-lg mt-8 mx-3 px-2">
                            <h3 class="text-3xl font-bold text-white m-5 border-b">進階動態規劃</h3>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">先備知識</p>
                            <ul class="text-white ml-5 px-4 list-disc mb-4">
                                <li class="mb-1">基礎動態規劃</li>
                                <li class="mb-1">單調隊列、線段樹</li>
                                <li class="mb-1">矩陣乘法</li>
                            </ul>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">課程大綱</p>
                            <ul class="text-white ml-5 px-4 list-disc">
                                <li class="mb-1">待定</li>
                            </ul>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 mb-8">
                        <div class="flex flex-col h-full border border-l-8 border-blue-400 shadow rounded-lg mt-8 mx-3 px-2">
                            <h3 class="text-3xl font-bold text-white m-5 border-b">基礎圖論</h3>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">先備知識</p>
                            <ul class="text-white ml-5 px-4 list-disc mb-4">
                                <li class="mb-1">基礎 STL</li>
                            </ul>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">課程大綱</p>
                            <ul class="text-white ml-5 px-4 list-disc">
                                <li class="mb-1">圖論介紹</li>
                                <li class="mb-1">存圖方法</li>
                                <li class="mb-1">圖的遍歷</li>
                                <li class="mb-1">最短路徑</li>
                                <li class="mb-1">二分圖</li>
                                <li class="mb-1">Tree</li>
                                <li class="mb-1">拓撲排序</li>
                            </ul>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 mb-8">
                        <div class="flex flex-col h-full border border-l-8 border-blue-400 shadow rounded-lg mt-8 mx-3 px-2">
                            <h3 class="text-3xl font-bold text-white m-5 border-b">進階圖論</h3>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">先備知識</p>
                            <ul class="text-white ml-5 px-4 list-disc mb-4">
                                <li class="mb-1">基礎圖論</li>
                            </ul>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">課程大綱</p>
                            <ul class="text-white ml-5 px-4 list-disc">
                                <li class="mb-1">連通分量</li>
                                <li class="mb-1">圓方樹</li>
                                <li class="mb-1">最近共同祖先</li>
                                <li class="mb-1">樹序列化</li>
                                <li class="mb-1">輕重鏈剖分</li>
                            </ul>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 mb-8">
                        <div class="flex flex-col h-full border border-l-8 border-blue-400 shadow rounded-lg mt-8 mx-3 px-2">
                            <h3 class="text-3xl font-bold text-white m-5 border-b">Greedy</h3>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">先備知識</p>
                            <ul class="text-white ml-5 px-4 list-disc mb-4">
                                <li class="mb-1">基礎資料結構</li>
                            </ul>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">課程大綱</p>
                            <ul class="text-white ml-5 px-4 list-disc">
                                <li class="mb-1">正確性證明＆構造反例</li>
                                <li class="mb-1">最佳選擇問題</li>
                                <li class="mb-1">排程問題</li>
                                <li class="mb-1">霍夫曼編碼</li>
                                <li class="mb-1">貪心 x 資料結構</li>
                                <li class="mb-1">更多貪心類題</li>
                            </ul>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 mb-8">
                        <div class="flex flex-col h-full border border-l-8 border-blue-400 shadow rounded-lg mt-8 mx-3 px-2">
                            <h3 class="text-3xl font-bold text-white m-5 border-b">數論</h3>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">先備知識</p>
                            <ul class="text-white ml-5 px-4 list-disc mb-4">
                                <li class="mb-1">待定</li>
                            </ul>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">課程大綱</p>
                            <ul class="text-white ml-5 px-4 list-disc">
                                <li class="mb-1">判斷質數</li>
                                <li class="mb-1">最大公因數</li>
                                <li class="mb-1">模運算</li>
                                <li class="mb-1">歐拉函數</li>
                                <li class="mb-1">中國剩餘定理</li>
                                <li class="mb-1">基礎賽局</li>
                                <li class="mb-1">Nim Game</li>
                                <li class="mb-1">Grundy Value</li>
                            </ul>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 mb-8">
                        <div class="flex flex-col h-full border border-l-8 border-blue-400 shadow rounded-lg mt-8 mx-3 px-2">
                            <h3 class="text-3xl font-bold text-white m-5 border-b">其他解題技巧</h3>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">先備知識</p>
                            <ul class="text-white ml-5 px-4 list-disc mb-4">
                                <li class="mb-1">暴力枚舉</li>
                            </ul>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">課程大綱</p>
                            <ul class="text-white ml-5 px-4 list-disc">
                                <li class="mb-1">折半枚舉</li>
                                <li class="mb-1">啟發式合併</li>
                                <li class="mb-1">均攤分析</li>
                                <li class="mb-1">bitset 優化</li>
                                <li class="mb-1">根號算法</li>
                            </ul>
                        </div>
                    </div>
                        
                </div>
            </main>
            <Footer/>
        </>

    )
}

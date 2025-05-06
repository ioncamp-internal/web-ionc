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
                                <li class="mb-1">基本 C++ 語法（<a href="https://vjudge.net/article/3610" class="border-b">題單連結</a>）</li>
                            </ul>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">課程大綱</p>
                            <ul class="text-white ml-5 px-4 list-disc">
                                <li class="mb-1">進階 C++ 語法</li>
                                <li class="mb-1">暴力對拍</li>
                                <li class="mb-1">遞迴</li>
                                <li class="mb-1">二分搜尋法</li>
                                <li class="mb-1">常見排序法</li>
                                <li class="mb-1">基本枚舉技巧</li>
                            </ul>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 mb-8">
                        <div class="flex flex-col h-full border border-l-8 border-blue-400 shadow rounded-lg mt-8 mx-3 px-2">
                            <h3 class="text-3xl font-bold text-white m-5 border-b">基礎資料結構</h3>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">先備知識</p>
                            <ul class="text-white ml-5 px-4 list-disc mb-4">
                                <li class="mb-1">基本遞迴概念</li>
                            </ul>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">課程大綱</p>
                            <ul class="text-white ml-5 px-4 list-disc">
                                <li class="mb-1">前綴和／差分序列</li>
                                <li class="mb-1">標準函式庫</li>
                                <li class="mb-1">並查集</li>
                                <li class="mb-1">稀疏表</li>
                                <li class="mb-1">樹狀數組 (Binary Indexed Tree)</li>
                                <li class="mb-1">線段樹</li>
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
                            </ul>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">課程大綱</p>
                            <ul class="text-white ml-5 px-4 list-disc">
                                <li class="mb-1">線段樹進階操作</li>
                                <li class="mb-1">Treap</li>
                                <li class="mb-1">持久化</li>
                                <li class="mb-1">吉如一線段樹 (Segment Tree Beats)</li>
                            </ul>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 mb-8">
                        <div class="flex flex-col h-full border border-l-8 border-blue-400 shadow rounded-lg mt-8 mx-3 px-2">
                            <h3 class="text-3xl font-bold text-white m-5 border-b">動態規劃</h3>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">先備知識</p>
                            <ul class="text-white ml-5 px-4 list-disc mb-4">
                                <li class="mb-1">基本遞迴概念</li>
                            </ul>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">課程大綱</p>
                            <ul class="text-white ml-5 px-4 list-disc">
                                <li class="mb-1">Longest Increasing SubSequence</li>
                                <li class="mb-1">Longest Common SubSequence</li>
                                <li class="mb-1">背包問題</li>
                                <li class="mb-1">區間 DP</li>
                                <li class="mb-1">Digit DP</li>
                                <li class="mb-1">旅行推銷員問題</li>
                                <li class="mb-1">SOS DP</li>
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
                                <li class="mb-1">Breadth-First Search</li>
                                <li class="mb-1">Depth-First Search</li>
                                <li class="mb-1">最短路徑</li>
                                <li class="mb-1">Disjoint Set Union</li>
                                <li class="mb-1">最小生成樹</li>
                                <li class="mb-1">拓撲排序</li>
                            </ul>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 mb-8">
                        <div class="flex flex-col h-full border border-l-8 border-blue-400 shadow rounded-lg mt-8 mx-3 px-2">
                            <h3 class="text-3xl font-bold text-white m-5 border-b">進階圖論</h3>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">先備知識</p>
                            <ul class="text-white ml-5 px-4 list-disc mb-4">
                                <li class="mb-1">基礎圖論所有知識內容</li>
                            </ul>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">課程大綱</p>
                            <ul class="text-white ml-5 px-4 list-disc">
                                <li class="mb-1">連通分量</li>
                                <li class="mb-1">最近共同祖先</li>
                                <li class="mb-1">樹序列化</li>
                                <li class="mb-1">輕重鏈剖分</li>
                                <li class="mb-1">重心剖分</li>
                            </ul>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 mb-8">
                        <div class="flex flex-col h-full border border-l-8 border-blue-400 shadow rounded-lg mt-8 mx-3 px-2">
                            <h3 class="text-3xl font-bold text-white m-5 border-b">數論</h3>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">先備知識</p>
                            <ul class="text-white ml-5 px-4 list-disc mb-4">
                                <li class="mb-1">國高中數學知識</li>
                            </ul>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">課程大綱</p>
                            <ul class="text-white ml-5 px-4 list-disc">
                                <li class="mb-1">判斷質數</li>
                                <li class="mb-1">模運算</li>
                                <li class="mb-1">還有更多...（等待報名學員調查後釋出）</li>
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
                                <li class="mb-1">Hash</li>
                                <li class="mb-1">根號算法</li>
                            </ul>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 mb-8">
                        <div class="flex flex-col h-full border border-l-8 border-blue-400 shadow rounded-lg mt-8 mx-3 px-2">
                            <h3 class="text-3xl font-bold text-white m-5 border-b">常數優化</h3>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">先備知識</p>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">課程大綱</p>
                            <ul class="text-white ml-5 px-4 list-disc">
                                <li class="mb-1">寫常數小的 Code</li>
                            </ul>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 mb-8">
                        <div class="flex flex-col h-full border border-l-8 border-blue-400 shadow rounded-lg mt-8 mx-3 px-2">
                            <h3 class="text-3xl font-bold text-white m-5 border-b">經驗分享</h3>
                            <p class="text-xl text-white ml-5 mr-5 mb-2 font-bold">課前準備</p>
                            <ul class="text-white ml-5 px-4 list-disc mb-4">
                                <li class="mb-1">思考想詢問講師的問題</li>
                            </ul>
                        </div>
                    </div>
                        
                </div>
            </main>
            <Footer/>
        </>

    )
}

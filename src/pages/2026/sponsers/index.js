import Header from '@/components/2026/Header'
import Footer from '@/components/2026/Footer'
import Background from "@/components/2026/Background";
import Image from 'next/image'
import Link from "next/link";
import YTPLogo from "@/images/2026/YTP.jpg"
import TrendMicroLogo from "@/images/2026/TrendMicroLogo.png"
import NTHU_Souvenirs from "@/images/2026/NTHU_Souvenirs.jpg"

const people = [
    // Sponsors will be added here when confirmed
    {
        name: 'YTP 少年圖靈計畫（精誠集團）',
        role: 'Senior Designer',
        imageUrl: YTPLogo,
        link: 'https://www.tw-ytp.org/',
        bio: '「YTP少年圖靈計畫」是精誠集團培養軟體人才的公益計畫，提供國/高中同學透過程式競賽、專題實做以及海外參訪機會，精進自己的程式能力並且與各方程式好手交流！提供台中以南同學交通補助費用，競賽獎金以及免費點心，報名參加「YTP少年圖靈計畫」就是今年暑假最重要的事啦！！立即報名！ <a href="https://www.tw-ytp.org/" class="text-[#8DD6F7] hover:underline" target="_blank" rel="noopener noreferrer">https://www.tw-ytp.org/</a>',
    },
    {
        name: '趨勢科技 Trend Micro',
        role: 'Sponsor',
        imageUrl: TrendMicroLogo,
        link: 'https://www.trendmicro.com/zh_tw/about/careers.html',
        bio: '作為全球 AI 資安領導廠商，趨勢科技致力於開發專為 AI 設計的資安防護方案，強化內部技術實力，構建外部資安生態系，幫助企業與消費者應對資訊及詐騙威脅，成為 AI 世代的資安典範，更獲得多項技術權威機構及 Mitre Engenuity 評估高度認可。\n\n全球超過 7000 名員工，據點遍及 73+ 國家與地區，台灣是趨勢科技最大研發基地。我們專注於核心技術突破，從雲端防護領域排名全球第一，到與國際執法機構合作打擊網路犯罪，每一步來自於長期累積的大數據分析與 AI 能力。\n\n想學習最新技術？想接觸大型軟體產品開發？想與跨國團隊交流合作?\n\n一起守護全球數位安全，加入趨勢科技 ‧ 創造 AI 新勢力！ <a href="https://www.trendmicro.com/zh_tw/about/careers.html" class="text-[#8DD6F7] hover:underline" target="_blank" rel="noopener noreferrer">https://www.trendmicro.com/zh_tw/about/careers.html</a>',
    },
    {
        name: '紫荊小舖 清華酷樂網',
        role: 'Sponsor',
        imageUrl: NTHU_Souvenirs,
        link: 'https://nthugift.colaz.com.tw/',
        bio: '紫荊小舖為國立清華大學校園紀念品專賣店，清華酷樂網則為官方授權線上購物平台，提供棒球外套、清華吉祥物熊貓系列商品、文具用品、馬克杯及各式校園紀念商品。</br>致力於推廣清華品牌與校園文化，提供師生、校友及訪客最完整的清華授權商品，讓每一件商品都成為珍藏校園的回憶。</br>無論是在紫荊小舖實體門市尋找心儀商品，或於清華酷樂網線上選購，都能將屬於清華的青春回憶與校園精神帶回生活之中。<a href="https://nthugift.colaz.com.tw/" class="text-[#8DD6F7] hover:underline" target="_blank" rel="noopener noreferrer">https://nthugift.colaz.com.tw/</a>',
    },
]

export default function Sponsers() {
    return (
        <div className="min-h-screen flex flex-col relative" style={{ background: '#FCFCFE' }}>
            <Background currentPage={1} />
            <Header />

            <main className="flex-grow relative z-10 flex flex-col items-center px-4 py-10 md:py-16">
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold" style={{ color: '#1D03F1' }}>贊助單位</h1>
                </div>

                {people.length > 0 ? (
                    <div className="w-full max-w-4xl flex flex-col gap-6 mb-10">
                        {people.map((person) => (
                            <div
                                key={person.name}
                                className="rounded-xl p-8 md:p-12 flex flex-col items-center lg:items-start gap-6 lg:flex-row"
                                style={{ background: '#fff', border: '1.5px solid #1D03F1', boxShadow: '4px 4px 0 #1D03F1' }}
                            >
                                <div className="flex items-center justify-center lg:self-center">
                                    <Image
                                        className="w-40 sm:w-52 flex-none rounded-xl object-contain"
                                        src={person.imageUrl} alt={person.name} width={400} height={400}
                                        style={{ border: '1.5px solid rgba(29,3,241,0.2)' }}
                                    />
                                </div>
                                <div className="flex-auto">
                                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                                        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center sm:text-left" style={{ color: '#1D03F1' }}>
                                            {person.name}
                                        </h3>
                                        <Link
                                            href={person.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-1.5 text-sm font-semibold rounded-lg transition-all duration-200"
                                            style={{ color: '#1D03F1', border: '1.5px solid #1D03F1', background: 'transparent' }}
                                            onMouseEnter={e => { e.currentTarget.style.background = '#1D03F1'; e.currentTarget.style.color = '#FCFCFE'; }}
                                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1D03F1'; }}
                                        >
                                            官網連結
                                        </Link>
                                    </div>
                                    <div className="text-sm leading-relaxed" style={{ color: '#4D5BDA' }}
                                        dangerouslySetInnerHTML={{ __html: person.bio }} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div
                        className="w-full max-w-lg rounded-xl p-8 text-center mb-10"
                        style={{ background: '#fff', border: '1.5px solid rgba(29,3,241,0.2)', boxShadow: '3px 3px 0 rgba(29,3,241,0.12)' }}
                    >
                        <p className="text-base" style={{ color: 'rgba(29,3,241,0.45)' }}>贊助資訊將陸續公告</p>
                    </div>
                )}

                <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: '#A361DD' }}>
                        若有合作意願歡迎來信聯繫！
                    </h3>
                    <Link
                        href="mailto:nthu.ioncamp@gmail.com"
                        className="text-lg md:text-xl font-semibold transition-colors"
                        style={{ color: '#1D03F1' }}
                        onMouseEnter={e => { e.currentTarget.style.color = '#A361DD'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = '#1D03F1'; }}
                    >
                        nthu.ioncamp@gmail.com
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}

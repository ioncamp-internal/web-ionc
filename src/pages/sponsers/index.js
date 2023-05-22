import Image from 'next/image'
import {Inter} from 'next/font/google'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Background from "@/components/Background";
import coursesImage from "@/images/courses1.png";
import Link from "next/link";
import sudoLogo from "@/images/sudo.jpg"
import tongyizenjuan from "@/images/統一證卷.png"
import YTPLogo from "@/images/YTP.jpg"
import one04Logo from "@/images/104.png"
import {GlobeAsiaAustraliaIcon} from "@heroicons/react/24/outline";

const inter = Inter({subsets: ['latin']})

const people = [
    {
        name: 'Sudo Research Labs',
        role: 'Senior Designer',
        imageUrl: sudoLogo,
        link: 'https://www.yourator.co/companies/sudoresearch',
        bio: `SuDo Research Labs 總部設於台北101大樓，已有扎實的核心團隊、近二十位菁英夥伴和從 2017
            年累積至今的實績，目前正積極擴編中！我們會持續發展頂尖的區塊鏈工程與相關研究，以既有的產品路線為根基，同時探索新的應用機會，掌握時機快速切入市場，成為新領域的領頭羊。
            我們努力營造扁平開放的工作文化，舒適高效率的工作環境與活潑的工作氣氛，並且重視每一位夥伴的成長。若你對挑戰未知感到興奮，也認同我們的文化與願景，期待您一同加入我們的行列！`,
    },
    {
        name: '統一證卷',
        role: 'Senior Designer',
        imageUrl: tongyizenjuan,
        link: 'https://www.pscnet.com.tw/pscnetStock/index.do',
        bio: '統一證券成立於1988年，由統一企業結合了統一超商、長興化工、誠品實業、台南紡織等背景堅強，實力雄厚的績優廠商共同創立。統一證券事業群涵括投顧、投信、期貨、綜保、創投、香港子公司等轉投資公司，朝向業務多元化發展。\n' +
            '統一證券致力於滿足客戶需求，提供多元化、客製化的商品服務，並嚴格控管投資風險，榮獲今周刊第16屆「財富管理銀行暨證券評鑑」最佳行銷創新獎第一名及最佳永續發展獎第三名、《財訊》財富管理大獎獲得「最佳財富增值」、「最佳公益推動」及「最佳平面行銷」三大獎項。\n' +
            '未來統一證券持續以專業分工、資源共享之管理體系持續穩健茁壯，以朝向全方位金融服務的目標前進，建立便利且人性化的線上服務，以成為國內標竿的證券品牌。\n',
    },
    {
        name: 'YTP 少年圖靈計畫（精誠集團）',
        role: 'Senior Designer',
        imageUrl: YTPLogo,
        link: '#',
        bio: '',
    },
    {
        name: '104 人力銀行',
        role: 'Senior Designer',
        imageUrl: one04Logo,
        link: '#',
        bio: '',
    },
]
export default function Home() {
    return (
        <>
            <Header/>
            <main className="flex min-h-screen flex-col items-center px-4 py-10 md:p-20"
                  style={{backgroundColor: "#070B14"}}>
                <Background/>
                <div className="text-center z-10" style={{marginTop: "-15px"}}>
                    <h1 className="text-5xl font-bold" style={{color: "#FFF"}}>贊助單位</h1>
                </div>
                <div className="z-50 flex flex-col items-center">
                    <div className="bg-white py-20 my-24 sm:my-32 rounded-3xl">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8 gap-y-20">
                            <ul
                                role="list"
                                className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
                            >
                                {people.map((person) => (
                                    <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
                                        <Image className="aspect-square w-52 flex-none rounded-2xl object-cover"
                                               src={person.imageUrl} alt="" width={400} height={400}/>
                                        <div className="flex-auto">
                                            <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                                            <div className={"flex"}>
                                                <Link href={person.link} target={"_blank"}>
                                                    <GlobeAsiaAustraliaIcon className={"h-6 w-6 text-gray-400"}/>
                                                </Link>
                                            </div>
                                            <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


                    <h3 className="z-50 text-3xl mt-5 mb-2 font-semibold text-white text-center"
                        style={{color: "#8DD6F7"}}>
                        若有合作意願歡迎來信聯繫！
                    </h3>
                    <Link className="z-10 text-3xl mt-5 mb-2 font-semibold text-white text-center inline"
                          href="mailto:nthu.ioncamp@gmail.com" style={{color: "#8DD6F7"}}>
                        nthu.ioncamp@gmail.com
                    </Link>
                </div>

            </main>
            <Footer/>
        </>

    )
}

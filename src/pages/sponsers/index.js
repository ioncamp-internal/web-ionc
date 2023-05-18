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
        link: '#',
        bio: '',
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

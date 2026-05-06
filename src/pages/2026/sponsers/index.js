import Header from '@/components/2026/Header'
import Footer from '@/components/2026/Footer'
import Background from "@/components/2026/Background";
import Image from 'next/image'
import Link from "next/link";

const people = [
    // Sponsors will be added here when confirmed
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
                    <div
                        className="w-full max-w-4xl rounded-xl p-8 md:p-12 mb-10"
                        style={{ background: '#fff', border: '1.5px solid #1D03F1', boxShadow: '4px 4px 0 #1D03F1' }}
                    >
                        <ul role="list" className="flex flex-col gap-12">
                            {people.map((person) => (
                                <li key={person.name} className="flex flex-col items-center lg:items-start gap-6 lg:flex-row">
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
                                </li>
                            ))}
                        </ul>
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

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image"
import IONCLogo from "@/images/2026/ionc-infinity-logo.png"
import Link from "next/link"
import Head from "next/head"

const navigation = [
    { name: '首頁',     href: '/2026' },
    { name: '集訓課表', href: '/2026/courses' },
    { name: '師資團隊', href: '/2026/lecturers' },
    { name: '交通資訊', href: '/2026/travel' },
    { name: '贊助單位', href: '/2026/sponsers' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header
            className="relative w-full z-10"
            style={{
                background: '#FCFCFE',
                borderBottom: '1.5px solid #1D03F1',
            }}
        >
            <Head>
                <meta name="google-site-verification" content="cW7ghsKSZm5nF4ATMBdl_EohHLSmRNxEbLAIkkCxRVw" />
                <link rel="icon" href="/favicon.ico" />
                <title>2026 IONC清大暑期程式競賽集訓營</title>
            </Head>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-8" aria-label="Global">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <Link href="/2026" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <Image
                            src={IONCLogo}
                            className="h-8 w-auto"
                            width={120}
                            height={40}
                            alt="IONCamp"
                            style={{ filter: 'invert(9%) sepia(96%) saturate(7483%) hue-rotate(243deg) brightness(96%) contrast(101%)' }}
                        />
                    </Link>
                </div>

                {/* Mobile burger */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                        style={{ color: '#1D03F1' }}
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                {/* Desktop nav */}
                <div className="hidden lg:flex lg:gap-x-10">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 transition-colors duration-150"
                            style={{ color: '#1D03F1' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#A361DD'}
                            onMouseLeave={e => e.currentTarget.style.color = '#1D03F1'}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Register CTA */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                        href="/2026/register"
                        className="text-sm font-semibold leading-6 px-4 py-1.5 rounded-lg transition-all duration-200"
                        style={{
                            color: '#1D03F1',
                            border: '1.5px solid #1D03F1',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = '#1D03F1';
                            e.currentTarget.style.color = '#FCFCFE';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = '#1D03F1';
                        }}
                    >
                        立即報名 →
                    </Link>
                </div>
            </nav>

            {/* Mobile menu */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-40" />
                <Dialog.Panel
                    className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1"
                    style={{
                        background: '#FCFCFE',
                        borderLeft: '1.5px solid #1D03F1',
                    }}
                >
                    <div className="flex items-center justify-between">
                        <Link href="/2026" className="-m-1.5 p-1.5">
                            <Image
                                src={IONCLogo}
                                className="h-8 w-auto"
                                width={120}
                                height={40}
                                alt="IONCamp"
                                style={{ filter: 'invert(9%) sepia(96%) saturate(7483%) hue-rotate(243deg) brightness(96%) contrast(101%)' }}
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5"
                            style={{ color: '#1D03F1' }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y" style={{ borderColor: 'rgba(29,3,241,0.15)' }}>
                            <div className="space-y-1 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 transition-colors"
                                        style={{ color: '#1D03F1' }}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <Link
                                    href="/2026/register"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 mt-2 text-center"
                                    style={{
                                        color: '#FCFCFE',
                                        background: '#1D03F1',
                                    }}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    立即報名 →
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

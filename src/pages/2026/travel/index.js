import Header from '@/components/2026/Header'
import Footer from '@/components/2026/Footer'
import Travel from '@/components/2026/Travel'
import Background from "@/components/2026/Background";

export default function TravelPage() {
    return (
        <div className="min-h-screen flex flex-col relative" style={{ background: '#FCFCFE' }}>
            <Background currentPage={1} />
            <Header />
            <main className="flex-grow relative z-10 flex flex-col items-center px-4 py-10 md:py-16">
                <Travel />
            </main>
            <Footer />
        </div>
    );
}

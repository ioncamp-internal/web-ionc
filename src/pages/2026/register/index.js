import Head from 'next/head';
import Header from '@/components/2026/Header';
import Footer from '@/components/2026/Footer';
import Background from '@/components/2026/Background';

export default function Register() {
  return (
    <>
      <Head>
        <title>立即報名 - 2026 IONC</title>
      </Head>
      <div className="min-h-screen flex flex-col relative" style={{ background: '#FCFCFE' }}>
        <Background currentPage={1} />
        <Header />

        <main className="flex-grow relative z-10 flex flex-col items-center px-4 py-10 md:py-16">
          <div className="w-full max-w-4xl">
            <div
              className="rounded-xl overflow-hidden"
              style={{ background: '#fff', border: '1.5px solid #1D03F1', boxShadow: '4px 4px 0 #1D03F1' }}
            >
              {/* Top accent */}
              <div className="h-1.5" style={{ background: '#A361DD' }} />

              <div className="p-6 md:p-10">
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight" style={{ color: '#1D03F1' }}>
                    2026 IONC 活動報名
                  </h1>
                  <p className="mb-6 max-w-2xl mx-auto text-sm md:text-base" style={{ color: '#4D5BDA' }}>
                    請在下方填寫您的報名資訊。若使用行動裝置或覺得表單範圍太小，建議您可以開啟新分頁填寫，以獲得最佳的填表體驗。
                  </p>

                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSewdCzX3v8v0ZGyE-NUkjvxCti0d_0I6VWGRMsibTW-rdIyIw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-2.5 text-sm md:text-base font-semibold rounded-lg transition-all duration-200"
                    style={{ color: '#1D03F1', border: '1.5px solid #1D03F1', background: 'transparent' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#1D03F1'; e.currentTarget.style.color = '#FCFCFE'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1D03F1'; }}
                  >
                    <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    在新分頁開啟報名表單
                  </a>
                </div>

                <div
                  className="w-full rounded-xl overflow-hidden"
                  style={{ border: '1px solid rgba(29,3,241,0.15)' }}
                >
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSewdCzX3v8v0ZGyE-NUkjvxCti0d_0I6VWGRMsibTW-rdIyIw/viewform"
                    className="w-full h-[800px] md:h-[1200px]"
                    style={{ border: 'none' }}
                    title="2026 IONC 報名表單"
                  >
                    載入中…
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

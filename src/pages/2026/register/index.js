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
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-between px-4 py-10 md:p-20 relative pt-24" style={{ backgroundColor: "#070B14" }}>
        <Background />
        
        <div className="flex-grow container w-full max-w-5xl z-10 z-[10]">
          <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-2xl relative overflow-hidden border border-gray-700">
            
            {/* 上方漸層裝飾條 */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-600"></div>
            
            {/* 背景裝飾圓圈 */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-indigo-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

            <div className="p-6 md:p-12 relative z-10">
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">2026 IONC 活動報名</h1>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-sm md:text-base">
                  請在下方填寫您的報名資訊。若使用行動裝置或覺得表單範圍太小，建議您可以開啟新分頁填寫，以獲得最佳的填表體驗。
                </p>
                
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSewdCzX3v8v0ZGyE-NUkjvxCti0d_0I6VWGRMsibTW-rdIyIw/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 md:px-8 md:py-3.5 border border-transparent text-sm md:text-base font-semibold rounded-full shadow-lg text-[#070B14] bg-[#8DD6F7] hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <svg className="mr-2.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  在新分頁開啟報名表單
                </a>
              </div>

              <div className="w-full bg-white rounded-2xl overflow-hidden shadow-inner border border-gray-600">
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
    </>
  );
}

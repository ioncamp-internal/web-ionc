import Head from 'next/head';
import Header from '../../../components/2026/Header';
import Footer from '../../../components/2026/Footer';

export default function Register() {
  return (
    <>
      <Head>
        <title>立即報名 - 2026 IONC</title>
      </Head>
      <Header />
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 pt-20">
        <div className="p-10 bg-white rounded-lg shadow-xl text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">2026 IONC 活動報名</h1>
          <p className="text-xl text-gray-600 border-t-2 pt-4">🚨 目前尚未開始報名 🚨</p>
          <p className="mt-4 text-gray-500">敬請期待後續公告！</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

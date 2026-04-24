import { useState } from 'react';
import Head from 'next/head';
import Header from '../../../components/2026/Header';
import Footer from '../../../components/2026/Footer';

// 根據您的 課程大綱.txt 生成的假資料設計
const fakeCourses = [
  { id: 1, day: 1, title: '基本技巧', startTime: 9, endTime: 12, bg: 'bg-blue-100', text: '時間複雜度' },
  { id: 2, day: 1, title: '基本技巧 II', startTime: 13, endTime: 16, bg: 'bg-blue-200', text: '基本技巧延伸' },
  { id: 3, day: 2, title: '基礎資結', startTime: 9, endTime: 12, bg: 'bg-green-100', text: '簡單語法, 遞迴, 樹狀圖' },
  { id: 4, day: 2, title: '基礎圖論', startTime: 13, endTime: 16, bg: 'bg-purple-100', text: '遞迴, STL, 併查集' },
  { id: 5, day: 3, title: '進階資料結構', startTime: 9, endTime: 12, bg: 'bg-green-200', text: '線段樹, Fenwick Tree, STL, pointer' },
  { id: 6, day: 4, title: '基礎 DP', startTime: 9, endTime: 12, bg: 'bg-yellow-100', text: '迴圈, 遞迴' },
  { id: 7, day: 4, title: '基礎數學', startTime: 13, endTime: 16, bg: 'bg-red-100', text: '遞迴, log 運算, 快速冪' },
  { id: 8, day: 5, title: '組合計數 / 賽局', startTime: 10, endTime: 15, bg: 'bg-indigo-100', text: '進階挑戰' },
];

const days = ['7/17 (一)', '7/18 (二)', '7/19 (三)', '7/20 (四)', '7/21 (五)'];
const hours = Array.from({ length: 9 }, (_, i) => i + 8); // 8:00 到 16:00

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <>
      <Head><title>2026 互動式課表</title></Head>
      <Header />
      <div className="pt-20 p-6 max-w-7xl mx-auto min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">2026 IONC 課程表</h1>

        {/* 課表 Grid */}
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
          <div className="min-w-[800px] grid grid-cols-6 gap-0 bg-gray-50">
            
            {/* 表頭：左上角空白 + 5天日期 */}
            <div className="p-4 border-b border-r text-center font-bold text-gray-500">時間</div>
            {days.map((day, idx) => (
              <div key={idx} className="p-4 border-b border-r text-center font-bold text-gray-800">
                {day}
              </div>
            ))}

            {/* 表身列：以小時為單位 */}
            {hours.map((hour) => (
              <div key={hour} className="contents relative">
                <div className="p-2 border-b border-r text-center text-sm text-gray-500 h-20 relative">
                  {`${hour}:00`}
                </div>
                
                {/* 印出每天的格子背景 */}
                {Array.from({ length: 5 }).map((_, dayIdx) => {
                  const dayNum = dayIdx + 1;
                  // 尋找在此日期、此小時開始的課程
                  const course = fakeCourses.find(c => c.day === dayNum && c.startTime === hour);

                  return (
                    <div key={dayIdx} className="border-b border-r p-1 relative h-20">
                      {course && (
                        <div
                          // 根據佔用時間長度設定區塊高度 (每小時 h-20 = 5rem, 加上邊距)
                          className={`absolute top-1 left-1 right-1 z-10 rounded-md p-2 shadow-md cursor-pointer hover:ring-2 ring-blue-400 ${course.bg}`}
                          style={{ height: `calc(${(course.endTime - course.startTime) * 100}% - 8px)` }}
                          onClick={() => setSelectedCourse(course)}
                        >
                          <h4 className="font-bold text-sm text-gray-800">{course.title}</h4>
                          <p className="text-xs text-gray-600 mt-1">{`${course.startTime}:00 - ${course.endTime}:00`}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* 互動彈跳視窗 (Modal) */}
        {selectedCourse && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full relative">
              <h2 className="text-2xl font-bold mb-2">{selectedCourse.title}</h2>
              <div className="text-sm font-semibold text-blue-600 mb-4">
                時間：Day {selectedCourse.day} / {selectedCourse.startTime}:00 - {selectedCourse.endTime}:00
              </div>
              <div className="mb-6">
                <h3 className="text-gray-500 font-bold uppercase text-xs mb-1">先備知識 / 內容</h3>
                <p className="text-gray-800">{selectedCourse.text}</p>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                關閉
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

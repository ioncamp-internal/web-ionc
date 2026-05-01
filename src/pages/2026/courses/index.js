import { useState } from 'react';
import Head from 'next/head';
import Header from '../../../components/2026/Header';
import Footer from '../../../components/2026/Footer';

const courseDetails = {
  '基礎資料結構': {
    time: '09:00 - 12:00',
    day: '7/18 (六)',
    instructor: '林鼎陽',
    prerequisites: '遞迴',
    content: 'C++ 標準模板庫（STL）、併查集、稀疏表、Binary Indexed Tree、線段樹',
  },
  '進階資料結構': {
    time: '09:00 - 12:00',
    day: '7/18 (六)',
    instructor: '黃頂軒',
    prerequisites: '線段樹、Binary Indexed Tree、C++ 標準模板庫、Pointer',
    content: 'Treap、動態開點、持久化、樹套樹、均攤分析、吉如一線段樹',
  },
  '基礎圖論': {
    time: '09:00 - 12:00',
    day: '7/19 (日)',
    instructor: '何晏甫',
    prerequisites: 'C++ 標準模板庫、Disjoint Set Union',
    content: '圖論名詞、存圖方法、圖的遍歷、最短路徑、拓撲排序、最小生成樹、歐拉迴路',
  },
  '進階圖論': {
    time: '09:00 - 12:00',
    day: '7/19 (日)',
    instructor: '張晏誠',
    prerequisites: '基礎圖論、基礎資料結構',
    content: '連通分量、最近共同祖先、樹序列化、輕重鏈剖分、重心剖分',
  },
  '其他解題技巧': {
    time: '09:00 - 12:00',
    day: '7/20 (一)',
    instructor: '葉宥辰',
    prerequisites: '枚舉、Bitset',
    content: '時間減枝、折半枚舉、啟發式合併、Bitset 優化、Hash、根號算法',
  },
  '經驗分享': {
    time: '09:00 - 12:00',
    day: '7/21 (二)',
    instructor: '',
    prerequisites: '無',
    content: '講師分享競程學習歷程與比賽心得。',
  },
  '比賽': {
    time: '約 10:30 - 16:00',
    day: '7/21 (二)',
    instructor: '',
    prerequisites: '全部課程',
    content: '正式模擬競賽，測試這幾天的學習成果，排名計入最終評比。',
  },
  '基礎技巧 Ⅰ': {
    time: '14:00 - 17:30',
    day: '7/17 (五)',
    instructor: '詹凱智',
    prerequisites: '時間複雜度',
    content: '程式除錯、遞迴、枚舉、前綴和、差分陣列、二分搜尋法、雙指針、滑動窗口',
  },
  '基礎技巧 Ⅱ': {
    time: '14:00 - 17:30',
    day: '7/17 (五)',
    instructor: '范釗維',
    prerequisites: '基礎技巧 Ⅰ',
    content: 'C++ 語法糖、快速冪、位元運算技巧、枚舉與剪枝、隨機化演算法、出題方法',
  },
  '動態規劃': {
    time: '14:00 - 17:30',
    day: '7/18 (六)',
    instructor: '李其樺',
    prerequisites: '遞迴',
    content: 'DP 介紹、一維 DP、LIS、LCS、背包問題、區間 DP、位元 DP、SOS DP、Digit DP、其他經典 DP',
  },
  '基礎數學': {
    time: '14:00 - 17:30',
    day: '7/19 (日)',
    instructor: '李昕威',
    prerequisites: 'Log 運算、快速冪',
    content: '最大公因數、（擴展）歐幾里得演算法、模運算、線性同餘方程、中國剩餘定理、RSA 加解密、多項式乘法',
  },
  '組合數學': {
    time: '14:00 - 17:30',
    day: '7/19 (日)',
    instructor: '張皓崴',
    prerequisites: '基礎 DP、高中排列組合、模逆元',
    content: '雙重計數法、等價條件、雙射法、排容原理、去權技巧、二項係數、卡特蘭數',
  },
  '賽局': {
    time: '14:00 - 17:30',
    day: '7/20 (一)',
    instructor: '歐育淇',
    prerequisites: '基礎 DP、Xor 運算、基礎圖論',
    content: '賽局 DP、Nim、Sprague-Grundy theorem、經典賽局問題、Partisan game',
  },
};

const BORDER = 'border border-blue-500/30';
const TIME_BG = 'bg-[#070B14]';
const MEAL_BG = 'bg-[#070B14]/60';
const COURSE_BG = 'bg-[#0a1e38]';
const HEADER_BG = 'bg-[#0a1e38]';

function CourseCell({ name, className = '', onClick }) {
  return (
    <div
      className={`flex items-center justify-center text-center px-2 py-4 cursor-pointer select-none
        text-white text-sm font-medium transition-colors duration-150
        hover:bg-blue-500/20 active:bg-blue-500/30 ${className}`}
      onClick={onClick}
    >
      {name}
    </div>
  );
}

function UtilCell({ children, className = '' }) {
  return (
    <div className={`flex items-center justify-center text-center px-2 py-4 text-white text-sm ${className}`}>
      {children}
    </div>
  );
}

export default function Courses() {
  const [selected, setSelected] = useState(null);

  const openCourse = (name) => {
    if (courseDetails[name]) setSelected({ name, ...courseDetails[name] });
  };

  const tdBase = `${BORDER} align-middle`;

  return (
    <>
      <Head><title>2026 IONC 課程表</title></Head>
      <Header />

      <div className="pt-20 pb-16 min-h-screen" style={{ background: '#070B14' }}>
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center" style={{ color: '#8DD6F7' }}>
            2026 IONC 課程表
          </h1>
          <p className="text-center text-white/70 text-xs mb-6">點擊課程名稱可查看詳細資訊</p>

          {/* Mobile scroll hint */}
          <p className="text-center text-white/70 text-xs mb-3 md:hidden">← 左右滑動查看完整課表 →</p>

          <div
            className="overflow-x-auto rounded-lg"
            style={{ border: '1px solid rgba(59,130,246,0.5)' }}
          >
            <table
              className="border-collapse w-full text-sm"
              style={{ minWidth: '620px' }}
            >
              {/* ── Header ── */}
              <thead>
                <tr className={HEADER_BG}>
                  <th className={`${tdBase} ${TIME_BG} p-3 text-white font-medium text-xs text-center`}
                    style={{ minWidth: '100px' }}>
                    時間
                  </th>
                  {['7/17 (五)', '7/18 (六)', '7/19 (日)', '7/20 (一)', '7/21 (二)'].map(d => (
                    <th key={d} className={`${tdBase} p-3 text-white font-bold text-center`}
                      style={{ minWidth: '110px' }}>
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {/* ── Row 1: 08:00 ~ 09:00 ── */}
                <tr>
                  <td className={`${tdBase} ${TIME_BG} p-3 text-white text-xs text-center whitespace-nowrap`}>
                    08:00 ~ 09:00
                  </td>
                  {/* 7/17: 前往清大，跨 row1 + row2a + row2b */}
                  <td className={`${tdBase} ${MEAL_BG}`} rowSpan={3}>
                    <UtilCell>前往清大</UtilCell>
                  </td>
                  {/* 7/18-7/21: 早餐 */}
                  <td className={`${tdBase} ${MEAL_BG}`} colSpan={4}>
                    <UtilCell>早餐</UtilCell>
                  </td>
                </tr>

                {/* ── Row 2a: 09:00 ~ 12:00 上半（經驗分享） ── */}
                <tr>
                  {/* 時間格跨 2a + 2b */}
                  <td className={`${tdBase} ${TIME_BG} p-3 text-white text-xs text-center whitespace-nowrap`} rowSpan={2}>
                    09:00 ~ 12:00
                  </td>
                  {/* 7/17 covered */}
                  {/* 7/18: 基礎/進階資料結構，跨 2a+2b */}
                  <td className={`${tdBase} ${COURSE_BG} p-0`} rowSpan={2} style={{ height: '100%' }}>
                    <div className="flex flex-col divide-y divide-blue-500/20" style={{ height: '100%' }}>
                      <CourseCell name="基礎資料結構" onClick={() => openCourse('基礎資料結構')} className="flex-1" />
                      <CourseCell name="進階資料結構" onClick={() => openCourse('進階資料結構')} className="flex-1" />
                    </div>
                  </td>
                  {/* 7/19: 基礎/進階圖論，跨 2a+2b */}
                  <td className={`${tdBase} ${COURSE_BG} p-0`} rowSpan={2} style={{ height: '100%' }}>
                    <div className="flex flex-col divide-y divide-blue-500/20" style={{ height: '100%' }}>
                      <CourseCell name="基礎圖論" onClick={() => openCourse('基礎圖論')} className="flex-1" />
                      <CourseCell name="進階圖論" onClick={() => openCourse('進階圖論')} className="flex-1" />
                    </div>
                  </td>
                  {/* 7/20: 其他解題技巧，跨 2a+2b */}
                  <td className={`${tdBase} ${COURSE_BG} p-0`} rowSpan={2}>
                    <CourseCell name="其他解題技巧" onClick={() => openCourse('其他解題技巧')} className="h-full" />
                  </td>
                  {/* 7/21: 經驗分享（只佔 2a） */}
                  <td className={`${tdBase} ${COURSE_BG} p-0`}>
                    <CourseCell name="經驗分享" onClick={() => openCourse('經驗分享')} className="h-full" />
                  </td>
                </tr>

                {/* ── Row 2b: 09:00 ~ 12:00 下半（比賽開始） ── */}
                <tr>
                  {/* 時間、7/17、7/18、7/19、7/20 全部 covered */}
                  {/* 7/21: 比賽，rowSpan=3 跨 2b + row3 + row4a */}
                  <td className={`${tdBase} ${COURSE_BG} p-0`} rowSpan={3}>
                    <CourseCell name="比賽" onClick={() => openCourse('比賽')} className="h-full" />
                  </td>
                </tr>

                {/* ── Row 3: 12:00 ~ 14:00 ── */}
                <tr>
                  <td className={`${tdBase} ${TIME_BG} p-3 text-white text-xs text-center whitespace-nowrap`}>
                    12:00 ~ 14:00
                  </td>
                  {/* 7/17 */}
                  <td className={`${tdBase} ${MEAL_BG}`}>
                    <UtilCell>學員報到</UtilCell>
                  </td>
                  {/* 7/18-7/20: 午餐 */}
                  <td className={`${tdBase} ${MEAL_BG}`} colSpan={3}>
                    <UtilCell>午餐</UtilCell>
                  </td>
                  {/* 7/21: covered by 比賽 rowSpan */}
                </tr>

                {/* ── Row 4a: 14:00 ~ 17:30 上半（營長時間） ── */}
                <tr>
                  {/* 時間格跨 4a + 4b */}
                  <td className={`${tdBase} ${TIME_BG} p-3 text-white text-xs text-center whitespace-nowrap`} rowSpan={2}>
                    14:00 ~ 17:30
                  </td>
                  {/* 7/17: 營長時間（只佔 4a） */}
                  <td className={`${tdBase} ${MEAL_BG}`}>
                    <UtilCell>營長時間</UtilCell>
                  </td>
                  {/* 7/18: 動態規劃，跨 4a+4b */}
                  <td className={`${tdBase} ${COURSE_BG} p-0`} rowSpan={2}>
                    <CourseCell name="動態規劃" onClick={() => openCourse('動態規劃')} className="h-full" />
                  </td>
                  {/* 7/19: 數論，跨 4a+4b */}
                  <td className={`${tdBase} ${COURSE_BG} p-0`} rowSpan={2} style={{ height: '100%' }}>
                    <div className="flex flex-col divide-y divide-blue-500/20" style={{ height: '100%' }}>
                      <CourseCell name="基礎數學" onClick={() => openCourse('基礎數學')} className="flex-1" />
                      <CourseCell name="組合數學" onClick={() => openCourse('組合數學')} className="flex-1" />
                    </div>
                  </td>
                  {/* 7/20: 常數優化，跨 4a+4b */}
                  <td className={`${tdBase} ${COURSE_BG} p-0`} rowSpan={2}>
                    <CourseCell name="賽局" onClick={() => openCourse('賽局')} className="h-full" />
                  </td>
                  {/* 7/21: covered by 比賽 rowSpan */}
                </tr>

                {/* ── Row 4b: 14:00 ~ 17:30 下半（基本技巧 / 頒獎賦歸） ── */}
                <tr>
                  {/* 時間 covered */}
                  {/* 7/17: 基本技巧（只佔 4b） */}
                  <td className={`${tdBase} ${COURSE_BG} p-0`} rowSpan={1} style={{ height: '100%' }}>
                    <div className="flex flex-col divide-y divide-blue-500/20" style={{ height: '100%' }}>
                      <CourseCell name="基礎技巧 Ⅰ" onClick={() => openCourse('基礎技巧 Ⅰ')} className="flex-1" />
                      <CourseCell name="基礎技巧 Ⅱ" onClick={() => openCourse('基礎技巧 Ⅱ')} className="flex-1" />
                    </div>
                  </td>
                  {/* 7/18、7/19、7/20 covered */}
                  {/* 7/21: 頒獎/賦歸 */}
                  <td className={`${tdBase} ${MEAL_BG}`}>
                    <UtilCell className="flex-col gap-1">
                      <span>頒獎 / 賦歸</span>
                      <span className="text-xs text-white">(16:00 結束)</span>
                    </UtilCell>
                  </td>
                </tr>

                {/* ── Row 5: 17:30 ~ 19:00 ── 星期五不含 */}
                <tr>
                  <td className={`${tdBase} ${TIME_BG} p-3 text-white text-xs text-center whitespace-nowrap`}>
                    17:30 ~ 19:00
                  </td>
                  <td className={`${tdBase} ${MEAL_BG}`} colSpan={4}>
                    <UtilCell>晚餐</UtilCell>
                  </td>
                  <td className={`${tdBase} ${TIME_BG}`}>
                    <UtilCell className="text-white/20">—</UtilCell>
                  </td>
                </tr>

                {/* ── Row 6: 19:00 ~ 22:00 ── 星期五不含 */}
                <tr>
                  <td className={`${tdBase} ${TIME_BG} p-3 text-white text-xs text-center whitespace-nowrap`}>
                    19:00 ~ 22:00
                  </td>
                  <td className={`${tdBase} ${MEAL_BG}`} colSpan={4}>
                    <UtilCell>上機練習</UtilCell>
                  </td>
                  <td className={`${tdBase} ${TIME_BG}`}>
                    <UtilCell className="text-white/20">—</UtilCell>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── Modal ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: 'rgba(0,0,0,0.75)' }}
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-md rounded-xl p-6 md:p-8 relative"
            style={{ background: '#0a1628', border: '1px solid rgba(59,130,246,0.6)' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-white/80 text-xl leading-none"
              onClick={() => setSelected(null)}
              aria-label="關閉"
            >
              ×
            </button>

            <h2 className="text-xl md:text-2xl font-bold text-white mb-1">{selected.name}</h2>
            <p className="text-sm font-semibold mb-5" style={{ color: '#8DD6F7' }}>
              {selected.day} &nbsp;|&nbsp; {selected.time}
            </p>

            <div className="space-y-4">
              {selected.instructor && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/30 mb-1">講師</p>
                  <p className="text-white/80">{selected.instructor}</p>
                </div>
              )}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/30 mb-1">先備知識</p>
                <div className="text-white/80">
                  {selected.prerequisites.split('、').map((item, i) => (
                    <div key={i}>{item}</div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/30 mb-1">課程內容</p>
                <div className="text-white/80">
                  {selected.content.split('、').map((item, i) => (
                    <div key={i}>{item}</div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelected(null)}
              className="mt-6 w-full py-2 rounded-lg font-semibold text-white transition-colors duration-150"
              style={{ background: '#1d4ed8', border: '1px solid rgba(59,130,246,0.6)' }}
            >
              關閉
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

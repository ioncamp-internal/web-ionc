import { useState } from 'react';
import Head from 'next/head';
import Header from '../../../components/2026/Header';
import Footer from '../../../components/2026/Footer';
import Background from '../../../components/2026/Background';

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
  '組合計數': {
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

const tdBase = 'border align-middle';
const BORDER_COLOR = 'rgba(29,3,241,0.18)';
const TIME_BG   = 'rgba(77,91,218,0.06)';
const MEAL_BG   = 'rgba(29,3,241,0.04)';
const COURSE_BG = '#ffffff';

function CourseCell({ name, className = '', onClick }) {
  return (
    <div
      className={`flex items-center justify-center text-center px-2 py-4 cursor-pointer select-none
        text-sm font-medium transition-colors duration-150 ${className}`}
      style={{ color: '#1D03F1' }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(163,97,221,0.10)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
      onClick={onClick}
    >
      {name}
    </div>
  );
}

function UtilCell({ children, className = '' }) {
  return (
    <div className={`flex items-center justify-center text-center px-2 py-4 text-sm ${className}`}
      style={{ color: 'rgba(29,3,241,0.55)' }}>
      {children}
    </div>
  );
}

export default function Courses() {
  const [selected, setSelected] = useState(null);

  const openCourse = (name) => {
    if (courseDetails[name]) setSelected({ name, ...courseDetails[name] });
  };

  return (
    <>
      <Head><title>2026 IONC 課程表</title></Head>
      <div className="min-h-screen flex flex-col relative" style={{ background: '#FCFCFE' }}>
        <Background currentPage={1} />
        <Header />

        <main className="flex-grow relative z-10 pt-6 pb-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-1 text-center" style={{ color: '#1D03F1' }}>
              2026 IONC 課程表
            </h1>
            <p className="text-center text-xs mb-6" style={{ color: 'rgba(29,3,241,0.45)' }}>
              點擊課程名稱可查看詳細資訊
            </p>

            <p className="text-center text-xs mb-3 md:hidden" style={{ color: 'rgba(29,3,241,0.45)' }}>
              ← 左右滑動查看完整課表 →
            </p>

            <div
              className="overflow-x-auto rounded-xl"
              style={{ border: `1.5px solid ${BORDER_COLOR}`, boxShadow: '3px 3px 0 rgba(29,3,241,0.12)', background: '#fff' }}
            >
              <table className="border-collapse w-full text-sm" style={{ minWidth: '620px' }}>
                {/* Header */}
                <thead>
                  <tr style={{ background: 'rgba(77,91,218,0.06)', borderBottom: `1px solid ${BORDER_COLOR}` }}>
                    <th className={tdBase} style={{ borderColor: BORDER_COLOR, minWidth: '100px', padding: '12px', color: 'rgba(29,3,241,0.5)', fontWeight: 500, fontSize: '12px', textAlign: 'center' }}>
                      時間
                    </th>
                    {['7/17 (五)', '7/18 (六)', '7/19 (日)', '7/20 (一)', '7/21 (二)'].map(d => (
                      <th key={d} className={tdBase} style={{ borderColor: BORDER_COLOR, minWidth: '110px', padding: '12px', color: '#1D03F1', fontWeight: 700, textAlign: 'center' }}>
                        {d}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {/* Row 1: 08:00 ~ 09:00 */}
                  <tr>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: TIME_BG, padding: '12px', color: 'rgba(29,3,241,0.5)', fontSize: '12px', textAlign: 'center', whiteSpace: 'nowrap' }}>
                      08:00 ~ 09:00
                    </td>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: MEAL_BG }} rowSpan={3}>
                      <UtilCell>前往清大</UtilCell>
                    </td>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: MEAL_BG }} colSpan={4}>
                      <UtilCell>早餐</UtilCell>
                    </td>
                  </tr>

                  {/* Row 2a: 09:00 ~ 12:00 upper */}
                  <tr>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: TIME_BG, padding: '12px', color: 'rgba(29,3,241,0.5)', fontSize: '12px', textAlign: 'center', whiteSpace: 'nowrap' }} rowSpan={2}>
                      09:00 ~ 12:00
                    </td>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: COURSE_BG, padding: 0, height: '1px' }} rowSpan={2}>
                      <div className="flex flex-col" style={{ height: '100%', divideColor: BORDER_COLOR }}>
                        <CourseCell name="基礎資料結構" onClick={() => openCourse('基礎資料結構')} className="flex-1" />
                        <div style={{ borderTop: `1px dashed ${BORDER_COLOR}` }} />
                        <CourseCell name="進階資料結構" onClick={() => openCourse('進階資料結構')} className="flex-1" />
                      </div>
                    </td>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: COURSE_BG, padding: 0, height: '1px' }} rowSpan={2}>
                      <div className="flex flex-col" style={{ height: '100%' }}>
                        <CourseCell name="基礎圖論" onClick={() => openCourse('基礎圖論')} className="flex-1" />
                        <div style={{ borderTop: `1px dashed ${BORDER_COLOR}` }} />
                        <CourseCell name="進階圖論" onClick={() => openCourse('進階圖論')} className="flex-1" />
                      </div>
                    </td>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: COURSE_BG, padding: 0, height: '1px' }} rowSpan={2}>
                      <CourseCell name="其他解題技巧" onClick={() => openCourse('其他解題技巧')} className="h-full" />
                    </td>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: COURSE_BG, padding: 0, height: '1px' }}>
                      <CourseCell name="經驗分享" onClick={() => openCourse('經驗分享')} className="h-full" />
                    </td>
                  </tr>

                  {/* Row 2b */}
                  <tr>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: COURSE_BG, padding: 0, height: '1px' }} rowSpan={3}>
                      <CourseCell name="比賽" onClick={() => openCourse('比賽')} className="h-full" />
                    </td>
                  </tr>

                  {/* Row 3: 12:00 ~ 14:00 */}
                  <tr>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: TIME_BG, padding: '12px', color: 'rgba(29,3,241,0.5)', fontSize: '12px', textAlign: 'center', whiteSpace: 'nowrap' }}>
                      12:00 ~ 14:00
                    </td>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: MEAL_BG }}>
                      <UtilCell>學員報到</UtilCell>
                    </td>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: MEAL_BG }} colSpan={3}>
                      <UtilCell>午餐</UtilCell>
                    </td>
                  </tr>

                  {/* Row 4a: 14:00 ~ 17:30 upper */}
                  <tr>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: TIME_BG, padding: '12px', color: 'rgba(29,3,241,0.5)', fontSize: '12px', textAlign: 'center', whiteSpace: 'nowrap' }} rowSpan={2}>
                      14:00 ~ 17:30
                    </td>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: MEAL_BG }}>
                      <UtilCell>營長時間</UtilCell>
                    </td>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: COURSE_BG, padding: 0, height: '1px' }} rowSpan={2}>
                      <CourseCell name="動態規劃" onClick={() => openCourse('動態規劃')} className="h-full" />
                    </td>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: COURSE_BG, padding: 0, height: '1px' }} rowSpan={2}>
                      <div className="flex flex-col" style={{ height: '100%' }}>
                        <CourseCell name="基礎數學" onClick={() => openCourse('基礎數學')} className="flex-1" />
                        <div style={{ borderTop: `1px dashed ${BORDER_COLOR}` }} />
                        <CourseCell name="組合計數" onClick={() => openCourse('組合計數')} className="flex-1" />
                      </div>
                    </td>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: COURSE_BG, padding: 0, height: '1px' }} rowSpan={2}>
                      <CourseCell name="賽局" onClick={() => openCourse('賽局')} className="h-full" />
                    </td>
                  </tr>

                  {/* Row 4b */}
                  <tr>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: COURSE_BG, padding: 0, height: '1px' }}>
                      <div className="flex flex-col" style={{ height: '100%' }}>
                        <CourseCell name="基礎技巧 Ⅰ" onClick={() => openCourse('基礎技巧 Ⅰ')} className="flex-1" />
                        <div style={{ borderTop: `1px dashed ${BORDER_COLOR}` }} />
                        <CourseCell name="基礎技巧 Ⅱ" onClick={() => openCourse('基礎技巧 Ⅱ')} className="flex-1" />
                      </div>
                    </td>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: MEAL_BG }}>
                      <UtilCell className="flex-col gap-1">
                        <span>頒獎 / 賦歸</span>
                        <span className="text-xs" style={{ color: 'rgba(29,3,241,0.4)' }}>(16:00 結束)</span>
                      </UtilCell>
                    </td>
                  </tr>

                  {/* Row 5: 17:30 ~ 19:00 */}
                  <tr>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: TIME_BG, padding: '12px', color: 'rgba(29,3,241,0.5)', fontSize: '12px', textAlign: 'center', whiteSpace: 'nowrap' }}>
                      17:30 ~ 19:00
                    </td>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: MEAL_BG }} colSpan={4}>
                      <UtilCell>晚餐</UtilCell>
                    </td>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: TIME_BG }}>
                      <UtilCell style={{ color: 'rgba(29,3,241,0.2)' }}>—</UtilCell>
                    </td>
                  </tr>

                  {/* Row 6: 19:00 ~ 22:00 */}
                  <tr>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: TIME_BG, padding: '12px', color: 'rgba(29,3,241,0.5)', fontSize: '12px', textAlign: 'center', whiteSpace: 'nowrap' }}>
                      19:00 ~ 22:00
                    </td>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: MEAL_BG }} colSpan={4}>
                      <UtilCell>上機練習</UtilCell>
                    </td>
                    <td className={tdBase} style={{ borderColor: BORDER_COLOR, background: TIME_BG }}>
                      <UtilCell style={{ color: 'rgba(29,3,241,0.2)' }}>—</UtilCell>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>

        {/* Modal */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ background: 'rgba(29,3,241,0.12)', backdropFilter: 'blur(4px)' }}
            onClick={() => setSelected(null)}
          >
            <div
              className="w-full max-w-md rounded-xl p-6 md:p-8 relative"
              style={{ background: '#fff', border: '1.5px solid #1D03F1', boxShadow: '4px 4px 0 #1D03F1' }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-xl leading-none transition-colors"
                style={{ color: 'rgba(29,3,241,0.5)' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#1D03F1'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(29,3,241,0.5)'; }}
                onClick={() => setSelected(null)}
                aria-label="關閉"
              >
                ×
              </button>

              <h2 className="text-xl md:text-2xl font-bold mb-1" style={{ color: '#1D03F1' }}>{selected.name}</h2>
              <p className="text-sm font-semibold mb-5" style={{ color: '#A361DD' }}>
                {selected.day} &nbsp;|&nbsp; {selected.time}
              </p>

              <div className="space-y-4">
                {selected.instructor && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'rgba(29,3,241,0.35)' }}>講師</p>
                    <p style={{ color: '#4D5BDA' }}>{selected.instructor}</p>
                  </div>
                )}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'rgba(29,3,241,0.35)' }}>先備知識</p>
                  <div style={{ color: '#4D5BDA' }}>
                    {selected.prerequisites.split('、').map((item, i) => (
                      <div key={i}>{item}</div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'rgba(29,3,241,0.35)' }}>課程內容</p>
                  <div style={{ color: '#4D5BDA' }}>
                    {selected.content.split('、').map((item, i) => (
                      <div key={i}>{item}</div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="mt-6 w-full py-2 rounded-lg font-semibold transition-all duration-150"
                style={{ color: '#1D03F1', border: '1.5px solid #1D03F1', background: 'transparent' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1D03F1'; e.currentTarget.style.color = '#FCFCFE'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1D03F1'; }}
              >
                關閉
              </button>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}

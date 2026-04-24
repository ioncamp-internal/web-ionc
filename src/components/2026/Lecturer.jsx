import React from 'react';
import Image from "next/image";

export default function Lecturer({ name, id, experiences, avatarUrl }) {
  // 配合 2025 的資料結構，接收 name, id, experiences, avatarUrl
  return (
    <div className="relative w-[320px] bg-slate-900 rounded-xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col items-center p-6 mx-auto my-6 hover:-translate-y-2 hover:shadow-cyan-900/50 transition-all duration-300">
      
      {/* 識別證上的掛繩孔段與裝飾色條 */}
      <div className="absolute top-0 w-full h-3 bg-gradient-to-r from-cyan-600 to-blue-600" />
      <div className="w-16 h-[6px] rounded-full bg-black mt-2 mb-6 shadow-inner border border-slate-800" /> 
      
      {/* Speaker 標籤 */}
      <div className="absolute top-6 left-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-r-md uppercase tracking-wider shadow-lg">
        SPEAKER
      </div>

      {/* 照片或縮寫 */}
      {avatarUrl ? (
        <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-slate-800 shadow-xl mb-4 z-10 bg-slate-800">
          <Image src={avatarUrl} alt={name || "avatar"} fill style={{ objectFit: 'cover' }} />
        </div>
      ) : (
        <div className="w-28 h-28 bg-gradient-to-br from-slate-800 to-slate-700 border-4 border-slate-900 rounded-full flex items-center justify-center text-4xl font-bold text-cyan-400 mb-4 shadow-xl z-10">
          {name ? name[0] : "?"}
        </div>
      )}

      {/* 姓名與 ID */}
      <h3 className="text-2xl font-bold text-white tracking-wider">{name}</h3>
      {id && (
        <span className="text-xs px-3 py-1 mt-2 bg-slate-800 text-cyan-300 rounded-full font-mono font-medium border border-slate-700 shadow-inner">
          @{id}
        </span>
      )}

      {/* 經歷清單 */}
      <div className="w-full mt-6 flex-grow border-t border-slate-800 pt-4">
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-3 text-center">Experiences</p>
        <ul className="text-sm text-slate-300 space-y-2.5">
          {experiences && experiences.map((exp, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-cyan-500 mr-2 mt-[2px] text-xs">✦</span>
              <span className="leading-snug">{exp}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 底部條碼裝飾 (增加識別證的視覺效果) */}
      <div className="w-full mt-8 pt-4 border-t border-slate-800 flex justify-center opacity-30 select-none pointer-events-none">
        <div className="h-5 w-3/4 flex space-x-[2px] justify-center items-center">
          {/* 模擬條碼 */}
          <div className="w-[1px] h-full bg-white opacity-80" />
          <div className="w-[2px] h-full bg-white opacity-90" />
          <div className="w-[3px] h-full bg-white opacity-60" />
          <div className="w-[1px] h-full bg-white opacity-80" />
          <div className="w-[4px] h-full bg-white opacity-50" />
          <div className="w-[2px] h-full bg-white opacity-70" />
          <div className="w-[1px] h-full bg-white opacity-90" />
          <div className="w-[3px] h-full bg-white opacity-80" />
          <div className="w-[2px] h-full bg-white opacity-60" />
          <div className="w-[4px] h-full bg-white opacity-70" />
          <div className="w-[1px] h-full bg-white opacity-90" />
          <div className="w-[2px] h-full bg-white opacity-80" />
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Image from "next/image";

export default function Lecturer({ name, id, experiences, avatarUrl }) {
  return (
    <div
      className="relative w-[300px] rounded-xl overflow-hidden flex flex-col items-center p-6 mx-auto my-6 transition-all duration-300"
      style={{
        background: '#fff',
        border: '1.5px solid #1D03F1',
        boxShadow: '4px 4px 0 #1D03F1',
        transform: 'translateY(0)',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '6px 6px 0 #1D03F1'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '4px 4px 0 #1D03F1'; }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-xl" style={{ background: '#A361DD' }} />

      {/* SPEAKER tag */}
      <div
        className="absolute top-5 left-0 text-[10px] font-bold px-3 py-1 rounded-r-md uppercase tracking-wider"
        style={{ background: '#1D03F1', color: '#FCFCFE' }}
      >
        SPEAKER
      </div>

      {/* Avatar */}
      {avatarUrl ? (
        <div
          className="relative w-24 h-24 rounded-full overflow-hidden mt-4 mb-4 z-10"
          style={{ border: '2.5px solid #1D03F1', boxShadow: '2px 2px 0 #1D03F1' }}
        >
          <Image src={avatarUrl} alt={name || "avatar"} fill style={{ objectFit: 'cover' }} />
        </div>
      ) : (
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold mt-4 mb-4 z-10"
          style={{
            background: 'rgba(163,97,221,0.12)',
            border: '2.5px solid #1D03F1',
            boxShadow: '2px 2px 0 #1D03F1',
            color: '#A361DD',
          }}
        >
          {name ? name[0] : '?'}
        </div>
      )}

      {/* Name */}
      <h3 className="text-xl font-bold tracking-wide" style={{ color: '#1D03F1' }}>{name}</h3>
      {id && (
        <span
          className="text-xs px-3 py-1 mt-2 rounded-full font-mono font-medium"
          style={{ background: 'rgba(77,91,218,0.08)', color: '#4D5BDA', border: '1px solid rgba(77,91,218,0.25)' }}
        >
          @{id}
        </span>
      )}

      {/* Experience list */}
      <div className="w-full mt-5 flex-grow pt-4" style={{ borderTop: '1px solid rgba(29,3,241,0.12)' }}>
        <p className="text-[10px] font-bold uppercase tracking-widest mb-3 text-center" style={{ color: 'rgba(29,3,241,0.35)' }}>
          Experiences
        </p>
        <ul className="text-sm space-y-2">
          {experiences && experiences.map((exp, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2 mt-[3px] text-xs" style={{ color: '#A361DD' }}>✦</span>
              <span className="leading-snug" style={{ color: '#4D5BDA' }}>{exp}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

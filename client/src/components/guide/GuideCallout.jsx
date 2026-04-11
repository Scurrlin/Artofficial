import React from 'react';

const VARIANTS = {
  info: {
    border: 'border-[#6dadeb]',
    bg: 'bg-[#6dadeb]/10',
    icon: (
      <svg className="w-5 h-5 text-[#6dadeb] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  tip: {
    border: 'border-emerald-400',
    bg: 'bg-emerald-400/10',
    icon: (
      <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  warning: {
    border: 'border-amber-400',
    bg: 'bg-amber-400/10',
    icon: (
      <svg className="w-5 h-5 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  note: {
    border: 'border-purple-400',
    bg: 'bg-purple-400/10',
    icon: (
      <svg className="w-5 h-5 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
};

const GuideCallout = ({ variant = 'info', children }) => {
  const v = VARIANTS[variant] || VARIANTS.info;
  return (
    <div className={`not-prose my-4 flex gap-3 items-start rounded-lg border-l-4 ${v.border} ${v.bg} px-4 py-3`}>
      {v.icon}
      <div className="text-white/80 text-sm leading-relaxed">{children}</div>
    </div>
  );
};

export default GuideCallout;

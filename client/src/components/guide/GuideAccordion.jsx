import React, { useState } from 'react';

const GuideAccordionGroup = ({ children }) => (
  <div className="not-prose my-6 space-y-2">{children}</div>
);

const GuideAccordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-left text-white/90 font-medium text-sm hover:bg-white/5 transition-colors cursor-pointer"
      >
        {title}
        <svg
          className={`w-4 h-4 text-white/50 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-4 pb-4 text-white/70 text-sm leading-relaxed border-t border-white/10">
          {children}
        </div>
      )}
    </div>
  );
};

export { GuideAccordionGroup, GuideAccordion };

import React from 'react';

const GuidePrompt = ({ description, children }) => (
  <div className="not-prose my-4 rounded-lg bg-white/5 border border-white/10 px-4 py-3">
    {description && (
      <p className="text-white/80 italic text-sm leading-relaxed">
        &ldquo;{description}&rdquo;
      </p>
    )}
    {children && (
      <div className="text-white/70 text-sm mt-2 leading-relaxed">{children}</div>
    )}
  </div>
);

export default GuidePrompt;

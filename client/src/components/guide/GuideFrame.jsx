import React from 'react';

const GuideFrame = ({ children, caption, maxWidth }) => (
  <figure className="not-prose my-4">
    <div
      className="border border-white/15 rounded-xl overflow-hidden"
      style={maxWidth ? { maxWidth, margin: '0 auto' } : undefined}
    >
      {children}
    </div>
    {caption && (
      <figcaption className="text-white/50 text-sm text-center mt-2">
        {caption}
      </figcaption>
    )}
  </figure>
);

export default GuideFrame;

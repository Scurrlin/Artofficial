import React from 'react';

const BG_MAP = {
  white: 'bg-white',
};

const GuideFrame = ({ children, caption, maxWidth, maxHeight, bg }) => {
  const bgClass = BG_MAP[bg] || 'bg-white/5';

  const style = {};
  if (maxWidth) { style.maxWidth = maxWidth; style.margin = '0 auto'; }
  if (maxHeight) style.maxHeight = maxHeight;

  return (
    <figure className="not-prose my-4">
      <div
        className={`border border-white/15 rounded-xl overflow-hidden ${bgClass}`}
        style={Object.keys(style).length ? style : undefined}
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
};

export default GuideFrame;

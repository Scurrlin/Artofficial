import React from 'react';

const BG_MAP = {
  white: 'bg-white',
  black: 'bg-black',
};

const GuideFrame = ({ children, caption, maxWidth, maxHeight, bg, borderless, padded }) => {
  const bgClass = BG_MAP[bg] || (borderless ? '' : 'bg-white/5');
  const borderClass = borderless ? '' : 'border border-white/15';
  const paddingClass = padded ? 'p-1 sm:p-2.5' : '';

  const style = {};
  if (maxWidth) { style.maxWidth = maxWidth; style.margin = '0 auto'; }
  if (maxHeight) style.maxHeight = maxHeight;

  return (
    <figure className="not-prose my-4">
      <div
        className={`${borderClass} rounded-xl overflow-hidden ${bgClass} ${paddingClass}`}
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

import React from 'react';

const ColorSwatch = ({ color, label }) => (
  <span className="not-prose inline-flex items-center gap-2 mr-3 mb-2">
    <span
      aria-hidden="true"
      className="w-3 h-3 rounded-full border border-white/20 inline-block shrink-0"
      style={{ backgroundColor: color }}
    />
    <code className="text-white/80 text-xs bg-white/10 px-1.5 py-0.5 rounded">
      {label || color}
    </code>
  </span>
);

export default ColorSwatch;

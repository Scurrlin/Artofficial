import React from 'react';

const GuideColumns = ({ cols = 2, children }) => (
  <div
    className="not-prose my-4 gap-4"
    style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)` }}
  >
    {children}
  </div>
);

export default GuideColumns;

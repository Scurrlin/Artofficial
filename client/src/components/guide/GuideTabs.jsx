import React, { useState } from 'react';

const GuideTabs = ({ children }) => {
  const tabs = React.Children.toArray(children).filter(
    (child) => child.type === GuideTab,
  );
  const [active, setActive] = useState(0);

  return (
    <div className="not-prose my-6">
      <div className="flex gap-1 border-b border-white/10 mb-4 overflow-x-auto">
        {tabs.map((tab, i) => (
          <button
            key={tab.props.title}
            type="button"
            onClick={() => setActive(i)}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors cursor-pointer rounded-t-md ${
              i === active
                ? 'text-white border-b-2 border-[#6dadeb] bg-white/5'
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            {tab.props.title}
          </button>
        ))}
      </div>
      {tabs[active]}
    </div>
  );
};

const GuideTab = ({ children }) => <div>{children}</div>;

export { GuideTabs, GuideTab };

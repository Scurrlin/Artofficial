import React, { useState } from 'react';
import { GuideEagerContext } from './GuideEagerContext';

const HIDDEN_TAB = {
  position: 'absolute',
  width: '100%',
  visibility: 'hidden',
  height: 0,
  overflow: 'hidden',
  pointerEvents: 'none',
};

const GuideTabs = ({ children }) => {
  const tabs = React.Children.toArray(children).filter(
    (child) => child.type === GuideTab,
  );
  const [active, setActive] = useState(0);

  return (
    <div className="not-prose my-6">
      <div className="border-b border-white/10 mb-4">
        <div className="flex gap-1 overflow-x-auto guide-scroll">
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
      </div>
      <GuideEagerContext.Provider value={true}>
        <div className="relative">
          {tabs.map((tab, i) => (
            <div
              key={tab.props.title}
              style={i === active ? undefined : HIDDEN_TAB}
              aria-hidden={i !== active}
            >
              {tab}
            </div>
          ))}
        </div>
      </GuideEagerContext.Provider>
    </div>
  );
};

const GuideTab = ({ children }) => <div>{children}</div>;

export { GuideTabs, GuideTab };

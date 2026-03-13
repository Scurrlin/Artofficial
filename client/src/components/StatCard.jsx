import React from 'react';

const StatCard = ({ imageCount, userCount }) => {
  return (
    <div className="relative w-full max-w-[380px] md:min-w-[380px] md:max-w-[450px] overflow-hidden rounded-2xl bg-[#10131f] shadow-[0_12px_40px_rgba(0,0,0,0.06)] flex items-center">
      <div className="flex-1 px-6 py-5 text-center">
        <div className="text-4xl font-semibold tracking-tight text-white tabular-nums">
          {imageCount.toLocaleString()}
        </div>
        <p className="mt-1 text-white text-[16px]">Images</p>
      </div>

      <img src="/openAI.svg" alt="" className="w-12 h-12 shrink-0" aria-hidden="true" />

      <div className="flex-1 px-6 py-5 text-center">
        <div className="text-4xl font-semibold tracking-tight text-white tabular-nums">
          {userCount.toLocaleString()}
        </div>
        <p className="mt-1 text-white text-[16px]">Users</p>
      </div>
    </div>
  );
};

export default StatCard;

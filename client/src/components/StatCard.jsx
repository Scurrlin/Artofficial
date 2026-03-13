import React from 'react';

const StatCard = ({ imageCount, userCount }) => {
  return (
    <div className="relative w-full max-w-[380px] md:min-w-[380px] md:max-w-[450px] overflow-hidden rounded-2xl border border-black/10 bg-white/80 px-6 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-md">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/15 to-transparent" />

      <div className="flex items-center gap-6">
        <div className="flex-1 text-center">
          <div className="text-4xl font-semibold tracking-tight text-[#222328] tabular-nums">
            {imageCount.toLocaleString()}
          </div>
          <p className="mt-1 text-[#666e75] text-[16px]">Images</p>
        </div>

        <div className="w-px self-stretch bg-black/10" />

        <div className="flex-1 text-center">
          <div className="text-4xl font-semibold tracking-tight text-[#222328] tabular-nums">
            {userCount.toLocaleString()}
          </div>
          <p className="mt-1 text-[#666e75] text-[16px]">Users</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;

import React from 'react';

const ImageStatCard = ({ count }) => {
  return (
    <div className="relative w-full max-w-[380px] md:min-w-[380px] md:max-w-[450px] overflow-hidden rounded-2xl border border-black/10 bg-white/80 px-6 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-md">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/15 to-transparent" />

      <div className="flex items-center gap-6">
        <div className="shrink-0 text-center">
          <div className="text-4xl font-semibold tracking-tight text-[#222328] tabular-nums">
            {count.toLocaleString()}
          </div>
          <p className="mt-1 text-[#666e75] text-[16px]">Images created</p>
        </div>

        <div className="flex-1 overflow-hidden rounded-xl border border-black/[0.06] bg-white/60">
          <svg
            viewBox="0 0 200 80"
            className="h-full w-full"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="areaFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(15,23,42,0.10)" />
                <stop offset="100%" stopColor="rgba(15,23,42,0.00)" />
              </linearGradient>
            </defs>

            {Array.from({ length: 5 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                x2="200"
                y1={i * 20}
                y2={i * 20}
                stroke="rgba(15,23,42,0.05)"
                strokeWidth="0.5"
              />
            ))}

            {Array.from({ length: 6 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 40}
                x2={i * 40}
                y1="0"
                y2="80"
                stroke="rgba(15,23,42,0.05)"
                strokeWidth="0.5"
              />
            ))}

            <path
              d="M0 58C14 22 28 12 42 28C56 44 68 64 84 62C100 60 110 34 126 30C142 26 152 56 168 50C184 44 192 16 200 24V80H0Z"
              fill="url(#areaFade)"
            />
            <path
              d="M0 58C14 22 28 12 42 28C56 44 68 64 84 62C100 60 110 34 126 30C142 26 152 56 168 50C184 44 192 16 200 24"
              stroke="rgba(15,23,42,0.55)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageStatCard;

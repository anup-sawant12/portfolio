import React from "react";
import useScrollProgress from "../hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center space-y-2 select-none pointer-events-none">
      <div className="font-mono text-[8px] text-neutral-500 font-bold tracking-widest uppercase vertical-text">
        {Math.round(progress)}%
      </div>
      
      {/* Scroll gauge track */}
      <div className="w-[1px] h-24 bg-neutral-200 dark:bg-neutral-850 relative rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full bg-accentViolet transition-all duration-100 ease-out"
          style={{ height: `${progress}%` }}
        />
      </div>

      <div className="font-mono text-[8px] text-neutral-500 font-semibold tracking-widest">
        SCRL
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}

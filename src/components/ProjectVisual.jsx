import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Layers, CheckSquare, Users, Code, HelpCircle } from "lucide-react";

export default function ProjectVisual({ type, elements, image }) {
  const [imgError, setImgError] = useState(false);

  // Common browser window wrapper header
  const renderBrowserHeader = (title) => (
    <div className="flex items-center justify-between px-4 py-2 border-b dark:border-neutral-800 light:border-slate-200 bg-neutral-900/10 dark:bg-neutral-950/45 light:bg-slate-50">
      <div className="flex space-x-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
      </div>
      <div className="font-mono text-[9px] text-neutral-500 tracking-wider font-semibold truncate max-w-[180px]">
        {title}
      </div>
      <div className="w-8" />
    </div>
  );

  // Check if image exists and has not errored
  if (image && !imgError) {
    return (
      <div className="w-[95%] sm:w-[90%] bg-white dark:bg-darkSurface border dark:border-neutral-800 light:border-slate-200 rounded-xl overflow-hidden shadow-xl shadow-black/10 select-none text-left">
        {renderBrowserHeader(image.replace("/", ""))}
        <div className="relative overflow-hidden w-full h-[180px] md:h-[220px]">
          <img
            src={image}
            alt="Project screenshot mockup"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        </div>
      </div>
    );
  }

  switch (type) {
    case "dashboard": // SmartInvoice
      return (
        <div className="relative w-full h-[260px] md:h-[320px] flex items-center justify-center">
          {/* Background decorative document layers */}
          <motion.div
            animate={{ 
              y: [0, -6, 0],
              rotate: [-2, -4, -2]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-8 top-6 w-[200px] h-[150px] bg-indigo-500/10 border border-indigo-500/20 rounded-lg backdrop-blur-sm -z-10 p-3 hidden sm:flex flex-col justify-between"
          >
            <div className="flex justify-between border-b border-indigo-500/10 pb-1.5">
              <span className="font-mono text-[7px] text-indigo-400">#INV-0042</span>
              <span className="font-mono text-[7px] text-indigo-400">$1,420.00</span>
            </div>
            <div className="space-y-1.5">
              <div className="h-1 bg-indigo-500/20 rounded w-3/4" />
              <div className="h-1 bg-indigo-500/20 rounded w-1/2" />
            </div>
            <div className="flex justify-between items-center text-[7px] text-indigo-400/60 font-mono">
              <span>STATUS: PAID</span>
              <span>2026-08-05</span>
            </div>
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, 8, 0],
              rotate: [1, 3, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute left-6 bottom-4 w-[180px] h-[120px] bg-violet-500/10 border border-violet-500/20 rounded-lg backdrop-blur-sm -z-10 p-3 hidden sm:flex flex-col justify-between"
          >
            <div className="flex justify-between border-b border-violet-500/10 pb-1.5">
              <span className="font-mono text-[7px] text-violet-400">#INV-0043</span>
              <span className="font-mono text-[7px] text-violet-400">$340.00</span>
            </div>
            <div className="h-1 bg-violet-500/20 rounded w-2/3" />
            <div className="flex justify-between items-center text-[7px] text-violet-400/60 font-mono">
              <span>STATUS: PENDING</span>
              <span>2026-08-06</span>
            </div>
          </motion.div>

          {/* Main Dashboard Browser Mockup */}
          <div className="w-[90%] sm:w-[80%] bg-white dark:bg-darkSurface border dark:border-neutral-800 light:border-slate-200 rounded-xl overflow-hidden shadow-xl shadow-black/10 select-none text-left">
            {renderBrowserHeader("smart-invoice-client.app")}
            
            <div className="p-4 grid grid-cols-12 gap-3 h-full min-h-[160px] md:min-h-[200px]">
              {/* Sidebar */}
              <div className="col-span-3 border-r dark:border-neutral-800 light:border-slate-100 pr-2 space-y-2 hidden sm:block">
                <div className="h-2.5 bg-accentViolet/20 rounded w-full" />
                <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded w-4/5" />
                <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded w-3/4" />
                <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded w-2/3" />
              </div>
              
              {/* Main invoice table */}
              <div className="col-span-12 sm:col-span-9 space-y-3 font-sans">
                <div className="flex justify-between items-center">
                  <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded w-1/3" />
                  <div className="h-4 bg-accentViolet/10 text-accentViolet px-2 rounded-full font-mono text-[8px] flex items-center gap-1 font-bold">
                    <FileText className="w-2.5 h-2.5" /> MULTI-TENANT
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 dark:bg-[#181820] light:bg-slate-50 border dark:border-neutral-800/60 light:border-slate-100 rounded-lg">
                    <div className="space-y-1 w-full">
                      <div className="flex justify-between">
                        <div className="h-2 bg-neutral-300 dark:bg-neutral-700 rounded w-1/3" />
                        <div className="h-2 bg-neutral-300 dark:bg-neutral-700 rounded w-12" />
                      </div>
                      <div className="h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded w-1/4" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 dark:bg-[#181820] light:bg-slate-50 border dark:border-neutral-800/60 light:border-slate-100 rounded-lg">
                    <div className="space-y-1 w-full">
                      <div className="flex justify-between">
                        <div className="h-2 bg-neutral-300 dark:bg-neutral-700 rounded w-2/5" />
                        <div className="h-2 bg-neutral-300 dark:bg-neutral-700 rounded w-8" />
                      </div>
                      <div className="h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded w-1/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "board": // Collaborative project platform
      return (
        <div className="relative w-full h-[260px] md:h-[320px] flex items-center justify-center p-4">
          <div className="w-[95%] sm:w-[85%] bg-white dark:bg-darkSurface border dark:border-neutral-800 light:border-slate-200 rounded-xl overflow-hidden shadow-xl shadow-black/10 select-none text-left">
            {renderBrowserHeader("project-mgmt-client.app")}
            
            <div className="p-3 grid grid-cols-3 gap-2 min-h-[160px] md:min-h-[200px] text-[8px] font-mono">
              {/* Column 1: Backlog */}
              <div className="border border-dashed dark:border-neutral-800 light:border-slate-200 rounded-lg p-2 flex flex-col gap-2">
                <div className="font-bold text-neutral-400 dark:text-neutral-500 border-b dark:border-neutral-800 light:border-slate-200 pb-1 flex items-center gap-1">
                  <Layers className="w-2.5 h-2.5" /> {elements[0].toUpperCase()}
                </div>
                <div className="p-1.5 dark:bg-[#181820] light:bg-slate-50 border dark:border-neutral-800 light:border-slate-100 rounded shadow-sm">
                  <span className="font-semibold">{elements[1]}</span>
                  <div className="h-1 bg-neutral-200 dark:bg-neutral-800 rounded w-3/4 mt-1" />
                </div>
              </div>

              {/* Column 2: Active Tasks */}
              <div className="border border-dashed dark:border-neutral-800 light:border-slate-200 rounded-lg p-2 flex flex-col gap-2">
                <div className="font-bold text-neutral-400 dark:text-neutral-500 border-b dark:border-neutral-800 light:border-slate-200 pb-1 flex items-center gap-1">
                  <CheckSquare className="w-2.5 h-2.5" /> {elements[2].toUpperCase()}
                </div>
                <div className="p-1.5 dark:bg-accentViolet/5 border border-accentViolet/25 rounded relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-0.5 h-full bg-accentViolet" />
                  <span className="font-semibold text-accentViolet">Task #201</span>
                  <div className="h-1 bg-accentViolet/20 rounded w-2/3 mt-1" />
                </div>
              </div>

              {/* Column 3: Members / Team */}
              <div className="border border-dashed dark:border-neutral-800 light:border-slate-200 rounded-lg p-2 flex flex-col gap-2">
                <div className="font-bold text-neutral-400 dark:text-neutral-500 border-b dark:border-neutral-800 light:border-slate-200 pb-1 flex items-center gap-1">
                  <Users className="w-2.5 h-2.5" /> {elements[3].toUpperCase()}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 p-1 bg-neutral-100 dark:bg-[#181820] rounded">
                    <div className="w-3.5 h-3.5 rounded-full bg-cyan-500/35 flex items-center justify-center font-bold text-[6px]">AS</div>
                    <span className="truncate">Anup Sawant</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1 bg-neutral-100 dark:bg-[#181820] rounded">
                    <div className="w-3.5 h-3.5 rounded-full bg-violet-500/35 flex items-center justify-center font-bold text-[6px]">MB</div>
                    <span className="truncate">Member</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "code": // Daily LeetCode Generator
      return (
        <div className="relative w-full h-[260px] md:h-[320px] flex items-center justify-center p-4">
          {/* Abstract Floating Topic Cards */}
          <div className="absolute inset-0 flex flex-wrap gap-2 items-center justify-center pointer-events-none -z-10 p-4">
            {elements.map((topic, i) => {
              const positions = [
                "top-6 left-6 rotate-[-6deg]",
                "top-8 right-6 rotate-[4deg]",
                "bottom-12 left-8 rotate-[-12deg]",
                "bottom-6 right-8 rotate-[8deg]",
                "bottom-1/2 right-12 rotate-[-4deg]"
              ];
              return (
                <motion.div
                  key={topic}
                  animate={{ 
                    y: [0, (i % 2 === 0 ? -4 : 4), 0],
                  }}
                  transition={{ 
                    duration: 4 + (i % 3), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                  className={`absolute ${positions[i % positions.length]} px-3 py-1.5 bg-[#0a0a0c] border dark:border-neutral-800 light:border-slate-200 rounded-full font-mono text-[8px] tracking-widest text-neutral-400 font-bold uppercase shadow-lg`}
                >
                  {topic}
                </motion.div>
              );
            })}
          </div>

          {/* Main Code Window Mockup */}
          <div className="w-[90%] sm:w-[75%] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden shadow-2xl select-none text-left">
            {renderBrowserHeader("daily-leetcode.app")}
            
            <div className="p-4 font-mono text-[9px] text-neutral-400 space-y-2.5 h-full min-h-[160px] md:min-h-[200px]">
              <div className="flex items-center gap-1.5 text-cyan-400 border-b border-neutral-900 pb-1.5 mb-2">
                <Code className="w-3.5 h-3.5" />
                <span>daily_challenge.py</span>
              </div>
              <div className="space-y-1.5 text-[8px] sm:text-[9px]">
                <div><span className="text-pink-500">def</span> <span className="text-blue-400">solveProblem</span>(arr: List[int]) -&gt; int:</div>
                <div className="pl-4 text-neutral-500"># Generated: {new Date().toLocaleDateString()}</div>
                <div className="pl-4">freq = &#123;&#125;</div>
                <div className="pl-4"><span className="text-pink-500">for</span> num <span className="text-pink-500">in</span> arr:</div>
                <div className="pl-8">freq[num] = freq.get(num, <span className="text-orange-400">0</span>) + <span className="text-orange-400">1</span></div>
                <div className="pl-4 text-neutral-500"># Running optimization compiler...</div>
                <div className="pl-4"><span className="text-pink-500">return</span> max(freq.values())</div>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full min-h-[220px] bg-neutral-900/10 flex items-center justify-center">
          <HelpCircle className="w-12 h-12 text-neutral-600" />
        </div>
      );
  }
}

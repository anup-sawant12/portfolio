import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [phase, setPhase] = useState("logs"); // 'logs' or 'name'

  const startupLogs = [
    "INITIALIZING PORTFOLIO...",
    "Loading interfaces & modules...",
    "Loading selected projects...",
    "Loading technology skill constellation...",
    "Initializing WebGL core renderer...",
    "System ready. Welcome."
  ];

  useEffect(() => {
    // Add logs one by one
    let logIdx = 0;
    const logInterval = setInterval(() => {
      if (logIdx < startupLogs.length) {
        setLogs((prev) => [...prev, startupLogs[logIdx]]);
        logIdx++;
      } else {
        clearInterval(logInterval);
        setTimeout(() => {
          setPhase("name");
        }, 300);
      }
    }, 250);

    return () => clearInterval(logInterval);
  }, []);

  useEffect(() => {
    if (phase !== "name") return;

    const duration = 1200; // 1.2s to count from 0 to 100
    const intervalTime = 16; // ~60fps
    const step = 100 / (duration / intervalTime);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onComplete();
          }, 400); // Hold at 100% briefly
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(progressInterval);
  }, [phase, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -100,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[9999] flex flex-col justify-between p-8 md:p-16 bg-[#0a0a0c] text-white font-mono select-none"
    >
      {/* Top Section: System Header */}
      <div className="flex justify-between items-start text-[10px] tracking-wider text-neutral-500">
        <div>SYS.INIT // PORTFOLIO_V2.0</div>
        <div>MUMBAI, IN · {new Date().toLocaleTimeString()}</div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col justify-center flex-grow max-w-xl mx-auto w-full min-h-[250px]">
        <AnimatePresence mode="wait">
          {phase === "logs" ? (
            <motion.div
              key="logs-pane"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-2 text-[12px] md:text-sm text-neutral-400 text-left font-mono"
            >
              {logs.map((log, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-emerald-500 mr-2">&gt;</span>
                  <span>{log}</span>
                </div>
              ))}
              <span className="inline-block w-2 h-4 bg-emerald-500 animate-pulse ml-1" />
            </motion.div>
          ) : (
            <motion.div
              key="name-pane"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center space-y-6"
            >
              <h1 className="text-3xl md:text-5xl font-bold tracking-[0.2em] font-display text-white">
                ANUP.SAWANT
              </h1>
              <div className="text-sm md:text-base text-neutral-400 font-mono tracking-widest">
                {Math.round(progress)}%
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Section: Progress Bar */}
      <div className="w-full max-w-lg mx-auto mb-8">
        <div className="h-[1px] w-full bg-neutral-900 overflow-hidden relative">
          <motion.div
            className="h-full bg-accentViolet"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
        <div className="flex justify-between items-center text-[10px] text-neutral-600 mt-2 tracking-widest uppercase">
          <span>Booting</span>
          <span>SDE.CORE</span>
        </div>
      </div>
    </motion.div>
  );
}

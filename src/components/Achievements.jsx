import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { achievements } from "../data/portfolioData";

function CountUp({ target, duration = 1.2 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = target;
    const totalFrames = Math.round(duration * 60); // 60 FPS
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      // Quadratic ease-out progress calculation
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      setCount(Math.round(start + (end - start) * progress));

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(end); // force exact end number
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return <span ref={elementRef}>{count}</span>;
}

export default function Achievements() {
  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto w-full select-none">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Metric 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 rounded-3xl border dark:border-neutral-850 light:border-slate-100 flex flex-col justify-center items-center text-center space-y-3"
        >
          <div className="text-5xl md:text-7xl font-black font-display text-accentViolet text-glow">
            <CountUp target={achievements.dsaSolvedCount} />+
          </div>
          <div className="font-mono text-xs md:text-sm tracking-[0.2em] text-neutral-500 uppercase font-bold">
            DSA PROBLEMS SOLVED
          </div>
        </motion.div>

        {/* Metric 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card p-10 rounded-3xl border dark:border-neutral-850 light:border-slate-100 flex flex-col justify-center items-center text-center space-y-3"
        >
          <div className="text-5xl md:text-7xl font-black font-display text-accentCyan text-shadow">
            <CountUp target={achievements.leetcodeCount} />+
          </div>
          <div className="font-mono text-xs md:text-sm tracking-[0.2em] text-neutral-500 uppercase font-bold">
            LEETCODE SOLVED PROBLEMS
          </div>
        </motion.div>
      </div>
    </section>
  );
}

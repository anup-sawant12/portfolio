import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { skillClusters } from "../data/portfolioData";

function SkillBentoCard({ cluster, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Track cursor location inside CSS variables
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth responsive tilt (limited to 2.5 degrees max)
    const rotateX = -((y - centerY) / centerY) * 2.5;
    const rotateY = ((x - centerX) / centerX) * 2.5;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.25, 1, 0.5, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: isHovered 
          ? "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)"
          : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
      }}
      className="glass-card relative p-6 md:p-8 rounded-3xl overflow-hidden group select-none flex flex-col justify-between min-h-[190px] border dark:border-neutral-850 light:border-slate-100"
    >
      {/* Pointer tracking spotlight reflection layer */}
      <div className="absolute inset-0 radial-spotlight pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="space-y-6 relative z-10">
        {/* Category Label */}
        <div className="flex justify-between items-baseline border-b dark:border-neutral-800/50 light:border-slate-100 pb-3">
          <span className="font-mono text-[10px] tracking-[0.2em] text-accentViolet font-bold uppercase">
            {cluster.category}
          </span>
          <span className="font-mono text-[9px] text-neutral-400 dark:text-neutral-600 font-bold">
            0{index + 1}
          </span>
        </div>

        {/* Skill Node Tags */}
        <div className="flex flex-wrap gap-2">
          {cluster.skills.map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.04 }}
              className="px-3.5 py-1.5 text-xs font-mono tracking-wide dark:bg-[#121216]/80 light:bg-white border dark:border-neutral-800/80 light:border-slate-200 dark:text-neutral-300 light:text-slate-700 rounded-xl transition-all duration-200 hover:border-accentViolet hover:text-accentViolet dark:hover:border-accentViolet dark:hover:text-accentViolet cursor-default shadow-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillConstellation() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full select-none text-left">
      <SectionHeader
        number="03 / TECH STACK"
        title="TOOLS I USE TO BUILD."
      />

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {skillClusters.map((cluster, idx) => (
          <SkillBentoCard
            key={cluster.category}
            cluster={cluster}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}

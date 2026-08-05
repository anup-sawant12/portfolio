import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { personalInfo, achievements, education } from "../data/portfolioData";
import { MapPin, Target, Database, Award, BookOpen } from "lucide-react";

// Individual Tilt Card component to encapsulate mouse reactive physics
function InfoCard({ icon: Icon, label, value, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set spotlight properties
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);

    // Calculate 3D tilt angles (limit between -4 and +4 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -((y - centerY) / centerY) * 4;
    const rotateY = ((x - centerX) / centerX) * 4;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
      }}
      className="glass-card relative p-6 rounded-2xl flex flex-col justify-between items-start h-48 group cursor-default overflow-hidden select-none"
    >
      {/* Dynamic spotlight reflection overlay */}
      <div className="absolute inset-0 radial-spotlight pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex justify-between w-full items-start">
        <div className="p-3 rounded-xl bg-accentViolet/10 text-accentViolet dark:text-accentViolet border dark:border-accentViolet/20 light:border-accentViolet/10">
          <Icon className="w-5 h-5" />
        </div>
        <span className="font-mono text-[10px] tracking-widest text-neutral-400 dark:text-neutral-600 font-bold">
          0{index + 1}
        </span>
      </div>

      <div className="space-y-1 relative z-10">
        <div className="font-mono text-[10px] tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
          {label}
        </div>
        <div className="text-xl font-bold font-display tracking-wide dark:text-darkTextPrimary light:text-lightTextPrimary uppercase">
          {value}
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const infoCards = [
    { icon: MapPin, label: "LOCATION", value: personalInfo.location },
    { icon: Target, label: "FOCUS", value: "SDE / Full Stack" },
    { icon: Award, label: "PROBLEM SOLVING", value: `${achievements.dsaSolvedCount}+ DSA Problems` },
    { icon: Database, label: "LEETCODE", value: `${achievements.leetcodeCount}+ Problems` },
    { icon: BookOpen, label: "EDUCATION", value: `EXCS · ${education.graduationYear}` }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full select-none">
      <SectionHeader
        number="01 / ABOUT"
        title="ENGINEERING IDEAS INTO SOFTWARE."
      />

      {/* Asymmetric layout grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Editorial Text Block */}
        <div className="lg:col-span-5 text-left space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-lg md:text-xl font-display leading-relaxed dark:text-darkTextPrimary light:text-lightTextPrimary text-glow"
          >
            I build software systems that translate algorithmic structure into fast, reliable applications. My focus centers on full-stack development, back-end robustness, and clean client experiences.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-sm md:text-base leading-relaxed dark:text-darkTextSecondary light:text-lightTextSecondary font-sans"
          >
            With solid core fundamentals in Computer Science—spanning Data Structures & Algorithms, Database Management, and Operating Systems—I construct solutions tailored for performance and architectural clarity.
          </motion.p>
        </div>

        {/* Interactive Cards Column */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {infoCards.map((card, idx) => (
            <InfoCard
              key={idx}
              icon={card.icon}
              label={card.label}
              value={card.value}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

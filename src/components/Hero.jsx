import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./SocialIcons";
import HeroScene from "./HeroScene";
import MagneticButton from "./MagneticButton";
import { personalInfo, socials } from "../data/portfolioData";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const taglineWords = ["THINK", "DIFFERENT."];

  const wordRevealVariants = {
    hidden: { y: "100%" },
    visible: (custom) => ({
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.1,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6 md:px-12 w-full select-none"
    >
      {/* 3D Orb Background Container */}
      <div className="absolute inset-0 z-0 flex items-center justify-center md:justify-end md:pr-12 pointer-events-none opacity-80 dark:opacity-100 transition-opacity">
        <div className="w-full h-[60vh] md:w-[50vw] md:h-[80vh] max-w-[700px]">
          <HeroScene />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-12">
        {/* Left Intro Text Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:col-span-7 flex flex-col items-start text-left space-y-8"
        >
          {/* Status Indicator & Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4 text-xs font-mono tracking-widest text-neutral-400"
          >
            <span className="flex items-center gap-1.5 dark:text-neutral-400 light:text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
              {personalInfo.status}
            </span>
            <span className="dark:text-neutral-700 light:text-slate-300">|</span>
            <span className="dark:text-neutral-400 light:text-slate-500">{personalInfo.location}</span>
          </motion.div>

          {/* SDE Title */}
          <motion.div variants={itemVariants}>
            <span className="font-mono text-xs tracking-[0.3em] text-accentViolet font-bold uppercase">
              {personalInfo.role}
            </span>
          </motion.div>

          {/* Primary Name Header & Tagline */}
          <div className="space-y-2">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-8xl font-black font-display tracking-tight leading-none dark:text-darkTextPrimary light:text-lightTextPrimary margin-0"
            >
              ANUP
              <br />
              SAWANT
            </motion.h1>

            {/* Tagline Think Different (mask reveal) */}
            <div className="flex gap-4 flex-wrap pt-2">
              {taglineWords.map((word, wordIdx) => (
                <div key={wordIdx} className="overflow-hidden py-1">
                  <motion.span
                    custom={wordIdx}
                    variants={wordRevealVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block text-3xl md:text-5xl font-mono tracking-widest text-neutral-500 font-bold dark:text-neutral-500 light:text-slate-400"
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>

          {/* Supporting Copy */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg dark:text-darkTextSecondary light:text-lightTextSecondary max-w-lg leading-relaxed font-sans"
          >
            {personalInfo.aboutCopy}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
            <MagneticButton strength={0.15}>
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="px-8 py-3.5 bg-accentViolet hover:bg-accentViolet/90 text-white rounded-full font-mono text-xs tracking-wider transition-colors shadow-lg shadow-accentViolet/25 flex items-center gap-2 focus-visible-ring"
              >
                VIEW PROJECTS <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.15}>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume (opens in a new tab)"
                className="px-8 py-3.5 border rounded-full font-mono text-xs tracking-wider transition-colors flex items-center gap-2 focus-visible-ring dark:border-[#22222a] dark:text-white dark:hover:bg-[#121216] light:border-slate-200 light:text-slate-700 light:hover:bg-slate-50"
              >
                RESUME <ArrowUpRight className="w-4 h-4" />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center space-x-6 pt-6 text-neutral-500">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accentViolet transition-colors p-1.5 focus-visible-ring rounded"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accentViolet transition-colors p-1.5 focus-visible-ring rounded"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accentViolet transition-colors p-1.5 focus-visible-ring rounded"
              title="LeetCode Profile"
              aria-label="LeetCode Profile"
            >
              <LeetcodeIcon className="w-5 h-5 fill-current" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 font-mono text-[9px] tracking-[0.2em] text-neutral-500 select-none">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
}

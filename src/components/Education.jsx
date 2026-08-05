import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { education } from "../data/portfolioData";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full select-none text-left">
      <SectionHeader
        number="04 / EDUCATION"
        title="ACADEMIC BACKGROUND."
      />

      <div className="max-w-3xl relative pl-8 md:pl-12">
        {/* Animated timeline bar track */}
        <div className="absolute left-3.5 top-0 bottom-0 w-[1px] bg-neutral-200 dark:bg-neutral-850" />
        
        {/* Animated timeline bar filler */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute left-3.5 top-0 w-[1px] bg-accentViolet origin-top"
        />

        {/* Timeline Node Content Card */}
        <div className="relative">
          {/* Timeline bullet dot */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
            className="absolute -left-[28px] md:-left-[44px] top-1.5 w-6 h-6 rounded-full bg-accentViolet border-4 dark:border-darkBg light:border-lightBg flex items-center justify-center text-white"
          >
            <GraduationCap className="w-2.5 h-2.5 text-white" />
          </motion.div>

          {/* Details Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 md:p-8 rounded-2xl border dark:border-neutral-850 light:border-slate-100 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <h4 className="text-lg md:text-xl font-bold font-display uppercase tracking-tight dark:text-darkTextPrimary light:text-lightTextPrimary">
                  {education.institution}
                </h4>
                <div className="text-xs md:text-sm text-neutral-500 font-mono mt-1">
                  {education.location.toUpperCase()}
                </div>
              </div>
              <div className="px-3 py-1 font-mono text-[10px] tracking-widest text-accentViolet bg-accentViolet/10 rounded-full font-bold border dark:border-accentViolet/20 light:border-accentViolet/10 self-start">
                2024 — {education.graduationYear}
              </div>
            </div>

            <div className="space-y-2 border-t dark:border-neutral-800/60 light:border-slate-100 pt-4">
              <div className="text-sm md:text-base font-semibold dark:text-neutral-300 light:text-slate-700">
                {education.degree}
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
                <span>CUMULATIVE CGPA:</span>
                <span className="font-bold text-accentCyan text-sm">{education.cgpa} / 10.0</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

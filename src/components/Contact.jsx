import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import MagneticButton from "./MagneticButton";
import { personalInfo, socials } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full select-none text-left">
      <SectionHeader
        number="05 / CONTACT"
        title="LET'S CONNECT."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Contact Text Columns */}
        <div className="lg:col-span-6 space-y-6">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="text-4xl md:text-7xl font-black font-display tracking-tight leading-none uppercase dark:text-darkTextPrimary light:text-lightTextPrimary text-glow"
          >
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            DIFFERENT.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-base md:text-lg dark:text-darkTextSecondary light:text-lightTextSecondary max-w-md leading-relaxed"
          >
            Have an SDE/Full-Stack opportunity, collaborative project, or a complex engineering problem to solve? Let's talk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-3 text-neutral-400 font-mono text-sm"
          >
            <Mail className="w-4 h-4 text-accentViolet" />
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-accentViolet transition-colors underline underline-offset-4 focus-visible-ring rounded px-1"
            >
              {personalInfo.email}
            </a>
          </motion.div>
        </div>

        {/* Large Magnetic Get In Touch Button Column */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <MagneticButton strength={0.25}>
              <a
                href={socials.emailMailto}
                data-cursor="external"
                className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-accentViolet text-white flex flex-col items-center justify-center font-mono font-bold tracking-widest text-xs md:text-sm hover:scale-105 transition-transform duration-300 shadow-xl shadow-accentViolet/25 focus-visible-ring"
              >
                GET IN TOUCH
                <ArrowUpRight className="w-6 h-6 mt-2 animate-pulse" />
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Footer social links mapping */}
      <div className="flex flex-col sm:flex-row justify-between items-center border-t dark:border-neutral-800/80 light:border-slate-200 mt-20 pt-8 gap-4 text-xs font-mono tracking-widest text-neutral-500">
        <div>© {new Date().getFullYear()} ANUP SAWANT. ALL RIGHTS RESERVED.</div>
        
        <div className="flex space-x-6">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accentViolet transition-colors flex items-center gap-1.5 focus-visible-ring rounded py-1 px-1.5"
            title="GitHub (opens in a new tab)"
            aria-label="GitHub (opens in a new tab)"
          >
            GITHUB <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accentViolet transition-colors flex items-center gap-1.5 focus-visible-ring rounded py-1 px-1.5"
            title="LinkedIn (opens in a new tab)"
            aria-label="LinkedIn (opens in a new tab)"
          >
            LINKEDIN <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href={socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accentViolet transition-colors flex items-center gap-1.5 focus-visible-ring rounded py-1 px-1.5"
            title="LeetCode (opens in a new tab)"
            aria-label="LeetCode (opens in a new tab)"
          >
            LEETCODE <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}

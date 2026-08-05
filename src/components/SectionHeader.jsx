import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ number, title, subtitle }) {
  return (
    <div className="mb-12 md:mb-20 text-left select-none">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-mono text-xs md:text-sm tracking-widest text-accentViolet font-bold mb-4 uppercase"
      >
        {number}
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="text-3xl md:text-6xl font-black font-display tracking-tight leading-none uppercase max-w-4xl dark:text-darkTextPrimary light:text-lightTextPrimary"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mt-4 text-sm md:text-base dark:text-darkTextSecondary light:text-lightTextSecondary max-w-xl font-mono uppercase tracking-wider"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import ProjectVisual from "./ProjectVisual";
import MagneticButton from "./MagneticButton";
import { socials as defaultSocials } from "../data/portfolioData";

export default function ProjectCard({ project, index }) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, px: 0, py: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Large alternating layout flag
  const isAlternate = index % 2 === 1;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set CSS custom properties for spotlight tracking
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth tilt (constrained to 3 degrees max)
    const rotateX = -((y - centerY) / centerY) * 3;
    const rotateY = ((x - centerX) / centerX) * 3;

    // Parallax depth offset coordinates (10px max shift)
    const px = ((x - centerX) / centerX) * 8;
    const py = ((y - centerY) / centerY) * 8;

    setTilt({ rotateX, rotateY, px, py });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0, px: 0, py: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Safe fallback for GitHub link config
  const githubLink = project.github || defaultSocials.github;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      data-cursor="project"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: isHovered 
          ? "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)"
          : "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
      }}
      className="glass-card relative rounded-3xl p-6 md:p-10 select-none overflow-hidden group cursor-default w-full"
    >
      {/* Spotlight tracking layer */}
      <div className="absolute inset-0 radial-spotlight pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Grid container: Alternates columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Project Details Panel */}
        <div className={`col-span-12 lg:col-span-6 text-left flex flex-col space-y-6 ${
          isAlternate ? "lg:order-2 lg:pl-6" : "lg:order-1 lg:pr-6"
        }`}>
          
          {/* Number & Name Tagline */}
          <div className="flex items-baseline space-x-4">
            <motion.span
              style={{
                transform: `translate3d(${isHovered ? tilt.px * -0.5 : 0}px, ${isHovered ? tilt.py * -0.5 : 0}px, 0)`,
                transition: "transform 0.2s ease-out"
              }}
              className="font-mono text-xs md:text-sm font-bold text-accentViolet tracking-widest"
            >
              {project.id}
            </motion.span>
            <h3 className="text-2xl md:text-3xl font-bold font-display uppercase tracking-tight dark:text-darkTextPrimary light:text-lightTextPrimary">
              {project.name}
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base dark:text-darkTextSecondary light:text-lightTextSecondary leading-relaxed">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[9px] font-mono tracking-wider font-semibold border dark:border-neutral-800 light:border-slate-200 dark:bg-neutral-900/40 light:bg-slate-50 dark:text-neutral-400 light:text-slate-600 rounded-full"
              >
                {t.toUpperCase()}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t dark:border-neutral-800/60 light:border-slate-100">
            {/* Live Demo */}
            <MagneticButton strength={0.15}>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="external"
                className="px-6 py-2.5 bg-accentViolet hover:bg-accentViolet/90 text-white rounded-full font-mono text-[10px] tracking-wider transition-all flex items-center gap-2 shadow-md shadow-accentViolet/10 focus-visible-ring"
              >
                LIVE DEMO 
                <motion.span
                  animate={{ x: isHovered ? 2 : 0, y: isHovered ? -2 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.span>
              </a>
            </MagneticButton>

            {/* GitHub - render only if configured or falls back gracefully */}
            {project.github !== undefined && (
              <MagneticButton strength={0.15}>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="external"
                  className="px-6 py-2.5 border rounded-full font-mono text-[10px] tracking-wider transition-all flex items-center gap-2 focus-visible-ring dark:border-neutral-800 dark:text-white dark:hover:bg-[#181820] light:border-slate-200 light:text-slate-700 light:hover:bg-slate-50"
                  aria-label={`View ${project.name} source code on GitHub`}
                >
                  <GithubIcon className="w-3.5 h-3.5" /> CODE
                </a>
              </MagneticButton>
            )}
          </div>
        </div>

        {/* Visual Mockup Panel */}
        <div
          style={{
            transform: `translate3d(${isHovered ? tilt.px * 1.5 : 0}px, ${isHovered ? tilt.py * 1.5 : 0}px, 0)`,
            transition: "transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)"
          }}
          className={`col-span-12 lg:col-span-6 flex items-center justify-center p-2 rounded-2xl bg-neutral-900/5 dark:bg-neutral-950/20 light:bg-slate-100/30 border dark:border-neutral-850 light:border-slate-100 ${
            isAlternate ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <ProjectVisual type={project.visualType} elements={project.elements} image={project.image} />
        </div>

      </div>
    </motion.div>
  );
}

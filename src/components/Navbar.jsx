import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import MagneticButton from "./MagneticButton";
import { personalInfo } from "../data/portfolioData";

const navLinks = [
  { label: "ABOUT", href: "#about", id: "about", num: "01" },
  { label: "PROJECTS", href: "#projects", id: "projects", num: "02" },
  { label: "SKILLS", href: "#skills", id: "skills", num: "03" },
  { label: "EDUCATION", href: "#education", id: "education", num: "04" },
  { label: "CONTACT", href: "#contact", id: "contact", num: "05" }
];

export default function Navbar({ isDark, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for scroll spy
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Detect sections in the center of the viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    // Special case for hero/top of page
    const heroEl = document.getElementById("hero");
    if (heroEl) observer.observe(heroEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "py-4 glass-panel border-b shadow-sm"
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="font-display font-bold text-lg tracking-wider focus-visible-ring rounded py-1 px-2"
          >
            {personalInfo.firstName.toUpperCase()}.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-6 list-none p-0 m-0">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`relative py-2 font-mono text-xs tracking-widest transition-colors focus-visible-ring rounded px-2 ${
                        isActive
                          ? "text-accentViolet font-bold"
                          : "text-neutral-500 hover:text-darkTextPrimary dark:hover:text-darkTextPrimary light:hover:text-lightTextPrimary"
                      }`}
                    >
                      <span className="text-[9px] mr-1 text-neutral-400 dark:text-neutral-600 font-normal">
                        {link.num}
                      </span>
                      {link.label}
                      
                      {/* Active Indicator Underline */}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavLine"
                          className="absolute bottom-0 left-2 right-2 h-[1px] bg-accentViolet"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Separator */}
            <div className="w-[1px] h-4 bg-neutral-800 dark:bg-neutral-800 light:bg-slate-200" />

            {/* Theme Toggle & Resume Button */}
            <div className="flex items-center space-x-4">
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
              
              <MagneticButton strength={0.2}>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Resume (opens in a new tab)"
                  className="px-4 py-2 font-mono text-xs tracking-wider border rounded-full transition-all focus-visible-ring dark:border-[#22222a] dark:text-[#f5f5f7] dark:hover:bg-[#121216] light:border-slate-200 light:text-slate-700 light:hover:bg-slate-100 flex items-center gap-1.5"
                >
                  RESUME <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Mobile Hamburguer Trigger */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-neutral-400 hover:text-white focus-visible-ring rounded"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6 dark:text-neutral-300 light:text-neutral-700" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="fixed inset-0 z-50 bg-[#0a0a0c] text-white flex flex-col justify-between p-8"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <span className="font-display font-bold text-lg tracking-wider">
                {personalInfo.firstName.toUpperCase()}.
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-neutral-400 hover:text-white focus-visible-ring rounded"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav List */}
            <ul className="flex flex-col space-y-6 text-left my-auto list-none p-0">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group block text-4xl font-display font-bold tracking-wider hover:text-accentViolet transition-colors"
                  >
                    <span className="text-xs font-mono font-normal text-neutral-600 mr-4">
                      {link.num}
                    </span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Footer / Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-col space-y-4"
            >
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume (opens in a new tab)"
                className="w-full text-center py-4 font-mono text-sm tracking-widest border border-neutral-800 hover:bg-neutral-900 rounded-full transition-colors flex justify-center items-center gap-2"
              >
                DOWNLOAD RESUME <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className="text-[10px] text-neutral-600 text-center tracking-widest">
                MUMBAI, INDIA
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import PageLoader from "./components/PageLoader";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectShowcase from "./components/ProjectShowcase";
import SkillConstellation from "./components/SkillConstellation";
import ArchitectureDiagram from "./components/ArchitectureDiagram";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import EasterEgg from "./components/EasterEgg";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  // Initialize and persist Theme preferences
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const shouldBeDark = savedTheme 
      ? savedTheme === "dark" 
      : prefersDark;
      
    setIsDark(shouldBeDark);
    
    // Apply styling classes to html/body elements
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const nextTheme = !prev;
      localStorage.setItem("portfolio-theme", nextTheme ? "dark" : "light");
      
      if (nextTheme) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        document.body.classList.add("dark");
        document.body.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        document.body.classList.add("light");
        document.body.classList.remove("dark");
      }
      return nextTheme;
    });
  };

  return (
    <>
      {/* Dynamic Background Noise filter overlay */}
      <div className="noise-bg" />

      {/* Screen Loader sequence */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <PageLoader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Desktop custom cursor */}
      <CustomCursor />

      {/* Interactive Terminal Easter Egg console */}
      <EasterEgg />

      {/* Main Container Shell */}
      {!isLoading && (
        <div className="relative w-full min-h-screen transition-colors duration-300 dark:bg-darkBg light:bg-lightBg">
          
          {/* Scroll progress border indicator */}
          <ScrollProgress />

          {/* Navigation Bar */}
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />

          {/* Page Sections */}
          <main className="w-full relative">
            <Hero />
            <About />
            <ProjectShowcase />
            <SkillConstellation />
            <ArchitectureDiagram />
            <Achievements />
            <Education />
            <Contact />
          </main>

        </div>
      )}
    </>
  );
}

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

  // Permanently initialize and force Dark Theme
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }, []);

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
        <div className="relative w-full min-h-screen bg-darkBg text-darkTextPrimary">
          
          {/* Scroll progress border indicator */}
          <ScrollProgress />

          {/* Navigation Bar */}
          <Navbar />

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

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState("normal"); // 'normal', 'hover', 'project', 'external'
  const [isVisible, setIsVisible] = useState(false);

  // Position of core pointer
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for follower ring
  const springConfig = { damping: 32, stiffness: 280, mass: 0.45 };
  const followerX = useSpring(cursorX, springConfig);
  const followerY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if touch device
    const isTouchDevice = 
      "ontouchstart" in window || 
      navigator.maxTouchPoints > 0 || 
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Analyze hovered element
      const target = e.target;
      if (!target) return;

      const hoverElement = target.closest("a, button, [role='button'], .magnetic-wrap, .theme-toggle-btn");
      const projectCard = target.closest("[data-cursor='project']");
      const externalLink = target.closest("[data-cursor='external']") || (hoverElement && hoverElement.getAttribute("target") === "_blank");

      if (projectCard) {
        setCursorType("project");
      } else if (externalLink) {
        setCursorType("external");
      } else if (hoverElement) {
        setCursorType("hover");
      } else {
        setCursorType("normal");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Center dot (fast) */}
      <motion.div
        className="fixed w-1 h-1 bg-accentViolet rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Follower ring (smooth & minimal) */}
      <motion.div
        className="fixed border rounded-full pointer-events-none z-[9998]"
        animate={{
          width: cursorType === "normal" ? 18 : cursorType === "hover" ? 36 : 44,
          height: cursorType === "normal" ? 18 : cursorType === "hover" ? 36 : 44,
          borderColor:
            cursorType === "project"
              ? "rgb(139, 92, 246)" // violet for project card borders
              : cursorType === "external"
              ? "rgb(6, 182, 212)" // cyan for external link hover borders
              : "rgba(139, 92, 246, 0.4)", // light violet standard tracking border
          borderWidth: cursorType === "normal" ? "1px" : "1.5px",
        }}
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
    </>
  );
}

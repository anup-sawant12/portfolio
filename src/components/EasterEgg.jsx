import React, { useEffect, useState, useRef } from "react";
import { X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, achievements, allSkillsList } from "../data/portfolioData";

export default function EasterEgg() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    "Welcome to SDE terminal console. Type 'help' for options.",
    "",
    "> identity",
    personalInfo.name,
    "",
    "> role",
    personalInfo.role,
    "",
    "> status",
    "Building..."
  ]);
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef(null);
  const bufferRef = useRef("");
  const outputEndRef = useRef(null);

  // Monitor typing sequence "anup"
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in standard inputs/fields
      if (
        document.activeElement.tagName === "INPUT" ||
        document.activeElement.tagName === "TEXTAREA"
      ) {
        return;
      }

      bufferRef.current += e.key.toLowerCase();
      // Keep only last 4 characters
      if (bufferRef.current.length > 4) {
        bufferRef.current = bufferRef.current.slice(-4);
      }

      if (bufferRef.current === "anup") {
        setIsOpen(true);
        bufferRef.current = ""; // reset buffer
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto scroll console lines
  useEffect(() => {
    if (outputEndRef.current) {
      outputEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  // Focus input automatically
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let response = [];
    switch (cmd) {
      case "help":
        response = [
          "Available queries:",
          "  identity     - Prints candidate full name",
          "  role         - Prints target engineering role",
          "  stats        - Prints DSA achievements count",
          "  skills       - Prints tech stack clusters",
          "  clear        - Clears history console",
          "  exit         - Terminals overlay close"
        ];
        break;
      case "identity":
        response = [personalInfo.name];
        break;
      case "role":
        response = [personalInfo.role];
        break;
      case "stats":
        response = [
          `DSA Solved: ${achievements.dsaSolvedCount}+`,
          `LeetCode Solved: ${achievements.leetcodeCount}+`
        ];
        break;
      case "skills":
        response = ["Skills inventory:", allSkillsList.slice(0, 12).join(", ") + "..."];
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      case "exit":
        setIsOpen(false);
        setInputVal("");
        return;
      default:
        response = [`Command not found: '${cmd}'. Type 'help' for options.`];
    }

    setHistory((prev) => [...prev, `> ${inputVal}`, ...response, ""]);
    setInputVal("");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md font-mono select-none">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="w-full max-w-lg h-[380px] bg-[#0a0a0c] border border-neutral-800 rounded-2xl flex flex-col overflow-hidden shadow-2xl"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-900 bg-neutral-950/60">
            <div className="flex items-center space-x-2 text-[10px] text-accentViolet font-bold tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>ANUP.SAWANT@SDE_SHELL</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded text-neutral-400 hover:text-white transition-colors"
              aria-label="Close terminal console"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal Console Logs */}
          <div className="flex-grow p-4 overflow-y-auto text-[11px] text-neutral-300 text-left space-y-1 scrollbar-thin scrollbar-thumb-neutral-800">
            {history.map((line, idx) => (
              <div key={idx} className="min-h-[12px] leading-relaxed">
                {line}
              </div>
            ))}
            <div ref={outputEndRef} />
          </div>

          {/* Console Command Input */}
          <form
            onSubmit={handleCommandSubmit}
            className="flex items-center px-4 py-2 border-t border-neutral-900 bg-neutral-950/20 text-neutral-300"
          >
            <span className="text-accentViolet mr-2 font-bold">&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="w-full bg-transparent border-none outline-none focus:ring-0 text-[11px] text-white py-1"
              placeholder="type commands here..."
              autoFocus
            />
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

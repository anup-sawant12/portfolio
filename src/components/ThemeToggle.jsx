import React from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full glass-panel transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-accentViolet select-none border dark:border-[#22222a] light:border-slate-200"
      aria-label="Toggle visual theme"
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 fill-amber-400/20" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 fill-slate-700/10" />
      )}
    </button>
  );
}

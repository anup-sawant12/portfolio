/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBg: "#0a0a0c",
        darkSurface: "#121216",
        darkBorder: "#22222a",
        darkTextPrimary: "#f5f5f7",
        darkTextSecondary: "#94a3b8",
        
        lightBg: "#f9f9fb",
        lightSurface: "#ffffff",
        lightBorder: "#e2e8f0",
        lightTextPrimary: "#0f172a",
        lightTextSecondary: "#475569",

        accentBlue: "#4f46e5",
        accentViolet: "#8b5cf6",
        accentCyan: "#06b6d4"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["Space Mono", "monospace"]
      },
      animation: {
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "float": "float 6s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  },
  plugins: []
}

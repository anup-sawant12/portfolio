import React from "react";
import { motion } from "framer-motion";
import { Monitor, Cpu, Globe, Server, Database } from "lucide-react";

export default function ArchitectureDiagram() {
  const steps = [
    { label: "CLIENT", icon: Monitor, tech: "User Browser" },
    { label: "REACT", icon: Cpu, tech: "Vite Front-end" },
    { label: "REST API", icon: Globe, tech: "JSON Request" },
    { label: "NODE / EXPRESS", icon: Server, tech: "APIs & Logic" },
    { label: "DATABASE", icon: Database, tech: "Prisma & SQL/NoSQL" }
  ];

  return (
    <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto w-full select-none">
      <div className="glass-card p-8 md:p-12 rounded-3xl border dark:border-neutral-850 light:border-slate-205 text-center relative overflow-hidden">
        {/* Spotlight effect background */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accentViolet/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="max-w-2xl mx-auto mb-10 text-center">
          <div className="font-mono text-xs text-accentViolet font-bold tracking-widest uppercase mb-2">
            SYSTEM ARCHITECTURE
          </div>
          <h3 className="text-xl md:text-2xl font-bold font-display uppercase tracking-tight dark:text-darkTextPrimary light:text-lightTextPrimary">
            FULL-STACK DATA PIPELINE
          </h3>
          <p className="text-xs md:text-sm text-neutral-500 mt-2">
            How data flows between the front-end interface, API endpoints, and the persistent storage layers.
          </p>
        </div>

        {/* Responsive layout container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative max-w-5xl mx-auto pt-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <React.Fragment key={step.label}>
                {/* Node Box */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center p-5 rounded-2xl border dark:border-neutral-800 light:border-slate-200 dark:bg-[#121216]/65 light:bg-white w-40 text-center shadow-sm relative z-10 glass-panel"
                >
                  <div className="p-3 rounded-xl bg-accentViolet/10 text-accentViolet dark:text-accentViolet mb-3 border dark:border-accentViolet/20 light:border-accentViolet/10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-mono text-[10px] tracking-wider font-bold dark:text-darkTextPrimary light:text-lightTextPrimary">
                    {step.label}
                  </div>
                  <div className="text-[9px] text-neutral-500 mt-1 uppercase font-medium">
                    {step.tech}
                  </div>
                </motion.div>

                {/* Connecting Line (Only draw if not the last item) */}
                {!isLast && (
                  <div className="flex-grow flex items-center justify-center relative w-full lg:w-auto h-12 lg:h-auto min-w-[20px] md:min-w-[40px]">
                    {/* SVG Connector containing Dash-Array animations representing packets */}
                    <svg className="w-6 lg:w-full h-full lg:h-6 overflow-visible" fill="none">
                      {/* Desktop connector (horizontal) */}
                      <path
                        className="hidden lg:block stroke-neutral-200 dark:stroke-neutral-800"
                        d="M 0 12 L 100 12"
                        strokeWidth="2"
                      />
                      <path
                        className="hidden lg:block stroke-accentViolet"
                        d="M 0 12 L 100 12"
                        strokeWidth="2"
                        strokeDasharray="6, 12"
                        style={{
                          animation: "dashHorizontal 1.5s linear infinite"
                        }}
                      />

                      {/* Mobile connector (vertical) */}
                      <path
                        className="lg:hidden stroke-neutral-200 dark:stroke-neutral-800"
                        d="M 12 0 L 12 100"
                        strokeWidth="2"
                      />
                      <path
                        className="lg:hidden stroke-accentViolet"
                        d="M 12 0 L 12 100"
                        strokeWidth="2"
                        strokeDasharray="6, 12"
                        style={{
                          animation: "dashVertical 1.5s linear infinite"
                        }}
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Inject custom SVG Dash Animations */}
      <style>{`
        @keyframes dashHorizontal {
          to {
            stroke-dashoffset: -18;
          }
        }
        @keyframes dashVertical {
          to {
            stroke-dashoffset: -18;
          }
        }
      `}</style>
    </section>
  );
}

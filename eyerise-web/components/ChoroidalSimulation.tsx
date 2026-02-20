"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const phases = [
  { label: "Work", color: "bg-sky-400" },
  { label: "Focus", color: "bg-sky-500" },
  { label: "Rest", color: "bg-amber-400" },
  { label: "Evening", color: "bg-amber-500" },
  { label: "Night", color: "bg-amber-600" },
];

export default function ChoroidalSimulation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(inView);
  }, [inView]);

  return (
    <div ref={ref} className="max-w-3xl mx-auto">
      <motion.div
        className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-zinc-700 shadow-lg shadow-slate-200/50 dark:shadow-none overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
          Circadian <span className="text-amber-600">Sync</span>
        </h3>
        <p className="text-sm text-slate-500 dark:text-gray-400 mb-8">
          EyeRise aligns your screen&apos;s color temperature with your body&apos;s natural rhythm —
          cooler tones by day, warmer tones as the sun sets.
        </p>

        <div className="relative h-48 flex flex-col justify-center bg-slate-50 dark:bg-zinc-800/50 rounded-xl border border-slate-200 dark:border-zinc-600 overflow-hidden">
          {/* Gradient bar representing tint shift over the day */}
          <div className="absolute inset-0 flex">
            <div
              className="flex-1 transition-opacity duration-500"
              style={{
                background: "linear-gradient(to right, #38bdf8 0%, #0ea5e9 25%, #f59e0b 60%, #d97706 85%, #b45309 100%)",
                opacity: active ? 0.35 : 0.2,
              }}
            />
          </div>

          {/* Timeline with phase markers */}
          <div className="relative flex items-center justify-between px-4 sm:px-8 h-16">
            <motion.div
              className="flex items-center gap-2 text-slate-600 dark:text-gray-400"
              initial={{ opacity: 0, x: -10 }}
              animate={active ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Sun className="w-5 h-5 text-sky-500" />
              <span className="text-xs font-medium">Morning</span>
            </motion.div>
            {phases.map((phase, i) => (
              <motion.div
                key={phase.label}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 5 }}
                animate={active ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
              >
                <div
                  className={`w-3 h-3 rounded-full ${phase.color} shadow-sm`}
                  style={{ boxShadow: active ? `0 0 8px currentColor` : "none" }}
                />
                <span className="text-[10px] font-medium text-slate-600 dark:text-gray-400 mt-1 hidden sm:block">
                  {phase.label}
                </span>
              </motion.div>
            ))}
            <motion.div
              className="flex items-center gap-2 text-slate-600 dark:text-gray-400"
              initial={{ opacity: 0, x: 10 }}
              animate={active ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <Moon className="w-5 h-5 text-amber-500" />
              <span className="text-xs font-medium">Night</span>
            </motion.div>
          </div>

          {/* Time labels */}
          <div className="relative flex justify-between px-4 sm:px-8 mt-2 text-xs text-slate-500 dark:text-gray-500">
            <span>7 AM</span>
            <span>12 PM</span>
            <span>6 PM</span>
            <span>11 PM</span>
          </div>
        </div>

        <motion.div
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-600"
          animate={{ opacity: active ? 1 : 0.7 }}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-amber-500"
            animate={active ? { scale: [1, 1.2, 1], opacity: [1, 0.8, 1] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
            {active
              ? "Your screen adapts automatically — no manual switching needed"
              : "Scroll into view to see how it works"}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

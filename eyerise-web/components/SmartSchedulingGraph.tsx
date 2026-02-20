"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import AnimatedReveal from "@/components/AnimatedReveal";
import { Sunrise, Sunset } from "lucide-react";

const times = ["7 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM", "11 PM"];
// S-curve: low morning (more blue allowed), high evening (strong reduction) — aligns with circadian need for blue in AM and protection in PM
const points = [
  { x: 0, y: 15 },
  { x: 14, y: 18 },
  { x: 28, y: 25 },
  { x: 42, y: 45 },
  { x: 57, y: 72 },
  { x: 71, y: 88 },
  { x: 85, y: 95 },
  { x: 100, y: 98 },
];
const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${100 - p.y}`).join(" ");
const areaD = `${pathD} L 100 100 L 0 100 Z`;

export default function SmartSchedulingSection() {
  return (
    <Section className="bg-black">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Expanded header with graphics */}
        <motion.div
          className="text-center mb-10 w-full max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-4">
            <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400">
              <Sunrise className="w-6 h-6 sm:w-7 sm:h-7" />
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white text-balance">
              Smart Scheduling
            </h2>
            <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400">
              <Sunset className="w-6 h-6 sm:w-7 sm:h-7" />
            </span>
          </div>
          <div className="h-1 w-24 sm:w-32 mx-auto rounded-full bg-gradient-to-r from-sky-400 via-amber-400 to-amber-500 mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 text-balance max-w-4xl mx-auto leading-relaxed">
            Circadian-aligned blue light reduction. EyeRise adjusts screen spectrum by time of day so exposure supports wakefulness when you need it and protects melatonin and sleep as the day winds down.
          </p>
        </motion.div>
        <AnimatedReveal>
          <div className="w-full">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 dark:border-zinc-700 shadow-lg">
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                  Blue light reduction (%)
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Y-axis: % of short-wavelength (blue) light reduced. Higher values = warmer display, less circadian disruption in evening.
                </p>
              </div>
              <div className="relative h-80 sm:h-96 overflow-hidden">
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full"
                >
                  <defs>
                    <linearGradient id="graphFill" x1="0" x2="0" y1="1" y2="0">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.35" />
                      <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#f97316" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="graphStroke" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d={areaD}
                    fill="url(#graphFill)"
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      opacity: { delay: 1.2, duration: 4, repeat: Infinity, ease: "easeInOut" },
                    }}
                    style={{ transformOrigin: "bottom" }}
                    animate={{ opacity: [1, 0.88, 1] }}
                  />
                  <motion.path
                    d={pathD}
                    fill="none"
                    stroke="url(#graphStroke)"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                  {/* Moving dashed highlight along the curve */}
                  <motion.path
                    d={pathD}
                    fill="none"
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="5 10"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    animate={{ strokeDashoffset: [0, -30] }}
                    transition={{
                      pathLength: { duration: 1, ease: "easeOut" },
                      strokeDashoffset: { duration: 2.5, repeat: Infinity, ease: "linear" },
                    }}
                  />
                </svg>
              </div>
              <div className="flex justify-between mt-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span>Time of day</span>
                {times.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-zinc-700">
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  What this curve means
                </h4>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex gap-2">
                    <span className="text-sky-500 font-medium shrink-0">Morning (left):</span>
                    <span>Low reduction keeps enough blue light to support alertness and circadian entrainment without overexposing the retina.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500 font-medium shrink-0">Evening (right):</span>
                    <span>High reduction cuts short-wavelength light so melatonin can rise and sleep architecture is less disrupted.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-slate-500 font-medium shrink-0">Evidence:</span>
                    <span>Research links evening blue light exposure to delayed sleep onset and reduced melatonin; shifting display spectrum is a recognized mitigation (see Clinical Evidence).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </Section>
  );
}

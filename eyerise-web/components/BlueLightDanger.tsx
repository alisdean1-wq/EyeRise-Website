"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Shield } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedReveal from "@/components/AnimatedReveal";

interface BlueLightDangerProps {
  variant?: "light" | "dark";
}

export default function BlueLightDanger({ variant = "light" }: BlueLightDangerProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={
        isDark
          ? "relative py-12 md:py-16 bg-[#050505] overflow-hidden"
          : "py-12 bg-gradient-to-b from-white to-blue-50/30"
      }
    >
      {isDark && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(38, 92%, 50% / 0.15) 0%, hsl(35, 92%, 55% / 0.08) 40%, transparent 70%)",
          }}
        />
      )}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isDark ? "relative z-10" : ""}`}>
        {isDark ? (
          <SectionHeader
            title="The Invisible Danger Hitting Your Eyes 10,000+ Times Per Day"
            subtitle="Your monitor is firing high-energy blue light directly into your retinas for 8+ hours a day. EyeRise neutralizes the spike without sacrificing clarity."
          />
        ) : (
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              The Invisible Danger Hitting Your Eyes 10,000+ Times Per Day
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-slate-600">
              Your monitor is firing high-energy blue light directly into your
              retinas for 8+ hours a day. EyeRise neutralizes the spike without
              sacrificing clarity.
            </p>
          </motion.div>
        )}

        {isDark ? (
          <AnimatedReveal>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* WITHOUT EyeRise - Stressed */}
          <motion.div
            className={
              isDark
                ? "relative bg-white/5 backdrop-blur border border-red-500/30 rounded-2xl p-8"
                : "relative bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200"
            }
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3
                className={
                  isDark
                    ? "text-2xl font-bold text-red-400"
                    : "text-2xl font-bold text-red-900"
                }
              >
                Without EyeRise
              </h3>
            </div>

            <div className="relative bg-slate-800 rounded-lg p-4 mb-6 h-48 flex items-center justify-center overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 200"
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.path
                    key={i}
                    d={`M ${i * 80} 100 L ${i * 80 + 20} 80 L ${i * 80 + 40} 120 L ${i * 80 + 60} 90 L ${i * 80 + 80} 110`}
                    stroke="#4299E1"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: 1,
                      opacity: [0.4, 0.8, 0.4],
                      x: [0, 20, 0],
                    }}
                    transition={{
                      pathLength: { duration: 1, delay: i * 0.1 },
                      opacity: { duration: 2, repeat: Infinity, delay: i * 0.1 },
                      x: { duration: 3, repeat: Infinity, delay: i * 0.1 },
                    }}
                  />
                ))}
                <g transform="translate(200, 100)">
                  <motion.ellipse
                    cx="0"
                    cy="0"
                    rx="30"
                    ry="25"
                    fill="white"
                    stroke="#EF4444"
                    strokeWidth="3"
                    animate={{
                      scaleX: [1, 0.9, 1],
                      scaleY: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="12"
                    fill="#EF4444"
                    animate={{ r: [12, 14, 12] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.path
                    d="M -40 -15 L -35 -20 M -40 15 L -35 20"
                    stroke="#EF4444"
                    strokeWidth="2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </g>
              </svg>
            </div>

            <ul className="space-y-3">
              <li
                className={`flex items-start gap-2 ${
                  isDark ? "text-zinc-300" : "text-red-900"
                }`}
              >
                <span className="text-red-500 font-bold">×</span>
                <span className="font-medium">
                  High-energy blue light spikes
                </span>
              </li>
              <li
                className={`flex items-start gap-2 ${
                  isDark ? "text-zinc-300" : "text-red-900"
                }`}
              >
                <span className="text-red-500 font-bold">×</span>
                <span className="font-medium">
                  Direct retinal bombardment
                </span>
              </li>
              <li
                className={`flex items-start gap-2 ${
                  isDark ? "text-zinc-300" : "text-red-900"
                }`}
              >
                <span className="text-red-500 font-bold">×</span>
                <span className="font-medium">
                  Circadian rhythm disruption
                </span>
              </li>
            </ul>
          </motion.div>

          {/* WITH EyeRise - Relaxed */}
          <motion.div
            className={
              isDark
                ? "relative bg-white/5 backdrop-blur border border-emerald-500/30 rounded-2xl p-8"
                : "relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200"
            }
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3
                className={
                  isDark
                    ? "text-2xl font-bold text-emerald-400"
                    : "text-2xl font-bold text-green-900"
                }
              >
                With EyeRise
              </h3>
            </div>

            <div className="relative bg-slate-800 rounded-lg p-4 mb-6 h-48 flex items-center justify-center overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 200"
              >
                {[0, 1, 2].map((i) => (
                  <motion.path
                    key={i}
                    d={`M 0 ${100 + i * 15} Q 100 ${90 + i * 15} 200 ${100 + i * 15} T 400 ${100 + i * 15}`}
                    stroke="#F6AD55"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: 1,
                      opacity: [0.3, 0.6, 0.3],
                      x: [0, -50, 0],
                    }}
                    transition={{
                      pathLength: { duration: 1, delay: i * 0.15 },
                      opacity: {
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.15,
                      },
                      x: { duration: 4, repeat: Infinity, ease: "linear" },
                    }}
                  />
                ))}
                <g transform="translate(200, 100)">
                  <motion.ellipse
                    cx="0"
                    cy="0"
                    rx="30"
                    ry="25"
                    fill="white"
                    stroke="#10B981"
                    strokeWidth="3"
                    animate={{ scaleY: [1, 0.3, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                  <circle cx="0" cy="0" r="12" fill="#10B981" />
                  <motion.circle
                    cx="-25"
                    cy="-20"
                    r="3"
                    fill="#F6AD55"
                    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.circle
                    cx="25"
                    cy="-20"
                    r="3"
                    fill="#F6AD55"
                    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </g>
              </svg>
            </div>

            <ul className="space-y-3">
              <li
                className={`flex items-start gap-2 ${
                  isDark ? "text-zinc-300" : "text-green-900"
                }`}
              >
                <span className="text-green-500 font-bold">✓</span>
                <span className="font-medium">
                  Filtered, warm light spectrum
                </span>
              </li>
              <li
                className={`flex items-start gap-2 ${
                  isDark ? "text-zinc-300" : "text-green-900"
                }`}
              >
                <span className="text-green-500 font-bold">✓</span>
                <span className="font-medium">Protected retinal health</span>
              </li>
              <li
                className={`flex items-start gap-2 ${
                  isDark ? "text-zinc-300" : "text-green-900"
                }`}
              >
                <span className="text-green-500 font-bold">✓</span>
                <span className="font-medium">Natural circadian rhythm</span>
              </li>
            </ul>
          </motion.div>
        </div>
          </AnimatedReveal>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* WITHOUT EyeRise - Stressed */}
          <motion.div
            className="relative bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-red-900">Without EyeRise</h3>
            </div>
            <div className="relative bg-slate-800 rounded-lg p-4 mb-6 h-48 flex items-center justify-center overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.path
                    key={i}
                    d={`M ${i * 80} 100 L ${i * 80 + 20} 80 L ${i * 80 + 40} 120 L ${i * 80 + 60} 90 L ${i * 80 + 80} 110`}
                    stroke="#4299E1"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0.4, 0.8, 0.4], x: [0, 20, 0] }}
                    transition={{ pathLength: { duration: 1, delay: i * 0.1 }, opacity: { duration: 2, repeat: Infinity, delay: i * 0.1 }, x: { duration: 3, repeat: Infinity, delay: i * 0.1 } }}
                  />
                ))}
                <g transform="translate(200, 100)">
                  <motion.ellipse cx="0" cy="0" rx="30" ry="25" fill="white" stroke="#EF4444" strokeWidth="3" animate={{ scaleX: [1, 0.9, 1], scaleY: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                  <motion.circle cx="0" cy="0" r="12" fill="#EF4444" animate={{ r: [12, 14, 12] }} transition={{ duration: 2, repeat: Infinity }} />
                  <motion.path d="M -40 -15 L -35 -20 M -40 15 L -35 20" stroke="#EF4444" strokeWidth="2" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} />
                </g>
              </svg>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-red-900"><span className="text-red-500 font-bold">×</span><span className="font-medium">High-energy blue light spikes</span></li>
              <li className="flex items-start gap-2 text-red-900"><span className="text-red-500 font-bold">×</span><span className="font-medium">Direct retinal bombardment</span></li>
              <li className="flex items-start gap-2 text-red-900"><span className="text-red-500 font-bold">×</span><span className="font-medium">Circadian rhythm disruption</span></li>
            </ul>
          </motion.div>
          <motion.div
            className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-900">With EyeRise</h3>
            </div>
            <div className="relative bg-slate-800 rounded-lg p-4 mb-6 h-48 flex items-center justify-center overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                {[0, 1, 2].map((i) => (
                  <motion.path key={i} d={`M 0 ${100 + i * 15} Q 100 ${90 + i * 15} 200 ${100 + i * 15} T 400 ${100 + i * 15}`} stroke="#F6AD55" strokeWidth="2" fill="none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3], x: [0, -50, 0] }} transition={{ pathLength: { duration: 1, delay: i * 0.15 }, opacity: { duration: 3, repeat: Infinity, delay: i * 0.15 }, x: { duration: 4, repeat: Infinity, ease: "linear" } }} />
                ))}
                <g transform="translate(200, 100)">
                  <motion.ellipse cx="0" cy="0" rx="30" ry="25" fill="white" stroke="#10B981" strokeWidth="3" animate={{ scaleY: [1, 0.3, 1] }} transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }} />
                  <circle cx="0" cy="0" r="12" fill="#10B981" />
                  <motion.circle cx="-25" cy="-20" r="3" fill="#F6AD55" animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
                  <motion.circle cx="25" cy="-20" r="3" fill="#F6AD55" animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                </g>
              </svg>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-green-900"><span className="text-green-500 font-bold">✓</span><span className="font-medium">Filtered, warm light spectrum</span></li>
              <li className="flex items-start gap-2 text-green-900"><span className="text-green-500 font-bold">✓</span><span className="font-medium">Protected retinal health</span></li>
              <li className="flex items-start gap-2 text-green-900"><span className="text-green-500 font-bold">✓</span><span className="font-medium">Natural circadian rhythm</span></li>
            </ul>
          </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

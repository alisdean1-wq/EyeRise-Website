"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedReveal from "@/components/AnimatedReveal";

const comparisons = [
  {
    without: "3:00 PM Crash: Brain fog and fatigue",
    with: "All-Day Flow: Sustained mental energy",
  },
  {
    without: 'The "Sand" Feeling: Dry, itchy, burning eyes',
    with: "Hydrated Focus: Natural blink rate maintained",
  },
  {
    without: "Tossing & Turning: Blue light kills melatonin",
    with: "Deep Sleep: Wind down naturally after work",
  },
  {
    without: "Digital Eye Strain: Headaches after 4 hours",
    with: "Comfort Zone: Work longer without pain",
  },
  {
    without: "Screen Addiction: Can't look away despite discomfort",
    with: "Balanced Usage: Healthier screen relationship",
  },
];

interface PainVsGainTableProps {
  variant?: "light" | "dark";
}

export default function PainVsGainTable({ variant = "light" }: PainVsGainTableProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={
        isDark
          ? "relative py-12 md:py-16 bg-black overflow-hidden"
          : "py-12 bg-gradient-to-b from-blue-50/30 to-white"
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
            title="The Cost of Doing Nothing"
            subtitle="Every day without protection is another day of damage. Here's what you're choosing between."
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
              The Cost of Doing Nothing
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-slate-600">
              Every day without protection is another day of damage. Here's what
              you're choosing between.
            </p>
          </motion.div>
        )}

        {isDark ? (
        <AnimatedReveal>
        {/* Desktop: Table layout */}
        <div className="hidden md:block">
          <div
            className={
              isDark
                ? "bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden"
                : "bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200"
            }
          >
            <div
              className={
                isDark
                  ? "grid grid-cols-2 border-b border-white/10"
                  : "grid grid-cols-2 bg-gradient-to-r from-slate-100 to-slate-50"
              }
            >
              <div
                className={
                  isDark
                    ? "p-6 border-r border-red-500/20"
                    : "p-6 border-r border-slate-200"
                }
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <X className="w-6 h-6 text-white" />
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
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
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
              </div>
            </div>

            {comparisons.map((comparison, index) => (
              <motion.div
                key={index}
                className={
                  isDark
                    ? "grid grid-cols-2 border-t border-white/10 hover:bg-white/5 transition-colors group"
                    : "grid grid-cols-2 border-t border-slate-200 hover:bg-slate-50 transition-colors group"
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div
                  className={
                    isDark
                      ? "p-6 border-r border-white/10 bg-red-950/20 group-hover:bg-red-950/30 transition-colors"
                      : "p-6 border-r border-slate-200 bg-red-50/50 group-hover:bg-red-50 transition-colors"
                  }
                >
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <p
                      className={
                        isDark
                          ? "text-zinc-300 leading-relaxed"
                          : "text-slate-700 leading-relaxed"
                      }
                    >
                      {comparison.without}
                    </p>
                  </div>
                </div>
                <div
                  className={
                    isDark
                      ? "p-6 bg-emerald-950/20 group-hover:bg-emerald-950/30 transition-colors"
                      : "p-6 bg-green-50/50 group-hover:bg-green-50 transition-colors"
                  }
                >
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p
                      className={
                        isDark
                          ? "text-zinc-300 leading-relaxed font-medium"
                          : "text-slate-700 leading-relaxed font-medium"
                      }
                    >
                      {comparison.with}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Card layout */}
        <div className="md:hidden space-y-6">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={index}
              className={
                isDark
                  ? "bg-white/5 backdrop-blur border border-white/10 rounded-xl overflow-hidden"
                  : "bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200"
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div
                className={
                  isDark
                    ? "p-6 border-b border-white/10 bg-red-950/20"
                    : "p-6 bg-red-50 border-b border-slate-200"
                }
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <X className="w-5 h-5 text-white" />
                  </div>
                  <h4
                    className={
                      isDark
                        ? "font-bold text-red-400"
                        : "font-bold text-red-900"
                    }
                  >
                    Without EyeRise
                  </h4>
                </div>
                <p
                  className={
                    isDark ? "text-zinc-400 pl-10" : "text-slate-700 pl-10"
                  }
                >
                  {comparison.without}
                </p>
              </div>

              <div
                className={
                  isDark ? "p-6 bg-emerald-950/20" : "p-6 bg-green-50"
                }
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <h4
                    className={
                      isDark
                        ? "font-bold text-emerald-400"
                        : "font-bold text-green-900"
                    }
                  >
                    With EyeRise
                  </h4>
                </div>
                <p
                  className={
                    isDark
                      ? "text-zinc-400 font-medium pl-10"
                      : "text-slate-700 font-medium pl-10"
                  }
                >
                  {comparison.with}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p
            className={`text-lg mb-6 ${
              isDark ? "text-zinc-400" : "text-slate-600"
            }`}
          >
            The choice is clear. Start protecting your eyes today.
          </p>
        </motion.div>
        </AnimatedReveal>
        ) : (
        <>
        {/* Desktop: Table layout */}
        <div className="hidden md:block">
          <div
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200"
          >
            <div className="grid grid-cols-2 bg-gradient-to-r from-slate-100 to-slate-50">
              <div className="p-6 border-r border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <X className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900">Without EyeRise</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900">With EyeRise</h3>
                </div>
              </div>
            </div>
            {comparisons.map((comparison, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-2 border-t border-slate-200 hover:bg-slate-50 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="p-6 border-r border-slate-200 bg-red-50/50 group-hover:bg-red-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <p className="text-slate-700 leading-relaxed">{comparison.without}</p>
                  </div>
                </div>
                <div className="p-6 bg-green-50/50 group-hover:bg-green-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-slate-700 leading-relaxed font-medium">{comparison.with}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="md:hidden space-y-6">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="p-6 bg-red-50 border-b border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <X className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-red-900">Without EyeRise</h4>
                </div>
                <p className="text-slate-700 pl-10">{comparison.without}</p>
              </div>
              <div className="p-6 bg-green-50">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-green-900">With EyeRise</h4>
                </div>
                <p className="text-slate-700 font-medium pl-10">{comparison.with}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg mb-6 text-slate-600">The choice is clear. Start protecting your eyes today.</p>
        </motion.div>
        </>
        )}
      </div>
    </section>
  );
}

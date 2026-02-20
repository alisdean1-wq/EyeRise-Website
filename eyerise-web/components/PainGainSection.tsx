"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";
import { X, Check, AlertTriangle, Sparkles } from "lucide-react";
import WaveformOverlay from "@/components/WaveformOverlay";

const painPoints = [
  {
    category: "Energy",
    pain: { title: "3:00 PM Crash", description: "Brain fog and fatigue that kills your afternoon productivity" },
    gain: { title: "All-Day Flow", description: "Sustained mental energy from morning standup to evening commit" },
  },
  {
    category: "Comfort",
    pain: { title: 'The "Sand" Feeling', description: "Dry, itchy, burning eyes that make you dread another hour of coding" },
    gain: { title: "Hydrated Focus", description: "Natural blink rate maintained for comfortable extended sessions" },
  },
  {
    category: "Sleep",
    pain: { title: "Tossing & Turning", description: "Blue light destroys melatonin, making sleep feel impossible" },
    gain: { title: "Deep Sleep", description: "Wind down naturally after work with preserved circadian rhythm" },
  },
  {
    category: "Health Reporting",
    pain: { title: "Flying Blind", description: "No idea how much damage your eyes are taking daily. No data for doctors." },
    gain: { title: "Certified Health Reports", description: "Professional PDF exports of your 30-day recovery and usage trends." },
  },
  {
    category: "Automation",
    pain: { title: "Manual Maintenance", description: "Forgetting to change settings as the sun goes down, leading to blue light spikes." },
    gain: { title: "Set & Forget", description: "Location-based Circadian Sync that adjusts automatically with the sunset." },
  },
  {
    category: "Customization",
    pain: { title: "One-Size-Fits-None", description: "Stuck with generic settings that don't match your specific workflow." },
    gain: { title: "Unlimited Schedules", description: "Perfectly tuned modes for Deep Work, Gaming, and Late-Night Rest." },
  },
];

export default function PainGainSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section ref={ref} className="relative py-12 md:py-16 bg-black overflow-hidden">
      <WaveformOverlay />
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            The <span className="text-[#F97316]">Cost</span> of Doing Nothing
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Every day without protection is another day of damage. Here&apos;s what you&apos;re risking.
          </p>
        </motion.div>

        <div className="relative rounded-2xl overflow-hidden bg-mustafar-card">
          {/* Breathing glow */}
          <motion.div
            className="absolute -inset-2 rounded-2xl -z-10"
            animate={{
              boxShadow: [
                "0 0 40px rgba(249, 115, 22, 0.08)",
                "0 0 60px rgba(249, 115, 22, 0.15)",
                "0 0 40px rgba(249, 115, 22, 0.08)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="grid grid-cols-2 border-b border-white/10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="p-6 bg-red-500/10 border-r border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Without EyeRise</h3>
                  <p className="text-sm text-zinc-400">Unprotected exposure</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="p-6 bg-emerald-500/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">With EyeRise</h3>
                  <p className="text-sm text-zinc-400">Protected & optimized</p>
                </div>
              </div>
            </motion.div>
          </div>

          {painPoints.map((point, index) => (
            <motion.div
              key={point.pain.title}
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`grid grid-cols-2 ${index < painPoints.length - 1 ? "border-b border-white/10" : ""}`}
            >
              <div className="p-6 border-r border-white/10 hover:bg-red-500/5 transition-colors">
                <div className="flex gap-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center"
                  >
                    <X className="w-4 h-4 text-red-500" />
                  </motion.div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1 block">
                      {point.category}
                    </span>
                    <h4 className="font-semibold text-white mb-1">{point.pain.title}</h4>
                    <p className="text-sm text-zinc-400">{point.pain.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 hover:bg-emerald-500/5 transition-colors">
                <div className="flex gap-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center"
                  >
                    <Check className="w-4 h-4 text-emerald-500" />
                  </motion.div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1 block">
                      {point.category}
                    </span>
                    <h4 className="font-semibold text-white mb-1">{point.gain.title}</h4>
                    <p className="text-sm text-zinc-400">{point.gain.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/pricing">
            <motion.span
              className="inline-flex items-center gap-3 px-12 py-5 bg-[#F97316] text-black font-bold text-lg rounded-xl glow-amber"
              style={{
                boxShadow: "0 0 40px rgba(249, 115, 22, 0.5)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 60px rgba(249, 115, 22, 0.7)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              Start Protecting Your Eyes Today
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

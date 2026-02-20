"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import AnimatedReveal from "@/components/AnimatedReveal";
import WaveformOverlay from "@/components/WaveformOverlay";

const WITHOUT_LABELS = [
  "Retinal Bombardment",
  "3:00 PM Crash",
  "Melatonin Death",
];

const WITH_LABELS = [
  "Biological Shield",
  "All-Day Flow",
  "Deep Sleep Architecture",
];

// Jagged wave path (amber/orange danger)
const JAGGED_PATH =
  "M 0 80 L 40 60 L 80 100 L 120 40 L 160 90 L 200 50 L 240 110 L 280 70 L 320 95 L 360 55 L 400 85 L 400 200 L 0 200 Z";

// Smooth wave path (orange)
const SMOOTH_PATH =
  "M 0 100 Q 50 60 100 100 T 200 100 T 300 100 T 400 100 L 400 200 L 0 200 Z";

export default function InvisibleDangerSlider() {
  return (
    <section className="relative py-12 md:py-16 bg-black overflow-hidden">
      <WaveformOverlay />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="The Invisible Danger"
          subtitle="Life without protection vs. life with EyeRise"
        />
        <AnimatedReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Without EyeRise - Left */}
            <motion.div
              className="relative rounded-2xl bg-mustafar-card overflow-hidden p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 opacity-20">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 200"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d={JAGGED_PATH}
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.8 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                  />
                  <motion.path
                    d={JAGGED_PATH}
                    fill="url(#jaggedGradient)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                  <motion.path
                    d={JAGGED_PATH}
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="1"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient
                      id="jaggedGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#EA580C" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-amber-400 mb-6">
                  Without EyeRise
                </h3>
                <ul className="space-y-3">
                  {WITHOUT_LABELS.map((label, i) => (
                    <motion.li
                      key={label}
                      className="flex items-center gap-2 text-zinc-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    >
                      <span className="text-amber-500 font-bold">×</span>
                      <span className="font-medium">{label}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* With EyeRise - Right */}
            <motion.div
              className="relative rounded-2xl bg-mustafar-card overflow-hidden p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute inset-0 opacity-30">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 200"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d={SMOOTH_PATH}
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.8 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                  />
                  <motion.path
                    d={SMOOTH_PATH}
                    fill="url(#smoothGradient)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                  <motion.path
                    d={SMOOTH_PATH}
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="1"
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient
                      id="smoothGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#F97316" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#EA580C" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-[#F97316] mb-6">
                  With EyeRise
                </h3>
                <ul className="space-y-3">
                  {WITH_LABELS.map((label, i) => (
                    <motion.li
                      key={label}
                      className="flex items-center gap-2 text-zinc-300"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    >
                      <span className="text-[#F97316] font-bold">✓</span>
                      <span className="font-medium">{label}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

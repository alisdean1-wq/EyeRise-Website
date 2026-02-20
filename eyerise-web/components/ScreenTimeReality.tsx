"use client";

import { motion } from "framer-motion";
import { Monitor, Clock, Percent } from "lucide-react";
import WaveformOverlay from "@/components/WaveformOverlay";
import Link from "next/link";

const STATS = [
  {
    value: "6.5+",
    label: "Hours of screen time",
    subtext: "Average per day for knowledge workers",
    icon: Monitor,
  },
  {
    value: "8+",
    label: "Hours of blue light",
    subtext: "Unfiltered HEV exposure daily",
    icon: Clock,
  },
  {
    value: "59%",
    label: "Report digital eye strain",
    subtext: "Computer vision syndrome is real",
    icon: Percent,
  },
];

export default function ScreenTimeReality() {
  return (
    <section className="relative py-12 md:py-16 bg-black overflow-hidden">
      <WaveformOverlay />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            The <span className="text-gradient">Numbers</span> Don&apos;t Lie
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Every hour without protection compounds the damage. Your eyes deserve better.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative rounded-2xl bg-mustafar-card p-8 text-center overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, type: "spring", stiffness: 400 }}
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(249, 115, 22, 0.4)",
                boxShadow: "0 0 30px rgba(249, 115, 22, 0.15)",
              }}
            >
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
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-orange-500/20 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-[#F97316]" />
              </div>
              <p className="text-4xl md:text-5xl font-bold text-[#F97316] mb-2">{stat.value}</p>
              <p className="text-lg font-semibold text-white mb-1">{stat.label}</p>
              <p className="text-sm text-zinc-400">{stat.subtext}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/pricing">
            <motion.span
              className="inline-flex items-center gap-3 px-10 py-4 text-[#F97316] font-bold border-2 border-orange-500/50 rounded-xl hover:bg-orange-500/10 transition-colors"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 30px rgba(249, 115, 22, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Your eyes deserve protection
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

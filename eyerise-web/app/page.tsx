"use client";

import HeroCarousel from "@/components/HeroCarousel";
import DarkAuroraBackground from "@/components/DarkAuroraBackground";
import HeroWaveOverlay from "@/components/HeroWaveOverlay";
import StickyCTA from "@/components/StickyCTA";
import PainGainSection from "@/components/PainGainSection";
import ScreenTimeReality from "@/components/ScreenTimeReality";
import ScienceSection from "@/components/ScienceSection";
import PerformancePayoff from "@/components/PerformancePayoff";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Dark Hero - Left Text / Right Carousel */}
      <section className="relative pt-8 pb-12 overflow-hidden">
        <DarkAuroraBackground />
        <HeroWaveOverlay />
        <div className="max-w-[1800px] mx-auto px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-10 items-start">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-7 leading-[1.3] tracking-tight text-balance">
                <span className="text-white block">Stop the Screen Burn.</span>
                <span className="text-white block mt-2">Work 10x Longer.</span>
                <span className="text-white block mt-2">Focus 10x Harder.</span>
                <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent block mt-2">
                  Feel 10x Better.
                </span>
              </h1>
              <p className="text-base md:text-lg text-zinc-400 mb-6 max-w-2xl lg:max-w-none mx-auto lg:mx-0 text-balance font-medium leading-loose">
                The world&apos;s first AI &quot;Safety Net&quot; for your eyes. Don&apos;t just dim your screen—optimize your biology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <Link href="/pricing">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-10 py-5 bg-amber-500 text-black rounded-xl font-bold text-lg shadow-lg shadow-amber-500/25 hover:bg-amber-400 transition-all"
                  >
                    Try Free
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
                <div className="text-center sm:text-left">
                  <Link href="/proof">
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-block px-10 py-5 text-zinc-400 font-bold text-lg hover:text-white border border-white/20 rounded-xl hover:border-white/40 transition-colors"
                    >
                      See how it works
                    </motion.span>
                  </Link>
                  <p className="text-xs text-zinc-500 mt-1">No card needed</p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-zinc-500">
                <span>Privacy-first</span>
                <span>·</span>
                <span>No ads, ever</span>
                <span>·</span>
                <span>Mac & Windows</span>
              </div>
            </motion.div>

            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HeroCarousel />
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto px-8 lg:px-12 mt-12 text-center relative z-10">
          <p className="text-lg text-zinc-400 font-medium">
            Your eyes feel the difference in seconds.
          </p>
          <p className="text-sm text-zinc-500 mt-1">
            Free to start. No card required.
          </p>
        </div>
      </section>

      <ScreenTimeReality />
      <ScienceSection />
      <PainGainSection />
      <PerformancePayoff />

      <StickyCTA />
    </div>
  );
}

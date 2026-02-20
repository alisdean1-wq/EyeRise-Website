"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ShieldCheck, X } from "lucide-react";
import { TIERED_PRICING, CHROME_STORE_URL } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function PricingSanctuary() {
  return (
    <div className="relative pt-6 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Invest in your biology with{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
              EyeRise Pro+
            </span>
            —not just software.
          </h1>
        </motion.div>

        {/* Secondary headline */}
        <motion.p
          className="text-center text-lg md:text-xl text-zinc-400 mx-auto mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Every plan unlocks{" "}
          <span className="font-semibold text-amber-400">EyeRise Pro+</span>.
          Screens attack your retinas—we heal them.
        </motion.p>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16"
          variants={container}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
        >
          {/* Personal — Monthly */}
          <motion.div
            variants={item}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 flex flex-col"
          >
            <span className="inline-block w-fit text-xs font-bold uppercase tracking-wider text-amber-400/90 border border-amber-500/40 rounded-full px-3 py-1 mb-3">
              {TIERED_PRICING.personal.tag}
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">
              {TIERED_PRICING.personal.name}
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              {TIERED_PRICING.personal.subtext}
            </p>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-bold text-amber-400">
                {TIERED_PRICING.personal.priceMonthly}
              </span>
              <span className="text-zinc-500">
                {TIERED_PRICING.personal.periodMonthly}
              </span>
            </div>
            {"footerCon" in TIERED_PRICING.personal && TIERED_PRICING.personal.footerCon && (
              <p className="flex items-center justify-center gap-2 text-red-400/80 text-sm mb-6">
                <X className="w-4 h-4 flex-shrink-0" />
                {TIERED_PRICING.personal.footerCon}
              </p>
            )}
            <ul className="space-y-3 mb-8 flex-1">
              {TIERED_PRICING.personal.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300">
                  <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-amber-400/90 text-xs font-medium mb-3 text-center">Get EyeRise Pro+</p>
            <Link
              href={CHROME_STORE_URL}
              className="block w-full text-center py-4 px-6 rounded-xl font-semibold border-2 border-amber-500/50 text-amber-400 hover:bg-amber-500/10 transition-colors"
            >
              {TIERED_PRICING.personal.cta}
            </Link>
            <p className="mt-3 text-center text-zinc-500 text-xs">
              Warning: Protection expires if monthly billing fails.
            </p>
          </motion.div>

          {/* Professional — highlighted with glow, brightest orange */}
          <motion.div
            variants={item}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl border-2 border-amber-400/60 bg-white/5 backdrop-blur-lg p-8 flex flex-col ring-2 ring-amber-400/40 md:scale-105 md:-mt-2 md:mb-2 z-10"
          >
            {/* Outer breathing glow — larger, softer */}
            <motion.div
              className="absolute -inset-2 rounded-2xl -z-20"
              animate={{
                boxShadow: [
                  "0 0 60px rgba(251, 191, 36, 0.15)",
                  "0 0 80px rgba(251, 191, 36, 0.25)",
                  "0 0 60px rgba(251, 191, 36, 0.15)",
                ],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Pulsating glow — stronger, more visible */}
            <motion.div
              className="absolute -inset-px rounded-2xl -z-10"
              animate={{
                boxShadow: [
                  "0 0 36px rgba(251, 191, 36, 0.4)",
                  "0 0 64px rgba(251, 191, 36, 0.55)",
                  "0 0 36px rgba(251, 191, 36, 0.4)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-wrap items-center justify-center gap-2">
              <motion.span
                className="inline-block text-xs font-bold uppercase tracking-wider text-amber-200 bg-amber-500/20 border-2 border-amber-400 rounded-full px-3 py-1.5 shadow-lg shadow-amber-500/20"
                animate={{ scale: [1, 1.05, 1], opacity: [0.95, 1, 0.95] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                {TIERED_PRICING.professional.tag}
              </motion.span>
              <span className="bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                {TIERED_PRICING.professional.badge}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 mt-3">
              {TIERED_PRICING.professional.name}
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              {TIERED_PRICING.professional.subtext}
            </p>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-bold text-amber-300">
                {TIERED_PRICING.professional.priceYearly}
              </span>
              <span className="text-zinc-500">
                {TIERED_PRICING.professional.periodYearly}
              </span>
            </div>
            {"highlightLine" in TIERED_PRICING.professional && TIERED_PRICING.professional.highlightLine && (
              <p className="flex items-center justify-center gap-1.5 text-amber-300 font-bold text-sm mb-6">
                <span>🔥</span>
                {TIERED_PRICING.professional.highlightLine}
              </p>
            )}
            <ul className="space-y-3 mb-8 flex-1">
              {TIERED_PRICING.professional.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300">
                  <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-amber-300/90 text-xs font-medium mb-3 text-center">Get EyeRise Pro+</p>
            <Link
              href={CHROME_STORE_URL}
              className="block w-full text-center py-5 px-6 rounded-xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 text-black hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-400/30"
            >
              <span className="block text-lg sm:text-xl uppercase tracking-wide">
                {TIERED_PRICING.professional.cta}
              </span>
            </Link>
            <p className="mt-3 text-center text-amber-400/90 text-xs font-medium">
              Lock in 365 days of uninterrupted eye safety.
            </p>
          </motion.div>

          {/* Guardian — Lifetime */}
          <motion.div
            variants={item}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 flex flex-col"
          >
            <span className="inline-block w-fit text-xs font-bold uppercase tracking-wider text-amber-400/90 border border-amber-500/40 rounded-full px-3 py-1 mb-3">
              {TIERED_PRICING.guardian.tag}
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">
              {TIERED_PRICING.guardian.name}
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              {TIERED_PRICING.guardian.subtext}
            </p>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-bold text-amber-400">
                {TIERED_PRICING.guardian.priceOnce}
              </span>
              <span className="text-zinc-500">
                {TIERED_PRICING.guardian.periodOnce}
              </span>
            </div>
            <p className="text-zinc-500 text-sm mb-6">One-time payment. Yours forever.</p>
            <ul className="space-y-3 mb-8 flex-1">
              {TIERED_PRICING.guardian.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300">
                  <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-amber-400/90 text-xs font-medium mb-3 text-center">Get EyeRise Pro+</p>
            <Link
              href={CHROME_STORE_URL}
              className="block w-full text-center py-4 px-6 rounded-xl font-semibold border-2 border-amber-500/50 text-amber-400 hover:bg-amber-500/10 transition-colors"
            >
              {TIERED_PRICING.guardian.cta}
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          className="flex flex-col items-center justify-center gap-2 text-sm text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <span className="font-medium text-zinc-400">
            You’re purchasing <span className="text-amber-400">EyeRise Pro+</span>
          </span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-500/80" />
            <span>30-Day Sleep-Better Guarantee</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

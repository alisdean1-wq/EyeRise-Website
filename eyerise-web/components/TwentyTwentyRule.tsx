"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Timer } from "lucide-react";

const DURATION = 20;
const BADGE_RADIUS = 48;
const BADGE_CIRCUMFERENCE = 2 * Math.PI * BADGE_RADIUS;

function TwentyTwentyContent({
  secondsLeft,
  isRunning,
  onToggle,
}: {
  secondsLeft: number;
  isRunning: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10 max-w-6xl mx-auto text-slate-800 dark:text-gray-100">
      {/* Break reminder modal-style card */}
      <motion.div
        className="relative flex-shrink-0 w-full lg:w-auto lg:max-w-sm rounded-2xl p-8 shadow-lg border border-slate-200/80 dark:border-zinc-700 overflow-hidden bg-white dark:bg-zinc-900"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/40 mb-4">
              <Timer className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
              Time for a Break <span className="inline-block" role="img" aria-label="eyes">👀</span>
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Look at something 20 feet away for 20 seconds
            </p>
          </div>

          {/* 20 second badge */}
          <button
            type="button"
            onClick={onToggle}
            className="w-full flex justify-center mb-6"
            aria-label={isRunning ? "Pause timer" : "Start 20 second break"}
          >
            <div className="relative w-28 h-28 rounded-full border-2 border-emerald-300 dark:border-emerald-500/70 flex items-center justify-center bg-white/60 dark:bg-zinc-800/50 shadow-inner">
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 112 112">
                <circle
                  cx="56"
                  cy="56"
                  r={BADGE_RADIUS}
                  fill="none"
                  stroke="rgb(167 243 208)"
                  strokeWidth="3"
                  opacity="0.6"
                />
                <motion.circle
                  cx="56"
                  cy="56"
                  r={BADGE_RADIUS}
                  fill="none"
                  stroke="rgb(52 211 153)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={BADGE_CIRCUMFERENCE}
                  initial={{ strokeDashoffset: BADGE_CIRCUMFERENCE }}
                  animate={{ strokeDashoffset: BADGE_CIRCUMFERENCE * (1 - secondsLeft / DURATION) }}
                  transition={{ duration: 0.3, ease: "linear" }}
                />
              </svg>
              <span className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">{secondsLeft}</span>
            </div>
          </button>

          {/* Actions */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={onToggle}
              className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 transition-colors shadow-md shadow-orange-500/25"
            >
              {isRunning ? "Pause" : "Start Break Timer"}
            </button>
            <div className="flex gap-3">
              <button
                type="button"
                className="shrink-0 py-2.5 px-5 rounded-xl font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-600 hover:bg-slate-50 dark:hover:bg-zinc-700 transition-colors"
              >
                Skip
              </button>
              <button
                type="button"
                className="flex-1 min-w-0 py-2.5 px-4 rounded-xl font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-600 hover:bg-slate-50 dark:hover:bg-zinc-700 transition-colors"
              >
                Turn Off Break Reminders
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-gradient-to-br from-white to-amber-50/50 dark:from-zinc-900 dark:to-amber-950/20 rounded-2xl p-6 sm:p-8 border-2 border-amber-200/60 dark:border-amber-700/40 shadow-xl shadow-amber-200/20 dark:shadow-amber-900/10 flex-1 min-h-0 flex flex-col justify-center"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">The 20-20-20 Rule</h3>
        <p className="text-amber-600 dark:text-amber-400 font-semibold mb-4">Built-in break reminders</p>
        <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-4">
          Every <strong>20 minutes</strong>, EyeRise gently nudges you to look at something{" "}
          <strong>20 feet away</strong> for <strong>20 seconds</strong>.
        </p>
        <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-6 lg:mb-8">
          This ophthalmologist-recommended technique relaxes the ciliary muscle, reduces eye
          strain by up to 40%, and resets your blink rate to prevent dryness.
        </p>
        <div className="flex gap-8 mt-auto">
          {[
            { value: "20", label: "Minutes", color: "from-amber-400 to-amber-500" },
            { value: "20", label: "Feet", color: "from-amber-500 to-orange-500" },
            { value: "20", label: "Seconds", color: "from-orange-500 to-amber-600" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <span className={`block text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.value}</span>
              <span className="block text-sm font-medium text-amber-700/80 dark:text-amber-400/80">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function TwentyTwentyRule() {
  const [secondsLeft, setSecondsLeft] = useState(DURATION);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const t = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          setIsRunning(false);
          return DURATION;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [isRunning]);

  return (
    <TwentyTwentyContent
      secondsLeft={secondsLeft}
      isRunning={isRunning}
      onToggle={() => setIsRunning((r) => !r)}
    />
  );
}

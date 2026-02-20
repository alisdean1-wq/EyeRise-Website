"use client";

import { motion } from "framer-motion";
import { Eye, Zap, Brain } from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "The \"Sandpaper\" Eye",
    description:
      "Chronic dryness and grit. Your tear film evaporates under the assault of unfiltered HEV radiation.",
    harm: "Hours of screen time.",
    accent: "red",
  },
  {
    icon: Zap,
    title: "The \"Vise Grip\" Headache",
    description:
      "Tension behind the temples. Your ciliary muscles lock in permanent spasm from digital close-work.",
    harm: "Every day.",
    accent: "amber",
  },
  {
    icon: Brain,
    title: "The Circadian Hijack",
    description:
      "Suppressed melatonin, 2 AM ceiling-staring. Your screen tricks your brain into thinking it's high noon.",
    harm: "No escape.",
    accent: "violet",
  },
];

export default function ScreenAttackingSection() {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-3">
          Your Screen Is{" "}
          <span
            className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent"
            style={{ textShadow: "0 0 30px rgba(220, 38, 38, 0.3)" }}
          >
            Attacking
          </span>{" "}
          You.
        </h2>
        <p className="text-base md:text-lg font-medium text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Standard monitors emit a jagged, high-energy visible (HEV) blue light spike that
          mimics the intensity of the high-noon sun — hammering your retinas for 8+ hours a day.
        </p>
      </motion.div>

      {/* Screen assault graphic: monitor → electric HEV shocks → eye */}
      <motion.div
        className="flex justify-center my-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="relative w-full max-w-[640px]"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 560 200"
            className="w-full h-auto min-h-[180px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="screenAssaultGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="hevRayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(96, 165, 250)" />
                <stop offset="30%" stopColor="rgb(59, 130, 246)" />
                <stop offset="70%" stopColor="rgb(248, 113, 113)" />
                <stop offset="100%" stopColor="rgb(239, 68, 68)" />
              </linearGradient>
              <linearGradient id="electricGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(147, 197, 253)" />
                <stop offset="50%" stopColor="rgb(251, 191, 36)" />
                <stop offset="100%" stopColor="rgb(239, 68, 68)" />
              </linearGradient>
            </defs>

            {/* Monitor - scaled up */}
            <g transform="translate(20, 70)">
              <rect x="0" y="0" width="100" height="76" rx="8" fill="rgb(30, 41, 59)" stroke="rgb(71, 85, 105)" strokeWidth="3" />
              <rect x="8" y="8" width="84" height="60" rx="4" fill="rgb(59, 130, 246)" opacity="0.95">
                <animate attributeName="opacity" values="0.85;1;0.85" dur="1.2s" repeatCount="indefinite" />
              </rect>
              <rect x="36" y="84" width="28" height="8" rx="2" fill="rgb(51, 65, 85)" />
            </g>

            {/* Electric shock rays: very bouncy paths from monitor → eye, filling vertical space */}
            {[
              "M 115 85 L 155 45 L 195 125 L 235 35 L 275 145 L 315 55 L 355 135 L 390 95 L 415 100",
              "M 115 95 L 150 155 L 190 65 L 230 165 L 270 45 L 310 155 L 350 75 L 385 105 L 412 98",
              "M 115 105 L 160 55 L 200 145 L 240 25 L 280 165 L 320 65 L 360 125 L 395 102 L 418 104",
              "M 116 88 L 165 165 L 205 35 L 245 155 L 285 45 L 325 145 L 365 65 L 392 98 L 416 101",
              "M 116 98 L 155 35 L 195 155 L 235 65 L 275 135 L 315 45 L 355 155 L 388 108 L 414 99",
              "M 116 108 L 170 145 L 210 55 L 250 165 L 290 35 L 330 145 L 370 55 L 395 102 L 417 103",
              "M 116 118 L 160 65 L 200 155 L 240 45 L 280 125 L 320 155 L 360 35 L 390 96 L 415 106",
              "M 115 92 L 158 125 L 198 55 L 238 165 L 278 35 L 318 145 L 358 65 L 392 104 L 413 97",
              "M 115 112 L 168 45 L 208 165 L 248 55 L 288 135 L 328 45 L 368 155 L 393 100 L 419 102",
              "M 116 102 L 162 155 L 202 35 L 242 145 L 282 65 L 322 155 L 362 45 L 391 94 L 416 104",
            ].map((d, i) => (
              <motion.path
                key={i}
                d={d}
                stroke="url(#electricGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#screenAssaultGlow)"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 0.8, 0.6, 0.75, 0.5] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.07, ease: "easeInOut" }}
              />
            ))}

            {/* Secondary arcs - bouncy paths */}
            {[
              "M 115 90 L 175 30 L 235 160 L 295 50 L 355 140 L 395 100 L 418 98",
              "M 115 110 L 185 170 L 255 40 L 315 150 L 370 80 L 398 104 L 420 102",
              "M 116 100 L 165 50 L 225 160 L 285 60 L 345 150 L 388 96 L 415 105",
            ].map((d, i) => (
              <motion.path
                key={`arc-${i}`}
                d={d}
                stroke="rgb(251, 191, 36)"
                strokeWidth="2"
                strokeOpacity="0.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#screenAssaultGlow)"
                animate={{ opacity: [0.35, 0.7, 0.35] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
              />
            ))}

            {/* Eye under assault - larger, more distressed */}
            <g transform="translate(390, 50)">
              <motion.ellipse
                cx="70"
                cy="50"
                rx="65"
                ry="38"
                fill="rgb(248, 250, 252)"
                stroke="rgb(239, 68, 68)"
                strokeWidth="4"
                strokeOpacity="0.9"
                filter="url(#screenAssaultGlow)"
                animate={{ strokeOpacity: [0.7, 1, 0.7] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <ellipse cx="70" cy="50" rx="22" ry="14" fill="rgb(30, 41, 59)" />
              <ellipse cx="76" cy="44" rx="6" ry="4" fill="white" opacity="0.9" />
              {/* Impact / pain lines - more dramatic */}
              <path d="M 10 35 L 18 28 M 130 38 L 138 32 M 25 10 L 32 5 M 115 90 L 122 98 M 5 55 L 12 62 M 135 45 L 142 52 M 40 5 L 48 12 M 100 95 L 92 102" stroke="rgb(239, 68, 68)" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round" />
              {/* Cracks / stress lines on eye */}
              <path d="M 35 25 L 42 22 L 48 28 M 105 30 L 98 35 L 92 28 M 50 70 L 58 75 L 65 68 M 90 72 L 82 78 L 75 70" stroke="rgb(220, 38, 38)" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
              {/* Electric impact bursts at eye */}
              <motion.g animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 0.4, repeat: Infinity }}>
                <path d="M 45 45 L 50 40 L 55 45 L 50 50 Z" fill="rgb(251, 191, 36)" opacity="0.6" />
                <path d="M 85 48 L 90 43 L 95 48 L 90 53 Z" fill="rgb(251, 191, 36)" opacity="0.6" />
              </motion.g>
            </g>
          </svg>
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4">
        {cards.map((card, i) => {
          const Icon = card.icon;
          const accentStyles: Record<
  string,
  { border: string; borderHover: string; iconBg: string; badge: string }
> = {
            red: {
              border: "border-red-300/70 dark:border-red-500/50",
              borderHover: "hover:border-red-400/60 dark:hover:border-red-400/50",
              iconBg: "bg-gradient-to-br from-red-500 to-red-600",
              badge: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
            },
            amber: {
              border: "border-amber-300/70 dark:border-amber-500/50",
              borderHover: "hover:border-amber-400/60 dark:hover:border-amber-400/50",
              iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
              badge: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",
            },
            violet: {
              border: "border-violet-300/70 dark:border-violet-500/50",
              borderHover: "hover:border-violet-400/60 dark:hover:border-violet-400/50",
              iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
              badge: "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300",
            },
          }[card.accent as keyof typeof accentStyles];
          return (
            <motion.div
              key={card.title}
              className={`relative overflow-hidden rounded-2xl p-4 border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${accentStyles.border} ${accentStyles.borderHover} bg-gradient-to-br from-white to-slate-50/80 dark:from-zinc-900 dark:to-zinc-800/80`}
              style={{
                boxShadow: "0 4px 20px -4px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.03)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)",
              }}
            >
              <div>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${accentStyles.badge}`}>
                  {card.harm}
                </span>
                <div className={`w-10 h-10 rounded-lg ${accentStyles.iconBg} flex items-center justify-center mb-3 shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-base text-slate-800 dark:text-white mb-1.5">{card.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

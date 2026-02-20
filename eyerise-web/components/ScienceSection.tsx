"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sun, Sunset, Moon } from "lucide-react";
import WaveformOverlay from "@/components/WaveformOverlay";

export default function ScienceSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section ref={ref} className="relative py-12 md:py-16 bg-black overflow-hidden">
      <WaveformOverlay />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            The <span className="text-gradient">Science</span> of Comfort
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            EyeRise doesn&apos;t just &quot;dim&quot; your screen. We use Circadian-Adaptive Filtering that adjusts your
            screen&apos;s Kelvin temperature based on your local sun position.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Eye Diagram SVG */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
            whileHover={{ scale: 1.02 }}
          >
            {/* Breathing glow */}
            <motion.div
              className="absolute -inset-4 rounded-2xl -z-10"
              animate={{
                boxShadow: [
                  "0 0 60px rgba(249, 115, 22, 0.06)",
                  "0 0 80px rgba(249, 115, 22, 0.12)",
                  "0 0 60px rgba(249, 115, 22, 0.06)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="aspect-square max-w-md mx-auto">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <motion.ellipse
                  cx="200"
                  cy="200"
                  rx="150"
                  ry="100"
                  fill="none"
                  stroke="#52525b"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={isVisible ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="60"
                  fill="#3f3f46"
                  stroke="#F97316"
                  strokeWidth="3"
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="25"
                  fill="white"
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.7, type: "spring" }}
                />
                <motion.circle
                  cx="215"
                  cy="185"
                  r="8"
                  fill="black"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: 0.9 }}
                />
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                >
                  <line
                    x1="200"
                    y1="200"
                    x2="320"
                    y2="280"
                    stroke="#F97316"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  <circle cx="320" cy="280" r="4" fill="#F97316" />
                  <text x="330" y="285" fill="white" fontSize="14" fontWeight="600">
                    Macula
                  </text>
                  <text x="330" y="302" fill="#a1a1aa" fontSize="11">
                    Most sensitive to blue light
                  </text>
                </motion.g>
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: 1.2 }}
                >
                  <line
                    x1="280"
                    y1="150"
                    x2="330"
                    y2="100"
                    stroke="#a1a1aa"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  <text x="335" y="100" fill="#a1a1aa" fontSize="12">
                    Retina
                  </text>
                </motion.g>
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: [0, 0.6, 0] } : { opacity: 0 }}
                  transition={{ delay: 1.4, duration: 2, repeat: isVisible ? Infinity : 0 }}
                >
                  <line
                    x1="50"
                    y1="150"
                    x2="140"
                    y2="180"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <line
                    x1="50"
                    y1="200"
                    x2="140"
                    y2="200"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <line
                    x1="50"
                    y1="250"
                    x2="140"
                    y2="220"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                </motion.g>
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: 1.6 }}
                >
                  <rect
                    x="80"
                    y="170"
                    width="50"
                    height="60"
                    rx="5"
                    fill="rgba(249, 115, 22, 0.2)"
                    stroke="#F97316"
                    strokeWidth="2"
                  />
                  <text x="93" y="205" fill="#F97316" fontSize="20">
                    🛡️
                  </text>
                </motion.g>
              </svg>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <motion.blockquote
              className="text-2xl md:text-3xl font-medium text-white leading-relaxed"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              &quot;It&apos;s like a <span className="text-gradient">gym for your focus</span> and a{" "}
              <span className="text-gradient">spa for your eyes</span>.&quot;
            </motion.blockquote>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">How Circadian-Adaptive Filtering Works</h3>
              <div className="relative">
                <div className="h-2 bg-gradient-to-r from-blue-400 via-orange-500 to-orange-500 rounded-full" />
                <div className="flex justify-between mt-4">
                  {[
                    { icon: Sun, label: "Day", temp: "6500K", desc: "Cool, alert" },
                    { icon: Sunset, label: "Evening", temp: "4000K", desc: "Warm transition" },
                    { icon: Moon, label: "Night", temp: "2700K", desc: "Restful amber" },
                  ].map((phase, i) => (
                    <motion.div
                      key={phase.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="text-center"
                    >
                      <phase.icon className="w-6 h-6 mx-auto mb-2 text-[#F97316]" />
                      <p className="text-sm font-medium text-white">{phase.label}</p>
                      <p className="text-xs text-[#F97316]">{phase.temp}</p>
                      <p className="text-xs text-zinc-400">{phase.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  "Automatically detects your timezone and local sun position",
                  "Smooth, imperceptible transitions throughout the day",
                  "Preserves color accuracy for design and development work",
                  "Syncs with your natural circadian rhythm for optimal melatonin production",
                ].map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    className="flex items-start gap-3 text-zinc-400"
                  >
                    <span className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center text-[#F97316] text-xs mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

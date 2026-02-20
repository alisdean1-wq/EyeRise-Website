"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useRef } from "react";
import { SunDim, Monitor, Clock } from "lucide-react";

export default function EyeRiseShield() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: waveRef, isVisible: waveVisible } = useScrollAnimation(0.2);
  const electricOnlyRef = useRef<SVGPathElement>(null);
  const silkOnlyRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.03;

      if (electricOnlyRef.current) {
        const points: string[] = [];
        for (let x = 0; x <= 600; x += 2) {
          const blueY =
            100 +
            Math.sin((x / 20) + t * 2) * 35 +
            Math.sin((x / 8) + t * 3.5) * 15 +
            Math.sin((x / 5) + t * 5) * 8;
          points.push(`${x === 0 ? "M" : "L"}${x},${blueY}`);
        }
        electricOnlyRef.current.setAttribute("d", points.join(" "));
      }

      if (silkOnlyRef.current) {
        const points: string[] = [];
        for (let x = 0; x <= 600; x += 2) {
          const y =
            100 +
            Math.sin((x / 80) + t) * 30 +
            Math.sin((x / 40) + t * 0.7) * 15;
          points.push(`${x === 0 ? "M" : "L"}${x},${y}`);
        }
        silkOnlyRef.current.setAttribute("d", points.join(" "));
      }

      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative pt-4 pb-14 px-4 overflow-hidden bg-black -mt-2">
      {/* Warm ambient transition */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(32 95% 55% / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">
            We Don&apos;t Just Dim Your Screen.{" "}
            <span className="text-gradient">We Re-Engineer the Light.</span>
          </h2>
        </motion.div>

        {/* Three mechanism cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-xl p-5 border border-amber-200/50 dark:border-amber-900/30 hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center mb-3">
              <SunDim className="w-5 h-5 text-eyerise-amber" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white">Spectrum Shifting</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Blue peaks → amber tones. Your brain stops thinking it&apos;s noon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-xl p-5 border border-amber-200/50 dark:border-amber-900/30 hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center mb-3">
              <Monitor className="w-5 h-5 text-eyerise-amber" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white">Luminance Balancing</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Smooth contrast. No more retinal whiplash.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-xl p-5 border border-amber-200/50 dark:border-amber-900/30 hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-eyerise-amber" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white">Circadian Sync</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Warmer at night. Adapts to your day. Sleep better.
            </p>
          </motion.div>
        </div>

        {/* Interactive waveform morphing */}
        <motion.div
          ref={waveRef}
          initial={{ opacity: 0, y: 20 }}
          animate={waveVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {/* Two-wave comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6 border border-red-300/60 dark:border-red-900/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" style={{ boxShadow: "0 0 12px rgba(239, 68, 68, 0.6)" }} />
                <span className="text-sm font-mono uppercase tracking-widest text-red-600 dark:text-red-400">
                  Without EyeRise Unfiltered &quot;Electric&quot; Wave
                </span>
              </div>
              <svg viewBox="0 0 600 200" className="w-full h-24" preserveAspectRatio="none">
                <defs>
                  <filter id="electricRedGlow">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  ref={electricOnlyRef}
                  fill="none"
                  stroke="hsl(0, 100%, 50%)"
                  strokeWidth="2.5"
                  filter="url(#electricRedGlow)"
                  opacity="0.95"
                />
              </svg>
              <p className="text-xs text-muted-foreground mt-2">Jagged HEV spikes — your retina under siege</p>
            </div>

            <motion.div
              className="relative rounded-2xl p-6 overflow-hidden bg-gradient-to-br from-amber-50/90 to-orange-50/70 dark:from-amber-950/40 dark:to-orange-950/30 border-2 border-amber-400/60 dark:border-amber-500/50"
              style={{
                boxShadow: "0 0 40px rgba(251, 191, 36, 0.25), 0 0 80px rgba(245, 158, 11, 0.15)",
              }}
              animate={{
                boxShadow: [
                  "0 0 40px rgba(251, 191, 36, 0.25), 0 0 80px rgba(245, 158, 11, 0.15)",
                  "0 0 55px rgba(251, 191, 36, 0.4), 0 0 110px rgba(245, 158, 11, 0.25)",
                  "0 0 40px rgba(251, 191, 36, 0.25), 0 0 80px rgba(245, 158, 11, 0.15)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute top-3 right-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400/90 text-amber-950 shadow-lg">
                  With EyeRise
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-amber-600"
                  animate={{ scale: [1, 1.15, 1], boxShadow: ["0 0 12px rgba(251, 191, 36, 0.5)", "0 0 20px rgba(251, 191, 36, 0.8)", "0 0 12px rgba(251, 191, 36, 0.5)"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  style={{ boxShadow: "0 0 12px rgba(251, 191, 36, 0.5)" }}
                />
                <span className="text-base font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  EyeRise &quot;Silk&quot; Wave
                </span>
              </div>
              <svg viewBox="0 0 600 200" className="w-full h-24" preserveAspectRatio="none">
                <defs>
                  <filter id="amberGlow">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  ref={silkOnlyRef}
                  fill="none"
                  stroke="hsl(38, 92%, 50%)"
                  strokeWidth="3"
                  filter="url(#amberGlow)"
                  opacity="0.95"
                />
              </svg>
              <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mt-3">
                Smooth amber curves — your eyes at peace
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

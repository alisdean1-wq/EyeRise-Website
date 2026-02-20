"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function WaveformHero() {
  const pathRef1 = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);

  useEffect(() => {
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.006;
      if (pathRef1.current) {
        const points: string[] = [];
        for (let x = 0; x <= 1200; x += 2) {
          const y = 200 + Math.sin(x / 120 + t) * 45 + Math.sin(x / 80 + t * 0.6) * 15;
          points.push(`${x === 0 ? "M" : "L"}${x},${y}`);
        }
        pathRef1.current.setAttribute("d", points.join(" "));
      }
      const t2 = t * 0.75; // second wave phase offset
      if (pathRef2.current) {
        const points: string[] = [];
        for (let x = 0; x <= 1200; x += 2) {
          const y = 200 + Math.sin(x / 140 + t2) * 35 + Math.sin(x / 100 + t2 * 0.5) * 12;
          points.push(`${x === 0 ? "M" : "L"}${x},${y}`);
        }
        pathRef2.current.setAttribute("d", points.join(" "));
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-start justify-center overflow-hidden pt-20 pb-8 bg-[#050505]">
      {/* Radial gradient bloom */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          background: "radial-gradient(ellipse at center, hsl(35, 92%, 42% / 0.2) 0%, transparent 70%)",
        }}
      />

      {/* SVG waveform */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="waveformAmberGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          ref={pathRef1}
          fill="none"
          stroke="hsl(35, 92%, 42%)"
          strokeWidth="3.5"
          filter="url(#waveformAmberGlow)"
          opacity="0.9"
        />
        <path
          ref={pathRef2}
          fill="none"
          stroke="hsl(35, 92%, 42%)"
          strokeWidth="2.5"
          filter="url(#waveformAmberGlow)"
          opacity="0.55"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-amber-600 dark:text-amber-400 mb-8 dark:bg-zinc-900/80">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            EyeRise Protected Power
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white"
        >
          The Science Behind{" "}
          <span className="text-amber-600 dark:text-amber-400">Smarter Screen Care</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 max-w-2xl mx-auto"
        >
          Smart tinting. Adapts to your day. Easy on the eyes.
        </motion.p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}

"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function LaptopHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto"
    >
      {/* Laptop Base */}
      <motion.div
        className="relative"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Screen */}
        <div className="relative bg-slate-900 rounded-t-2xl p-2 shadow-2xl">
          <div className="bg-slate-800 rounded-lg overflow-hidden aspect-video relative">
            {/* Screen Content Mock */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 p-6">
              <div className="space-y-3">
                <div className="h-4 bg-slate-600 rounded w-3/4"></div>
                <div className="h-4 bg-slate-600 rounded w-1/2"></div>
                <div className="h-4 bg-slate-600 rounded w-2/3"></div>
              </div>
            </div>

            {/* Animated Tint Overlay */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                backgroundColor: [
                  "rgba(217, 119, 6, 0)",
                  "rgba(217, 119, 6, 0.15)",
                  "rgba(217, 119, 6, 0.25)",
                  "rgba(217, 119, 6, 0.15)",
                  "rgba(217, 119, 6, 0)",
                ],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>

        {/* Laptop Base/Bottom */}
        <div className="h-2 bg-slate-700 rounded-b-lg"></div>
        <div className="h-1 bg-slate-600 rounded-b-lg w-3/4 mx-auto"></div>
      </motion.div>

      {/* Floating UI Cards */}
      <motion.div
        className="absolute -top-8 -right-8 bg-white rounded-lg shadow-xl p-4 border border-slate-200 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
          <span className="text-xs font-semibold text-slate-900">EyeRise</span>
        </div>
        <div className="text-xs text-slate-600">Protected: 2h 34m</div>
      </motion.div>

      <motion.div
        className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-xl p-4 border border-slate-200 hidden md:block w-48"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-xs font-semibold text-slate-900 mb-2">
          Today's Progress
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-slate-600">Streak</span>
            <span className="font-semibold text-amber-600">7 days</span>
          </div>
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-amber-500"
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

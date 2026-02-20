"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MODES } from "@/lib/modes";

export default function ModeSpectrumSlider() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleDrag = (event: any, info: any) => {
    if (!sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(info.point.x - rect.left, rect.width));
    const percentage = x / rect.width;
    const index = Math.round(percentage * (MODES.length - 1));
    
    setSelectedIndex(Math.max(0, Math.min(index, MODES.length - 1)));
  };

  const currentMode = MODES[selectedIndex];

  // Gradient colors for spectrum (Day blue to Night orange/purple)
  const spectrumGradient = "linear-gradient(to right, #60A5FA 0%, #34D399 20%, #FBBF24 40%, #FB923C 60%, #F87171 80%, #A78BFA 100%)";

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Current mode display */}
      <motion.div
        key={currentMode.id}
        className="text-center mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-navy dark:text-white mb-2">{currentMode.label}</h3>
        <p className="text-navy-light dark:text-gray-400">{currentMode.blurb}</p>
      </motion.div>

      {/* Spectrum bar */}
      <div className="relative mb-6" ref={sliderRef}>
        {/* Background gradient */}
        <div
          className="h-3 rounded-full"
          style={{ background: spectrumGradient }}
        />

        {/* Mode markers */}
        <div className="absolute inset-0 flex justify-between items-center px-1">
          {MODES.map((mode, index) => (
            <button
              key={mode.id}
              onClick={() => setSelectedIndex(index)}
              className={`w-3 h-3 rounded-full bg-white dark:bg-zinc-700 border-2 transition-all ${
                index === selectedIndex
                  ? "border-navy-dark dark:border-white scale-150 shadow-lg"
                  : "border-white/50 dark:border-zinc-500 hover:scale-125"
              }`}
              aria-label={`Select ${mode.label}`}
            />
          ))}
        </div>

        {/* Draggable handle */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={sliderRef}
          dragElastic={0}
          dragMomentum={false}
          onDrag={handleDrag}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          animate={{
            left: `${(selectedIndex / (MODES.length - 1)) * 100}%`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ x: "-50%" }}
        >
          <div className="w-6 h-6 rounded-full bg-white dark:bg-zinc-700 shadow-xl border-2 border-navy dark:border-gray-500 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-purple-accent" />
          </div>
        </motion.div>
      </div>

      {/* Mode labels */}
      <div className="flex justify-between text-xs text-navy-light dark:text-gray-400 px-1">
        <span>Day</span>
        <span>Night</span>
      </div>

      {/* Tint preview with current mode */}
      <motion.div
        key={currentMode.id}
        className="mt-8 rounded-xl overflow-hidden border border-navy/10 dark:border-zinc-600"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative aspect-video bg-navy-dark">
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{
              backgroundColor: currentMode.tintHex,
              opacity: (currentMode.opacityMin + currentMode.opacityMax) / 2,
              mixBlendMode: currentMode.blendMode as any,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
              {currentMode.label} Mode Preview
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

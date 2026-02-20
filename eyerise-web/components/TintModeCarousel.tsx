"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import AnimatedReveal from "@/components/AnimatedReveal";
import WaveformOverlay from "@/components/WaveformOverlay";

const TINT_MODES = [
  {
    id: "day",
    label: "Day",
    hex: "#FFF7ED",
    opacityMin: 0.15,
    opacityMax: 0.25,
  },
  {
    id: "focus",
    label: "Focus",
    hex: "#EEF2FF",
    opacityMin: 0.2,
    opacityMax: 0.3,
  },
  {
    id: "cinema",
    label: "Cinema",
    hex: "#FEF2F2",
    opacityMin: 0.2,
    opacityMax: 0.3,
  },
];

export default function TintModeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeMode = TINT_MODES[activeIndex];
  const tintOpacity = (activeMode.opacityMin + activeMode.opacityMax) / 2;

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollLeft = el.scrollLeft;
    const cardWidth = Math.min(el.offsetWidth * 0.85, 400);
    const gap = 24;
    const newIndex = Math.round(scrollLeft / (cardWidth + gap));
    const clamped = Math.max(0, Math.min(newIndex, TINT_MODES.length - 1));
    setActiveIndex(clamped);
  };

  return (
    <section className="relative py-12 md:py-16 bg-black overflow-hidden">
      <WaveformOverlay />
      {/* Background tint overlay - syncs with active card */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: activeMode.hex,
          opacity: tintOpacity,
          mixBlendMode: "soft-light",
        }}
        key={activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: tintOpacity }}
        transition={{ duration: 0.4 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Visual Mastery"
          subtitle="EyeRise modes—each tuned for your biology"
        />
        <AnimatedReveal>
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4 [&::-webkit-scrollbar]:hidden"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {TINT_MODES.map((mode, index) => (
              <motion.div
                key={mode.id}
                className="flex-shrink-0 w-[85vw] sm:w-[400px] snap-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`rounded-2xl border-2 p-8 bg-mustafar-card transition-all duration-300 ${
                    index === activeIndex
                      ? "border-[#F97316]/60 shadow-lg shadow-orange-500/10"
                      : "border-white/10"
                  }`}
                >
                  <div
                    className="aspect-video rounded-xl mb-6 overflow-hidden"
                    style={{
                      backgroundColor: mode.hex,
                      opacity: (mode.opacityMin + mode.opacityMax) / 2,
                    }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{
                        backgroundColor: "#0a0a0a",
                        mixBlendMode: "multiply",
                      }}
                    >
                      <span className="text-white/80 text-sm font-medium">
                        {mode.label} Preview
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{mode.label}</h3>
                  <p className="text-sm text-zinc-500 mt-1">
                    {mode.opacityMin * 100}–{mode.opacityMax * 100}% tint
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

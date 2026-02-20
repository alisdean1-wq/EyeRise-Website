"use client";

import { useState, useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";
import Image from "next/image";
import { Shield } from "lucide-react";
import { SCIENCE_MODES } from "@/lib/scienceModes";

const PAIN_FILTER =
  "brightness(1.15) contrast(1.2) saturate(0.8) hue-rotate(190deg) blur(0.5px)";

export default function PainVsReliefComparison() {
  const [selectedModeIndex, setSelectedModeIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingHandleRef = useRef(false);

  const mode = SCIENCE_MODES[selectedModeIndex];
  const opacityBase = (mode.opacityMin + mode.opacityMax) / 2;

  // Animate slider back to 50% over 400ms when mode changes
  useEffect(() => {
    const controls = animate(sliderPosition, 50, {
      type: "tween",
      duration: 0.4,
      ease: "easeInOut",
      onUpdate: (v) => setSliderPosition(v),
    });
    return () => controls.stop();
  }, [selectedModeIndex]);

  const updatePositionFromClientX = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, pct)));
  };

  const handleHandleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    isDraggingHandleRef.current = true;
    updatePositionFromClientX(e.clientX);
    const onMouseMove = (e: MouseEvent) => updatePositionFromClientX(e.clientX);
    const onMouseUp = () => {
      isDraggingHandleRef.current = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const handleHandleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    isDraggingHandleRef.current = true;
    updatePositionFromClientX(e.touches[0].clientX);
  };
  const handleHandleTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    updatePositionFromClientX(e.touches[0].clientX);
  };
  const handleHandleTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
    isDraggingHandleRef.current = false;
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Mode selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {SCIENCE_MODES.map((m, index) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setSelectedModeIndex(index)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              index === selectedModeIndex
                ? "bg-slate-800 text-white ring-2 ring-slate-600"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Comparison container: rounded-[32px], ring, shadow */}
      <div
        ref={containerRef}
        className="relative w-full aspect-video overflow-hidden rounded-[32px] ring-1 ring-white/10 cursor-ew-resize"
        style={{
          boxShadow: "0 20px 50px -12px rgba(0,0,0,0.5)",
        }}
      >
        {/* Layer 1: Relief (bottom) – image + mode tint with breathing */}
        <div className="absolute inset-0 w-full h-full bg-black">
          <Image
            src={mode.imageSrc}
            alt={`${mode.label} - Relief`}
            fill
            className="object-cover"
            sizes="900px"
          />
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundColor: mode.tintHex,
              mixBlendMode: mode.blendMode as "soft-light" | "multiply" | "overlay" | "screen",
            }}
            animate={{
              opacity: [
                opacityBase - 0.05,
                opacityBase + 0.05,
                opacityBase - 0.05,
              ],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Layer 2: Pain (top) – clipped, harsh filter + scanlines */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            willChange: "clip-path",
          }}
        >
          <Image
            src={mode.imageSrc}
            alt="Unfiltered glare"
            fill
            className="object-cover"
            sizes="900px"
            style={{ filter: PAIN_FILTER }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.05,
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.4) 2px, rgba(0,0,0,0.4) 3px)`,
            }}
          />
        </div>

        {/* Invisible range input for accessibility */}
        <input
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 z-30"
          aria-label="Drag to compare unfiltered vs EyeRise"
        />

        {/* Handle: vertical line + thumb + logo, stopPropagation */}
        <div
          className="absolute top-0 bottom-0 z-40 flex items-center justify-center"
          style={{
            left: `${sliderPosition}%`,
            transform: "translateX(-50%)",
          }}
        >
          <div
            className="absolute inset-0 w-20 -left-10 -right-10 cursor-ew-resize"
            onMouseDown={handleHandleMouseDown}
            onTouchStart={handleHandleTouchStart}
            onTouchMove={handleHandleTouchMove}
            onTouchEnd={handleHandleTouchEnd}
            onTouchCancel={handleHandleTouchEnd}
          />
          <div className="w-0.5 bg-white/80 h-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-12 h-12 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
            <Shield className="w-6 h-6 text-blue-900" aria-hidden />
          </div>
        </div>

        {/* Pills */}
        <div className="absolute inset-0 pointer-events-none z-45">
          <div className="absolute top-6 left-6">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-md bg-black/40 ring-1 ring-red-500/30">
              UNFILTERED GLARE
            </span>
          </div>
          <div className="absolute top-6 right-6">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-md bg-black/40 ring-1 ring-green-500/30">
              EYERISE PROTECTION
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

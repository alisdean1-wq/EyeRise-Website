"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Shield } from "lucide-react";
import { MODES } from "@/lib/modes";

const slides = MODES;

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50); // 0-100%. Left = harsh blue, right = EyeRise tint. Starts in middle.
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingHandleRef = useRef(false);
  const glanceControlsRef = useRef<ReturnType<typeof animate> | null>(null);

  const updatePositionFromClientX = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
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

  const runGlanceAnimation = useRef(() => {
    if (isDraggingHandleRef.current) return;
    glanceControlsRef.current?.stop();
    const controls = animate(50, [95, 5, 50], {
      duration: 2.2,
      ease: "easeInOut",
      onUpdate: (latest) => setSliderPosition(latest),
      onComplete: () => {
        setSliderPosition(50);
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      },
    });
    glanceControlsRef.current = controls;
  });

  // Start slider at center, animate center→right→left→center; advance happens in glance onComplete
  useEffect(() => {
    setSliderPosition(50);
    glanceControlsRef.current?.stop();
    glanceControlsRef.current = null;
    runGlanceAnimation.current();
    return () => {
      glanceControlsRef.current?.stop();
      glanceControlsRef.current = null;
    };
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (slideId: number) => {
    const index = slides.findIndex(s => s.id === slideId);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDraggingHandleRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const currentSlide = slides[currentIndex];
  // Use per-mode objectFit so browser/docs (Productivity, Late Night Study) show full content; avoid crop.
  const isFocus = currentSlide.id === 6;
  const objectFit = currentSlide.objectFit ?? (isFocus ? "contain" : "cover");
  const rawPosition = currentSlide.objectPosition ?? "center";
  const objectPosition = rawPosition === "object-center" ? "center" : rawPosition === "object-top" ? "center top" : rawPosition;
  const panelBgClass = objectFit === "contain" ? (isFocus ? "bg-white" : "bg-slate-900") : "bg-black";
  const panelBgStyle = objectFit === "contain" && isFocus ? { backgroundColor: "#ffffff" } : objectFit === "contain" ? { backgroundColor: "#0f172a" } : undefined;
  const imageStyle = {
    objectFit,
    objectPosition,
    transform: "scale(1.03)",
  };
  const imageTransitionClass = "transition-transform duration-[5000ms] ease-linear";

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full">
      {/* Carousel Container - Large, Immersive */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[1500px] mx-auto aspect-[16/9] overflow-hidden rounded-3xl border-[8px] border-slate-900 shadow-2xl bg-black cursor-ew-resize"
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
        }}
        onTouchMove={handleTouchMove}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left / Right arrow buttons */}
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center shadow-lg transition-colors border border-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); goToNext(); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center shadow-lg transition-colors border border-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-7 h-7" />
        </button>

        {/* Stacked Comparison - Single image with slider reveal */}
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* Layer 1: EyeRise Protected (Background - always visible) */}
              <div className={`absolute inset-0 w-full h-full overflow-hidden ${panelBgClass}`} style={panelBgStyle}>
                <Image
                  src={currentSlide.imageSrc}
                  alt={`${currentSlide.reliefLabel} - Protected`}
                  fill
                  className={imageTransitionClass}
                  style={imageStyle}
                  priority
                  sizes="1500px"
                />
                <motion.div
                  key={`tint-${currentSlide.id}`}
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: currentSlide.opacityMin }}
                  animate={{
                    opacity: [
                      currentSlide.opacityMin,
                      currentSlide.opacityMax,
                      currentSlide.opacityMin,
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundColor: currentSlide.tintHex,
                      mixBlendMode: currentSlide.blendMode as any,
                    }}
                  />
                </motion.div>
              </div>

              {/* Layer 2: Harsh Bluelight (Foreground - LEFT side only; per-mode harsh config) */}
              {(() => {
                const h = currentSlide.harsh ?? {
                  overlayRgba: "37, 99, 235",
                  overlayOpacity: 0.5,
                  overlay2Opacity: 0.3,
                  filter: "brightness(1.22) saturate(1.55) hue-rotate(-18deg) contrast(1.12)",
                  scanOpacity: 0.15,
                  scanColorAlpha: 0.5,
                };
                return (
                  <div
                    className="overlay-clip absolute inset-0 w-full h-full overflow-hidden"
                    style={{
                      clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                      backgroundColor: isFocus ? "#ffffff" : "#000000",
                      willChange: "clip-path",
                    }}
                  >
                    <Image
                      src={currentSlide.imageSrc}
                      alt={`${currentSlide.painLabel} - Unprotected`}
                      fill
                      className={imageTransitionClass}
                      style={{
                        ...imageStyle,
                        filter: h.filter,
                      }}
                      priority
                      sizes="1500px"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundColor: `rgba(${h.overlayRgba}, ${h.overlayOpacity})`,
                        mixBlendMode: "overlay",
                      }}
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundColor: `rgba(${h.overlayRgba}, ${h.overlay2Opacity})`,
                        mixBlendMode: "soft-light",
                      }}
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        opacity: h.scanOpacity,
                        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(30, 58, 138, ${h.scanColorAlpha}) 2px, rgba(30, 58, 138, ${h.scanColorAlpha}) 3px)`,
                      }}
                    />
                  </div>
                );
              })()}

              {/* Invisible range input for accessibility / fallback */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 z-30"
                style={{
                  WebkitAppearance: "none",
                  appearance: "none",
                }}
                aria-label="Drag to compare"
              />

              {/* Slider handle: large invisible touch target + visible line + thumb */}
              <div
                className="slider-handle absolute top-0 bottom-0 z-40 flex items-center justify-center"
                style={{
                  left: `${sliderPosition}%`,
                  transform: "translateX(-50%)",
                }}
              >
                {/* Larger invisible touch target for easier grabbing */}
                <div
                  className="absolute inset-0 w-20 -left-10 -right-10 cursor-ew-resize"
                  onMouseDown={handleHandleMouseDown}
                  onTouchStart={handleHandleTouchStart}
                  onTouchMove={handleHandleTouchMove}
                  onTouchEnd={handleHandleTouchEnd}
                  onTouchCancel={handleHandleTouchEnd}
                />
                {/* Vertical white line */}
                <div className="w-0.5 bg-white/80 h-full pointer-events-none" />
                {/* Thumb: white circle with Shield icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-12 h-12 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-900" aria-hidden />
                </div>
              </div>

              {/* Static labels - gradient pills (red & leaf-green) with Try Free–style depth */}
              <div className="absolute inset-0 pointer-events-none z-45">
                <div className="absolute top-4 left-3 md:top-5 md:left-4">
                  <div className="px-2 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-red-600 to-red-800 text-white text-xs md:text-sm font-bold rounded-full shadow-lg">
                    Without EyeRise
                  </div>
                </div>
                <div className="absolute top-4 right-3 md:top-5 md:right-4">
                  <div className="px-2 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-green-600 to-emerald-700 text-white text-xs md:text-sm font-bold rounded-full shadow-lg">
                    With EyeRise
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mode Selector - Enhanced */}
      <div className="mt-10 flex justify-center gap-3 flex-wrap max-w-[1500px] mx-auto">
        {slides.map((slide, index) => (
          <motion.button
            key={slide.id}
            onClick={() => goToSlide(slide.id)}
            className={`relative rounded-2xl overflow-hidden transition-all duration-300 group ${
              index === currentIndex
                ? "ring-4 ring-blue-500 shadow-2xl scale-110"
                : "ring-2 ring-slate-300 hover:ring-blue-400 hover:scale-110"
            }`}
            whileHover={{ scale: index === currentIndex ? 1.1 : 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${slide.label} mode`}
            style={{
              width: "115px",
              height: "72px",
            }}
          >
            {/* Thumbnail image */}
            <Image
              src={slide.imageSrc}
              alt={slide.label}
              fill
              className={`object-cover ${slide.objectPosition || "object-center"}`}
              sizes="115px"
            />
            
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Label - Always visible at bottom */}
            <div className="absolute bottom-0 inset-x-0 px-2 py-1.5 bg-gradient-to-t from-black/90 to-transparent">
              <span className="text-white text-xs font-semibold block text-center truncate">
                {slide.label}
              </span>
            </div>

            {/* Tooltip on Hover */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
              <div className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-xl">
                {slide.label}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
              </div>
            </div>

            {/* Active indicator */}
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 border-2 border-blue-400"
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Mode description */}
      <motion.div
        key={currentSlide.id}
        className="mt-6 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
          {currentSlide.blurb}
        </p>
      </motion.div>
    </div>
  );
}

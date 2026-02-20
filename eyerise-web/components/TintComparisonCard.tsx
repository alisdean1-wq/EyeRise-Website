"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface TintComparisonCardProps {
  imageSrc: string;
  tintHex: string;
  opacityMin: number;
  opacityMax: number;
  blendMode: string;
  objectPosition?: string;
  optionalShimmer?: boolean;
  showBadges?: boolean;
  aspect?: string;
  breathing?: boolean;
  durationMs?: number;
  className?: string;
}

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

export default function TintComparisonCard({
  imageSrc,
  tintHex,
  opacityMin,
  opacityMax,
  blendMode,
  objectPosition = "object-center",
  optionalShimmer = false,
  showBadges = false,
  aspect = "aspect-[16/10]",
  breathing = true,
  durationMs = 5000,
  className = "",
}: TintComparisonCardProps) {
  const durationSec = durationMs / 1000;

  return (
    <div className={`relative w-full overflow-hidden rounded-xl border border-slate-200 bg-black shadow-lg ${aspect} ${className}`}>
      {/* Left: original image (0–50%) */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 overflow-hidden">
        <Image
          src={imageSrc}
          alt="Original"
          fill
          className={`object-cover ${objectPosition}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          sizes="(max-width: 768px) 50vw, 600px"
        />
      </div>

      {/* Right: same image + tint (50–100%) */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
        <Image
          src={imageSrc}
          alt="EyeRise"
          fill
          className={`object-cover ${objectPosition}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          sizes="(max-width: 768px) 50vw, 600px"
        />
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: opacityMin }}
          animate={
            breathing
              ? { opacity: [opacityMin, opacityMax, opacityMin] }
              : { opacity: (opacityMin + opacityMax) / 2 }
          }
          transition={
            breathing
              ? { duration: durationSec, repeat: Infinity, ease: "easeInOut" }
              : {}
          }
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: tintHex, mixBlendMode: blendMode as any }}
          />
        </motion.div>
        {optionalShimmer && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)`,
              backgroundSize: "200% 100%",
            }}
            animate={{ backgroundPosition: ["0% 0%", "200% 0%", "0% 0%"] }}
            transition={{ duration: durationSec, repeat: Infinity, ease: "linear" }}
          />
        )}
      </div>

      {/* Centered divider */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 z-20 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.15) 10%, rgba(255,255,255,0.15) 90%, transparent 100%)`,
          boxShadow: "0 0 12px rgba(255,255,255,0.12), 0 0 4px rgba(255,255,255,0.08)",
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] z-10"
        style={{ backgroundImage: GRAIN_SVG }}
      />

      {showBadges && (
        <>
          <div className="absolute top-4 left-4 z-30">
            <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-full shadow-lg">
              Original
            </span>
          </div>
          <div className="absolute top-4 right-4 z-30">
            <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-full shadow-lg">
              EyeRise
            </span>
          </div>
        </>
      )}
    </div>
  );
}

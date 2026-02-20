"use client";

import { motion } from "framer-motion";

interface PricingToggleProps {
  isYearly: boolean;
  onToggle: (yearly: boolean) => void;
  variant?: "light" | "dark";
}

export default function PricingToggle({
  isYearly,
  onToggle,
  variant = "light",
}: PricingToggleProps) {
  const isDark = variant === "dark";

  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <span
        className={`text-sm font-medium transition-colors ${
          !isYearly
            ? isDark
              ? "text-white"
              : "text-slate-900"
            : isDark
              ? "text-zinc-500"
              : "text-slate-500"
        }`}
      >
        Monthly
      </span>
      <button
        onClick={() => onToggle(!isYearly)}
        className={`relative w-14 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${
          isDark ? "focus:ring-offset-[#050505]" : "focus:ring-offset-2"
        }`}
        aria-label="Toggle pricing period"
      >
        <motion.div
          className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-sm"
          animate={{ x: isYearly ? 24 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            backgroundColor: isYearly
              ? "#d97706"
              : isDark
                ? "#3f3f46"
                : "#cbd5e1",
          }}
          transition={{ duration: 0.2 }}
        />
      </button>
      <span
        className={`text-sm font-medium transition-colors ${
          isYearly
            ? isDark
              ? "text-white"
              : "text-slate-900"
            : isDark
              ? "text-zinc-500"
              : "text-slate-500"
        }`}
      >
        Yearly
        {isYearly && (
          <span
            className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
              isDark
                ? "bg-amber-500/20 text-amber-400"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            Best Value
          </span>
        )}
      </span>
    </div>
  );
}

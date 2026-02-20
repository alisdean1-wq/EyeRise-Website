"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Clock } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExitIntentModal({ isOpen, onClose }: ExitIntentModalProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 p-4"
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-slate-200">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>

              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 text-center relative overflow-hidden">
                <motion.div
                  className="flex justify-center mb-4"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Logo variant="modal" href={null} />
                </motion.div>

                <h2 className="text-3xl font-bold text-white mb-2">
                  Wait! Your Eyes Deserve Better
                </h2>
                <p className="text-amber-100 text-lg">
                  Start your free trial now. No credit card required.
                </p>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Countdown timer */}
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 mb-6 border border-slate-200">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                      Special Offer Expires In
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="text-center">
                      <div className="bg-white rounded-lg px-4 py-3 shadow-md border border-slate-200 min-w-[70px]">
                        <div className="text-3xl font-bold text-slate-900">
                          {String(timeLeft.hours).padStart(2, "0")}
                        </div>
                      </div>
                      <div className="text-xs text-slate-600 mt-2 font-medium">Hours</div>
                    </div>
                    <div className="text-2xl font-bold text-slate-400">:</div>
                    <div className="text-center">
                      <div className="bg-white rounded-lg px-4 py-3 shadow-md border border-slate-200 min-w-[70px]">
                        <div className="text-3xl font-bold text-slate-900">
                          {String(timeLeft.minutes).padStart(2, "0")}
                        </div>
                      </div>
                      <div className="text-xs text-slate-600 mt-2 font-medium">Minutes</div>
                    </div>
                    <div className="text-2xl font-bold text-slate-400">:</div>
                    <div className="text-center">
                      <div className="bg-white rounded-lg px-4 py-3 shadow-md border border-slate-200 min-w-[70px]">
                        <motion.div
                          className="text-3xl font-bold text-orange-500"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          {String(timeLeft.seconds).padStart(2, "0")}
                        </motion.div>
                      </div>
                      <div className="text-xs text-slate-600 mt-2 font-medium">Seconds</div>
                    </div>
                  </div>
                </div>

                {/* Benefits list */}
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-sm font-bold">✓</span>
                    </div>
                    <span className="text-slate-700">14-day free trial, cancel anytime</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-sm font-bold">✓</span>
                    </div>
                    <span className="text-slate-700">No credit card required</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-sm font-bold">✓</span>
                    </div>
                    <span className="text-slate-700">Instant access to all features</span>
                  </li>
                </ul>

                {/* CTA Button */}
                <Link href="/pricing" onClick={onClose}>
                  <motion.button
                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Try Free for 14 Days
                  </motion.button>
                </Link>

                <p className="text-center text-sm text-slate-500 mt-4">
                  Join 40,000+ users protecting their eyes
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StickyCTA() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [300, 400], [0, 1]);
  const scale = useTransform(scrollY, [300, 400], [0.8, 1]);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      style={{ opacity, scale }}
    >
      <Link href="/pricing">
        <motion.button
          className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full shadow-2xl shadow-amber-500/30 ring-2 ring-amber-400/40 hover:ring-amber-400/60 transition-all"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              "0 25px 50px -12px rgba(249, 115, 22, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-base">Try Free</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </Link>
    </motion.div>
  );
}

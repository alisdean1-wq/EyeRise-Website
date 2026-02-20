"use client";

import { motion } from "framer-motion";

export default function DarkAuroraBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden
    >
      {/* Layer 1: Animated gradient mesh – drifts and breathes (clearly visible motion) */}
      <motion.div
        className="absolute -inset-[30%] blur-2xl"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 20% 40%, hsl(35, 92%, 52% / 0.28) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, hsl(25, 95%, 55% / 0.22) 0%, transparent 50%),
            radial-gradient(ellipse 70% 60% at 50% 80%, hsl(35, 90%, 50% / 0.18) 0%, transparent 55%)
          `,
          backgroundSize: "200% 200%",
        }}
        animate={{
          x: ["-5%", "5%", "-3%", "-5%"],
          y: ["-3%", "4%", "2%", "-3%"],
          scale: [1, 1.12, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Layer 2: Floating blobs – faster, larger movement so animation is obvious */}
      <motion.div
        className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-[80px] opacity-[0.22]"
        style={{
          left: "10%",
          top: "20%",
          background: "radial-gradient(circle, hsl(35, 92%, 50%) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.15, 0.92, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[80px] opacity-[0.18]"
        style={{
          right: "5%",
          top: "40%",
          background: "radial-gradient(circle, hsl(25, 95%, 55%) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 40, -25, 0],
          scale: [1, 0.92, 1.18, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
      <motion.div
        className="absolute w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full blur-[100px] opacity-[0.14]"
        style={{
          left: "40%",
          bottom: "10%",
          background: "radial-gradient(circle, hsl(30, 95%, 50%) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 50, -60, 0],
          y: [0, -35, 40, 0],
          scale: [1, 1.25, 0.88, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </div>
  );
}

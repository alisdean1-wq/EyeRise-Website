"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

export default function CherryBlossomParticles() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Create 15-20 petals
    const newPetals: Petal[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random starting x position (percentage)
      y: -10, // Start above the viewport
      delay: Math.random() * 20, // Stagger the start times
      duration: 15 + Math.random() * 10, // Random fall duration (15-25s)
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute w-2 h-2 rounded-full bg-pink-300/40"
          initial={{
            x: `${petal.x}vw`,
            y: "-10vh",
            opacity: 0.4,
            scale: 0.8 + Math.random() * 0.4,
          }}
          animate={{
            y: "110vh",
            x: `${petal.x + (Math.random() - 0.5) * 10}vw`,
            opacity: [0.4, 0.6, 0.3, 0],
            rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

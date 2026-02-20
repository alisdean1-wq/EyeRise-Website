"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Eye, Brain, Moon } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedReveal from "@/components/AnimatedReveal";
import WaveformOverlay from "@/components/WaveformOverlay";

const BENEFITS = [
  {
    id: "strain",
    title: "Less Eye Strain",
    description: "Relax your vision within minutes of activation.",
    icon: Eye,
  },
  {
    id: "focus",
    title: "Better Focus",
    description: "Stay productive longer without screen fatigue.",
    icon: Brain,
  },
  {
    id: "sleep",
    title: "Improved Sleep",
    description: "Evening use that won't wreck your sleep cycle.",
    icon: Moon,
  },
];

function BenefitCard({
  benefit,
  index,
}: {
  benefit: (typeof BENEFITS)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative rounded-2xl bg-mustafar-card p-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 400,
      }}
      whileHover={{
        scale: 1.03,
        borderColor: "rgba(249, 115, 22, 0.4)",
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
    >
      {/* Breathing glow */}
      <motion.div
        className="absolute -inset-2 rounded-2xl -z-10"
        animate={{
          boxShadow: [
            "0 0 40px rgba(249, 115, 22, 0.08)",
            "0 0 60px rgba(249, 115, 22, 0.15)",
            "0 0 40px rgba(249, 115, 22, 0.08)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F97316]/20 flex items-center justify-center"
        animate={{
          scale: isHovered ? 1.1 : 1,
          boxShadow: isHovered
            ? "0 0 30px rgba(249, 115, 22, 0.5)"
            : "0 0 0px rgba(249, 115, 22, 0)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <benefit.icon className="w-8 h-8 text-[#F97316]" />
      </motion.div>
      <h3 className="text-xl font-bold text-white mb-3">
        {benefit.title}
      </h3>
      <p className="text-zinc-400 leading-relaxed">
        {benefit.description}
      </p>
    </motion.div>
  );
}


export default function PerformancePayoff() {
  return (
    <section className="relative py-12 md:py-16 bg-black overflow-hidden">
      <WaveformOverlay />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="The Performance Payoff"
          subtitle="Instant relief—feel the difference in minutes"
        />
        <AnimatedReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {BENEFITS.map((benefit, index) => (
              <BenefitCard key={benefit.id} benefit={benefit} index={index} />
            ))}
          </div>

          {/* Glowing CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/pricing">
              <motion.span
                className="inline-flex items-center gap-3 px-12 py-5 bg-[#F97316] text-black font-bold text-lg rounded-xl"
                style={{
                  boxShadow: "0 0 40px rgba(249, 115, 22, 0.5)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 60px rgba(249, 115, 22, 0.7)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                Secure My Digital Future
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.span>
            </Link>
          </motion.div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

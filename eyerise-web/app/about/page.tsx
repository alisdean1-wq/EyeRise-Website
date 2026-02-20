"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import WaveformOverlay from "@/components/WaveformOverlay";
import DarkAuroraBackground from "@/components/DarkAuroraBackground";
import HeroWaveOverlay from "@/components/HeroWaveOverlay";

const values = [
  {
    title: "Duty",
    description:
      "We feel a responsibility to protect your eyes—not just sell a product. Every line of code we write is in service of that.",
  },
  {
    title: "Honor",
    description:
      "We build with integrity. No dark patterns, no data harvesting, no shortcuts. What we promise is what you get.",
  },
  {
    title: "Vision",
    description:
      "Yes, we're an eye health company—so of course our third value is Vision. We see a world where screen time doesn't mean eye damage. We're building toward it.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero / Statement */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <DarkAuroraBackground />
        <HeroWaveOverlay />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Our <span className="text-gradient">Mission</span> to the World
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              We&apos;re on a mission to change how the world sees screen time. Literally.
            </p>
          </motion.div>

          {/* EyeRise Logo */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 rounded-full -z-10"
                animate={{
                  boxShadow: [
                    "0 0 60px rgba(245, 158, 11, 0.08)",
                    "0 0 90px rgba(245, 158, 11, 0.15)",
                    "0 0 60px rgba(245, 158, 11, 0.08)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <Image
                src="/eyerise-logo-full.png"
                alt="EyeRise"
                width={128}
                height={128}
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="relative py-10 md:py-12 overflow-hidden">
        <WaveformOverlay />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed mb-6">
              Hey. We&apos;re a small team who built EyeRise because we needed it ourselves. We spent years staring at screens—coding, writing, learning—and we kept hitting the same wall: eye strain, headaches, that 3:00 PM crash. We looked for a tool that didn&apos;t just dim the screen but actually optimized for our biology. We couldn&apos;t find one. So we built it.
            </p>
            <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed">
              We really wanted to help people. We wanted to save millions of pairs of eyes. And we&apos;re honored that you&apos;re here—that you&apos;re making this happen with us. Every person who joins us is another person we can protect. To us, that matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-10 md:py-12 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
              Our goal is to change the vision space. Pun intended. We&apos;re not building another blue-light filter that barely does anything. We&apos;re building a biological safety net—something that adapts to your circadian rhythm, protects your retinas, and actually makes a difference. We believe screen time shouldn&apos;t cost you your eyesight.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values - Square Boxes */}
      <section className="relative py-10 md:py-14 overflow-hidden">
        <WaveformOverlay />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-gradient">Values</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.1 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                className="relative rounded-2xl bg-mustafar-card p-8 aspect-square flex flex-col items-center justify-center text-center overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, type: "spring", stiffness: 400 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(245, 158, 11, 0.4)",
                  boxShadow: "0 0 30px rgba(245, 158, 11, 0.15)",
                }}
              >
                {/* Breathing glow */}
                <motion.div
                  className="absolute -inset-2 rounded-2xl -z-10"
                  animate={{
                    boxShadow: [
                      "0 0 40px rgba(245, 158, 11, 0.08)",
                      "0 0 60px rgba(245, 158, 11, 0.15)",
                      "0 0 40px rgba(245, 158, 11, 0.08)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.h3
                  className="text-2xl md:text-3xl font-bold mb-4"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(245, 158, 11, 0.3)",
                      "0 0 40px rgba(245, 158, 11, 0.6)",
                      "0 0 20px rgba(245, 158, 11, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent font-extrabold">
                    {value.title.toUpperCase()}
                  </span>
                </motion.h3>
                <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing + CTA */}
      <section className="relative py-10 md:py-14 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.p
            className="text-zinc-300 text-2xl md:text-3xl leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            We&apos;re honored you&apos;re here. Together we&apos;re going to save millions of pairs of eyes. If that sounds like something you want to be part of, we&apos;d love to have you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/pricing">
              <motion.span
                className="inline-flex items-center gap-3 px-16 py-6 bg-amber-500 text-black font-bold text-xl md:text-2xl rounded-xl shadow-lg shadow-amber-500/25 hover:bg-amber-400 transition-colors"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 60px rgba(245, 158, 11, 0.5)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                Protect Your Vision
                <svg
                  className="w-6 h-6 md:w-7 md:h-7"
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
        </div>
      </section>
    </div>
  );
}

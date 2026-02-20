"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, User, SunMoon, Hand } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedReveal from "@/components/AnimatedReveal";
import WaveformOverlay from "@/components/WaveformOverlay";

const CARDS = [
  {
    id: "ai",
    title: "AI Insights",
    subtext: "Scanning Eye Fatigue...",
    icon: Activity,
    delay: 0,
  },
  {
    id: "posture",
    title: "Posture Alerts",
    subtext: "Tech Neck detection",
    icon: User,
    delay: 0.1,
  },
  {
    id: "circadian",
    title: "Circadian Sync",
    subtext: "Real-time sun data",
    icon: SunMoon,
    delay: 0.2,
  },
  {
    id: "auto",
    title: "Auto-Switching",
    subtext: "Hands-free modes",
    icon: Hand,
    delay: 0.3,
  },
];

// Wireframe silhouette paths - slouched (head forward, shoulders rounded)
const SLOUCHED_HEAD = "M 50 20 Q 55 25 50 35 L 45 35 Q 45 25 50 20";
const SLOUCHED_NECK = "M 50 35 L 55 55";
const SLOUCHED_BODY = "M 55 55 Q 70 60 65 90 L 65 120 L 55 120 L 55 90 Q 50 65 55 55";
const SLOUCHED_ARM = "M 65 75 L 85 70";

// Upright version (rotated/transformed)
function PostureSilhouette({ isHovered }: { isHovered: boolean }) {
  return (
    <svg
      viewBox="0 0 100 130"
      className="w-full h-24 mx-auto"
      style={{ transform: "scale(0.9)" }}
    >
      <motion.g
        initial={{ rotate: -15, transformOrigin: "50px 25px" }}
        animate={{
          rotate: isHovered ? 0 : -15,
          transformOrigin: "50px 25px",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <path
          d={SLOUCHED_HEAD}
          fill="none"
          stroke="#F97316"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>
      <motion.g
        initial={{ rotate: -8, transformOrigin: "52px 45px" }}
        animate={{
          rotate: isHovered ? 0 : -8,
          transformOrigin: "52px 45px",
        }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
      >
        <path
          d={SLOUCHED_NECK}
          fill="none"
          stroke="#F97316"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>
      <motion.path
        d={SLOUCHED_BODY}
        fill="none"
        stroke="#F97316"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
      />
      <motion.path
        d={SLOUCHED_ARM}
        fill="none"
        stroke="#F97316"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ rotate: -20, transformOrigin: "65px 75px" }}
        animate={{
          rotate: isHovered ? 0 : -20,
          transformOrigin: "65px 75px",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
    </svg>
  );
}

function CircadianIcon() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const updateRotation = () => {
      const now = new Date();
      const hours = now.getHours() + now.getMinutes() / 60;
      // 0h = midnight (moon top), 12h = noon (sun top)
      setRotation((hours / 24) * 360);
    };
    updateRotation();
    const id = setInterval(updateRotation, 60000); // every minute
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      animate={{ rotate: rotation }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
      className="flex justify-center"
    >
      <SunMoon className="w-12 h-12 text-[#F97316]" strokeWidth={2} />
    </motion.div>
  );
}

function BentoCard({
  card,
  children,
}: {
  card: (typeof CARDS)[0];
  children: (isHovered: boolean) => React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative rounded-xl bg-mustafar-card p-6 overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: card.delay }}
      whileHover={{
        scale: 1.02,
        borderColor: "rgba(249, 115, 22, 0.4)",
      }}
    >
      <div className="relative z-10">{children(isHovered)}</div>
    </motion.div>
  );
}

export default function IntelligentProSuiteBento() {
  return (
    <section className="relative py-12 md:py-16 bg-black overflow-hidden">
      <WaveformOverlay />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="The Intelligent Pro Suite"
          subtitle="AI Safety Net—premium features that work while you focus"
        />
        <AnimatedReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CARDS.map((card) => (
              <BentoCard key={card.id} card={card}>
                {(isHovered) => (
                  <>
                  {card.id === "ai" && (
                    <div className="flex flex-col items-center mb-4">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-12 h-12 rounded-full bg-[#F97316]/20 flex items-center justify-center"
                      >
                        <Activity className="w-6 h-6 text-[#F97316]" />
                      </motion.div>
                      <motion.p
                        className="text-xs text-zinc-500 mt-2"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {card.subtext}
                      </motion.p>
                    </div>
                  )}
                  {card.id === "posture" && (
                    <div className="mb-4">
                      <PostureSilhouette isHovered={isHovered} />
                    </div>
                  )}
                  {card.id === "circadian" && (
                    <div className="mb-4">
                      <CircadianIcon />
                    </div>
                  )}
                  {card.id === "auto" && (
                    <motion.div
                      className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#F97316]/20 flex items-center justify-center"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(249, 115, 22, 0.2)",
                          "0 0 40px rgba(249, 115, 22, 0.4)",
                          "0 0 20px rgba(249, 115, 22, 0.2)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Hand className="w-6 h-6 text-[#F97316]" />
                    </motion.div>
                  )}
                  {card.id !== "ai" && (
                    <p className="text-xs text-zinc-500 mb-2">{card.subtext}</p>
                  )}
                  <h3 className="text-lg font-bold text-white">
                    {card.title}
                  </h3>
                  </>
                )}
              </BentoCard>
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

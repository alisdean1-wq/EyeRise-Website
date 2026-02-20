"use client";

import { motion } from "framer-motion";
import { CHROME_STORE_URL } from "@/lib/constants";

const bentoItems = [
  {
    id: 1,
    title: "Blue Light Suppression",
    description: "Advanced filtering reduces eye strain",
    size: "large",
    gradient: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
  },
  {
    id: 2,
    title: "Cherry Blossom Mode",
    description: "Soft pink tint for gentle focus",
    size: "medium",
    gradient: "from-pink-50 to-rose-50",
    borderColor: "border-pink-200",
  },
  {
    id: 3,
    title: "Focus Timer",
    description: "Built-in Pomodoro technique",
    size: "small",
    gradient: "from-amber-50 to-orange-50",
    borderColor: "border-amber-200",
  },
  {
    id: 4,
    title: "Eye Strain Analytics",
    description: "Track your screen time patterns",
    size: "small",
    gradient: "from-purple-50 to-violet-50",
    borderColor: "border-purple-200",
  },
];

export default function BentoGrid() {
  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-2 md:row-span-1",
    small: "md:col-span-1 md:row-span-1",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
      {bentoItems.map((item, index) => (
        <motion.div
          key={item.id}
          className={`
            ${sizeClasses[item.size as keyof typeof sizeClasses]}
            bg-white/30 backdrop-blur-md rounded-xl border ${item.borderColor}
            p-6 md:p-8 relative overflow-hidden group
          `}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50 group-hover:opacity-70 transition-opacity`} />
          
          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              {item.title}
            </h3>
            <p className="text-slate-600 text-sm md:text-base">
              {item.description}
            </p>
          </div>
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-pink-300/50 group-hover:shadow-lg group-hover:shadow-pink-200/50 transition-all pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
}

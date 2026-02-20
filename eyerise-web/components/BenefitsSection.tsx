"use client";

import { TrendingUp, Clock, Moon, Eye, Glasses } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: TrendingUp,
    title: "Deep Work",
    description: "Users are up to 75% more productive[cite: 1].",
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: Clock,
    title: "Free Time",
    description: "Finish tasks faster, leave energy for family.",
    color: "from-emerald-400 to-teal-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Moon,
    title: "Better Sleep",
    description: "Filter blue light 2-3h before bed[cite: 5].",
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Eye,
    title: "Eye Health",
    description: "Reduce strain, dryness, and headaches[cite: 6].",
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Glasses,
    title: "Vision",
    description: "Slow the need for stronger glasses[cite: 11].",
    color: "from-cyan-400 to-blue-500",
    bgColor: "bg-cyan-50",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-14 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why EyeRise Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Science-backed benefits for your eyes and productivity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className={`${benefit.bgColor} rounded-xl p-8 shadow-sm border-2 border-transparent hover:shadow-lg hover:scale-105 transition-all`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center mb-4 shadow-md`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

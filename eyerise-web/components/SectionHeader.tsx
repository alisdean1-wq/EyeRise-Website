"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`text-center mb-10 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

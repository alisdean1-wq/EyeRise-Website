"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
}: CardProps) {
  const baseStyles =
    "bg-white rounded-xl border border-slate-200 shadow-sm p-6 transition-all duration-200";

  const hoverStyles = hover
    ? "hover:shadow-md hover:border-slate-300"
    : "";

  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      whileHover={hover ? { y: -2 } : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

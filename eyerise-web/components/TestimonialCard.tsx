"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/testimonials";

function avatarUrl(testimonial: Testimonial): string {
  if (testimonial.image?.startsWith("http")) return testimonial.image;
  if (testimonial.image?.startsWith("/")) return testimonial.image;
  const nameForAvatar = testimonial.name.replace(/\s+/, "+");
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(nameForAvatar)}&size=96&background=f59e0b&color=fff&bold=true`;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  quoteColor?: string;
  delay?: number;
}

export default function TestimonialCard({
  testimonial,
  quoteColor = "text-amber-500",
  delay = 0,
}: TestimonialCardProps) {
  const isLocalImage = testimonial.image?.startsWith("/");
  const avatarSrc = avatarUrl(testimonial);

  return (
    <motion.article
      className="bg-white dark:bg-zinc-900/80 rounded-2xl p-8 shadow-lg border border-slate-200/80 dark:border-zinc-700/50 hover:shadow-xl hover:border-amber-200/50 dark:hover:border-amber-500/30 transition-all duration-300 flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
        <div className="flex-shrink-0">
          {isLocalImage ? (
            <Image
              src={testimonial.image!}
              alt={testimonial.name}
              width={96}
              height={96}
              className="rounded-full object-cover w-20 h-20 sm:w-24 sm:h-24 ring-2 ring-amber-500/20"
            />
          ) : (
            <img
              src={avatarSrc}
              alt={testimonial.name}
              width={96}
              height={96}
              className="rounded-full object-cover w-20 h-20 sm:w-24 sm:h-24 ring-2 ring-amber-500/20"
            />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <Quote
            className={`w-8 h-8 sm:w-10 sm:h-10 mb-3 ${quoteColor}`}
            aria-hidden
          />
          <blockquote>
            <p className="text-slate-700 dark:text-zinc-300 text-lg leading-relaxed mb-4">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
          </blockquote>
          {testimonial.story && (
            <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed mb-5">
              {testimonial.story}
            </p>
          )}
          <footer>
            <p className="font-semibold text-slate-900 dark:text-white">
              {testimonial.name}
            </p>
            <p className="text-sm text-slate-500 dark:text-zinc-400">
              {testimonial.role}
            </p>
          </footer>
        </div>
      </div>
    </motion.article>
  );
}

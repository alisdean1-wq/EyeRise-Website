"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex P.",
    role: "Developer",
    quote:
      "Tension headaches gone. I get more done in 6 hours than I used to in 8.",
  },
  {
    name: "Maria S.",
    role: "Designer",
    quote:
      "Focus Mode keeps colors true. I sleep better after late work.",
  },
  {
    name: "Julie",
    role: "(Mother)",
    quote: "Wow! This is INCREDIBLE! I am going to buy right now!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-14 bg-gradient-to-b from-stone-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Loved by Users
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real stories from people who use EyeRise every day
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md border-2 border-slate-200 hover:shadow-xl hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className={`w-8 h-8 mb-4 ${
                index === 0 ? "text-amber-500" : 
                index === 1 ? "text-purple-500" : 
                "text-cyan-500"
              }`} />
              <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-slate-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

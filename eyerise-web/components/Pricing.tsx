"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "Forever Free",
    description: "Essential eye care features",
    features: [
      "Day/Night modes",
      "Break reminders",
      "20-20-20 rule prompts",
      "Basic screen warming",
    ],
    cta: "Try Free",
    ctaVariant: "outline" as const,
  },
  {
    name: "Pro",
    price: "$14.99",
    period: "per month",
    description: "Advanced features for power users",
    highlight: "Less than a cup of coffee",
    features: [
      "Custom schedules",
      "Analytics dashboard",
      "All color modes",
      "Advanced break settings",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    ctaVariant: "primary" as const,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-14 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start free. Upgrade when you're ready.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl p-8 border-2 ${
                plan.name === "Pro"
                  ? "border-slate-900 shadow-lg"
                  : "border-slate-200"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.highlight && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-sm font-medium rounded-full shadow-md">
                    {plan.highlight}
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-slate-600 mb-6">{plan.description}</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-slate-600">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-slate-900 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className={`block w-full text-center px-6 py-3 rounded-full font-medium transition-all ${
                  plan.ctaVariant === "primary"
                    ? "bg-gradient-to-r from-slate-900 to-slate-700 text-white hover:from-slate-800 hover:to-slate-600 shadow-lg hover:shadow-xl"
                    : "bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-50 hover:scale-105"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

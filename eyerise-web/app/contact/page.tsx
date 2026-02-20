"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Mail, HelpCircle, Wrench } from "lucide-react";
import StickyCTA from "@/components/StickyCTA";
import AnimatedReveal from "@/components/AnimatedReveal";

const EMAIL = "eyerise.app@gmail.com";

const QUICK_ANSWERS = [
  {
    q: "How quickly will I get a response?",
    a: "We aim to reply within 24 hours on business days. For urgent support, mention \"Urgent\" in your subject line.",
  },
  {
    q: "Can I get help with billing?",
    a: "Yes. Email us with your order details and we'll handle billing questions personally.",
  },
  {
    q: "Do you offer technical support?",
    a: "Absolutely. Describe your issue and we'll guide you through setup, troubleshooting, or compatibility.",
  },
  {
    q: "Where can I find installation guides?",
    a: "Check the FAQ below for step-by-step guides. You can still email us here if you're stuck.",
  },
];

const MAIN_FAQS = [
  {
    question: "How do I install EyeRise?",
    answer:
      "Click 'Add to Chrome — Free' from our homepage or the Chrome Web Store. The extension will install automatically and start working immediately.",
  },
  {
    question: "Does EyeRise work on all websites?",
    answer:
      "Yes, EyeRise works across all websites and applications in Chrome. It applies the tint at the browser level, so it works everywhere.",
  },
  {
    question: "Can I customize the tint intensity?",
    answer:
      "Yes! Pro users can adjust tint intensity, choose between different modes (Amber, Focus, Night), and set custom break intervals. Free users get preset Day/Night modes.",
  },
  {
    question: "Will EyeRise slow down my browser?",
    answer:
      "No. EyeRise is lightweight and optimized for performance. You won't notice any impact on browser speed or system resources.",
  },
  {
    question: "How do breaks work?",
    answer:
      "EyeRise sends gentle notifications at your set intervals (20 minutes for Free, customizable for Pro). You can dismiss or snooze breaks as needed. They're reminders, not interruptions.",
  },
  {
    question: "Is my data private?",
    answer:
      "Absolutely. All usage data stays on your device. We don't collect, sell, or share your data. Privacy-first is a core principle.",
  },
  {
    question: "Can I use EyeRise on multiple devices?",
    answer:
      "EyeRise is a Chrome extension, so it works on any device running Chrome. Your Pro subscription is tied to your account, so you can use it across devices.",
  },
  {
    question: "How do I upgrade to Pro?",
    answer:
      "Click the 'Upgrade to Pro' button in the extension popup or on our website. You'll get a 3-day free trial before any charges.",
  },
];

const TROUBLESHOOTING = [
  {
    issue: "Extension not applying tint",
    steps: [
      "Refresh the page you're on",
      "Check that EyeRise is enabled in Chrome extensions (chrome://extensions)",
      "Try disabling and re-enabling the extension",
      "Restart Chrome if the issue persists",
    ],
  },
  {
    issue: "Breaks not showing",
    steps: [
      "Check your notification settings in Chrome",
      "Verify break reminders are enabled in EyeRise settings",
      "Make sure Chrome isn't in 'Do Not Disturb' mode",
    ],
  },
  {
    issue: "Dashboard not loading",
    steps: [
      "Clear your browser cache",
      "Check your internet connection",
      "Try opening the dashboard in an incognito window",
      `Email us at ${EMAIL} if the issue continues`,
    ],
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-lg border border-zinc-700/80 bg-zinc-800/40 overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-medium text-zinc-200 hover:bg-zinc-700/30 transition-colors"
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-4 h-4 flex-shrink-0 text-zinc-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-4 pt-0 text-sm text-zinc-400 leading-relaxed border-t border-zinc-700/50">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <StickyCTA />
      <div className="min-h-screen bg-[#050505] pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Get in touch
            </h1>
            <p className="text-lg text-zinc-400 mb-8">
              Have a question or feedback? Email us and we'll personally get back to you.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-amber-500 text-black font-semibold text-lg hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#050505] transition-colors"
            >
              <Mail className="w-6 h-6" />
              {EMAIL}
            </a>
          </motion.div>

          <div className="space-y-12">
            {/* Quick answers */}
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-400/90 mb-5 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-amber-500" />
                Quick answers
              </h2>
              <div className="space-y-2">
                {QUICK_ANSWERS.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    question={faq.q}
                    answer={faq.a}
                    isOpen={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                  />
                ))}
              </div>
            </motion.div>

            {/* Frequently Asked Questions */}
            <AnimatedReveal>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-400/90 mb-5 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-500" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-2">
                  {MAIN_FAQS.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openFaq === 4 + i}
                      onToggle={() =>
                        setOpenFaq(openFaq === 4 + i ? null : 4 + i)
                      }
                    />
                  ))}
                </div>
              </div>
            </AnimatedReveal>

            {/* Troubleshooting */}
            <AnimatedReveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-400/90 mb-5 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-amber-500" />
                  Troubleshooting
                </h2>
                <div className="space-y-6">
                  {TROUBLESHOOTING.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-zinc-700/80 bg-zinc-800/40 p-4"
                    >
                      <h3 className="text-base font-semibold text-white mb-3">
                        {item.issue}
                      </h3>
                      <ol className="list-decimal list-inside space-y-2 text-sm text-zinc-400">
                        {item.steps.map((step, stepIndex) => (
                          <li key={stepIndex}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedReveal>

            {/* Still need help? CTA */}
            <AnimatedReveal delay={0.2}>
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 backdrop-blur-sm p-8 text-center">
                <h2 className="text-xl font-bold text-white mb-4">
                  Still need help?
                </h2>
                <p className="text-zinc-400 mb-6">
                  Reach out and we'll get back to you within 24 hours.
                </p>
                <a
                  href={`mailto:${EMAIL}?subject=Support Request`}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-amber-500 text-black font-semibold text-lg hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#050505] transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  Email us
                </a>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </>
  );
}

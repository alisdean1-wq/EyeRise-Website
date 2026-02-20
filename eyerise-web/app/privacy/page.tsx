"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EMAIL = "eyerise.app@gmail.com";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            We built EyeRise because we care about your eyes—and your privacy. Here&apos;s our promise to you, in plain English.
          </p>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-400 mb-8">
              <strong className="text-white">Last updated:</strong> February 19, 2026
            </p>

            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              Hi there. We&apos;re a small team who built EyeRise to protect our own eyes during long coding sessions. We never wanted to build a product that tracks you or sells your data—that&apos;s not who we are. So we wrote this page to tell you exactly what happens with your information. No legalese tricks. Just honesty.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10 mb-3">
              Our Core Belief
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Your data belongs to you. Period. We designed EyeRise to run entirely on your device. We don&apos;t have servers collecting your browsing habits. We don&apos;t want them. Your screen time, your preferences, your life—that&apos;s yours.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10 mb-3">
              What We Don&apos;t Collect (And Never Will)
            </h2>
            <p className="text-zinc-400 mb-4">
              We literally cannot see:
            </p>
            <ul className="list-disc list-inside text-zinc-400 mb-8 space-y-2">
              <li>Your browsing history or which sites you visit</li>
              <li>Personal info like your name, email, or account details (unless you email us)</li>
              <li>Usage analytics, tracking pixels, or any of that stuff</li>
              <li>Anything that leaves your computer</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-10 mb-3">
              What Lives on Your Device
            </h2>
            <p className="text-zinc-400 mb-4">
              EyeRise stores your settings locally in Chrome—things like:
            </p>
            <ul className="list-disc list-inside text-zinc-400 mb-6 space-y-2">
              <li>Your mode preferences (Day, Focus, Late Night Study, etc.)</li>
              <li>Break reminder intervals</li>
              <li>Protected hours and streak data (for Pro+ users)</li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mb-8">
              This stays on your machine. We never see it. It&apos;s only there so EyeRise can remember how you like it.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10 mb-3">
              If You Go Pro+
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              When you subscribe, we use trusted payment processors (Stripe, etc.) to handle the transaction. We only keep what&apos;s needed to manage your subscription—no credit card numbers on our end. We take that seriously.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10 mb-3">
              If We Ever Change This
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              We might update this page from time to time. If we do, we&apos;ll post the new version here. We&apos;re not going to sneak in data collection—if we ever did something that felt off, we&apos;d tell you directly.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10 mb-3">
              Questions? We&apos;re Here.
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-2">
              Privacy is personal. If anything here feels unclear or you just want to chat, reach out. We read every email and we&apos;ll personally get back to you.
            </p>
            <p className="text-zinc-400">
              <Link
                href={`mailto:${EMAIL}`}
                className="text-[#F97316] hover:text-amber-400 transition-colors font-medium"
              >
                {EMAIL}
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

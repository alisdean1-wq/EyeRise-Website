"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EMAIL = "eyerise.app@gmail.com";

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            We keep this short and fair. You deserve to know exactly what you&apos;re agreeing to.
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
              Hey. We built EyeRise to help people like us—developers, writers, students—protect their eyes during screen sessions. We&apos;re not a faceless corporation. We&apos;re real people who care about building something honest. These terms exist because they have to, but we&apos;ve tried to make them readable and fair.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10 mb-3">
              The Basics
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              By using EyeRise, you&apos;re agreeing to these terms. If something doesn&apos;t sit right with you, that&apos;s okay—we&apos;d rather you not use it than feel uneasy. No hard feelings.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10 mb-3">
              How We Ask You to Use EyeRise
            </h2>
            <p className="text-zinc-400 mb-4">
              EyeRise is for you—to protect your eyes, reduce strain, and help you work longer without burning out. We ask that you:
            </p>
            <ul className="list-disc list-inside text-zinc-400 mb-6 space-y-2">
              <li>Don&apos;t reverse engineer or try to extract our source code</li>
              <li>Don&apos;t use it for anything illegal</li>
              <li>Don&apos;t resell or redistribute it as your own</li>
              <li>Don&apos;t mess with the extension in ways that break it for others</li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mb-8">
              That&apos;s it. Use it to protect your eyes. We&apos;re cool with that.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10 mb-3">
              Pro+ Subscription—Your Choice
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              If you go Pro+, you&apos;re billed monthly, or yearly, or just once. Cancel anytime—no hoops, no guilt trips. If you&apos;re not happy within 30 days of your first charge, email us and we&apos;ll make it right. We want you to feel good about supporting us.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10 mb-3">
              The Honest Disclaimer
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              EyeRise is built to help reduce eye strain based on research we believe in. But we&apos;re not doctors. We can&apos;t promise specific health outcomes. If you have real eye or health concerns, please talk to a professional. We&apos;re here to support your screen habits, not replace medical advice.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10 mb-3">
              Liability (The Legal Bit)
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              We provide EyeRise &quot;as is.&quot; We&apos;re not liable for damages from using the extension. We do our best to build something safe and helpful. That&apos;s our promise. That&apos;s our commitment.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10 mb-3">
              If We Update These Terms
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              We might tweak these terms occasionally. We&apos;ll post changes here. If you keep using EyeRise after an update, that means you&apos;re good with the new version. We won&apos;t spring surprises on you—if we ever made a big change, we&apos;d do our best to let you know.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10 mb-3">
              Got Questions? Reach Out.
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-2">
              Terms can feel cold. We get it. If anything here is confusing or you just want to talk it through, we&apos;re here. We read every message and we&apos;ll personally respond.
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

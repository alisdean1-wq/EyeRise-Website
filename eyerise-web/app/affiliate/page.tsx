"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import AnimatedReveal from "@/components/AnimatedReveal";
import StickyCTA from "@/components/StickyCTA";
import { AFFILIATE_COMMISSION, AFFILIATE_EXAMPLES } from "@/lib/constants";

const faqs = [
  {
    question: "How much can I earn?",
    answer: `You earn ${AFFILIATE_COMMISSION}% recurring commission on every Pro subscription you refer. This means you get paid monthly or yearly as long as your referrals stay subscribed.`,
  },
  {
    question: "How do I get paid?",
    answer:
      "We pay affiliates via PayPal or bank transfer monthly. Minimum payout is $50. You'll receive detailed reports on your referrals and earnings.",
  },
  {
    question: "What's my unique affiliate link?",
    answer:
      "Once approved, you'll receive a unique tracking link to share. All conversions from your link are automatically tracked and attributed to you.",
  },
  {
    question: "Are there any requirements?",
    answer:
      "We're looking for affiliates who align with our values: productivity, discipline, and helping people work sustainably. Your audience should be students, developers, or professionals who work long hours.",
  },
  {
    question: "How long does approval take?",
    answer:
      "We review applications within 2-3 business days. If approved, you'll receive your affiliate dashboard and tracking links immediately.",
  },
];

export default function AffiliatePage() {
  return (
    <>
      <StickyCTA />
      <Section className="pt-32 pb-20">
        <SectionHeader
          title="Earn with EyeRise"
          subtitle={`${AFFILIATE_COMMISSION}% recurring commission on every Pro subscription you refer.`}
        />

        <div className="max-w-4xl mx-auto">
          <AnimatedReveal>
            <Card className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {AFFILIATE_COMMISSION}% Recurring Commission
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Earn every month your referrals stay subscribed. Build a sustainable income stream by helping people protect their eyes.
              </p>
              <Button
                href="mailto:affiliates@eyerise.com?subject=Affiliate Application"
                variant="primary"
                size="lg"
              >
                Apply to Become an Affiliate
              </Button>
            </Card>
          </AnimatedReveal>

          {/* Example Earnings */}
          <SectionHeader
            title="Example earnings"
            subtitle="Based on $4.99/month Pro subscriptions"
          />
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {AFFILIATE_EXAMPLES.map((example, index) => (
              <AnimatedReveal key={index} delay={index * 0.1}>
                <Card className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    {example.referrals}
                  </div>
                  <div className="text-sm text-slate-600 mb-4">Referrals</div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-xl font-semibold text-slate-900">
                        {example.monthly}
                      </div>
                      <div className="text-xs text-slate-500">per month</div>
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-slate-900">
                        {example.yearly}
                      </div>
                      <div className="text-xs text-slate-500">per year</div>
                    </div>
                  </div>
                </Card>
              </AnimatedReveal>
            ))}
          </div>

          {/* FAQ Section */}
          <SectionHeader title="Frequently asked questions" subtitle="" />
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedReveal key={index} delay={index * 0.1}>
                <Card>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </Card>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

"use client";

import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import AnimatedReveal from "@/components/AnimatedReveal";
import SmartSchedulingSection from "@/components/SmartSchedulingGraph";
import TwentyTwentyRule from "@/components/TwentyTwentyRule";
import ClinicalEvidence from "@/components/ClinicalEvidence";
import WaveformHero from "@/components/WaveformHero";
import EyeRiseShield from "@/components/EyeRiseShield";
import ScreenAttackingSection from "@/components/ScreenAttackingSection";

export default function ProofPage() {
  return (
    <div className="dark bg-[#050505]">
      <WaveformHero />

      {/* Do just dim the screen – EyeRiseShield */}
      <EyeRiseShield />

      {/* Your Screen Is Attacking You – pain points */}
      <Section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <ScreenAttackingSection />
          </AnimatedReveal>
        </div>
      </Section>

      {/* Smart Scheduling – Blue light reduction over day */}
      <SmartSchedulingSection />

      {/* 20-20-20 Rule */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-black">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(38, 92%, 50% / 0.15) 0%, hsl(35, 92%, 55% / 0.08) 40%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="The 20-20-20 Rule"
            subtitle="Built-in break reminders so you never forget to give your eyes a rest."
          />
          <AnimatedReveal>
            <TwentyTwentyRule />
          </AnimatedReveal>
        </div>
      </section>

      {/* Clinical Evidence */}
      <Section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <ClinicalEvidence />
          </AnimatedReveal>
        </div>
      </Section>
    </div>
  );
}

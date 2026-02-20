"use client";

import StickyCTA from "@/components/StickyCTA";
import PricingSanctuary from "@/components/PricingSanctuary";

export default function PricingPage() {
  return (
    <>
      <StickyCTA />
      {/* Dark Sanctuary pricing section */}
      <section className="min-h-screen bg-[#050505] pt-20">
        <PricingSanctuary />
      </section>
    </>
  );
}

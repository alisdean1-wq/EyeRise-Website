import { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: "EyeRise — Automatic Eye Protection for Serious Workers",
  description:
    "For the builders. For the late-night grinders. For the hungry ones. Automatic eye protection that adapts to your work, not the other way around.",
  keywords: [
    "eye strain",
    "blue light filter",
    "eye protection",
    "productivity",
    "chrome extension",
    "screen time",
    "eye care",
  ],
  authors: [{ name: "EyeRise" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eyerise.com",
    title: "EyeRise — Automatic Eye Protection for Serious Workers",
    description:
      "Automatic eye protection for people who take their work seriously.",
    siteName: "EyeRise",
  },
  twitter: {
    card: "summary_large_image",
    title: "EyeRise — Automatic Eye Protection",
    description: "For the builders. For the late-night grinders. For the hungry ones.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const pricingMetadata: Metadata = {
  title: "Pricing — EyeRise",
  description: "Free forever or upgrade to Pro for advanced features. No credit card required.",
};

export const affiliateMetadata: Metadata = {
  title: "Affiliate Program — EyeRise",
  description: "Earn 40% recurring commission promoting EyeRise. Join our affiliate program.",
};

export const aboutMetadata: Metadata = {
  title: "About — EyeRise",
  description: "Built for sustainable excellence. Honor, discipline, and eye health.",
};

export const supportMetadata: Metadata = {
  title: "Support — EyeRise",
  description: "Get help with EyeRise. FAQs, troubleshooting, and contact information.",
};

export const proofMetadata: Metadata = {
  title: "Proof — EyeRise",
  description:
    "The proof behind EyeRise: AI-powered vision protection, strategic screen tinting, circadian sync, and CVS mitigation. Learn how we help reduce eye strain and screen fatigue.",
  keywords: [
    "Computer Vision Syndrome",
    "CVS",
    "screen tinting",
    "blue light",
    "circadian rhythm",
    "eye strain",
    "digital eye strain",
  ],
};

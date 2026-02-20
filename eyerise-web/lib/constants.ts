export const PRICING = {
  free: {
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      "Basic Day/Night mode",
      "Fixed 20-minute breaks",
      "Today's protected time",
      "Simple notifications",
    ],
  },
  pro: {
    monthly: {
      price: "$4.99",
      period: "per month",
    },
    yearly: {
      price: "$39.99",
      period: "per year",
      badge: "Best Value",
      savings: "Save 33%",
    },
    features: [
      "Auto Mode (intelligent switching)",
      "Amber & Focus modes",
      "Custom break intervals",
      "Full usage dashboard",
      "Streaks & progress tracking",
      "Points & badges",
      "AI-powered insights",
      "3-day free trial",
    ],
  },
} as const;

export const FEATURES = [
  {
    title: "Automatic Tint",
    description: "Adapts to your environment and time of day without thinking.",
    icon: "🌅",
  },
  {
    title: "Smart Breaks",
    description: "Gentle reminders that respect your flow state.",
    icon: "⏱️",
  },
  {
    title: "Focus Mode",
    description: "Amber tint and reduced distractions when you need to concentrate.",
    icon: "🎯",
  },
  {
    title: "Usage Dashboard",
    description: "See your protected time, streaks, and progress at a glance.",
    icon: "📊",
  },
  {
    title: "Streaks & Progress",
    description: "Build sustainable habits with visual progress tracking.",
    icon: "🔥",
  },
] as const;

export const COMPARISON_FEATURES = [
  {
    feature: "Automatic time-based switching",
    eyerise: true,
    others: false,
  },
  {
    feature: "Custom break intervals",
    eyerise: true,
    others: false,
  },
  {
    feature: "Usage tracking & insights",
    eyerise: true,
    others: false,
  },
  {
    feature: "Streaks & gamification",
    eyerise: true,
    others: false,
  },
  {
    feature: "Focus mode",
    eyerise: true,
    others: false,
  },
  {
    feature: "Basic night mode",
    eyerise: true,
    others: true,
  },
] as const;

export const AFFILIATE_COMMISSION = 40;
export const AFFILIATE_EXAMPLES = [
  { referrals: 10, monthly: "$20", yearly: "$240" },
  { referrals: 50, monthly: "$100", yearly: "$1,200" },
  { referrals: 100, monthly: "$200", yearly: "$2,400" },
] as const;

/** Tiered pricing (Personal, Professional, Guardian) for the Sanctuary pricing page */
export const TIERED_PRICING = {
  personal: {
    name: "Personal",
    billing: "Monthly",
    tag: "Flexible Protection",
    priceMonthly: "$4.99",
    periodMonthly: "/ mo",
    subtext: "Pay-as-you-go. You manage renewal.",
    features: [
      "Standard AI Health Insights",
      "Standard 30-Day Analytics",
      "Basic PDF/CSV Exporting",
      "Full Theme Pack Access",
    ],
    footerCon: "Billed every 30 days (Manual Renewal)",
    cta: "Start Monthly Protection",
    highlight: false,
  },
  professional: {
    name: "Professional",
    billing: "Yearly",
    tag: "MOST POPULAR",
    tagSecondary: "BEST VALUE",
    priceYearly: "$49.99",
    periodYearly: "/ year",
    badge: "GET 2 MONTHS FREE",
    subtext: "Set it once. Total automation.",
    features: [
      "🤖 AI-Powered \"Safety Net\" Insights",
      "📈 Full Health History & Trend Tracking",
      "🌙 Automated Circadian Rhythm Sync",
      "🎯 Hands-Free Auto-Switching Modes",
      "🧩 Access to all 12 visual themes",
      "✨ Priority Pro Support",
      "🛡️ Guaranteed 365-Day Protection",
    ],
    highlightLine: "2 MONTHS FREE (Save 17% vs Monthly)",
    cta: "GET 2 MONTHS FREE",
    highlight: true,
  },
  guardian: {
    name: "Guardian",
    billing: "Lifetime",
    tag: "ONE INVESTMENT",
    priceOnce: "$249.99",
    periodOnce: " once",
    subtext: "Legacy ownership. Vision insurance for life.",
    features: [
      "Everything in Professional",
      "🚀 Never Pay for Updates Again",
      "Lifetime \"Vision Insurance\" Status",
    ],
    cta: "Go Lifetime",
    highlight: false,
  },
} as const;

export const CHROME_STORE_URL = "https://chrome.google.com/webstore/detail/eyerise/PLACEHOLDER";
export const HOW_IT_WORKS_URL = "#features";

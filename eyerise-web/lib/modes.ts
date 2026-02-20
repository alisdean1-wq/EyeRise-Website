/** Per-mode harsh "without EyeRise" effect - tuned to clash with each card's colors and make it difficult to see */
export interface HarshConfig {
  overlayRgba: string;       // e.g. "37, 99, 235"
  overlayOpacity: number;
  overlay2Opacity: number;
  filter: string;            // CSS filter for image (brightness, saturate, hue-rotate, contrast)
  scanOpacity: number;
  scanColorAlpha: number;
}

export interface Mode {
  id: number;
  label: string;
  imageSrc: string;
  tintHex: string;
  opacityMin: number;
  opacityMax: number;
  blendMode: string;
  blurb: string;
  durationMs: number;
  transitionMs: number;
  objectPosition?: string;
  objectFit?: "contain" | "cover";
  optionalShimmer?: boolean;
  painLabel: string;
  reliefLabel: string;
  harsh?: HarshConfig;        // Custom harsh effect per card; omitted = use default
}

export const MODES: Mode[] = [
  {
    id: 1,
    label: "Day",
    imageSrc: "/nature-new.png",
    tintHex: "#FFF7ED",
    opacityMin: 0.15,
    opacityMax: 0.25,
    blendMode: "soft-light",
    blurb: "Stop squinting at your screen. Balanced clarity cuts through harsh daylight glare without washing out colors.",
    durationMs: 5000,
    transitionMs: 500,
    objectFit: "contain",
    objectPosition: "object-center",
    painLabel: "Unfiltered Glare",
    reliefLabel: "Balanced Clarity",
  },
  {
    id: 2,
    label: "Late Night Study",
    imageSrc: "/late-night-new.png",
    tintHex: "#EFF6FF",
    opacityMin: 0.28,
    opacityMax: 0.36,
    blendMode: "multiply",
    blurb: "Late Night Study focuses on maintaining text clarity while reducing fatigue.",
    durationMs: 5000,
    transitionMs: 500,
    objectFit: "contain",
    objectPosition: "object-center",
    painLabel: "Insomnia Trigger",
    reliefLabel: "Sleep Safe",
    harsh: {
      overlayRgba: "30, 64, 175",
      overlayOpacity: 0.52,
      overlay2Opacity: 0.32,
      filter: "brightness(1.18) saturate(1.1) hue-rotate(-20deg) contrast(1.25)",
      scanOpacity: 0.18,
      scanColorAlpha: 0.55,
    },
  },
  {
    id: 3,
    label: "Cinema",
    imageSrc: "/cinema-new.png",
    tintHex: "#FEF2F2",
    opacityMin: 0.20,
    opacityMax: 0.30,
    blendMode: "soft-light",
    blurb: "Cinema Mode focuses on reducing glare in dark scenes to enhance contrast.",
    durationMs: 5000,
    transitionMs: 500,
    objectFit: "contain",
    objectPosition: "object-center",
    painLabel: "Ruined Atmosphere",
    reliefLabel: "Cinematic Immersion",
  },
  {
    id: 4,
    label: "Deep Work",
    imageSrc: "/productivity-new.png",
    tintHex: "#FEFCE8",
    opacityMin: 0.15,
    opacityMax: 0.20,
    blendMode: "soft-light",
    blurb: "Beat the 3 PM crash. Deep focus mode keeps you sharp for hours without screen fatigue.",
    durationMs: 5000,
    transitionMs: 500,
    objectFit: "contain",
    objectPosition: "object-center",
    painLabel: "Screen Fatigue",
    reliefLabel: "Deep Focus",
    harsh: {
      overlayRgba: "59, 130, 246",
      overlayOpacity: 0.45,
      overlay2Opacity: 0.26,
      filter: "brightness(1.2) saturate(1.4) hue-rotate(-15deg) contrast(1.1)",
      scanOpacity: 0.1,
      scanColorAlpha: 0.4,
    },
  },
  {
    id: 5,
    label: "Coffee Break",
    imageSrc: "/social-new.png",
    tintHex: "#FFF7ED",
    opacityMin: 0.20,
    opacityMax: 0.28,
    blendMode: "overlay",
    blurb: "Scroll without the burn. Comfortable browsing that doesn't make your eyes feel like sandpaper.",
    durationMs: 5000,
    transitionMs: 500,
    objectFit: "contain",
    objectPosition: "object-center",
    painLabel: "Endless Scrolling",
    reliefLabel: "Break Comfort",
  },
  {
    id: 6,
    label: "Focus",
    imageSrc: "/focus-new.png",
    tintHex: "#EEF2FF",
    opacityMin: 0.20,
    opacityMax: 0.30,
    blendMode: "screen",
    blurb: "Focus Mode uses a \"subtle cool tint\" to reduce distractions.",
    durationMs: 5000,
    transitionMs: 500,
    optionalShimmer: true,
    objectFit: "contain",
    objectPosition: "object-center",
    painLabel: "Distraction Overload",
    reliefLabel: "Laser Focus",
    harsh: {
      overlayRgba: "29, 78, 216",
      overlayOpacity: 0.5,
      overlay2Opacity: 0.3,
      filter: "brightness(1.15) saturate(0.9) hue-rotate(-25deg) contrast(1.18)",
      scanOpacity: 0.14,
      scanColorAlpha: 0.5,
    },
  },
];

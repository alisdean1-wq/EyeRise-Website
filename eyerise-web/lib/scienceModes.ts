/**
 * Science page "How It Works" – 12-mode list.
 * Reuses existing MODES where they map; adds 6 entries with blueprint HEX/opacity and existing images.
 */
import { MODES } from "./modes";

export interface ScienceMode {
  id: number;
  label: string;
  imageSrc: string;
  tintHex: string;
  opacityMin: number;
  opacityMax: number;
  blendMode: string;
}

function fromMode(
  id: number,
  label: string,
  m: (typeof MODES)[0]
): ScienceMode {
  return {
    id,
    label,
    imageSrc: m.imageSrc,
    tintHex: m.tintHex,
    opacityMin: m.opacityMin,
    opacityMax: m.opacityMax,
    blendMode: m.blendMode,
  };
}

export const SCIENCE_MODES: ScienceMode[] = [
  fromMode(1, "Day", MODES[0]),
  {
    id: 2,
    label: "Evening",
    imageSrc: "/late-night-new.png",
    tintHex: "#EFF6FF",
    opacityMin: 0.5,
    opacityMax: 0.7,
    blendMode: "soft-light",
  },
  {
    id: 3,
    label: "Night",
    imageSrc: "/late-night-new.png",
    tintHex: "#C4B5FD",
    opacityMin: 0.5,
    opacityMax: 0.65,
    blendMode: "soft-light",
  },
  fromMode(4, "Focus", MODES[5]),
  {
    id: 5,
    label: "Disco",
    imageSrc: "/social-new.png",
    tintHex: "#F0FDF4",
    opacityMin: 0.55,
    opacityMax: 0.78,
    blendMode: "overlay",
  },
  {
    id: 6,
    label: "Zen",
    imageSrc: "/focus-new.png",
    tintHex: "#FDF2F8",
    opacityMin: 0.2,
    opacityMax: 0.3,
    blendMode: "soft-light",
  },
  fromMode(7, "Late Night Study", MODES[1]),
  {
    id: 8,
    label: "Gaming",
    imageSrc: "/cinema-new.png",
    tintHex: "#FEF2F2",
    opacityMin: 0.5,
    opacityMax: 0.7,
    blendMode: "soft-light",
  },
  fromMode(9, "Cinema", MODES[2]),
  {
    id: 10,
    label: "Deep Work",
    imageSrc: "/productivity-new.png",
    tintHex: "#EAB308",
    opacityMin: 0.2,
    opacityMax: 0.25,
    blendMode: "soft-light",
  },
  {
    id: 11,
    label: "Coffee Break",
    imageSrc: "/nature-new.png",
    tintHex: "#ECFEFF",
    opacityMin: 0.5,
    opacityMax: 0.65,
    blendMode: "soft-light",
  },
  {
    id: 12,
    label: "Mountain Air",
    imageSrc: "/nature-new.png",
    tintHex: "#ECFEFF",
    opacityMin: 0.55,
    opacityMax: 0.72,
    blendMode: "soft-light",
  },
];

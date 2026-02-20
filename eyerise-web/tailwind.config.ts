import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        amber: {
          DEFAULT: "#d97706",
          light: "#fbbf24",
          dark: "#b45309",
        },
        slate: {
          DEFAULT: "#334155",
          light: "#94a3b8",
          dark: "#1e293b",
        },
        navy: {
          DEFAULT: "#1e293b",
          light: "#334155",
          dark: "#0f172a",
        },
        purple: {
          accent: "#a78bfa",
          light: "#c4b5fd",
        },
        orange: {
          accent: "#fb923c",
          light: "#fdba74",
        },
        eyerise: {
          crimson: "hsl(var(--eyerise-crimson))",
          amber: "hsl(var(--eyerise-amber))",
          "blue-danger": "hsl(var(--eyerise-blue-danger))",
          "wave-blue": "hsl(var(--eyerise-wave-blue))",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1.2' }],
        '9xl': ['8rem', { lineHeight: '1.1' }],
        'hero': ['9rem', { lineHeight: '1.1' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        "tint-shift": "tintShift 12s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "aurora": "aurora 25s linear infinite",
        "dark-aurora": "darkAurora 30s ease-in-out infinite",
      },
      keyframes: {
        tintShift: {
          "0%, 100%": { filter: "brightness(1) saturate(1)" },
          "50%": { filter: "brightness(0.85) saturate(1.1) hue-rotate(15deg)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(167, 139, 250, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(167, 139, 250, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        aurora: {
          from: {
            backgroundPosition: "0% 50%, 0% 50%",
          },
          to: {
            backgroundPosition: "400% 50%, 400% 50%",
          },
        },
        darkAurora: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      zIndex: {
        '45': '45',
      },
    },
  },
  plugins: [],
};
export default config;

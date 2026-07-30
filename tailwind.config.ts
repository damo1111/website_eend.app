import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark band — the hero only.
        bg: "#0C1410",
        surface: "#121C15",
        border: "#1E2E22",
        "border-light": "#2C4030",
        text: "#EBF0E8",
        muted: "#6B8070",
        duck: "#7EBFB8",
        "duck-dim": "#3D7870",
        gold: "#D4B483",
        moss: "#4A6B50",

        // Light page — everything below the hero. The teal and gold are
        // darkened here so text on a pale ground stays legible.
        page: "#F4F7F5",
        "page-surface": "#FFFFFF",
        "page-border": "#D4E2DB",
        ink: "#0C1410",
        "ink-muted": "#54675C",
        accent: "#2E7D74",
        "accent-dim": "#8FB8B1",
        "gold-ink": "#8F6A2C",
      },
      fontFamily: {
        display: [
          "var(--font-schibsted-grotesk)",
          "Schibsted Grotesk",
          "system-ui",
          "sans-serif",
        ],
        body: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "DM Mono", "monospace"],
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.35", transform: "scale(0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -40%) scale(1)",
          },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-7px)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        bob: "bob 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

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
      },
      fontFamily: {
        display: ["var(--font-syne)", "Syne", "system-ui", "sans-serif"],
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
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

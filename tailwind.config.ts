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
        background: "var(--background)",
        foreground: "var(--foreground)",
        onyx: {
          950: "#080808",
          900: "#0D0D0D",
          850: "#121212",
          800: "#1A1A1A",
          700: "#262626",
          600: "#383838",
        },
        ivory: {
          50: "#FAF9F5",
          100: "#F4F1E8",
          200: "#E9E4D6",
          300: "#DBD4C2",
          400: "#C2B8A3",
        },
        garnet: {
          950: "#2B0B0F",
          900: "#421017",
          800: "#5E1821",
          700: "#7A202C",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.28em",
        ultra: "0.38em",
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

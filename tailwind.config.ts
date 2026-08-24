import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        surface: "#111827",
        "surface-border": "rgba(255, 255, 255, 0.08)",
        "surface-hover": "#1F2937",
        primary: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
          light: "#3B82F6",
          glow: "rgba(37, 99, 235, 0.25)",
        },
        accent: {
          DEFAULT: "#06B6D4",
          hover: "#0891B2",
          light: "#22D3EE",
          glow: "rgba(6, 182, 212, 0.25)",
        },
        foreground: "#F8FAFC",
        muted: {
          DEFAULT: "#94A3B8",
          dark: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37, 99, 235, 0.35), rgba(6, 182, 212, 0.15), rgba(9, 9, 11, 0))",
        "card-glass": "linear-gradient(135deg, rgba(17, 24, 39, 0.7) 0%, rgba(15, 23, 42, 0.4) 100%)",
        "accent-gradient": "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
      },
      boxShadow: {
        "glass-sm": "0 4px 30px rgba(0, 0, 0, 0.1)",
        "glass-md": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glow-primary": "0 0 25px -5px rgba(37, 99, 235, 0.5)",
        "glow-accent": "0 0 25px -5px rgba(6, 182, 212, 0.5)",
      },
      animation: {
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

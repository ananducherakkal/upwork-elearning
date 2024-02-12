import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "rgb(var(--gray-70) / <alpha-value>)",
        input: "rgb(var(--gray-10) / <alpha-value>)",
        ring: "rgb(var(--gray-20) / <alpha-value>)",
        background: "rgb(var(--gray-10) / <alpha-value>)",
        foreground: "rgb(var(--gray-90) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--gray-10) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--gray-30) / <alpha-value>)",
          foreground: "rgb(var(--gray-90) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--gray-70) / <alpha-value>)",
          foreground: "rgb(var(--gray-10) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--gray-30) / <alpha-value>)",
          foreground: "rgb(var(--gray-90) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--gray-10) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--gray-10) / <alpha-value>)",
          foreground: "rgb(var(--gray-90) / <alpha-value>)",
        },
        card: {
          DEFAULT: "rgb(var(--gray-10) / <alpha-value>)",
          foreground: "rgb(var(--gray-90) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
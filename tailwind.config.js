// tailwind.config.js
/** @type {import('tailwindcss').Config} */

// !! REPLACE THESE WITH ACCURATE HEX/HSL/RGB VALUES from OKLCH !!
const oklchToHexApproximation = {
  background: '#252525', // oklch(0.145 0 0)
  foreground: '#FAFAFA', // oklch(0.985 0 0)
  card: '#252525',       // oklch(0.145 0 0)
  cardForeground: '#FAFAFA', // oklch(0.985 0 0)
  popover: '#252525',    // oklch(0.145 0 0)
  popoverForeground: '#FAFAFA', // oklch(0.985 0 0)
  primary: '#FACC15',    // oklch(0.85 0.188 85) - Yellow
  primaryForeground: '#252525', // oklch(0.145 0 0)
  secondary: '#454545',  // oklch(0.269 0 0)
  secondaryForeground: '#FAFAFA', // oklch(0.985 0 0)
  muted: '#454545',      // oklch(0.269 0 0)
  mutedForeground: '#B5B5B5', // oklch(0.708 0 0)
  accent: '#454545',      // oklch(0.269 0 0)
  accentForeground: '#FAFAFA', // oklch(0.985 0 0)
  destructive: '#E53E3E', // oklch(0.577 0.245 27.325) - Red
  destructiveForeground: '#FAFAFA', // oklch(0.985 0 0)
  border: '#454545',      // oklch(0.269 0 0)
  input: '#454545',      // oklch(0.269 0 0)
  ring: '#6F6F6F',        // oklch(0.439 0 0)
};

module.exports = {
  // Ensure this covers all files where you'll use Tailwind
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        border: oklchToHexApproximation.border,
        input: oklchToHexApproximation.input,
        ring: oklchToHexApproximation.ring,
        background: oklchToHexApproximation.background,
        foreground: oklchToHexApproximation.foreground,
        primary: {
          DEFAULT: oklchToHexApproximation.primary,
          foreground: oklchToHexApproximation.primaryForeground,
        },
        secondary: {
          DEFAULT: oklchToHexApproximation.secondary,
          foreground: oklchToHexApproximation.secondaryForeground,
        },
        destructive: {
          DEFAULT: oklchToHexApproximation.destructive,
          foreground: oklchToHexApproximation.destructiveForeground,
        },
        muted: {
          DEFAULT: oklchToHexApproximation.muted,
          foreground: oklchToHexApproximation.mutedForeground,
        },
        accent: {
          DEFAULT: oklchToHexApproximation.accent,
          foreground: oklchToHexApproximation.accentForeground,
        },
        popover: {
          DEFAULT: oklchToHexApproximation.popover,
          foreground: oklchToHexApproximation.popoverForeground,
        },
        card: {
          DEFAULT: oklchToHexApproximation.card,
          foreground: oklchToHexApproximation.cardForeground,
        },
      },
      // You can add borderRadius or fontFamily here if needed later
    },
  },
  plugins: [],
};
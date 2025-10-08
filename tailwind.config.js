import { brandColors } from "./src/styles/tailwindBrandColors.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...brandColors,

        // include brand-green if not present in brandColors
        "brand-green": {
          50: "#ECF9F3",
          100: "#D7F3E7",
          200: "#BEEBD0",
          300: "#95E0B6",
          400: "#66D397",
          500: "#189748",
          600: "#15783E",
          700: "#115E32",
          800: "#0C4426",
          900: "#082E1A",
        },

        // Semantic color mappings using brand colors
        primary: "#189748",
        // Keep semantic secondary but map to a complementary green tone
        secondary: brandColors["brand-green"][600], // mapped to green
        accent: brandColors["brand-accent"].warm, // #B8860B

        // Background variations
        "bg-brand": "#F8FAFC",
        "bg-brand-secondary": "#F1F5F9",
        "bg-brand-accent": "#E2E8F0",

        // Text variations
        "text-brand": "#1E293B",
        "text-brand-secondary": "#475569",
        "text-brand-muted": "#64748B",
      },

      gradientColorStops: {
        "brand-green-start": brandColors["brand-green"][500],
        "brand-green-end": brandColors["brand-green"][700],
      },

      boxShadow: {
        brand:
          "0 4px 6px -1px rgba(24, 151, 72, 0.1), 0 2px 4px -1px rgba(24, 151, 72, 0.06)",
        "brand-teal":
          "0 4px 6px -1px rgba(24, 151, 72, 0.08), 0 2px 4px -1px rgba(24, 151, 72, 0.04)",
        "brand-lg":
          "0 10px 15px -3px rgba(24, 151, 72, 0.1), 0 4px 6px -2px rgba(24, 151, 72, 0.05)",
      },

      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #189748 0%, #115E32 100%)",
        "gradient-brand-teal":
          "linear-gradient(135deg, #189748 0%, #15783E 100%)",
        "gradient-brand-subtle":
          "linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)",
      },
    },
    fontFamily: {
      sans: ["AlfontUyghur", "sans-serif"],
    },
  },
  plugins: [],
};

// Color Palette for MADAR DEVELOPMENT
// These colors work harmoniously together and maintain brand consistency

export const colorPalette = {
  // Primary Colors (from logo)
  primary: {
    // Mapped to MADAR green palette
    greenDark: "#115E32",
    greenBase: "#189748",
    greenLight: "#66D397",
    teal: "#4A8B8B",
    darkTeal: "#3A7070",
    lightTeal: "#5BA0A0",
  },

  // Neutral Colors (grays from logo)
  neutral: {
    charcoal: "#2D2D2D", // Dark gray/black from logo
    darkGray: "#404040", // Medium dark gray
    mediumGray: "#606060", // Medium gray
    lightGray: "#808080", // Light gray
    silver: "#A0A0A0", // Silver gray
    lightSilver: "#C0C0C0", // Very light gray
  },

  // Extended Palette (complementary colors)
  extended: {
    // Warm accents (complementary to cool blues/teals)
    warmAccent: "#B8860B", // Golden accent
    lightWarm: "#DAA520", // Light golden

    // Success/Error states
    success: "#22C55E", // Green
    warning: "#F59E0B", // Amber
    error: "#EF4444", // Red
    info: "#3B82F6", // Blue info
  },

  // Background variations
  backgrounds: {
    primary: "#F8FAFC", // Very light gray-blue
    secondary: "#F1F5F9", // Light gray
    accent: "#E2E8F0", // Medium light gray
    dark: "#1E293B", // Dark background
    card: "#FFFFFF", // White cards
  },

  // Text colors
  text: {
    primary: "#1E293B", // Dark text
    secondary: "#475569", // Medium text
    muted: "#64748B", // Muted text
    light: "#94A3B8", // Light text
    inverse: "#F8FAFC", // Light text on dark bg
  },

  // Border colors
  borders: {
    light: "#E2E8F0", // Light borders
    medium: "#CBD5E1", // Medium borders
    dark: "#94A3B8", // Dark borders
  },

  // Gradient combinations
  gradients: {
    primaryGreen: "linear-gradient(135deg, #189748 0%, #115E32 100%)",
    tealGreen: "linear-gradient(135deg, #189748 0%, #15783E 100%)",
    subtleGray: "linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)",
    darkGradient: "linear-gradient(135deg, #1E293B 0%, #2D2D2D 100%)",
  },
};

// Tailwind CSS custom colors configuration
export const tailwindColors = {
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
  "brand-gray": {
    50: "#F8F8F8",
    100: "#F1F1F1",
    200: "#E3E3E3",
    300: "#D5D5D5",
    400: "#C7C7C7",
    500: "#606060",
    600: "#404040",
    700: "#2D2D2D",
    800: "#1A1A1A",
    900: "#0D0D0D",
  },
};

// Usage examples and combinations
export const colorCombinations = {
  // Header/Navigation
  header: {
    background: colorPalette.primary.darkBlue,
    text: colorPalette.text.inverse,
    accent: colorPalette.primary.teal,
  },

  // Cards
  card: {
    background: colorPalette.backgrounds.card,
    border: colorPalette.borders.light,
    title: colorPalette.text.primary,
    content: colorPalette.text.secondary,
  },

  // Buttons
  primaryButton: {
    background: colorPalette.primary.darkBlue,
    hover: colorPalette.primary.mediumBlue,
    text: colorPalette.text.inverse,
  },

  secondaryButton: {
    background: colorPalette.primary.teal,
    hover: colorPalette.primary.darkTeal,
    text: colorPalette.text.inverse,
  },

  // Forms
  form: {
    background: colorPalette.backgrounds.primary,
    inputBg: colorPalette.backgrounds.card,
    inputBorder: colorPalette.borders.medium,
    label: colorPalette.text.secondary,
  },

  // Feedback Widget (matches your current dark theme)
  feedbackWidget: {
    background: colorPalette.neutral.charcoal,
    panel: colorPalette.neutral.darkGray,
    text: colorPalette.text.inverse,
    accent: colorPalette.primary.lightBlue,
  },
};

export default colorPalette;

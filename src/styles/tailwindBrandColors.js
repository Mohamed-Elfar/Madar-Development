// Tailwind CSS Brand Colors Extension
// Add this to your tailwind.config.js file

const brandColors = {
  // Brand palettes: keep only green and neutral
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

  "brand-neutral": {
    50: "#F8F8F8",
    100: "#F1F1F1",
    200: "#E3E3E3",
    300: "#D5D5D5",
    400: "#C0C0C0",
    500: "#A0A0A0",
    600: "#808080",
    700: "#606060",
    800: "#404040",
    900: "#2D2D2D",
  },

  // Extended palette
  "brand-accent": {
    warm: "#B8860B",
    "warm-light": "#DAA520",
  },
};

// Usage in tailwind.config.js: we export the brandColors object which now contains only
// the green and neutral palettes. Tailwind config imports this and maps semantic tokens.
export { brandColors };

// Example usage in components:
/*
// Buttons
<button className="bg-brand-green hover:bg-brand-green-600 text-white">
  Primary Button
</button>

<button className="bg-brand-teal-600 hover:bg-brand-teal-700 text-white">
  Secondary Button  
</button>

// Cards
<div className="bg-white border border-brand-neutral-200 shadow-brand rounded-lg">
  Brand Card
</div>

// Gradients
<div className="bg-gradient-brand text-white">
  Gradient Background
</div>

// Text colors
<h1 className="text-brand-green">Brand Heading</h1>
<p className="text-brand-neutral-700">Brand Text</p>
*/

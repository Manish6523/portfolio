// Tailwind theme overrides
const config = {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "#050505", // Deep pitch black
        card: "#0a0a0a", // Subtle charcoal for bento cards
        border: "rgba(255, 255, 255, 0.05)", // Ultra-thin borders
        primary: {
          DEFAULT: "#ffffff",
          foreground: "#050505",
        },
      },
    },
  },
};

export default config;
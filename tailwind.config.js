/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFFBF7",
        blush: { 50: "#FFF1F2", 100: "#FFE4E6", 200: "#FBCFD6", 400: "#E9889A", 600: "#C9506A" },
        sage: { 50: "#F1F5EF", 100: "#E1EBDD", 200: "#C5D8BF", 500: "#7A9B76", 700: "#4B6B4A", 900: "#2C3E2D" },
      },
      fontFamily: { serif: ["Fraunces", "Georgia", "serif"] },
      // Larger, easier-to-read text sizes across the whole site
      fontSize: {
        xs: ["0.9375rem", { lineHeight: "1.4rem" }],
        sm: ["1.0625rem", { lineHeight: "1.6rem" }],
        base: ["1.1875rem", { lineHeight: "1.75rem" }],
        lg: ["1.3125rem", { lineHeight: "1.8rem" }],
        xl: ["1.5rem", { lineHeight: "2rem" }],
        "2xl": ["1.75rem", { lineHeight: "2.2rem" }],
        "3xl": ["2.125rem", { lineHeight: "2.5rem" }],
        "4xl": ["2.625rem", { lineHeight: "1.15" }],
        "5xl": ["3.375rem", { lineHeight: "1.1" }],
      },
    },
  },
  plugins: [],
};
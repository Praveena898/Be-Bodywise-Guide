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
    },
  },
  plugins: [],
};

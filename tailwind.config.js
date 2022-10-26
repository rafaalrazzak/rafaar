/** @type {import('tailwindcss').Config} */

// const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/icons/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        scale: "scale 1.1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        scale: {
          "75%, 100%": { transform: "scale(1.1)", opacity: "opacity: 0" },
        },
      },
      colors: {
        primary: colors.zinc,
        secondary: colors.teal,
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
    // ...
  ],
}

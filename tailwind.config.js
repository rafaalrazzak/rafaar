/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
    './src/icons/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'og-pattern': "url('/pattern/circuit-board.svg')",
      },
      colors: {
        primary: colors.zinc,
        secondary: colors.teal,
        theme: colors.zinc,
      },
      animation: {
        tilt: 'tilt 10s infinite linear',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        slide: 'slide var(--speed) ease-in-out infinite alternate',
        border: 'border 4s ease infinite',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            // transform: 'rotate(0deg)',
            opacity: 0,
          },
          '25%': {
            // transform: 'rotate(0.5deg)',
            opacity: 0.25,
          },
          '75%': {
            // transform: 'rotate(-0.5deg)',
            opacity: 0.5,
          },
        },
        'spin-around': {
          '0%': {
            transform: 'translateZ(0) rotate(0)',
          },
          '15%, 35%': {
            transform: 'translateZ(0) rotate(90deg)',
          },
          '65%, 85%': {
            transform: 'translateZ(0) rotate(270deg)',
          },
          '100%': {
            transform: 'translateZ(0) rotate(360deg)',
          },
        },
        slide: {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)',
          },
        },
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
};

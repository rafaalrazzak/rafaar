/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/layout/**/*.{js,ts,jsx,tsx}", "./src/icons/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            backgroundImage: {
                "og-pattern": "url('/pattern/circuit-board.svg')",
            },
            colors: {
                primary: colors.zinc,
                secondary: colors.teal,
                theme: colors.zinc,
            },
            animation: {
                tilt: "tilt 10s infinite linear",
            },
            keyframes: {
                tilt: {
                    "0%, 50%, 100%": {
                        // transform: 'rotate(0deg)',
                        opacity: 0,
                    },
                    "25%": {
                        // transform: 'rotate(0.5deg)',
                        opacity: 0.25,
                    },
                    "75%": {
                        // transform: 'rotate(-0.5deg)',
                        opacity: 0.5,
                    },
                },
            },
        },
    },
};

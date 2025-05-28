/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            colors: {
                accent: 'hsl(var(--accent) / <alpha-value>)',
            },
            screens: {
                sm_xl: { min: "320px", max: "425px" },
                md: { min: "426px", max: "768px" },
                lg: { min: "769px", max: "1024px" },
                xl: { min: "1025px", max: "1239px" },
                "2xl": { min: "1240px", max: "1440px" },
                "3xl": { min: "1441px", max: "1560px" },
                "4xl": { min: "1561px", max: "1920px" },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
    },
};
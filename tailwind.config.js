/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        particle1: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(450px, 375px)" },
          "50%": { transform: "translate(335px, 150px)" },
          "75%": { transform: "translate(150px, 75px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        particle2: {
          "0%": { transform: "translate(0,0)" },
          "25%": { transform: "translate(-150px, -75px)" },
          "50%": { transform: "translate(-5px, -150px)" },
          "75%": { transform: "translate(-150px, -75px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        particle3: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(75px, -150px)" },
          "50%": { transform: "translate(150px, -75px)" },
          "75%": { transform: "translate(75px, -150px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        progressAnimation: {
          "0%": { width: "0%" },
          "100%": { width: "var(--progress-width)" },
        },
      },
      animation: {
        particle1: "particle1 5s linear infinite",
        particle2: "particle2 7s linear infinite",
        particle3: "particle3 6s linear infinite",
        progress: "progressAnimation 2s forwards",
      },
    },
  },
  plugins: [],
};

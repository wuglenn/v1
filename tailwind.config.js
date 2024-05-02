/** @type {import('tailwindcss').Config} */

import twScrollbar from "tailwind-scrollbar";

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: ["variant", [
    "@media (prefers-color-scheme: dark) { &:not(.light *) }",
    "&:is(.dark *)",
  ]],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "4xs": "280px",
      "3xs": "325px",
      "2xs": "420px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        cream: "#FFFAEA",
        lemon: "#FFF2C8",
        jasmine: "#FFE386",
        "python-yellow": "#ffd342",
        "python-blue": "#3673a5",
        javascript: "#ffd600",
        html: "#e44d26",
        css: "#264de4",
        dockerfile: "#006ebb",
        rust: "#f74a06",
        vue: "#41b883",
        tailwind: "#38bdf8",
        "dark-blue": "#141125",
        spotify: "#1db954",
        tensorflow: "#ff6f00",
        sklearn: "#ff9c34",
        pytorch: "#ee4c2c",
        "theme": { 100: "#F7EDFF", 500: "#9287A1", 700: "#211137", 950: "#0B001A" },

      },
      fontFamily: {
        customFont: ["Inter", "sans-serif"],
      },
      textShadow: {
        DEFAULT: "#14142e 0 0 5px",
      },
    },
  },
  variants: {
    textShadow: ["dark"],
  },
  plugins: [
    "vue",
    twScrollbar,
  ],
  layers: {
    components: {},
    utilities: {},
  },
};
import { COLORS } from "./src/data/constants";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "cool-purple": COLORS.purple,
      },
      fontSize: {
        xxs: '0.625rem',
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "main-dark": "#0E1212",
        "purple": "#7438F1",
        "cream": "#B5A5A5"
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ['cupcake', 'light', 'dark', 'aqua', 'business']
  }
};

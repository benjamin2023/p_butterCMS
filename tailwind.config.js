/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'android': '320px',
        'tablet': '640px',
        'desktop': '1000px',
        'wide': '1280px'
      }
    },
  },
  variants: {},
  plugins: [],
}

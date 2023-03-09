/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.emerald
      },
    },
  },
  plugins: [],
}

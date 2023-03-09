/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FAEDCD',
        secondary: '#FAEDCD',
        success: '#D4E09B',
        warning: '#F19C79',
        danger: '#A44A3F'
      },
    },
  },
  plugins: [],
}

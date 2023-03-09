/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media',
	theme: {
		extend: {
			fontFamily: {
				sans: 'Nunito Sans, Helvetica Neue, Arial, sans-serif'
			},
			colors: {
				primary: '#CCD5AE',
				secondary: '#FEFAE0',
				success: '#E9EDC9',
				warning: '#FAEDCD',
				danger: '#D4A373'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};

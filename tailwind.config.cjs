/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media',
	theme: {
		extend: {
			fontFamily: {
				//sans: 'Nunito Sans, Helvetica Neue, Arial, sans-serif'
				josefin: 'Josefin Sans, Helvetica Neue, Arial, sans-serif',
				sacramento: 'Sacramento, Helvetica Neue, Arial, sans-serif'
			},
			colors: {
				primary: '#CBDFBD',
				secondary: '#F6F4D2',
				success: '#D4E09B',
				warning: '#F19C79',
				danger: '#A44A3F'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};

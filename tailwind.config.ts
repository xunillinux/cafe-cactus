import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				separat: ['AmaticSC', ...defaultTheme.fontFamily.sans],
			  },
			  maxWidth: {
				'72': '18rem',
				'96': '24rem',
				'128': '32rem',
				'160': '40rem',
				'192': '48rem',
				'224': '56rem',
				'256': '64rem',
			  },
		}
	},

	plugins: [forms]
} satisfies Config;

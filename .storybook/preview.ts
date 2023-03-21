import type { Preview } from '@storybook/svelte';
import Wrapper from './Wrapper.svelte';
import '../src/app.css';

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'light'
		},
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		}
	}
};

export default preview;

export const decorators = [() => Wrapper];

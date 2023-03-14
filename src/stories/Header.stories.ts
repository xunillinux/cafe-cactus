import type { Meta, StoryObj } from '@storybook/svelte';
import Header from '$lib/components/core/Header.svelte';

const meta = {
	title: 'Cactus/Header',
	component: Header,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderStory: Story = {};

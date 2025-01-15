import { error as svelteError } from '@sveltejs/kit';

export interface INewsPost {
	id: number;
	title: string;
	content: string;
	date: string;
	image: string;
	snippet: string;
	link: string;
}

const newsPosts: INewsPost[] = [
	{
		id: 1,
		title: "We are open!",
		content: "We are happy to announce that we are open for business. Come and enjoy our delicious coffee and pastries.",
		date: "2021-07-01",
		image: "https://placehold.co/600x400",
		snippet: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\n lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "/news/1"
	},
	{
		id: 2,
		title: "Opening Party!",
		content: "Join us for our grand opening party on Saturday, June 12th. We will have live music, free samples, and more!",
		date: "2021-06-05",
		image: "https://placehold.co/600x400",
		snippet: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\n lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "/news/2"
	},
	{
		id: 3,
		title: "We will open soon!",
		content: "We are working hard to open our doors soon. Stay tuned for more information.",
		date: "2021-05-25",
		image: "https://placehold.co/600x400",
		snippet: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\n lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "/news/3"
	},
];

export const load = async ({ params }) => {
	try {

		if (params.id) {
			const newsPost = newsPosts.find((post) => post.id === parseInt(params?.id ?? "-1", 10));
			if (newsPost) {
				return { newsPosts: [newsPost] };
			} else {
				throw svelteError(404, 'Document not found');
			}
		}

		if (newsPosts) {
			return { newsPosts: newsPosts };
		} else {
			throw svelteError(404, 'Document not found');
		}
	} catch (err: unknown) {
		console.error('Error fetching posts data: ', err);
		throw svelteError(500, 'Error fetching posts data.');
	}
};

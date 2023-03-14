import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/xunillinux/cafe-cactus.git',
		user: {
			name: 'Jonas Meise',
			email: 'jonas.f.meise@gmail.com'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);

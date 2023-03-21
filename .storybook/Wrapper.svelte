<script>
	import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';
	import en from '../src/lib/i18n/locales/en.json';
	import de from '../src/lib/i18n/locales/de.json';

	addMessages('en', en);
	addMessages('de', de);

	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator()
	});
</script>

<slot />

<script lang="ts">
	import { _, locale } from 'svelte-i18n';

	let value = 'en';

	function switchLocale(event: any) {
		locale.set(event.target.value);
	}
</script>

<select {value} on:change|preventDefault={switchLocale}>
	<option value="en">{$_('locale.english')}</option>
	<option value="de">{$_('locale.german')}</option>
</select>

<script lang="ts">
	import { _, locale } from 'svelte-i18n';

	let value = 'en';

	function switchLocale(event: any) {
		locale.set(event.target.value);
	}
</script>

<select data-te-select-init {value} on:change|preventDefault={switchLocale}>
	<option class="p-2" value="en">{$_('locale.english')}</option>
	<option class="p-2" value="de">{$_('locale.german')}</option>
</select>

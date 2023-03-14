<script lang="ts">
	import { locale } from 'svelte-i18n';

	let value = 'en';

	function switchLocale(event: any) {
		locale.set(event.target.value);
	}
</script>

<div class="flex, justify-center">
	<div class="mr-4 mb-4">
		<select {value} on:change|preventDefault={switchLocale}>
			<option value="en">English</option>
			<option value="de">German</option>
		</select>
	</div>
</div>

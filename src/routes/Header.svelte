<script lang="ts">
	import logo from '$lib/images/logo-cafe-cactus.png';
	import LocaleSwitcher from './LocaleSwitcher.svelte';
	import { _ } from 'svelte-i18n';
</script>

<header>
	<div class="border-b border-gray-300 px-5 py-3 flex items-center justify-between">
		<div>
			<img
				width="32"
				height="32"
				src={logo}
				alt={$_('title')}
				class="inline-block align-top rounded-2xl"
			/>
			<h1 class="inline-block align-top mt-1 ml-2">{$_('title')}</h1>
		</div>
		<div>
			<LocaleSwitcher />
			<i class="fa-brands fa-instagram fa-2x mt-1" />
		</div>
	</div>
</header>

<script lang="ts">
	import logo from '$lib/images/logo-cafe-cactus.png';
	import LocaleSwitcher from '$lib/i18n/LocaleSwitcher.svelte';
	import { _ } from 'svelte-i18n';
</script>

<header>
	<div class="border-b border-gray-300 px-5 py-3 flex items-center justify-between">
		<div>
			<img src={logo} alt={$_('title')} class="h-9 w-9 inline-block rounded-2xl" />
			<h1 class="inline-block leading-none align-middle pt-1 ml-2">{$_('title')}</h1>
		</div>
		<div>
			<div class="hidden sm:inline-block leading-none align-middle pt-2 mr-2">
				<LocaleSwitcher />
			</div>
			<i class="fa-brands fa-instagram inline-block align-middle w-10 h-10 ml-2" />
		</div>
	</div>
</header>

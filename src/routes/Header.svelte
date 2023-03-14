<script lang="ts">
	import logo from '$lib/images/logo-cafe-cactus.png';
	import LocaleSwitcher from './LocaleSwitcher.svelte';
</script>

<header>
	<div class="wrapper border-b border-gray-300 px-5 py-3 flex items-center justify-between">
		<div>
			<img
				width="32"
				height="32"
				src={logo}
				alt="Cafe Cactus"
				class="inline-block align-top rounded-2xl"
			/>
			<h1 class="inline-block align-top font-bold font-sacramento mt-1 ml-2">Cafe Cactus</h1>
		</div>
		<div>
			<LocaleSwitcher />
			<i class="fa-brands fa-instagram fa-2x mt-1" />
		</div>
	</div>
</header>

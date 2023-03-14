<script lang="ts">
	import Header from '$lib/components/core/Header.svelte';
	import Footer from '$lib/components/core/Footer.svelte';
	import '../app.css';
</script>

<div class="app flex flex-col min-h-screen">
	<Header />

	<main class="w-full flex-grow py-4 px-4 bg-gray-100">
		<slot />
	</main>

	<Footer />
</div>

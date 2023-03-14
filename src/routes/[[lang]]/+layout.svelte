<script lang="ts">
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import '../../app.css';
</script>

<div class="app flex flex-col min-h-screen">
	<Header />

	<main class="w-full flex-grow py-4 px-4">
		<slot />
	</main>

	<Footer />
</div>

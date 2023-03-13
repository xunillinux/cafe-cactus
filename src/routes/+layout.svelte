<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header />

	<div class="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
		<div class="w-fixed w-full flex-shrink flex-grow-0 px-4">
			<div class="sticky top-0 p-4 w-full h-full">nav</div>
		</div>
		<main role="main" class="w-full flex-grow pt-1 px-3">
			<slot />
		</main>
		<div class="w-fixed w-full flex-shrink flex-grow-0 px-2">
			<div class="flex sm:flex-col px-2">
				<!-- sidebar goes here -->
			</div>
		</div>
	</div>
	<footer class="bg-primary mt-auto">
		<p>This is the footer.</p>
	</footer>
</div>

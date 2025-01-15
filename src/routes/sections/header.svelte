<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Fa from 'svelte-fa';
	import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
	import { goto } from '$app/navigation';

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function scrollToSection(event: any, id: string) {
		event.preventDefault();

		// If the current route is not "/", navigate to "/".
		if (window.location.pathname !== '/') {
			goto('/').then(() => {
				// Scroll after route change.
				scrollToTarget(id);
			});
		} else {
			scrollToTarget(id);
		}

		isMenuOpen = false;
	}

	function scrollToTarget(id: string) {
		const section = document.querySelector(id);
		const header = document.querySelector('header'); // Get the header element

		if (section) {
			const headerHeight = header ? header.offsetHeight : 0;

			// Get the section's position relative to the document
			const sectionTop = section.getBoundingClientRect().top + window.scrollY;

			// Scroll to the section minus the header height
			window.scrollTo({
				top: sectionTop - headerHeight,
				behavior: 'smooth', // Smooth scroll directly to the correct position
			});
		}
	}

	function goToNews() {
		goto('/news');
		isMenuOpen = false;
	}
</script>

<header class="bg-white shadow-md">
	<nav class="mx-auto w-full px-6 py-4">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<a
				href="#top"
				class="text-2xl font-bold text-gray-800 sm:block"
				onclick={(event) => {
					scrollToSection(event, '#top');
				}}
			>
				<span class="uppercase">Cafe Cactus</span>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden space-x-6 text-xl sm:flex">
				<a
					href="#menu"
					class="uppercase text-gray-800 hover:underline"
					onclick={(event) => {
						scrollToSection(event, '#menu');
					}}>Menu</a
				>
				<a
					href="#about"
					class="uppercase text-gray-800 hover:underline"
					onclick={(event) => {
						scrollToSection(event, '#about');
					}}>About</a
				>
				<a
					href="#location"
					class="uppercase text-gray-800 hover:underline"
					onclick={(event) => {
						scrollToSection(event, '#location');
					}}>Location</a
				>
				<a
					href="#contact"
					class="uppercase text-gray-800 hover:underline"
					onclick={(event) => {
						scrollToSection(event, '#contact');
					}}>Contact</a
				>
				<a
					href="/news"
					class="uppercase text-gray-800 hover:underline"
					onclick={(event) => {
						event.preventDefault();
						goToNews();
					}}>News</a
				>
			</div>

			<!-- Mobile Burger Icon -->
			<button class="text-gray-800 focus:outline-none sm:hidden" onclick={toggleMenu}>
				<Fa icon={faBars} scale={1.5} />
			</button>
		</div>

		<!-- Fullscreen Mobile Navigation -->
		{#if isMenuOpen}
			<div
				in:fly={{ duration: 250, x: 100, y: 0, easing: quintOut }}
				out:fade={{ easing: quintOut }}
				class="fixed inset-0 z-50 flex flex-col bg-white"
			>
				<!-- Close Button -->
				<button class="absolute right-6 top-6 text-gray-800 focus:outline-none" onclick={toggleMenu}>
					<Fa icon={faTimes} scale={1.5} />
				</button>

				<!-- Centered Links -->
				<div class="flex flex-grow flex-col items-center justify-center space-y-6">
					<a href="#menu" class="text-2xl uppercase text-gray-800 hover:underline" onclick={(event) => scrollToSection(event, '#menu')}>Menu</a
					>
					<a href="#location" class="text-2xl uppercase text-gray-800 hover:underline" onclick={(event) => scrollToSection(event, '#location')}>Location</a>
					<a href="#about" class="text-2xl uppercase text-gray-800 hover:underline" onclick={(event) => scrollToSection(event, '#about')}
						>About</a
					>
					<a href="#contact" class="text-2xl uppercase text-gray-800 hover:underline" onclick={(event) => scrollToSection(event, '#contact')}>Contact</a
					>
				</div>
			</div>
		{/if}
	</nav>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 10;
	}
</style>

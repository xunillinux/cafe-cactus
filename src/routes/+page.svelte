<script lang="ts">
	import { auth, updateDocument, userData } from '$lib/firebase';
	import { showNotification } from '$lib/helper/notification-helper';
	import { signOut } from 'firebase/auth';
	import Footer from './sections/footer.svelte';
	import Header from './sections/header.svelte';
	import type { CafeCactusData, HeaderImage } from '$lib/model/cafe-cactus-data-model';
	import HomeImage from './sections/home-image.svelte';
	import Fa from 'svelte-fa';
	import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
	import Where from './sections/where.svelte';
	import Menu from './sections/menu.svelte';
	import About from './sections/about.svelte';
	import Contact from './sections/contact.svelte';

	let { data } = $props();

	let headerImage = $state(data.headerImage);

	function onHeaderImageChange(updatedHeaderImage: HeaderImage) {
		headerImage = updatedHeaderImage;
		saveChanges();
	}

	function saveChanges() {
		updateDocument('cafecactus', 'data', getUpdatedData());
		// TODO on fail reset data with initial data
	}

	function getUpdatedData(): CafeCactusData {
		return { headerImage };
	}

	async function logout() {
		try {
			await signOut(auth);
			showNotification('success', 'Logged out successfully');
		} catch (error) {
			showNotification('error', 'There was a problem while logging out. Please try again.');
		}
	}
</script>

<Header />

<main id="top" class="w-100">
	
	<section id="homeImage" class="homeImage-section relative">
		<HomeImage {headerImage} />
	</section>

	<section id="menu" class="menu-section relative">
		<Menu />
	</section>

	<section id="about" class="about-section relative">
		<About />
	</section>

	<section id="location" class="location-section relative">
		<Where />
	</section>

	<section id="contact" class="contact-section relative">
		<Contact />
	</section>

</main>

<Footer />

{#if $userData.user}
	<button
		class="fixed bottom-4 left-4 flex items-center rounded bg-gray-800 px-4 py-2 text-white shadow-lg hover:bg-gray-700"
		onclick={logout}
		aria-label="Logout"
	>
		<Fa icon={faSignOutAlt} class="mr-2" />
		Logout
	</button>
{/if}

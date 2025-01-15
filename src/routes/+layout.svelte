<script lang="ts">
	import Fa from 'svelte-fa';
	import '../app.css';
	import Footer from './sections/footer.svelte';
	import Header from './sections/header.svelte';
	import { showNotification } from '$lib/helper/notification-helper';
	import { signOut } from 'firebase/auth';
	import { auth, userData } from '$lib/firebase';
	import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';
	let { children } = $props();


	async function logout() {
		try {
			await signOut(auth);
			showNotification('success', 'Logged out successfully');
		} catch (error) {
			showNotification('error', 'There was a problem while logging out. Please try again.');
		}
	}


	let headerHeight = $state(0);
	let footerHeight = $state(0);

	onMount(() => {
		const header = document.querySelector('header');
		const footer = document.querySelector('footer');

		if (header) {
			headerHeight = header.offsetHeight;
		}
		if (footer) {
			footerHeight = footer.offsetHeight;
		}
	});

</script>



<Header />

<main id="top" class="w-100" style="margin-top: {headerHeight}px; min-height: calc(100vh - {headerHeight}px - {footerHeight}px);">
	
	{@render children()}

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

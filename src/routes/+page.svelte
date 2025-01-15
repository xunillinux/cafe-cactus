<script lang="ts">
	import { updateDocument } from '$lib/firebase';
	import type { CafeCactusData, HeaderImage } from '$lib/model/cafe-cactus-data-model';
	import HomeImage from './sections/home-image.svelte';
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

	
</script>

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

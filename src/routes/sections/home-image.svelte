<script lang="ts">
	import { r2bucketEndpoint } from '$lib/config';
	import type { HeaderImage } from '$lib/model/cafe-cactus-data-model';
	import { fade } from 'svelte/transition';

	let { headerImage }: { headerImage: HeaderImage } = $props();

	let sectionHeight = $state('100vh');
</script>

<svg class="absolute inset-0 h-0 w-0">
	<filter id="blur-effect">
		<feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blurred" />
		<feMerge>
			<feMergeNode in="blurred" />
			<feMergeNode in="SourceGraphic" />
		</feMerge>
	</filter>
</svg>

<div class="relative w-full overflow-hidden" style="height: {sectionHeight};">
	<!-- Render Current Slide -->
    <img src={r2bucketEndpoint + headerImage.src} alt="Header" class="absolute inset-0 h-full w-full object-cover" transition:fade={{ duration: 500 }} />

    <!--
	<div class="absolute inset-0 flex items-center justify-center text-center">
		<div
			class="relative text-6xl font-bold uppercase leading-snug text-white md:text-7xl lg:text-9xl"
			style="filter: url(#blur-effect); text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);"
		>
			<div>Cafe</div>
			<div>Cactus</div>
		</div>
	</div>
    -->
</div>

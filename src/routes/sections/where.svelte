<script lang="ts">
	import { PUBLIC_MAPS_API_KEY } from "$env/static/public";

	const latitude = 47.5599167; // 47°33'35.7"N
	const longitude = 7.5900000; // 7°35'24.0"E
	const googleMapsUrl = `https://www.google.com/maps/embed/v1/view?key=${PUBLIC_MAPS_API_KEY}&center=${latitude},${longitude}&zoom=15`;
</script>

<div class="bg-white py-12 text-black">
	<div class="flex flex-col items-center space-y-6">
		<h2 class="text-2xl font-bold">Find Us Here</h2>
		<div class="w-full max-w-4xl aspect-video">
			<iframe
				title="maps"
				class="w-full h-full border-0"
				src={googleMapsUrl}
				allowfullscreen
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	</div>
</div>

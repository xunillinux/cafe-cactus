<script lang="ts">
	const teamMembers = [
		{
			name: "Bettina",
			image: "/images/bettina.webp",
			description: "Bettina is our bakery maestro, crafting delicious pastries and treats every day."
		},
		{
			name: "Jonas",
			image: "/images/jonas.webp",
			description: "Jonas ensures every cup of coffee is brewed to perfection, creating a warm and welcoming experience for all"
		}
	];
</script>

<div class="bg-stone-100 px-4 py-12 text-black">
	<div class="max-w-4xl mx-auto">
		<h2 class="text-3xl font-bold text-center mb-8">About Us</h2>
		<p class="text-center text-lg mb-8">
			Welcome to Cafe Cactus, a cozy space for people who appreciate quality coffee and freshly baked goods. 
			Everything we offer is crafted with care and entirely plant-based, making it a delightful experience for everyone.
		</p>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
			{#each teamMembers as member}
				<div class="flex flex-col items-center text-center">
					<img
						src={member.image}
						alt={member.name}
						class="w-32 h-32 rounded-full object-cover mb-4"
					/>
					<h3 class="text-xl font-semibold">{member.name}</h3>
					<p class="text-gray-600">{member.description}</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
</style>

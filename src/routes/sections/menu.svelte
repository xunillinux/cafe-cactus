<script lang="ts">
	const menuItems = [
		{
			name: "Espresso",
			description: "Rich and bold, brewed to perfection.",
			price: "3.50 CHF",
		},
		{
			name: "Cappuccino",
			description: "Creamy blend of espresso and steamed milk.",
			price: "4.50 CHF",
		},
		{
			name: "Latte",
			description: "Espresso with plenty of steamed milk.",
			price: "4.80 CHF",
		},
		{
			name: "Americano",
			description: "Smooth and simple, espresso diluted with hot water.",
			price: "3.80 CHF",
		},
		{
			name: "Hot Chocolate",
			description: "Rich, velvety cocoa with whipped cream.",
			price: "4.00 CHF",
		},
		{
			name: "Croissant",
			description: "Freshly baked, buttery and flaky.",
			price: "2.50 CHF",
		},
		{
			name: "Muffin",
			description: "Choose from chocolate chip or blueberry.",
			price: "3.00 CHF",
		},
	];
</script>

<div class="bg-white px-4 py-12 text-black">
	<div class="max-w-4xl mx-auto">
		<h2 class="text-3xl font-bold text-center mb-8">Our Menu</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
			{#each menuItems as item}
				<div class="border rounded-lg p-4 shadow-lg">
					<h3 class="text-xl font-semibold">{item.name}</h3>
					<p class="text-gray-600 text-sm">{item.description}</p>
					<div class="mt-2 font-bold text-lg">{item.price}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	/* Optional: Add additional styles to customize appearance */
	.border {
		border-color: #ddd;
	}
	.text-gray-600 {
		color: #6b7280;
	}
	.shadow-lg {
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
</style>

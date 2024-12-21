<script lang="ts">
	const contactInfo = {
		phone: "+41 32 123 45 67",
		email: "info@thisemaildoesnotexist.com"
	};
</script>

<div class="bg-stone-100 px-4 py-12 text-black">
	<div class="max-w-4xl mx-auto">
		<h2 class="text-3xl font-bold text-center mb-8">Contact Us</h2>
		<p class="text-center text-lg mb-6">
			We'd love to hear from you! Whether it's about our coffee, pastries, or just to say hi, feel free to reach out.
		</p>

		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
			<div>
				<h3 class="text-xl font-semibold mb-2">Phone</h3>
				<p class="text-gray-600">{contactInfo.phone}</p>
			</div>
			<div>
				<h3 class="text-xl font-semibold mb-2">Email</h3>
				<a href={`mailto:${contactInfo.email}`} class="text-blue-600 hover:underline">
					{contactInfo.email}
				</a>
			</div>
			<div>
				<h3 class="text-xl font-semibold mb-2">Opening Hours</h3>
				<p class="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM</p>
				<p class="text-gray-600">Sat - Sun: 9:00 AM - 5:00 PM</p>
			</div>
		</div>
	</div>
</div>

<style>

</style>

<script lang="ts">
	import Button from '$lib/components/forms/Button.svelte';
	import InputText from '$lib/components/forms/InputText.svelte';
</script>

<div class="w-full flex-grow grid place-items-center mt-8">
	<div class="w-full max-w-xs">
		<form class="bg-white shadow-md rounded px-8 pt-6 pb-8">
			<div class="mb-4">
				<InputText id="username" label="Username" placeholder="Username" type="text" />
			</div>
			<div class="mb-6">
				<InputText id="password" label="Password" placeholder="**************" type="password" />
			</div>
			<div class="flex items-center justify-between">
				<Button label="Log In" primary={true} size="large" />

				<a class="inline-block font-bold text-xs text-gray-400 hover:text-gray-900" href="/auth">
					Forgot Password?
				</a>
			</div>
		</form>
	</div>
</div>

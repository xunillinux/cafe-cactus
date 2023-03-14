<script lang="ts">
	export let type: 'text' | 'password' = 'text';
	export let label = '';
	export let placeholder = '';
	export let id = '';
</script>

<label class="block text-gray-700 text-sm font-bold mb-2" for={id}>{label}</label>
<input
	class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
	{id}
	{type}
	{placeholder}
/>

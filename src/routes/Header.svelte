<script lang="ts">
	import logo from '$lib/images/logo-cafe-cactus.png';
	import Button from './Button.svelte';
	import { createEventDispatcher } from 'svelte';

	export let user: { name: string } | null = null;

	const dispatch = createEventDispatcher();

	function onLogin(event: MouseEvent) {
		dispatch('login', event);
	}
	function onLogout(event: MouseEvent) {
		dispatch('logout', event);
	}
</script>

<header>
	<div class="wrapper">
		<div>
			<img width="32" height="32" src={logo} alt="Cafe Cactus" />
			<h1>Acme</h1>
		</div>
		<div>
			{#if user}
				<span class="welcome">
					Welcome, <b>{user.name}</b>!
				</span>
				<Button size="small" on:click={onLogout} label="Log out" />
			{:else}
				<Button size="small" on:click={onLogin} label="Log in" />
			{/if}
		</div>
	</div>
</header>

<style>
	.wrapper {
		font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		padding: 15px 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	img {
		display: inline-block;
		vertical-align: top;
	}

	h1 {
		font-weight: 700;
		font-size: 20px;
		line-height: 1;
		margin: 6px 0 6px 10px;
		display: inline-block;
		vertical-align: top;
	}

	button + button {
		margin-left: 10px;
	}
	.welcome {
		color: #333;
		font-size: 14px;
		margin-right: 10px;
	}
</style>

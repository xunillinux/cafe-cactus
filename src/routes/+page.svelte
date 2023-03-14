<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('title')}</title>
	<meta name="description" content="Cafe Cactus" />
</svelte:head>

<h1>{$_('home.welcome.title')}</h1>
<br />
<p>{$_('home.welcome.p1')} <bold>{$_('title')}</bold>.</p>
<br />
<p>{$_('home.welcome.p2')}</p>

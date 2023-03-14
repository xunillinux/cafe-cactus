<script lang="ts">
	export let primary = false;
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let label = '';

	$: mode = primary ? 'cactus-button--primary' : 'cactus-button--secondary';
</script>

<button type="button" class={`cactus-button cactus-button--${size} ${mode}`} on:click>
	{label}
</button>

<style lang="postcss">
	.cactus-button {
		font-weight: theme(fontWeight.bold);
		border: 0;
		border-radius: theme(borderRadius.3xl);
		display: inline-block;
		line-height: 1;
	}
	.cactus-button--primary {
		color: theme(colors.white);
		background-color: theme(colors.primary);
	}
	.cactus-button--secondary {
		color: theme(colors.stone.600);
		background-color: theme(colors.transparent);
		box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
	}
	.cactus-button--small {
		font-size: theme(fontSize.xs);
		padding: 10px 16px;
	}
	.cactus-button--medium {
		font-size: theme(fontSize.sm);
		padding: 11px 20px;
	}
	.cactus-button--large {
		font-size: theme(fontSize.base);
		padding: 12px 24px;
	}
</style>

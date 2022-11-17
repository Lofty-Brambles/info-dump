<script lang="ts">
	export let searchButton = false;
</script>

<button {...$$restProps} class:search-button={searchButton}>
	<slot>
		Click Me!
	</slot>
</button>

<style lang="scss">
	@use "src/lib/styles-addn/func" as f;
	@use "src/lib/styles-addn/vars" as v;

	button {
		padding: 0.6rem 1rem;
		border: 2px solid var(--elementary-lite);
		border-radius: 0.5rem;

		background-color: var(--foreground);
		color: var(--elementary);
		font-family: v.$titan;
		font-size: 1rem;

		white-space: nowrap;
		user-select: none;
		touch-action: manipulation;

		&:hover,
		&:focus {
			outline: none;
			border-color: var(--elementary);
			box-shadow: var(--elementary-lite) 0px 0.25rem 0.75rem;
		}
	}

	.search-button {
		position: absolute;
		left: calc(100% - 3rem);
		box-sizing: border-box;
		@include f.flex($gap: 0.25rem);
		align-self: center;
	}
</style>

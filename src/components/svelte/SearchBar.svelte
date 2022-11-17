<script type="ts">
	import Button from "./Button.svelte";

	const handleSearch = () => {
		console.log("helo");
	};
</script>

<form autocomplete="on" on:submit|preventDefault={handleSearch}>
	<input
		aria-label="search-bar input field"
		type="text"
		name="search-bar"
		id="search bar"
	/>
	<!-- <button type="submit">Submit</button> -->
	<Button type="submit" searchButton>Submit</Button>
</form>

<style lang="scss">
	@use "src/lib/util/func" as f;

	form {
		position: relative;
		display: flex;
		flex-grow: 1;
		margin: 0.5rem 4rem 0.5rem 1rem;

		height: 3rem;
		border: 1px solid var(--elementary);
		background-color: inherit;

		&:has(input:focus) {
			outline: 0.125rem solid var(--elementary);
		}
	}

	input {
		margin: 0 3.25rem 0 0.25rem;
		width: 100%;
		border: none;

		background-color: inherit;
		color: var(--elementary);
		font-size: 1.2rem;
		outline: none;
	}
</style>

<script type="ts">
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
	<button type="submit">Submit</button>
</form>

<style lang="scss">
	@use "src/lib/styles-addn/func" as f;

	form {
		position: relative;
		display: flex;
		flex-grow: 1;
		margin: 0.5rem 4rem 0.5rem 1rem;

		height: 3rem;
		border: 1px solid #000;
		background-color: #fff;

		&:has(input:focus) {
			outline: 0.125rem solid #000;
		}
	}

	input {
		margin: 0 2.75rem 0 0.25rem;
		width: 100%;
		border: none;

		font-size: 1.2rem;
		outline: none;
	}

	button {
		position: absolute;
		left: calc(100% - 2.5rem);
		box-sizing: border-box;
		@include f.flex($gap: 0.25rem);
		align-self: center;
		box-shadow: var(--elementary-lite) 0.6rem 0.875rem 0.35rem -0.3rem;

		padding: 0.4rem 0.75rem;
		border: 0.125rem solid var(--primary);

		border-bottom-left-radius: 0.5rem 16rem;
		border-bottom-right-radius: 16rem 0.5rem;
		border-top-left-radius: 16rem 0.5rem;
		border-top-right-radius: 0.5rem 16rem;

		background-color: var(--secondary);
		background-image: none;
		background-position: 0 90%;
		background-repeat: repeat no-repeat;
		background-size: 0.25rem 0.1875rem;

		color: var(--anti-elementary);
		font-family: "Titan", sans-serif;
		font-size: 1rem;
		line-height: 23px;
		text-decoration: none;

		outline: none;
		transition: all 235ms ease-in-out;
		user-select: none;
		touch-action: manipulation;

		&:hover,
		&:focus {
			box-shadow: var(--elementary-lite) 2px 8px 8px -5px;
			transform: translateX(10%);
		}
	}

	@media (prefers-reduced-motion) {
		button {
			transition: none;
		}
	}
</style>

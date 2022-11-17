<script type="ts">
	import "./style.sass";
	import Button from "@components/svelte/Button/index.svelte";

	const handleSearch = () => {
		console.log("helo");
	};
</script>

<form
	autocomplete="on"
	on:submit|preventDefault={handleSearch}
	class="search-bar"
>
	<input
		aria-label="search-bar input field"
		type="text"
		name="search-bar"
		id="search bar"
		placeholder="What to find?"
	/>
	<Button type="submit" searchButton>
		Search
	</Button>
</form>

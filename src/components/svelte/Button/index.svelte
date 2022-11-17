<script lang="ts">
	import "./style.sass"
	export let searchButton = false;
</script>

<button {...$$restProps} class:search-button={searchButton}>
	<slot>Click Me!</slot>
</button>

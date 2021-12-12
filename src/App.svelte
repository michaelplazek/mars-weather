<script>
  import { onMount } from 'svelte';
	import Cell from './Cell.svelte';
	import Today from './Today.svelte';
  import { fetchWeatherData } from "./utils";

  onMount(async () => {
    await fetchWeatherData();
  });
</script>

<style>
	.top {
      justify-self: center;
			align-self: center;
	}
</style>

<div class="container">
	<div class="top">
		<Today />
	</div>
	<Cell />
	<Cell />
</div>

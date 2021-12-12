<script>
  import { onMount } from 'svelte';

	import Today from './Today.svelte';
  import Pressure from "./Pressure.svelte";
  import WindSpeed from "./WindSpeed.svelte";
  import WindDirection from "./WindDirection.svelte";

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
	<div class="bottom-left">
		<Pressure />
		<WindSpeed />
		<WindDirection />
	</div>
</div>

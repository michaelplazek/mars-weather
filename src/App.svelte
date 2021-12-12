<script>
  import { onMount } from 'svelte';

  import Today from './Today.svelte';
  import Pressure from "./Pressure.svelte";
  import WindSpeed from "./WindSpeed.svelte";
  import WindDirection from "./WindDirection.svelte";
  import History from "./History.svelte";

  import { fetchWeatherData } from "./utils";

  onMount(async () => {
    await fetchWeatherData();
  });
</script>

<style>
    .top {
        display: grid;
    }
		.bottom-right {
				display: grid;
		}
		.header {
				display: flex;
				flex-direction: row;
				margin: 12px;
				align-items: center;
		}
		.header > h1 {
				font-size: 28px;
				color: #FFFFF0;
				margin: 0 0 0 12px;
		}
</style>

<div class="container">
	<div class="header">
		<img src="./images/nasa_logo.svg" alt="NASA logo" width="50px" height="50px">
		<h1>What is the weather on Mars?</h1>
	</div>
	<div class="top">
		<Today />
	</div>
	<div class="bottom-left split">
		<Pressure />
		<WindSpeed />
		<WindDirection />
	</div>
	<div class="bottom-right">
		<History />
	</div>
</div>

<script>
  import { onMount } from "svelte";

  import Today from "./Today.svelte";
  import Pressure from "./Pressure.svelte";
  import WindSpeed from "./WindSpeed.svelte";
  import WindDirection from "./WindDirection.svelte";
  import History from "./History.svelte";

  import { fetchWeatherData } from "./utils";

  onMount(async () => {
    await fetchWeatherData();
    // poll for new data every minute
    setInterval(fetchWeatherData, 1000 * 60);
  });
</script>

<div class="container">
  <div class="header">
    <img
      src="./images/nasa_logo.svg"
      alt="NASA logo"
      width="50px"
      height="50px"
    />
    <h1>What's the weather on Mars?</h1>
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
    color: #fffff0;
    margin: 0 0 0 12px;
  }
</style>

<script>
  import {
    historicalTemperatures,
    historicalPressures,
    historicalWindSpeeds,
  } from "./store";
  import Chart from "svelte-frappe-charts";

  let types;

  $: {
    types = [
      {
        id: "temperature",
        value: $historicalTemperatures,
        title: "Atmospheric Temperature",
        label: "Temperature",
        units: "F",
        order: 0,
      },
      {
        id: "pressure",
        value: $historicalPressures,
        title: "Atmospheric Pressure",
        label: "Pressure",
        units: "Pa",
        order: 1,
      },
      {
        id: "windSpeed",
        value: $historicalWindSpeeds,
        title: "Horizontal Wind Speed",
        label: "Wind Speed",
        units: "m/s",
        order: 2,
      },
    ];
  }

  let type = 0;
</script>

<div class="history">
  <div>
    <div class="header">
      <h2 class="title">Historical Trend</h2>
      <div class="radios">
        {#each types as { title, label, order, id } (id)}
          <label class="radio">
            <input type="radio" bind:group={type} name="type" value={order} />
            {label}
          </label>
        {/each}
      </div>
    </div>
    <h3 class="subtitle">
      {`${types[type].title} (${types[type].units} per sol)`}
    </h3>
  </div>

  <div class="chart">
    <Chart
      data={types[type].value}
      type="line"
      lineOptions={{
        heatline: 1,
        dotSize: 6,
      }}
    />
  </div>
</div>

<style>
  .history {
    display: grid;
    background: #fffff0;
    border-radius: 12px;
    margin: 6px;
  }
  .title {
    margin: 0;
  }
  .subtitle {
    margin: 0 16px;
    font-weight: 300;
  }
  .radios {
    display: flex;
    flex-direction: row;
  }
  .radio {
    margin-right: 12px;
  }
  .chart {
    position: relative;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 16px 0 16px;
  }
</style>

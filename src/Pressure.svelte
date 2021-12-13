<script>
  import Cell from "./Cell.svelte";

  import {
    todayAveragePressure,
    todayMaxPressure,
    todayMinPressure,
  } from "./store";
</script>

<Cell title="Atmospheric Pressure">
  <div class="pressure">
    <h4 class="average">
      {@html $todayAveragePressure}
    </h4>
    <div class="range">
      <span class="min">{@html $todayMinPressure}</span>
      <span>{@html "&nbsp;|&nbsp;"}</span>
      <span class="max">{@html $todayMaxPressure}</span>
    </div>
  </div>
</Cell>

<style>
  .pressure {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .average {
    font-size: 36px;
    margin: 0;
  }
</style>

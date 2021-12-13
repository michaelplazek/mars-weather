<script>
  import Cell from "./Cell.svelte";

  import { todayAverageWind, todayMaxWind, todayMinWind } from "./store";
</script>

<Cell title="Horizontal Wind Speed">
  <div class="wind">
    <h4 class="average">
      {$todayAverageWind}
    </h4>
    <div class="range">
      <span class="min">{$todayMinWind}</span>
      <span>{@html "&nbsp;|&nbsp;"}</span>
      <span class="max">{$todayMaxWind}</span>
    </div>
  </div>
</Cell>

<style>
  .wind {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .average {
    font-size: 36px;
    margin: 0;
  }
</style>

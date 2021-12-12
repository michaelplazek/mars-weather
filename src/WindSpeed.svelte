<script>
  import Cell from './Cell.svelte';

  import {
    todayAverageWind,
    todayMaxWind,
    todayMinWind,
  } from "./store";
</script>

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

<Cell title="Horizontal Wind Speed">
	<div class="wind">
		<h4 class="average">
			{$todayAverageWind}
		</h4>
		<div class="range">
			<span class="min">{$todayMaxWind}</span>
			<span>{` | `}</span>
			<span class="max">{$todayMinWind}</span>
		</div>
	</div>
</Cell>

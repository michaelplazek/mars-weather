<script>
  import Cell from './Cell.svelte';

  import {
    todayAveragePressure,
    todayMaxPressure,
    todayMinPressure,
  } from "./store";
</script>

<style>
    .history {
        display: flex;
        flex-direction: column;
        align-items: center;
				flex: 1;
    }
    .average {
        font-size: 36px;
        margin: 0;
    }
</style>

<Cell title="Historical Data - Past 7 Days">
	<div class="history">
		<h4 class="average">
			{@html $todayAveragePressure}
		</h4>
		<div class="range">
			<span class="min">{@html $todayMinPressure}</span>
			<span>{@html '&nbsp;|&nbsp;'}</span>
			<span class="max">{@html $todayMaxPressure}</span>
		</div>
	</div>
</Cell>

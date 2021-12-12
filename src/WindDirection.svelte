<script>
  import Cell from './Cell.svelte';

  import {
    todayWindDirection,
  } from "./store";
</script>

<style>
    .direction {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .average {
        font-size: 36px;
        margin: 0;
    }
</style>

<Cell title="Wind Direction">
	<div class="direction">
		<h4 class="average">
			{$todayWindDirection}
		</h4>
	</div>
</Cell>

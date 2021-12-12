<script>
  import {
    todayOnMars,
    todayOnEarth,
    todayAverageTemperature,
    todayMinTemperature,
    todayMaxTemperature
  } from "./store.js";
</script>

<style>
    .today {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0;
    }
    .range {
        display: flex;
        flex-direction: row;
        align-self: center;
        justify-content: space-between;
    }
    .dates {
        align-self: flex-end;
        margin-right: 20px;
    }
    .today-on-mars {
        margin: inherit;
    }
    .today-on-earth {
        margin: inherit;
    }
    .weather {
        align-items: center;
    }
    .average {
        margin: inherit;
    }
</style>

<div class="today">
	<div class="dates">
		<h2 class="today-on-mars">
			{$todayOnMars}
		</h2>
		<h3 class="today-on-earth">
			{$todayOnEarth}
		</h3>
	</div>
	<div class="weather">
		<h1 class="average">
			{@html $todayAverageTemperature}
		</h1>
		<div class="range">
			<span class="min">{@html $todayMinTemperature}</span>
			<span>{` | `}</span>
			<span class="max">{@html $todayMaxTemperature}</span>
		</div>

	</div>
</div>

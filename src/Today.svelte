<script>
  import {
    todayOnMars,
    todayOnEarth,
    todayAverageTemperature,
    todayMinTemperature,
    todayMaxTemperature,
    seasonIcon,
    season,
  } from "./store.js";
</script>

<div class="wrapper">
  <div class="today">
    <div class="context">
      <div class="dates">
        <h2 class="today-on-mars">
          {$todayOnMars}
        </h2>
        <h3 class="today-on-earth">
          {$todayOnEarth}
        </h3>
      </div>
    </div>
    <div class="weather">
      <h1 class="average">
        {@html $todayAverageTemperature}
      </h1>
      <div class="range">
        <span class="min">{@html $todayMinTemperature}</span>
        <span class="divider">{@html "&nbsp;|&nbsp;"}</span>
        <span class="max">{@html $todayMaxTemperature}</span>
      </div>
      <div class="season">
        <img src={`./images/${$seasonIcon}`} width="20px" height="20px" />
        <span>{$season}</span>
      </div>
    </div>
  </div>
</div>

<style>
  .wrapper {
    display: grid;
    background: #fffff0;
    border-radius: 12px;
    margin: 6px;
  }
  .today {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 6px;
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
  .context {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .season {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6px;
  }
  .season > span {
    font-weight: 300;
    margin-left: 6px;
  }

  @media (max-width: 400px) {
    .range {
      flex-direction: column;
    }
    .divider {
      display: none;
    }
    .dates {
      align-self: center;
      margin-right: 20px;
    }
  }
</style>

<script>
  import Cell from "./Cell.svelte";
  import "@carbon/charts/styles.min.css";
  import "carbon-components/css/carbon-components.min.css";
  import { LineChart } from "@carbon/charts-svelte";

  import {
    todayAveragePressure,
    todayMaxPressure,
    todayMinPressure,
  } from "./store";
</script>

<Cell title="Historical Data - Past 7 Days">
  <div class="history">
    <LineChart
      data={[
        {
          group: "Dataset 1",
          date: "2019-01-01T07:00:00.000Z",
          value: 50000,
          surplus: 2651318.4483989426,
        },
        {
          group: "Dataset 1",
          date: "2019-01-05T07:00:00.000Z",
          value: 65000,
          surplus: 434003209.1989412,
        },
        {
          group: "Dataset 1",
          date: "2019-01-08T07:00:00.000Z",
          value: null,
          surplus: 8939.162261825379,
        },
        {
          group: "Dataset 1",
          date: "2019-01-13T07:00:00.000Z",
          value: 49213,
          surplus: 309343792.0947987,
        },
        {
          group: "Dataset 1",
          date: "2019-01-17T07:00:00.000Z",
          value: 51213,
          surplus: 1107067637.415305,
        },
        {
          group: "Dataset 2",
          date: "2019-01-02T07:00:00.000Z",
          value: 0,
          surplus: 22949.279728663434,
        },
        {
          group: "Dataset 2",
          date: "2019-01-06T07:00:00.000Z",
          value: 57312,
          surplus: 734092757.073344,
        },
        {
          group: "Dataset 2",
          date: "2019-01-08T07:00:00.000Z",
          value: 27432,
          surplus: 635156467.7011111,
        },
        {
          group: "Dataset 2",
          date: "2019-01-15T07:00:00.000Z",
          value: 70323,
          surplus: 911403166.7408336,
        },
        {
          group: "Dataset 2",
          date: "2019-01-19T07:00:00.000Z",
          value: 21300,
          surplus: 393961187.318637,
        },
        {
          group: "Dataset 3",
          date: "2019-01-01T07:00:00.000Z",
          value: 40000,
          surplus: 939082835.6634781,
        },
        {
          group: "Dataset 3",
          date: "2019-01-05T07:00:00.000Z",
          value: null,
          surplus: 2858.1658410377963,
        },
        {
          group: "Dataset 3",
          date: "2019-01-08T07:00:00.000Z",
          value: 18000,
          surplus: 85828589.21662892,
        },
        {
          group: "Dataset 3",
          date: "2019-01-13T07:00:00.000Z",
          value: 39213,
          surplus: 359483527.96812814,
        },
        {
          group: "Dataset 3",
          date: "2019-01-17T07:00:00.000Z",
          value: 61213,
          surplus: 482857383.1520387,
        },
        {
          group: "Dataset 4",
          date: "2019-01-02T07:00:00.000Z",
          value: 20000,
          surplus: 96228553.99854468,
        },
        {
          group: "Dataset 4",
          date: "2019-01-06T07:00:00.000Z",
          value: 37312,
          surplus: 701397481.7090425,
        },
        {
          group: "Dataset 4",
          date: "2019-01-08T07:00:00.000Z",
          value: 51432,
          surplus: 724406328.2501903,
        },
        {
          group: "Dataset 4",
          date: "2019-01-15T07:00:00.000Z",
          value: 25332,
          surplus: 513191946.9201606,
        },
        {
          group: "Dataset 4",
          date: "2019-01-19T07:00:00.000Z",
          value: null,
          surplus: 23699.446556844206,
        },
      ]}
      options={{
        title: "Line (time series)",
        axes: {
          bottom: {
            title: "2019 Annual Sales Figures",
            mapsTo: "date",
            scaleType: "time",
          },
          left: {
            mapsTo: "value",
            title: "Conversion rate",
            scaleType: "linear",
          },
        },
        curve: "curveMonotoneX",
        height: "400px",
      }}
    />
  </div>
</Cell>

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

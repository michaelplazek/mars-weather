<script>
  import Cell from "./Cell.svelte";
  import Chart from 'svelte-frappe-charts';

  let data = {
    labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
    datasets: [
      {
        values: [10, 12, 3, 9, 8, 15, 9]
      }
    ]
  };
</script>

<style>
  .history {
    background: #fffff0;
    border-radius: 12px;
    margin: 6px;
  }
  .title {
    margin: 16px;
  }
</style>

<div class="history">
  <h2 class="title">Historical Trend (past 7 days)</h2>
  <Chart data={data} type="line" />
</div>

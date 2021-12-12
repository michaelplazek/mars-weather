<script>
  export let title = "";
</script>

<div class="cell">
  <h3 class="title">{title}</h3>
  <div class="content">
    <slot />
  </div>
</div>

<style>
  .cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    margin: 6px;
    background: #fffff0;
  }
  .content {
    margin: 6px 12px 12px 12px;
    display: flex;
    flex: 1;
    align-items: center;
  }
  .title {
    margin-bottom: 0;
  }
</style>

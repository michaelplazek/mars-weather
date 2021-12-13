<script>
  export let title = "";
</script>

<div class="cell">
  {#if title}
    <h3 class="title">{title}</h3>
  {/if}
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
    margin: 6px 6px 12px 6px;
    background: #fffff0;
  }
  .content {
    margin: 0 12px 12px 12px;
    display: flex;
    flex: 1;
    align-items: center;
  }
  .title {
    margin-top: 12px;
    margin-bottom: 0;
  }

  @media (max-width: 400px) {
    .content {
      padding: 6px;
    }
  }
</style>

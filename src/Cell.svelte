<script>
export let title = '';
</script>

<style>
    .cell {
        display: flex;
				flex-direction: column;
				align-items: center;
				border-radius: 12px;
				margin: 6px;
        background: #FFFFF0;
    }
		.content {
				margin: 6px 12px 12px 12px;
		}
		.title {
				margin-bottom: 0;
		}
</style>

<div class='cell'>
	<h3 class="title">{title}</h3>
	<div class="content">
		<slot></slot>
	</div>
</div>

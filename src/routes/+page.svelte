<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="header">
	<h2 class="title">Cape Coder</h2>
	<div class="categories">
		<p class="category-item">About</p>
	</div>
</div>
<ul class="feeds">
	{#each data.feeds as feed}
		<div>
			<a class="post-title" href="/article/{feed.article}">{feed.title}</a>
			<p class="summary-item">{feed.summaries.join(' ')}</p>
		</div>
	{/each}
</ul>

<style>
	:global(body) {
		background-color: #232a2e;
		color: #859289;
	}
	:global(.post-title) {
		color: #dbbc7f;
	}
	.header {
		margin-top: 30px;
		display: flex;
		align-items: baseline;
	}
	.title {
		margin-left: 25px;
		margin-right: max(20%, 100px);
		white-space: nowrap;
		color: #e67e80;
	}
	.categories {
		display: flex;
	}
	.category-item {
		margin-right: 30px;
		font-weight: bold;
		color: #e69875;
	}
	.feeds {
		padding-left: 0px;
	}
	.summary-item {
		margin-top: 5px;
	}
</style>

<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<ul class="feeds">
	{#each data.feeds as feed}
		<div>
			<div class="feed-title-container">
				<div>[{feed.uploadTimeStr}]</div>
				<a class="feed-title" href="/article/{feed.article}">{feed.title}</a>
			</div>
			<p class="feed-summary">{feed.summary}</p>
		</div>
	{/each}
</ul>

<style>
	.feeds {
		padding-left: 0px;
	}
	.feed-title-container {
		display: flex;
		color: #5c3f4f;
	}
	.feed-title {
		padding-left: 5px;
		color: #dbbc7f;
	}
	.feed-summary {
		margin-top: 5px;
	}
</style>

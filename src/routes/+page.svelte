<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<ul class="feeds">
	{#each data.feeds as feed}
		<div>
			<a class="feed-title" href="/article/{feed.article}">{feed.title}</a>
			<p class="feed-summary">{feed.summaries.join(' ')}</p>
		</div>
	{/each}
</ul>

<style>
	.feeds {
		padding-left: 0px;
	}
	.feed-title {
		color: #dbbc7f;
	}
	.feed-summary {
		margin-top: 5px;
	}
</style>

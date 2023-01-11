<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Habits of little punk</h1>
<ul>
	{#each data.feeds as feed}
		<li>
			<p>
				<a href="/article/{feed.article}">{feed.title}</a>
			</p>
		</li>
	{/each}
</ul>

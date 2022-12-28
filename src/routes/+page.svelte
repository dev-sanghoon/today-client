<script>
	/** @type {import('./$types').PageData} */
	export let data;

	let { feeds } = data;
</script>

<h1>Habits of little punk</h1>
<ul>
	{#each feeds as feed}
		<li>{feed.title}</li>
	{/each}
</ul>

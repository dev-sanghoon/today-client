<script>
	import { enhance } from '$app/forms';

	/** @type {import('./$types').PageData} */
	export let data;

	let { feeds } = data;
	let id = '';
	let password = '';
</script>

<div>
	<form use:enhance method="POST">
		<input name="id" type="text" placeholder="id" bind:value={id} required />
		<input name="password" type="password" placeholder="password" bind:value={password} required />
		<button type="submit">Submit</button>
	</form>
</div>
<h1>Habits of little punk</h1>
<ul>
	{#each feeds as feed}
		<li>
			<p>
				<a href="/article/{feed.article}">{feed.title}</a>
			</p>
		</li>
	{/each}
</ul>

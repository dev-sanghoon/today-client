<script>
	import axios from 'axios';

	/** @type {import('./$types').PageData} */
	export let data;

	let { feeds } = data;
	let id = '';
	let password = '';

	async function doLogin() {
		await axios.post('/api/login', { id, password }, { withCredentials: true });
	}
</script>

<div>
	<input bind:value={id} />
	<input type="password" bind:value={password} />
	<button on:click={doLogin}>Login</button>
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

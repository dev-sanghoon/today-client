<script>
	import axios from 'axios';
	import { goto } from '$app/navigation';

	let id = '';
	let password = '';

	async function doLogin() {
		const response = await axios.post('/api/auth', { id, password }, { withCredentials: true });
		if (response.data.success) {
			goto('/');
		}
	}
</script>

<div>
	<input class="text-input" bind:value={id} />
	<input class="text-input" type="password" bind:value={password} />
	<button class="submit-button" on:click={doLogin}>Login</button>
</div>

<style>
	:global(body) {
		background-color: #232a2e;
		color: #859289;
	}
	.text-input {
		color: #d3c6aa;
		background-color: #543a48;
	}
	.submit-button {
		color: #514045;
		background-color: #859289;
	}
</style>

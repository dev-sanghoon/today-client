<script>
	import axios from 'axios';
	import { goto } from '$app/navigation';

	let id = '';
	let password = '';

	async function doLogin() {
		const response = await axios.post('/api/login', { id, password }, { withCredentials: true });
		if (response.data.success) {
			goto('/');
		}
	}
</script>

<div>
	<input bind:value={id} />
	<input type="password" bind:value={password} />
	<button on:click={doLogin}>Login</button>
</div>

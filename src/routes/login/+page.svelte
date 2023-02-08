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

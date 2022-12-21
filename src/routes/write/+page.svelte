<script>
	import axios from 'axios';

	let content = '';
	let result = '';

	async function uploadLog() {
		const response = await axios.post('/api/blog', { content });
		if (response.data.success) {
			result = response.data.message;
		}
	}
</script>

<textarea bind:value={content} />
<button on:click={uploadLog}>Submit</button>
{@html result}

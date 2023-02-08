<script>
	import axios from 'axios';
	import { marked } from 'marked';

	let content = '';

	async function uploadLog() {
		const response = await axios.post('/api/articles', { content });
		if (response.data.success) {
			content = '';
			return;
		}
		alert('실패하였습니다.');
	}
</script>

<div class="container">
	<textarea bind:value={content} />
	<div class="preview">{@html marked.parse(content)}</div>
</div>
<div>
	<button on:click={uploadLog}>Submit</button>
</div>

<style>
	.container {
		display: flex;
	}
	.preview {
		width: 50%;
		margin: auto 5%;
		padding: 0% 1%;
		border: 1px solid grey;
	}
	textarea {
		width: 50%;
		min-height: 20em;
		resize: none;
	}
</style>

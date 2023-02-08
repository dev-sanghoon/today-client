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
	<textarea class="text-input" bind:value={content} />
	<div class="preview">{@html marked.parse(content)}</div>
</div>
<div>
	<button class="submit-button" on:click={uploadLog}>Submit</button>
</div>

<style>
	:global(body) {
		background-color: #232a2e;
		color: #859289;
	}
	:global(body) {
		background-color: #232a2e;
		color: #859289;
	}
	:global(a) {
		color: #859289;
	}
	:global(h1, h2, h3) {
		color: #dbbc7f;
	}
	:global(strong) {
		font-weight: normal;
		color: #d3c6aa;
		background-color: #543a48;
	}
	.text-input {
		color: #d3c6aa;
		background-color: #543a48;
	}
	.submit-button {
		color: #514045;
		background-color: #859289;
	}
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

<script>
	import axios from 'axios';
	import { marked } from 'marked';

	let content = '';
	let result = '';

	async function uploadLog() {
		result = '저장 중';
		const response = await axios.post('/api/articles', { content });
		if (response.data.success) {
			content = '';
			result = '성공';
			return;
		}
		result = '실패';
	}
</script>

<div class="container">
	<textarea bind:value={content} />
	<div class="preview">{@html marked.parse(content)}</div>
</div>
<div>
	<button on:click={uploadLog}>Submit</button>
</div>
<div>
	결과: {result}
</div>

<style>
	.container {
		display: flex;
	}
	.preview {
		width: 50%;
		margin: auto 5%;
		/* padding: 5px; */
		padding: 0% 1%;
		border: 1px solid grey;
	}
	textarea {
		width: 50%;
		min-height: 20em;
		resize: none;
	}
</style>

<script>
	import axios from 'axios';

	let content = '';
	let preview = '';
	let result = '';

	async function uploadLog() {
		result = '저장 중';
		const response = await axios.post('/api/article', { content });
		if (response.data.success) {
			content = '';
			result = '성공';
			return;
		}
		result = '실패';
	}

	async function previewArticle() {
		const response = await axios.post('/api/article/preview', { content });
		preview = response.data.content;
	}
</script>

<div class="container">
	<textarea bind:value={content} />
	<div class="preview">{@html preview}</div>
</div>
<div>
	<button on:click={previewArticle}>Preview</button>
	<button on:click={uploadLog}>Submit</button>
</div>
<div>
	결과: {result}
</div>

<style>
	textarea {
		width: 100%;
		height: 30em;
		resize: none;
	}
</style>

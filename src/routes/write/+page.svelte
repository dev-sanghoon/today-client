<script>
	import axios from 'axios';

	let content = '';
	let result = '';

	async function uploadLog() {
		result = '저장 중';
		const response = await axios.post('/api/blog', { content });
		if (response.data.success) {
			content = '';
			result = '성공';
			return;
		}
		result = '실패';
	}
</script>

<div>
	<textarea bind:value={content} />
</div>
<div>
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

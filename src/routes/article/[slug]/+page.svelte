<script>
	/** @type {import('./$types').PageData} */
	export let data;

	let { content } = data;
</script>

{@html content}

<style>
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
</style>

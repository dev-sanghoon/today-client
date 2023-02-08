<script>
	let copyInfo = '';
	const email = 'dev.sanghoon@gmail.com';

	function copyText() {
		navigator.clipboard.writeText(email);
		copyInfo = 'copied!';
	}

	function removeElement() {
		copyInfo = '';
	}
</script>

<ul>
	<div class="info-container">
		<p class="info-item" role="button" tabindex="0" on:click={copyText} on:keydown={copyText}>
			{email}
		</p>
		{#if !!copyInfo}
			<p
				class="info-comment"
				role="button"
				tabindex="0"
				on:click={removeElement}
				on:keydown={removeElement}
			>
				{copyInfo}
			</p>
		{/if}
	</div>
	<div>
		<a class="info-item" href="https://github.com/dev-sanghoon" target="_blank" rel="noreferrer">
			github.com/dev-sanghoon
		</a>
	</div>
</ul>

<style>
	.info-container {
		display: flex;
	}
	.info-item {
		color: #3a94c5;
		text-decoration-line: none;
		margin-right: 5px;
	}
	.info-item:hover {
		cursor: pointer;
		text-decoration-line: underline;
	}
	.info-comment:hover {
		cursor: pointer;
	}
</style>

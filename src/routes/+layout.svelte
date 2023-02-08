<script>
	import './global.css';
</script>

<nav class="header">
	<h2 class="title">Cape.Coder</h2>
	<div class="categories">
		<a class="category-item" href="/about">About</a>
	</div>
</nav>

<slot />

<style>
	.header {
		margin-top: 30px;
		display: flex;
		align-items: baseline;
	}
	.title {
		margin-left: 25px;
		margin-right: max(20%, 100px);
		white-space: nowrap;
		color: #e67e80;
	}
	.categories {
		display: flex;
	}
	.category-item {
		margin-right: 30px;
		font-weight: bold;
		color: #e69875;
		text-decoration-line: underline;
	}
</style>

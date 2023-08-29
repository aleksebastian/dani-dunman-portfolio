<script>
	import Hero from '../components/Hero.svelte';
	import Gallery from '../components/Gallery.svelte';
</script>

<svelte:head>
	<title>Daniela Dunman</title>
</svelte:head>

<section class="content">
	<div>
		<Hero />
	</div>
	<div>
		<Gallery />
	</div>
</section>

<style>
	.content {
		padding: 2rem;
		color: #d3a615;
	}

	@media (min-width: 768px) {
		.content {
			padding: 0 6rem;
		}
	}
</style>

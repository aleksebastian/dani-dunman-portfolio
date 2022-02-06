<script>
	import Nav from '../components/Nav.svelte';
	import Hero from '../components/Hero.svelte';
	import Gallery from '../components/Gallery.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<section class="content">
	<Hero />
	<Gallery />
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

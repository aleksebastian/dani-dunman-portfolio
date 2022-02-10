<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Nav />
<section class="content">
	<slot />
</section>
<Footer />

<style lang="css" global>
	@import '../app.css';

	:global(:root) {
		--header-size: 4rem;
		--label-size: 1.9rem;
		--body-size: 1.1rem;
		--callout-size: 3rem;
		--emphasis-size: 3rem; /* SAME AS CALLOUT SM */
		--callout-size-lg: 5rem;
		--expand-label: 0.95rem;
		--accent-color: #d3a615;
		--background-color: rgb(235, 235, 235);
	}

	.content {
		margin-top: 4rem;
	}
</style>

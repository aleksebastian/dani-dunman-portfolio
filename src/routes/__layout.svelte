<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import { fade } from 'svelte/transition';
	import { isMobileNavOpen } from '../store';
</script>

<Nav />
{#if $isMobileNavOpen}
	<div in:fade={{ delay: 100 }} out:fade class="glass" />
{/if}
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

	.glass {
		position: fixed;
		height: 100vh;
		width: 100vw;
		z-index: 2;
		background-color: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
	}

	/* 
		screens: {
			MOBILE LANDSCAPE
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
			TABLET PORTRAIT
      'md': '768px',
      // => @media (min-width: 768px) { ... }
			TABLET LANDSCAPE
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
			MACBOOK
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
			MONITOR
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    } 
	*/
</style>

<script>
	export const csr = false;
	export const prerender = true;

	import Nav from '../components/Nav.svelte';
	import ProjectsNavigation from '../components/ProjectsNavigation.svelte';
	import Footer from '../components/Footer.svelte';
	import { fade } from 'svelte/transition';
	import { isMobileNavOpen, currentPage } from '../store';
</script>

<Nav />
{#if $isMobileNavOpen}
	<div in:fade={{ delay: 100 }} out:fade class="glass" />
{/if}
<section class="content">
	<slot />
</section>
{#if $currentPage !== '/about' && $currentPage !== '/'}
	<ProjectsNavigation />
{/if}
<Footer />

<style lang="css" global>
	@import '../app.css';

	.content {
		padding-top: 4rem;
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

<script>
	import smoothscroll from 'smoothscroll-polyfill';
	import Nav from '../components/Nav.svelte';
	import ProjectsNavigation from '../components/ProjectsNavigation.svelte';
	import Footer from '../components/Footer.svelte';
	import { fade } from 'svelte/transition';
	import { isMobileNavOpen$ } from '../store';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	register();

	const notProjectPages = ['/', '/about'];
	const id = 'work';
	const defaultYOffset = -70;
	let y;
	let mounted = false;

	const getScrollToPosition = (element) =>
		element.getBoundingClientRect().top + window.scrollY + defaultYOffset;

	onMount(() => {
		smoothscroll.polyfill();
		mounted = true;
	});
</script>

<svelte:window bind:scrollY={y} />

<Nav />
{#if $isMobileNavOpen$}
	<div in:fade={{ delay: 100 }} out:fade class="glass"></div>
{/if}
<section class="content">
	<slot />
</section>
{#if !notProjectPages.includes($page.url.pathname)}
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

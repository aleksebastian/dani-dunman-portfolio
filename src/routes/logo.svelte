<script>
	import { onMount } from 'svelte';
	import { currentPage } from '../store';
	import { logo } from '../projectData.json';

	import ImageLoader from '../components/image/ImageLoader.svelte';
	import ProjectHero from '../components/ProjectHero.svelte';
	import Carousel from '../components/logo/Carousel.svelte';

	let heroLoaded = false;

	onMount(async () => {
		currentPage.set(logo.route);

		const heroImg = new Image();
		heroImg.src = logo.heroSrc;
		heroImg.onload = () => {
			heroLoaded = true;
		};
	});

	const { logoSrcs } = logo;
</script>

<svelte:head>
	<title>{logo.name}</title>
</svelte:head>

{#if heroLoaded}
	<div class="grid">
		<ProjectHero project={logo} />
		<p class="full-text pt-md">
			Here are a couple of logos I’ve designed. They came together by concept, and some have even
			won awards.
		</p>
		<div class="subgrid content pb-md">
			{#each logoSrcs as logoSrc}
				<Carousel carouselImgSrcs={logoSrc.imgSrcs} />
			{/each}
		</div>
	</div>
{:else}
	<div style="min-height: 100vh" />
{/if}

<style>
	.subgrid {
		display: grid;
		grid-gap: 3rem;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}

	@media (min-width: 640px) {
	}
</style>

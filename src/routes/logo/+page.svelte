<script>
	import { onMount } from 'svelte';
	import { currentPage } from '../../store';
	import { logo } from '../../projectData.json';

	import ImageLoader from '../../components/image/ImageLoader.svelte';
	import ProjectHero from '../../components/ProjectHero.svelte';
	import Carousel from '../../components/logo/Carousel.svelte';

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
			Check out these logos I've designed. They were thoughtfully conceptualized and a few of them have even earned awards. Swipe through each to see the full process.
		</p>
		<div class="subgrid content pb-md">
			{#each logoSrcs as logoSrc}
				<div class="carousel">
					<Carousel carouselImgSrcs={logoSrc.imgSrcs} />
					{#if logoSrc.awards.length}
						{#each logoSrc.awards as award}
							<p>{award}</p>
						{/each}
					{:else}
						<p>&nbsp;</p>
					{/if}
				</div>
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
		align-items: end;
	}

	.carousel > p {
		font-size: 0.9rem;
	}

	@media (min-width: 640px) {
	}
</style>

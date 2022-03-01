<script>
	import { onMount } from 'svelte';
	import { currentPage } from '../store';
	import { language } from '../projectData.json';

	import ImageLoader from '../components/image/ImageLoader.svelte';
	import ProjectHero from '../components/ProjectHero.svelte';
	import Carousel from '../components/Carousel.svelte';

	const carouselImgSrcs = language.carouselImgs;
	let heroLoaded = false;

	onMount(async () => {
		currentPage.set(language.route);
		const heroImg = new Image();
		heroImg.src = language.heroSrc;
		heroImg.onload = () => {
			heroLoaded = true;
		};
	});
</script>

<svelte:head>
	<title>{language.name}</title>
</svelte:head>

{#if heroLoaded}
	<div class="grid">
		<ProjectHero project={language} />
		<p class="full-text py-lg">
			For this project, I made an exhibition catalog for an exhibit that I created and curated based
			on the theme of alternative currencies. My goal was to document what went into the exhibition
			and expand the viewers' understanding of the topic. The alternative currency I chose was
			language. I included Alice J Lee's DesignInquiry residency project about language because it
			focussed on colloquial language and slang as a form of social currency. I also included an
			interview with Alice and three other essays about language as currency.
		</p>
		<div class="full">
			<Carousel {carouselImgSrcs} />
		</div>

		<div class="gallery full py-md">
			<div>
				<ImageLoader src={`https://picsum.photos/seed/1/1980/850`} alt="dani" />
			</div>
			<div>
				<ImageLoader src={`https://picsum.photos/seed/2/1980/850`} alt="dani" />
			</div>
			<div>
				<ImageLoader src={`https://picsum.photos/seed/3/1980/850`} alt="dani" />
			</div>
			<div>
				<ImageLoader src={`https://picsum.photos/seed/4/1980/850`} alt="dani" />
			</div>
			<div>
				<ImageLoader src={`https://picsum.photos/seed/5/1980/850`} alt="dani" />
			</div>
		</div>
	</div>
{:else}
	<div style="min-height: 100vh" />
{/if}

<style>
	.gallery > div {
		padding-bottom: 3rem;
		max-height: 100vh;
	}
</style>

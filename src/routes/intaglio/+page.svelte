<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { currentPage } from '../../store';
	import { intaglio } from '../../projectData.json';

	import ImageLoader from '../../components/image/ImageLoader.svelte';
	import ProjectHero from '../../components/ProjectHero.svelte';
	import Carousel from '../../components/Carousel.svelte';

	let heroLoaded = false;
	let innerWidth;
	let carouselImgSrcs;

	onMount(async () => {
		currentPage.set(intaglio.route);
		if (innerWidth <= 640) {
			carouselImgSrcs = intaglio.carouselImgsMobile;
		} else {
			carouselImgSrcs = intaglio.carouselImgs;
		}

		const heroImg = new Image();
		heroImg.src = intaglio.heroSrc;
		heroImg.onload = () => {
			heroLoaded = true;
		};
	});
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	<title>{intaglio.name}</title>
</svelte:head>

{#if heroLoaded}
	<div class="grid">
		<ProjectHero project={intaglio} />
		<p class="full-text-wide py-lg">
			This book is about the printmaking method of intaglio, specifically final prints, and how different each can be. The images used are prints done by Elvia Perrin. The secondary images are zoomed-in, smaller sections of the print's patterns, textures, or parts that summarize each piece. I also used images of supplies found around the studio and process work from Perrin as background accents.
		</p>
		<div in:fade class="full">
			<Carousel {carouselImgSrcs} />
		</div>
		<p class="full-text-wide py-lg">
			I chose to overlay the secondary image over itself printed on fibrous paper to mimic a process
			sometimes done in intaglio called chine-collé. I included the names of the pieces to present
			them as more than just abstract pieces of art, but as someone's work. I wanted the artist's
			voice to be present and used her handwriting as the typeface throughout the book. For the
			cover, I used an intaglio print Perrin gave me.
		</p>
		<div class="gallery full">
			<div>
				<ImageLoader
					src={`https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/v1646433255/Dani/works%20in%20intaglio/DSC_0007_afq1oa.jpg`}
					alt="works in intaglio book pages"
				/>
			</div>
			<div>
				<ImageLoader
					src={`https://res.cloudinary.com/blitva/image/upload/v1646433254/Dani/works%20in%20intaglio/DSC_0009_nlosze.jpg`}
					alt="works in intaglio book pages"
				/>
			</div>
			<div>
				<ImageLoader
					src={`https://res.cloudinary.com/blitva/image/upload/v1646433254/Dani/works%20in%20intaglio/DSC_0037_lx366j.jpg`}
					alt="works in intaglio book pages"
				/>
			</div>

			<div>
				<ImageLoader
					src={`https://res.cloudinary.com/blitva/image/upload/v1646433253/Dani/works%20in%20intaglio/DSC_0048_qmgvht.jpg`}
					alt="works in intaglio book pages"
				/>
			</div>
			<div>
				<ImageLoader
					src={`https://res.cloudinary.com/blitva/image/upload/v1646433252/Dani/works%20in%20intaglio/DSC_0002_ic64kz.jpg`}
					alt="works in intaglio book pages"
				/>
			</div>
			<div>
				<ImageLoader
					src={`https://res.cloudinary.com/blitva/image/upload/v1646433252/Dani/works%20in%20intaglio/DSC_0057-2_ouyrbs.jpg`}
					alt="works in intaglio book pages"
				/>
			</div>
		</div>
	</div>
{:else}
	<div style="min-height: 100vh" />
{/if}

<style>
	.gallery > div {
		padding-bottom: 3rem;
		/* max-height: 100vh; */
	}
</style>

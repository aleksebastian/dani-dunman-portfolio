<script>
	import { onMount } from 'svelte';
	import { currentPage } from '../store';
	import { logo } from '../projectData.json';

	// import FaArrowLeft from 'svelte-icons/fa/FaArrowLeft.svelte';
	// import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';
	import ImageLoader from '../components/image/ImageLoader.svelte';
	import ProjectHero from '../components/ProjectHero.svelte';

	let heroLoaded = false;
	// let Carousel;
	// let carousel;
	onMount(async () => {
		// const module = await import('svelte-carousel');
		// Carousel = module.default;

		currentPage.set(logo.route);

		const heroImg = new Image();
		heroImg.src = logo.heroSrc;
		heroImg.onload = () => {
			heroLoaded = true;
		};
	});

	function rand(min, max) {
		let randomNum = Math.random() * (max - min) + min;
		return Math.round(randomNum);
	}

	// const handleNextClick = () => carousel.goToNext();
	// const handlePrevClick = () => carousel.goToPrev();
</script>

<svelte:head>
	<title>{logo.name}</title>
</svelte:head>

{#if heroLoaded}
	<div class="grid">
		<ProjectHero project={logo} />
		<div class="subgrid content py-lg">
			<ImageLoader
				class="img-container"
				src={`https://picsum.photos/seed/${rand(0, 200)}/300`}
				alt="dani"
			/>
			<ImageLoader
				class="img-container"
				src={`https://picsum.photos/seed/${rand(0, 200)}/300`}
				alt="dani"
			/>
			<ImageLoader
				class="img-container"
				src={`https://picsum.photos/seed/${rand(0, 200)}/300`}
				alt="dani"
			/>
			<ImageLoader
				class="img-container"
				src={`https://picsum.photos/seed/${rand(0, 200)}/300`}
				alt="dani"
			/>
			<ImageLoader
				class="img-container"
				src={`https://picsum.photos/seed/${rand(0, 200)}/300`}
				alt="dani"
			/>
			<ImageLoader
				class="img-container"
				src={`https://picsum.photos/seed/${rand(0, 200)}/300`}
				alt="dani"
			/>
			<ImageLoader
				class="img-container"
				src={`https://picsum.photos/seed/${rand(0, 200)}/300`}
				alt="dani"
			/>
			<ImageLoader
				class="img-container"
				src={`https://picsum.photos/seed/${rand(0, 200)}/300`}
				alt="dani"
			/>
			<ImageLoader
				class="img-container"
				src={`https://picsum.photos/seed/${rand(0, 200)}/300`}
				alt="dani"
			/>
			<ImageLoader
				class="img-container"
				src={`https://picsum.photos/seed/${rand(0, 200)}/300`}
				alt="dani"
			/>
			<ImageLoader
				class="img-container"
				src={`https://picsum.photos/seed/${rand(0, 200)}/300`}
				alt="dani"
			/>
			<ImageLoader
				class="img-container"
				src={`https://picsum.photos/seed/${rand(0, 200)}/300`}
				alt="dani"
			/>
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
		/* justify-items: center; */
	}

	@media (min-width: 640px) {
	}
</style>

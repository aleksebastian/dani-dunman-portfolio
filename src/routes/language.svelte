<script>
	import { onMount } from 'svelte';
	import { currentPage } from '../store';
	import { language } from '../projectData.json';

	import FaArrowLeft from 'svelte-icons/fa/FaArrowLeft.svelte';
	import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';
	import ImageLoader from '../components/image/ImageLoader.svelte';
	import ProjectHero from '../components/ProjectHero.svelte';

	let heroLoaded = false;
	let Carousel;
	let carousel;
	onMount(async () => {
		const module = await import('svelte-carousel');
		Carousel = module.default;

		currentPage.set(language.route);

		const heroImg = new Image();
		heroImg.src = language.heroSrc;
		heroImg.onload = () => {
			heroLoaded = true;
		};
	});

	function rand(min, max) {
		let randomNum = Math.random() * (max - min) + min;
		return Math.round(randomNum);
	}

	const handleNextClick = () => carousel.goToNext();
	const handlePrevClick = () => carousel.goToPrev();
</script>

<svelte:head>
	<title>{language.name}</title>
</svelte:head>

{#if heroLoaded}
	<div class="grid">
		<ProjectHero project={language} />
		<p class="custom py-lg">
			For this project, I made an exhibition catalog for an exhibit that I created and curated based
			on the theme of alternative currencies. My goal was to document what went into the exhibition
			and expand the viewers' understanding of the topic. The alternative currency I chose was
			language. I included Alice J Lee's DesignInquiry residency project about language because it
			focussed on colloquial language and slang as a form of social currency. I also included an
			interview with Alice and three other essays about language as currency.
		</p>
		<div class="full carousel-container">
			<div class="carousel">
				<svelte:component
					this={Carousel}
					bind:this={carousel}
					arrows={true}
					swiping={true}
					pauseOnFocus={true}
					autoplay={true}
					duration={750}
					autoplayDuration={5000}
					autoplayProgressVisible={true}
					let:showPrevPage
					let:showNextPage
				>
					<img
						class="carousel-img"
						src={`https://picsum.photos/seed/${rand(0, 200)}/1980/985`}
						alt="dani"
					/>

					<img
						class="carousel-img"
						src={`https://picsum.photos/seed/${rand(0, 200)}/1980/985`}
						alt="dani"
					/>

					<img
						class="carousel-img"
						src={`https://picsum.photos/seed/${rand(0, 200)}/1980/985`}
						alt="dani"
					/>
					<div class="arrows left-arrow" slot="prev" on:click={handlePrevClick}>
						<FaArrowLeft />
					</div>
					<div class="arrows right-arrow" slot="next" on:click={handleNextClick}>
						<FaArrowRight />
					</div>
				</svelte:component>
			</div>
		</div>

		<div class="gallery full py-md">
			<div>
				<ImageLoader src={`https://picsum.photos/seed/${rand(0, 200)}/1980/850`} alt="dani" />
			</div>
			<div>
				<ImageLoader src={`https://picsum.photos/seed/${rand(0, 200)}/1980/850`} alt="dani" />
			</div>
			<div>
				<ImageLoader src={`https://picsum.photos/seed/${rand(0, 200)}/1980/850`} alt="dani" />
			</div>
			<div>
				<ImageLoader src={`https://picsum.photos/seed/${rand(0, 200)}/1980/850`} alt="dani" />
			</div>
			<div>
				<ImageLoader src={`https://picsum.photos/seed/${rand(0, 200)}/1980/850`} alt="dani" />
			</div>
		</div>
	</div>
{:else}
	<div style="min-height: 100vh" />
{/if}

<style>
	.carousel > div {
		position: relative;
	}

	.carousel-img {
		max-height: 85vh;
	}

	.gallery > div {
		padding-bottom: 3rem;
		max-height: 100vh;
	}

	.carousel-container {
		display: flex;
		align-items: center;
	}

	.carousel {
		width: 100%;
	}

	.custom {
		grid-column: 2 / 12;
	}

	.arrows {
		display: none;
	}

	@media (min-width: 640px) {
		.custom {
			grid-column: 2 / 9;
		}

		.arrows {
			display: flex;
			align-items: center;
			width: 50px;
			height: 50px;
			min-height: 100%;
			cursor: pointer;
		}

		.left-arrow {
			position: absolute;
			top: 50%;
			padding-left: 1rem;
			transform: translate(0%, -50%);
			z-index: 1;
			color: white;
		}

		.right-arrow {
			position: absolute;
			top: 50%;
			left: 100%;
			padding-right: 1rem;
			transform: translate(-100%, -50%);
			z-index: 1;
			color: white;
		}
	}
</style>

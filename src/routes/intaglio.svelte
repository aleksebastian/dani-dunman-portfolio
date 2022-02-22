<script>
	import { onMount } from 'svelte';
	import { currentPage } from '../store';
	import { intaglio } from '../projectData.json';

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

		currentPage.set(intaglio.route);

		const heroImg = new Image();
		heroImg.src = intaglio.heroSrc;
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

{#if heroLoaded}
	<div class="grid">
		<ProjectHero project={intaglio} />
		<p class="custom py-lg">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
			been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
			galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text
			of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
			text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
			make a type specimen book.
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
		<p class="custom py-lg">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
			been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
			galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text
			of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
			text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
			make a type specimen book.
		</p>
		<div class="gallery full">
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
			/* background: linear-gradient(to right, gray, rgba(90, 0, 0, 0)); */
		}

		.left-arrow {
			position: absolute;
			top: 50%;
			padding-left: 1rem;
			transform: translate(0%, -50%);
			z-index: 1;
			color: white;
			/* background: linear-gradient(to right, black, rgba(90, 0, 0, 0)); */
		}

		.right-arrow {
			position: absolute;
			top: 50%;
			left: 100%;
			padding-right: 1rem;
			transform: translate(-100%, -50%);
			z-index: 1;
			color: white;
			/* background: linear-gradient(to left, gray, rgba(90, 0, 0, 0)); */
		}
	}
</style>

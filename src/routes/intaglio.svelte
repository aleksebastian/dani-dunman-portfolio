<script>
	import FaArrowLeft from 'svelte-icons/fa/FaArrowLeft.svelte';
	import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';

	import ImageLoader from '../components/image/ImageLoader.svelte';

	import ProjectHero from '../components/ProjectHero.svelte';
	import { currentPage } from '../store';

	import { onMount } from 'svelte';

	// const heroSrc = 'https://via.placeholder.com/1980x695?text=+';
	const hero = {
		imgSrc: 'https://via.placeholder.com/1980x695?text=+',
		header: 'Works in Intaglio',
		subheader: 'Publication'
	};
	let heroLoaded = false;
	let Carousel; // for saving Carousel component class
	let carousel; // for calling methods of the carousel instance
	onMount(async () => {
		const module = await import('svelte-carousel');
		Carousel = module.default;
		currentPage.set('intaglio');
		const heroImg = new Image();
		heroImg.src = hero.imgSrc;
		heroImg.onload = () => {
			heroLoaded = true;
		};
	});

	function rand(min, max) {
		let randomNum = Math.random() * (max - min) + min;
		return Math.round(randomNum);
	}

	const handleNextClick = () => {
		carousel.goToNext();
	};

	const handlePrevClick = () => {
		carousel.goToPrev();
	};
</script>

<div class="grid">
	{#if heroLoaded}
		<ProjectHero {hero} />
		<p class="custom py-lg">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
			been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
			galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text
			of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
			text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
			make a type specimen book.
		</p>
		<div class="full carousel-container">
			<div class=" carousel">
				<svelte:component this={Carousel} bind:this={carousel} arrows={false} swiping={true}>
					<img src={`https://picsum.photos/seed/${rand(0, 200)}/1980/695`} alt="dani" />

					<img src={`https://picsum.photos/seed/${rand(0, 200)}/1980/695`} alt="dani" />

					<img src={`https://picsum.photos/seed/${rand(0, 200)}/1980/695`} alt="dani" />
				</svelte:component>
			</div>
			<div class="arrows">
				<div class="icon" on:click={handlePrevClick}>
					<FaArrowLeft />
				</div>
				<div class="icon" on:click={handleNextClick}>
					<FaArrowRight />
				</div>
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
	{:else}
		<div style="min-height: 100vh" />
	{/if}
</div>

<style>
	.gallery > div {
		padding-bottom: 3rem;
	}
	.carousel-container {
		display: flex;
		align-items: center;
	}

	.carousel {
		width: 100%;
	}
	.arrows {
		z-index: 1;
		width: 100%;
		margin-left: -100%;
		display: flex;
		justify-content: space-between;
		padding: 0 2rem;
	}
	.custom {
		grid-column: 2 / 9;
	}
	.icon {
		width: 42px;
		height: 42px;
		cursor: pointer;
	}
</style>

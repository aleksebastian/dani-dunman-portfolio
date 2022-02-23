<script>
	import { onMount } from 'svelte';
	import { currentPage } from '../store';
	import { intaglio } from '../projectData.json';

	import FaArrowLeft from 'svelte-icons/io/IoIosArrowBack.svelte';
	import FaArrowRight from 'svelte-icons/io/IoIosArrowForward.svelte';
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

	let isHovering = false;

	const handleHover = () => {
		isHovering = !isHovering;
	};
</script>

<svelte:head>
	<title>{intaglio.name}</title>
</svelte:head>

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
		<div class="full carousel-container" on:mouseenter={handleHover} on:mouseleave={handleHover}>
			<div class="carousel">
				<svelte:component
					this={Carousel}
					bind:this={carousel}
					arrows={true}
					swiping={true}
					pauseOnFocus={true}
					autoplay={true}
					duration={400}
					autoplayDuration={5000}
					autoplayProgressVisible={true}
					let:showPrevPage
					let:showNextPage
				>
					<img
						class="carousel-img"
						src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/v1645400457/Dani/works%20in%20intaglio/WII-1_bamp5b.jpg"
						alt="dani"
					/>

					<img
						class="carousel-img"
						src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/v1645400458/Dani/works%20in%20intaglio/WII-2_nogig0.jpg"
						alt="dani"
					/>

					<img
						class="carousel-img"
						src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/v1645400458/Dani/works%20in%20intaglio/WII-3_xv6wyr.jpg"
						alt="dani"
					/>

					<img
						class="carousel-img"
						src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/v1645400456/Dani/works%20in%20intaglio/WII-4_dh5ytw.jpg"
						alt="dani"
					/>

					<img
						class="carousel-img"
						src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/v1645400457/Dani/works%20in%20intaglio/WII-5_x0rrht.jpg"
						alt="dani"
					/>

					<img
						class="carousel-img"
						src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/v1645400455/Dani/works%20in%20intaglio/WII-6_k5srp9.jpg"
						alt="dani"
					/>

					<img
						class="carousel-img"
						src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/v1645400455/Dani/works%20in%20intaglio/WII-7_otwv6h.jpg"
						alt="dani"
					/>

					<img
						class="carousel-img"
						src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/v1645400450/Dani/works%20in%20intaglio/WII-8_ymy7ys.jpg"
						alt="dani"
					/>

					<img
						class="carousel-img"
						src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/v1645400452/Dani/works%20in%20intaglio/WII-9_gpntyd.jpg"
						alt="dani"
					/>

					<img
						class="carousel-img"
						src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/v1645400452/Dani/works%20in%20intaglio/WII-10_anviri.jpg"
						alt="dani"
					/>

					<img
						class="carousel-img"
						src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/v1645400454/Dani/works%20in%20intaglio/WII-11_i1yqbr.jpg"
						alt="dani"
					/>

					<img
						class="carousel-img"
						src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/v1645400451/Dani/works%20in%20intaglio/WII-12_h0zutp.jpg"
						alt="dani"
					/>

					<div
						style="opacity: {isHovering ? '1' : '0'}"
						class="arrows left-arrow"
						slot="prev"
						on:click={handlePrevClick}
					>
						<FaArrowLeft />
					</div>
					<div
						style="opacity: {isHovering ? '1' : '0'}"
						class="arrows right-arrow"
						slot="next"
						on:click={handleNextClick}
					>
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
		/* max-height: 85vh; */
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
			transition-property: opacity;
			transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			transition-duration: 150ms;
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

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
		<p class="full-text-wide py-lg">
			This book is about the printmaking method of intaglio, specifically final prints, and how
			different each can be. The images used are of prints done by Elvia Perrin. The secondary
			images are zoomed-in, smaller sections of the print's patterns, textures, or parts that
			summarize each piece. I also used images of supplies found around the studio and process work
			from Perrin as background accents.
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
					autoplayDuration={4000}
					autoplayProgressVisible={true}
					let:showPrevPage
					let:showNextPage
				>
					<div
						style="opacity: {isHovering ? '1' : '0'}"
						class="custom-arrow custom-arrow-prev"
						slot="prev"
						on:click={handlePrevClick}
					>
						<FaArrowLeft />
					</div>

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
						class="custom-arrow custom-arrow-next"
						slot="next"
						on:click={handleNextClick}
					>
						<FaArrowRight />
					</div>
				</svelte:component>
			</div>
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
	.carousel-container {
		display: flex;
		align-items: center;
	}

	.carousel {
		width: 100%;
	}

	.carousel > div {
		position: relative;
	}

	.gallery > div {
		padding-bottom: 3rem;
		max-height: 100vh;
	}

	.custom-arrow {
		display: none;
	}

	@media (min-width: 640px) {
		.custom-arrow-prev {
			left: 0;
			padding-left: 0.5rem;
		}

		.custom-arrow-next {
			right: 0;
			padding-right: 0.5rem;
		}

		.custom-arrow {
			min-width: 3rem;
			width: 20px;
			color: white;
			position: absolute;
			top: 0;
			bottom: 0;
			z-index: 1;
			transition: opacity 150ms ease;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			-webkit-tap-highlight-color: transparent;
		}
	}
</style>

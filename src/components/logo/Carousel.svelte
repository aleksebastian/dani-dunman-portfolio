<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { Navigation, Pagination, Keyboard } from 'swiper';

	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';
	import 'swiper/css/effect-fade';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';

	export let carouselImgSrcs;
	let firstImgLoaded = false;
	onMount(() => {
		const firstImg = new Image();
		firstImg.src = carouselImgSrcs[0];
		firstImg.onload = () => {
			firstImgLoaded = true;
		};
	});

	let isHovering = false;
	const toggleNav = () => {
		console.log('hello');
		isHovering = !isHovering;
	};
</script>

{#if firstImgLoaded}
	<div class="carousel" in:fade={{ duration: 1200 }}>
		<Swiper
			modules={[Keyboard, Navigation, Pagination]}
			slidesPerView={1}
			pagination={{ clickable: true }}
			navigation={true}
			loop={true}
			keyboard={{
				enabled: true
			}}
			spaceBetween={30}
		>
			{#each carouselImgSrcs as carouselImgSrc}
				<SwiperSlide><img src={carouselImgSrc} alt="project" /></SwiperSlide>
			{/each}
		</Swiper>
	</div>
{/if}

<style>
	img {
		padding: 1.5rem;
		z-index: -1;
	}
	:root {
		--swiper-navigation-color: transparent;
		--swiper-theme-color: black !important;
		--swiper-navigation-size: 1.5rem !important;
	}

	@media (min-width: 768px) {
		.carousel:hover {
			--swiper-navigation-color: black;
		}
	}
</style>

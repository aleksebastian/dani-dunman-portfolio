<script>
	import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper';

	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { EffectFade } from 'swiper';

	// Import Swiper styles
	import 'swiper/css';
	import 'swiper/css/effect-fade';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';

	import { intaglio } from '../projectData.json';

	import { fade } from 'svelte/transition';

	export let carouselImgSrcs;

	let innerWidth;
</script>

<div in:fade>
	<Swiper
		modules={[EffectFade, Autoplay, Keyboard, Navigation, Pagination]}
		effect="fade"
		slidesPerView={1}
		pagination={{ clickable: true }}
		navigation={true}
		loop={true}
		autoplay={{
			delay: 2500,
			disableOnInteraction: true
		}}
		keyboard={{
			enabled: true
		}}
	>
		{#each carouselImgSrcs as carouselImgSrc}
			<SwiperSlide><img src={carouselImgSrc} alt="dani" /></SwiperSlide>
		{/each}
	</Swiper>
</div>

<style>
	:root {
		--swiper-navigation-color: transparent;
		--swiper-theme-color: white;
	}

	@media (min-width: 768px) {
		:root {
			--swiper-navigation-color: white;
		}
	}
</style>

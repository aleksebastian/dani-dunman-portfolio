<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper';

	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { EffectFade } from 'swiper';

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
</script>

{#if firstImgLoaded}
	<div in:fade={{ duration: 1200 }}>
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
{/if}

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

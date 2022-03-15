<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';
	import 'swiper/css/pagination';
	import 'swiper/css/navigation';

	// import required modules
	import { Pagination, Navigation } from 'swiper';
</script>

<Swiper
	pagination={{
		type: 'bullets'
	}}
	navigation={true}
	modules={[Pagination, Navigation]}
	loop={true}
	keyboard={{
		enabled: true
	}}
	class="mySwiper"
>
	<SwiperSlide
		><div class="slide">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		</div></SwiperSlide
	>
	<SwiperSlide
		><div class="slide">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		</div></SwiperSlide
	>
	<SwiperSlide
		><div class="slide">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		</div></SwiperSlide
	>
	<SwiperSlide
		><div class="slide">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		</div></SwiperSlide
	>
</Swiper>

<style>
	:root {
		/* --swiper-navigation-color: transparent; */
		--swiper-theme-color: black;
		--swiper-navigation-size: 1rem;
	}

	.slide {
		height: 10rem;
		text-align: center;
		line-height: 10rem;
	}
</style>

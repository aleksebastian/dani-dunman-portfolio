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
		><div class="slide first">
			<p>
				Is there anything that you want to learn or would be willing to learn about in reguards to
				money, banking, finance, etc.
			</p>
		</div></SwiperSlide
	>
	<SwiperSlide
		><div class="slide second">
			<p>More accessible/unbiased info about investing and loans would be awesome</p>
			<p>How to invest money in stocks or in an investment account</p>
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
		text-align: center;
		padding: 0 2rem;
		margin: 3rem 0;
		font-size: 0.75rem;
		display: flex;
		align-items: center;
		height: 7rem;
	}

	.first {
		display: flex;
		align-items: center;
	}

	.second {
		display: flex;
		/* flex-direction: column; */
		gap: 1rem;
		flex-basis: 50%;
	}

	.third {
		display: flex;
		justify-content: space-around;
		/* flex-direction: column; */
		gap: 1rem;
		align-items: center;
	}

	.third > div {
		display: flex;
		flex-direction: column;
		/* align-items: flex-start; */
		gap: 1rem;
		font-size: 0.75rem;
		flex-basis: 50%;
	}

	.third > div > p {
		/* height: 1.8rem; */
	}

	.fourth {
		/* align-items: center; */
	}

	.fourth > div {
		flex-basis: 50%;
	}

	.percentage {
		font-size: 1.8rem;
	}

	.med {
		font-size: 1rem;
	}
</style>

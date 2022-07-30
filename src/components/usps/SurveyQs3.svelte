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
			<div>
				<p class="percentage">87.5%</p>
				<p>
					of participants answered that they would be willing to open an account that has "special
					terms and conditions" that they could eventually be ungraded from to a normal account in a
					year or less if they had been denied multiple times at different banks.
				</p>
			</div>
		</div></SwiperSlide
	>

	<SwiperSlide
		><div class="slide third">
			<div>
				<p class="med">However</p>
			</div>
		</div></SwiperSlide
	>

	<SwiperSlide
		><div class="slide">
			<div>
				<p class="percentage">28.5%</p>
				<p>
					of participants answered that they would not be willing to open that same account if they
					had to complete a series of educational tasks that were designed for financial education,
					even if they would eventually be upraded to a normal account.
				</p>
			</div>
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

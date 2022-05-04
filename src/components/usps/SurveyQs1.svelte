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
			<p>
				What are some of your painpoints in banking? Any frustrations? Anything you wish you knew
				when you were younger?
			</p>
		</div></SwiperSlide
	>
	<SwiperSlide
		><div class="slide second">
			<p>
				“How you sometimes have to wait day for them to clear a check depending on when you drop it
				off”
			</p>
			<p>“Start saving, don’t buy unnecessary things and don’t spend your money on others”</p>
		</div></SwiperSlide
	>
	<SwiperSlide
		><div class="slide third">
			<div>
				<p>“Over draft fees are so dumb!”</p>
				<p>“100% eating out”</p>
			</div>
			<div>
				<p>“Saving!”</p>
				<p>“The fact that most checking accounts cost”</p>
			</div>
		</div></SwiperSlide
	>
	<SwiperSlide
		><div class="slide fourth">
			<div>
				<p>
					“I work in retail-- When somthing I dont need is on sale I get it anyways because it’s
					cheap”
				</p>
			</div>
			<div>
				<p>“Buying people random gifts”</p>
				<p>“Social life”</p>
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
		margin: 3rem 0.25rem;
		font-size: 0.75rem;
		height: 7rem;
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
		height: 1.8rem;
	}

	.fourth {
		display: flex;
		align-items: center;
	}

	.fourth > div {
		flex-basis: 50%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>

<script>
	import SurveyQsCarousel from './SurveyQsCarousel.svelte';
</script>

<SurveyQsCarousel>
	<swiper-slide class="swiper-slide">
		<div>
			<p>What are some of your painpoints in banking?</p>
			<p>Any frustrations?</p>
			<p>Anything you wish you knew when you were younger?</p>
		</div>
	</swiper-slide>

	<swiper-slide class="swiper-slide">
		<p>
			“How you sometimes have to wait day for them to clear a check depending on when you drop it
			off”
		</p>
		<p>“Start saving, don’t buy unnecessary things and don’t spend your money on others”</p>
	</swiper-slide>

	<swiper-slide class="swiper-slide">
		<div>
			<p>“Over draft fees are so dumb!”</p>
			<p>“100% eating out”</p>
		</div>
		<div>
			<p>“Saving!”</p>
			<p>“The fact that most checking accounts cost”</p>
		</div>
	</swiper-slide>

	<swiper-slide class="swiper-slide">
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
	</swiper-slide>
</SurveyQsCarousel>

<style lang="scss">
	:global(.surveyQs-swiper-container) {
		.swiper-slide {
			padding: 1rem 2rem;
			margin: 2rem 0.25rem;
			font-size: 0.75rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		> :nth-child(1) {
			display: flex;
			flex-direction: column;
		}

		> :nth-child(2) {
			display: flex;
			gap: 1rem;
		}

		> :nth-child(3) {
			display: flex;
			justify-content: space-around;
			gap: 1rem;
		}

		> :nth-child(3) > div {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			font-size: 0.75rem;
			flex-basis: 50%;
		}

		> :nth-child(3) > div > p {
			height: 1.8rem;
		}

		> :nth-child(4) {
			display: flex;
			align-items: center;
			gap: 1rem;
		}

		> :nth-child(4) > div {
			flex-basis: 50%;
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}
</style>

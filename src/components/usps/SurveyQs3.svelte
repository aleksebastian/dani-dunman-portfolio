<script>
	import SurveyQsCarousel from './SurveyQsCarousel.svelte';
</script>

<SurveyQsCarousel>
	<swiper-slide class="swiper-slide">
		<p class="percentage">87.5%</p>
		<p>
			of participants answered that they would be willing to open an account that has "special terms
			and conditions" that they could eventually be upgraded from to a normal account in a year or
			less if they had been denied multiple times at different banks.
		</p>
	</swiper-slide>

	<swiper-slide class="swiper-slide">
		<p class="med">However</p>
	</swiper-slide>

	<swiper-slide class="swiper-slide">
		<p class="percentage">28.5%</p>
		<p>
			of participants answered that they would not be willing to open that same account if they had
			to complete a series of educational tasks that were designed for financial education, even if
			they would eventually be upraded to a normal account.
		</p>
	</swiper-slide>
</SurveyQsCarousel>

<style lang="scss">
	:global(.surveyQs-swiper-container) {
		.swiper-slide {
			padding: 1rem 2rem;
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
			line-height: 150px;
		}

		> :nth-child(3) {
			display: flex;
			flex-direction: column;
		}
	}

	.percentage {
		font-size: 1.8rem;
	}

	.med {
		font-size: 1rem;
	}
</style>

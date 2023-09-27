<script>
	import SurveyQsCarousel from './SurveyQsCarousel.svelte';
</script>

<SurveyQsCarousel>
	<swiper-slide class="swiper-slide">
		<p>
			Is there anything that you want to learn or would be willing to learn about in reguards to
			money, banking, finance, etc.
		</p>
	</swiper-slide>
	<swiper-slide class="swiper-slide">
		<p>More accessible/unbiased info about investing and loans would be awesome</p>
		<p>How to invest money in stocks or in an investment account</p>
	</swiper-slide>
</SurveyQsCarousel>

<style>
	.swiper-slide {
		text-align: center;
		padding: 0 2rem;
		margin: 3rem 0;
		font-size: 0.75rem;
		display: flex;
		align-items: center;
		height: 7rem;
	}
</style>

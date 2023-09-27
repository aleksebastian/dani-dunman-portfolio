<swiper-container
	navigation={true}
	pagination={true}
	pagination-clickable={true}
	rewind={true}
	class="surveyQs-swiper-container"
>
	<slot />
</swiper-container>

<style lang="scss">
	:global(.surveyQs-swiper-container) {
		&::part(button-next),
		&::part(button-prev) {
			width: 10px;
		}

		--swiper-navigation-color: transparent;

		&:hover {
			--swiper-navigation-color: black;
		}
	}
</style>

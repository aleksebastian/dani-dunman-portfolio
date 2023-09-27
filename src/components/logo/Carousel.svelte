<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

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
	<div class="carousel" in:fade={{ duration: 1200 }}>
		<swiper-container
			navigation={true}
			pagination={true}
			pagination-clickable={true}
			space-between={30}
			effect="fade"
			fadeEffect={{ crossFade: true }}
			rewind={true}
			class="logos-swiper-container"
		>
			{#each carouselImgSrcs as carouselImgSrc}
				<swiper-slide class="swiper-slide"><img src={carouselImgSrc} alt="project" /></swiper-slide>
			{/each}
		</swiper-container>
	</div>
{/if}

<style lang="scss">
	.carousel {
		:global(.logos-swiper-container) {
			&::part(button-next),
			&::part(button-prev) {
				width: 15px;
			}
		}

		img {
			padding: 2.5rem;
			z-index: -1;
		}
	}

	@media (min-width: 768px) {
		.carousel:hover {
			--swiper-navigation-color: black;
		}

		.carousel {
			--swiper-navigation-color: transparent;
		}
	}
</style>

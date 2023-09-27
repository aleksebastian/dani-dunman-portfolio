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
	<div in:fade={{ duration: 1200 }}>
		<swiper-container
			effect="fade"
			slidesPerView={1}
			pagination={{ clickable: true }}
			navigation={true}
			rewind={true}
			autoplay={{
				delay: 2500,
				disableOnInteraction: true
			}}
			keyboard={{
				enabled: true
			}}
		>
			{#each carouselImgSrcs as carouselImgSrc}
				<swiper-slide><img src={carouselImgSrc} alt="dani" /></swiper-slide>
			{/each}
		</swiper-container>
	</div>
{/if}

<style>
	:root {
		--swiper-navigation-color: transparent;
		--swiper-theme-color: white;
	}

	swiper-container::part(bullet-active) {
		background-color: white;
	}

	@media (min-width: 768px) {
		:root {
			--swiper-navigation-color: white;
		}
	}
</style>

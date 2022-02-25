<script>
	import ImageLoader from './image/ImageLoader.svelte';

	const imgSrcs = [
		'https://res.cloudinary.com/blitva/image/upload/c_scale,w_1100/f_auto/q_auto/r_60/v1645728893/Dani/bluedoor/gallery%20/BlueDoor1_regnzf.jpg',
		'https://res.cloudinary.com/blitva/image/upload/c_scale,w_1100/f_auto/q_auto/r_60/v1645728894/Dani/bluedoor/gallery%20/BlueDoor2_kuhjme.jpg',
		'https://res.cloudinary.com/blitva/image/upload/c_scale,w_1100/f_auto/q_auto/r_60/v1645728894/Dani/bluedoor/gallery%20/BlueDoor3_goe1rq.jpg',
		'https://res.cloudinary.com/blitva/image/upload/c_scale,w_1100/f_auto/q_auto/r_60/v1645728895/Dani/bluedoor/gallery%20/BlueDoor4_hrhy98.jpg',
		'https://res.cloudinary.com/blitva/image/upload/c_scale,w_1100/f_auto/q_auto/r_60/v1645728895/Dani/bluedoor/gallery%20/BlueDoor6_u43xdf.jpg',
		'https://res.cloudinary.com/blitva/image/upload/c_scale,w_1100/f_auto/q_auto/r_60/v1645728895/Dani/bluedoor/gallery%20/BlueDoor5_xnak1c.jpg'
	];

	function rand(min, max) {
		let randomNum = Math.random() * (max - min) + min;
		return Math.round(randomNum);
	}
</script>

<div id="work" class="gallery full">
	<div class="photos">
		{#each imgSrcs as imgSrc}
			<div>
				<ImageLoader src={imgSrc} alt="dani" />
			</div>
		{/each}
	</div>
</div>

<style>
	.gallery {
		display: grid;
		grid-column-gap: 1rem;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		padding: 3rem 0;
		min-height: 100vh;
		background-color: var(--background-color);
	}

	/* .full {
		grid-column: 1 / -1;
	} */

	.photos {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media (min-width: 768px) {
		.gallery {
			display: grid;
			grid-column-gap: 1rem;
			grid-template-columns: repeat(12, minmax(0, 1fr));
			/* padding: 3rem 0; */
			min-height: 100vh;
			background-color: var(--background-color);
		}

		/* .full {
			grid-column: 1 / -1;
		} */

		.photos {
			grid-column: 2 / 12;
			/* grid-column: 1 / -1; */
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			/* grid-template-columns: repeat(2, minmax(350px, 1fr)); */
			/* gap: 3rem; */
			justify-content: center;
			place-items: center;
		}
	}
</style>

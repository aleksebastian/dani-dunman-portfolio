<script>
	import ImageLoader from './image/ImageLoader.svelte';

	function rand(min, max) {
		let randomNum = Math.random() * (max - min) + min;
		return Math.round(randomNum);
	}
</script>

<div id="work" class="gallery full">
	<div class="photos">
		<div>
			<ImageLoader src={`https://picsum.photos/seed/${rand(0, 200)}/800/550`} alt="dani" />
		</div>
		<div>
			<ImageLoader src={`https://picsum.photos/seed/${rand(0, 200)}/800/550`} alt="dani" />
		</div>
		<div>
			<ImageLoader src={`https://picsum.photos/seed/${rand(0, 200)}/800/550`} alt="dani" />
		</div>
		<div>
			<ImageLoader src={`https://picsum.photos/seed/${rand(0, 200)}/800/550`} alt="dani" />
		</div>
		<div>
			<ImageLoader src={`https://picsum.photos/seed/${rand(0, 200)}/800/550`} alt="dani" />
		</div>
		<div>
			<ImageLoader src={`https://picsum.photos/seed/${rand(0, 200)}/800/550`} alt="dani" />
		</div>
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
		/* justify-items: center; */
	}

	.full {
		grid-column: 1 / -1;
	}

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

		.full {
			grid-column: 1 / -1;
		}

		.photos {
			grid-column: 3 / 11;
			/* grid-column: 1 / -1; */
			display: grid;
			grid-template-columns: repeat(2, minmax(350px, 1fr));
			gap: 3rem;
			justify-content: center;
			place-items: center;
		}
	}
</style>

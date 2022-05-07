<script>
	import ImageLoader from './image/ImageLoader.svelte';
	export let gallerySrcs;
</script>

<div id="work" class="gallery full">
	<div class="photos">
		{#each gallerySrcs as imgSrc}
			<div>
				<ImageLoader src={imgSrc} alt="project cover" />
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
			min-height: 100vh;
			background-color: var(--background-color);
		}

		.photos {
			grid-column: 2 / 12;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			justify-content: center;
			place-items: center;
		}
	}
</style>

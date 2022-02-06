<script>
	import ProjectCard from './ProjectCard.svelte';

	const projects = ['USPS', 'Bluedoor', 'Works', 'Radio', 'Language', 'Logo'];
</script>

<div id="work" class="gallery">
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</div>

<style>
	.gallery {
		display: grid;
		grid-gap: 3rem;
		grid-template-columns: repeat(auto-fit, minmax(20.5rem, 1fr));
		padding: 3rem 0;
		min-height: 100vh;
	}

	@media (min-width: 640px) {
		.gallery {
			display: grid;
			grid-gap: 3rem;
			grid-template-columns: repeat(auto-fit, minmax(26.5rem, 1fr));
			padding: 3rem 0;
		}
	}
</style>

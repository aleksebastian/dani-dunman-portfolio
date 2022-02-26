<script>
	import ProjectCard from './ProjectCard.svelte';
	import projects from '../projectData.json';
	const parsedProjects = Object.values(projects);
</script>

<div id="work" class="gallery">
	{#each parsedProjects as project}
		<ProjectCard {project} />
	{/each}
</div>

<style>
	.gallery {
		display: grid;
		grid-gap: 3rem;
		place-items: center;
		padding: 3rem 0;
		min-height: 100vh;
	}

	@media (min-width: 1024px) {
		.gallery {
			display: grid;
			grid-gap: 3rem;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			padding: 3rem 0;
		}
	}
</style>

<script>
	import ProjectCard from './ProjectCard.svelte';
	import projects from '../projectData.json';
	const parsedProjects = Object.values(projects);

	export let galleryEle;
</script>

<div id="work" class="gallery" bind:this={galleryEle}>
	{#each parsedProjects as project}
		<div>
			<ProjectCard {project} />
			<p class="type">{project.name}</p>
			<p class="type">{project.type}</p>
		</div>
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
		.type {
			display: none;
		}
		.gallery {
			display: grid;
			grid-gap: 3rem;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			padding: 3rem 0;
		}
	}

	@media (min-width: 1024px) {
		.type {
			display: none;
		}
		.gallery {
			display: grid;
			grid-gap: 3rem;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			padding: 3rem 0;
		}
	}

	@media (min-width: 1536px) {
		.gallery {
			place-items: unset;
		}
	}
</style>

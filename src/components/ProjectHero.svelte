<script>
	import { fade } from 'svelte/transition';
	export let project;
	console.log(project.name);
</script>

<div in:fade class="hero full">
	<img src={project.heroSrc} alt="project" style="object-position: {project.heroPosition};" />
	<!-- <div class="text">
		<p class="project-name">{project.name}</p>
		<p class="subheader">{project.type}</p>
	</div> -->
</div>
{#if project.name === 'Radio Museum Exhibit'}
	<div class="full" style="height: 3rem; background-color: var(--accent-color);">
		<p style="text-align: center; line-height: 3rem;">
			Parts of project research are still being added to this page. Meanwhile, feel free to checkout
			the deliverables.
		</p>
	</div>
{/if}

<div class="text content">
	<p class="project-name">{project.name}</p>
	<p class="subheader">{project.type}</p>
</div>

<style>
	.hero {
		object-fit: cover;
	}

	img {
		display: block;
		object-fit: cover;
		max-height: calc(100vh - 16.7rem);
		min-width: 100vw;
	}

	.text {
		padding-top: 2rem;
	}

	.project-name {
		font-size: var(--label-size);
		font-weight: 600;
	}

	.subheader {
		margin-left: 0.2rem;
		font-size: var(--body-size);
	}

	@media (min-width: 768px) {
		img {
			height: calc(100vh - 14rem);
		}

		.project-name {
			font-size: var(--header-size);
			font-weight: 500;
		}

		.subheader {
			font-size: var(--label-size);
			margin-top: -0.75rem;
			margin-left: 0.35rem;
		}
	}
</style>

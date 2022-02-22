<script>
	import { fade } from 'svelte/transition';

	export let project;
</script>

<!-- <div class="grid"> -->
<div in:fade class="hero full">
	<img src={project.heroSrc} alt="project" />
	<div class="text">
		<p class="project-name">{project.name}</p>
		<p class="subheader">{project.type}</p>
	</div>
</div>

<!-- </div> -->
<style>
	/* GRID RULE AND GRID ELEMENT SHOULD BE REMOVED */
	/* .grid {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		grid-column-gap: 1rem;
	} */

	img {
		display: block;
	}

	.text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}

	.hero {
		position: relative;
		display: inline-block;
	}

	.project-name {
		font-size: var(--label-size);
		font-weight: 600;
	}

	.subheader {
		margin-top: -0.25rem;
		font-size: var(--body-size);
	}

	@media (min-width: 768px) {
		.project-name {
			font-size: var(--header-size);
			font-weight: 500;
		}

		.subheader {
			font-size: var(--label-size);
		}
	}
</style>

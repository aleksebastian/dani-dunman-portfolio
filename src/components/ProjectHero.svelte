<script>
	import { fade } from 'svelte/transition';
	export let project;
</script>

<div in:fade class="hero full">
	<img src={project.heroSrc} alt="project" />
	<div class="text">
		<p class="project-name">{project.name}</p>
		<p class="subheader">{project.type}</p>
	</div>
</div>

<style>
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

<script>
	export let project;

	function rand(min, max) {
		let randomNum = Math.random() * (max - min) + min;
		return Math.round(randomNum);
	}

	import ImageLoader from './image/ImageLoader.svelte';
</script>

<a href={`/${project.toLowerCase()}`} class="project">
	<div class="project-image">
		<ImageLoader src={`https://picsum.photos/seed/${rand(0, 200)}/700/450`} alt="dani" />
	</div>
	<p class="project-name">{project}</p>
</a>

<style>
	.project {
		position: relative;
		width: 100%;
		height: auto;
		color: white;
		cursor: pointer;
		z-index: 1;
		display: flex;
		justify-content: center;
	}

	.project::after {
		position: absolute;
		opacity: 0;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgb(211, 166, 21);
		-webkit-transition: all 150ms;
		transition: all 150ms;
		will-change: opacity;
	}

	.project:hover::after {
		opacity: 0.3;
		-webkit-transition: all 150ms;
		transition: all 150ms;
	}

	.project-name {
		font-size: var(--label-size);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
	}

	@media (min-width: 768px) {
		.project-name {
			font-size: var(--callout-size);
		}
		.project {
			max-width: 100%;
		}
	}

	@media (min-width: 1536px) {
		.project {
			max-width: 80%;
		}
	}
</style>

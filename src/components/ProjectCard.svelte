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
	/* screens: {
			MOBILE LANDSCAPE
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
			TABLET PORTRAIT
      'md': '768px',
      // => @media (min-width: 768px) { ... }
			TABLET LANDSCAPE
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
			MACBOOK
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
			MONITOR
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    } */

	.project {
		position: relative;
		width: 100%;
		height: auto;
		color: white;
		cursor: pointer;
		z-index: 1;
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
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 2;
		}
	}
</style>

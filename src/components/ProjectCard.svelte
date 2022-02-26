<script>
	import ImageLoader from './image/ImageLoader.svelte';
	export let project;
</script>

<a href={project.route} class="project">
	<div class="project-image">
		<ImageLoader
			src={`https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/v1645400448/Dani/works%20in%20intaglio/Works_In_Intaglio_mockup_jcxwnm.jpg`}
			alt="dani"
		/>
	</div>
	<p class="project-name">{project.name}</p>
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
		/* background-color: blue; */
		width: 100%;
		text-align: center;
		padding: 0 10%;
		line-height: 1.25;
	}

	@media (min-width: 768px) {
		.project-name {
			font-size: var(--callout-size);
		}
		.project {
			max-width: 100%;
		}
	}
</style>

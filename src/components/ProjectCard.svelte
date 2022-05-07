<script>
	export let project;

	let isTextShowing = false;
	const showText = () => (isTextShowing = !isTextShowing);
</script>

<a href={project.route} class="project" on:mouseenter={showText} on:mouseleave={showText}>
	<div class="project-image">
		<img src={project.cardSrc} alt="project cover" />
	</div>
	<div class="project-text">
		{#if isTextShowing}
			<p class="project-name">{project.name}</p>
			<p>{project.type}</p>
		{/if}
	</div>
</a>

<style>
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.project-image {
		aspect-ratio: 3 / 2;
	}

	.project {
		position: relative;
		width: 100%;
		height: 100%;
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
		opacity: 0.4;
		-webkit-transition: all 150ms;
		transition: all 150ms;
	}

	.project-text {
		font-size: var(--label-size);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
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

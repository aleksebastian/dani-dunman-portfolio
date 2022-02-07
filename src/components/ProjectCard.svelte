<script>
	export let project;

	import IntersectionObserver from './IntersectionObserver.svelte';
</script>

<!-- 'sm': '640px',
// => @media (min-width: 640px) { ... }

'md': '768px',
// => @media (min-width: 768px) { ... }

'lg': '1024px',
// => @media (min-width: 1024px) { ... }

'xl': '1280px',
// => @media (min-width: 1280px) { ... }

'2xl': '1536px',
// => @media (min-width: 1536px) { ... } -->

<a href={`/${project.toLowerCase()}`} class="project">
	<IntersectionObserver once={true} let:intersecting>
		{#if intersecting}
			<img class="project-image" src="https://picsum.photos/800/550" alt="dani" />
			<p class="project-name">{project}</p>
		{/if}
	</IntersectionObserver>
</a>

<style>
	.project {
		position: relative;
		width: 100%;
		color: white;
		cursor: pointer;
		transition-property: all;
		transition-duration: 250ms;
		background-color: var(--accent-color);
		z-index: 1;
	}

	.project-image {
		transition-property: all;
		transition-duration: 250ms;
	}

	.project:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 50%;
		height: 100%;
		background: var(--accent-color);
	}

	.project-image:hover {
		-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
		filter: grayscale(100%);
	}

	.project-name {
		font-size: var(--callout-size);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	/* .placeholder {
		min-height: 100vh;
	} */
</style>

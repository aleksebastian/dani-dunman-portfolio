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
	}

	.project:hover::after {
		opacity: 0.3;
		-webkit-transition: all 150ms;
		transition: all 150ms;
	}

	.project-name {
		font-size: var(--callout-size);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
	}

	/* .placeholder {
		min-height: 100vh;
	} */
</style>

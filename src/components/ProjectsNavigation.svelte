<script>
	import FaArrowLeft from 'svelte-icons/io/IoIosArrowBack.svelte';
	import FaArrowRight from 'svelte-icons/io/IoIosArrowForward.svelte';
	import projectData from '../projectData.json';
	import { page } from '$app/stores';

	const routes = Object.values(projectData).map((project) => project.route);
	const getPageIndex = (route) => routes.indexOf(route);
	const getPrevProjectRoute = (currentRoute) => routes[getPageIndex(currentRoute) - 1];
	const getNextProjectRoute = (currentRoute) => routes[getPageIndex(currentRoute) + 1];
</script>

<div class="container">
	<a
		class="project-nav"
		href={getPrevProjectRoute($page.url.pathname)}
		style="visibility: {getPageIndex($page.url.pathname) <= 0 ? 'hidden' : 'visible'}"
	>
		<div class="icon">
			<FaArrowLeft />
		</div>
		<div class="icon">
			<FaArrowLeft />
		</div>
		<span>Previous Project</span>
	</a>

	<a
		class="project-nav"
		href={getNextProjectRoute($page.url.pathname)}
		style="visibility: {getPageIndex($page.url.pathname) >= routes.length - 1
			? 'hidden'
			: 'visible'}"
	>
		<span>Next Project</span>
		<div class="icon">
			<FaArrowRight />
		</div>
		<div class="icon">
			<FaArrowRight />
		</div>
	</a>
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 1rem 2rem;
		font-size: 1rem;
	}

	.container > a {
		display: flex;
		cursor: pointer;
		color: var(--accent-color);
	}

	.container > a > span {
		padding: 0 0.4rem;
	}

	.project-nav {
		display: flex;
		align-items: center;
	}

	.icon {
		width: 12px;
		margin: 0 -3px;
	}
</style>

<script>
	import FaArrowLeft from 'svelte-icons/io/IoIosArrowBack.svelte';
	import FaArrowRight from 'svelte-icons/io/IoIosArrowForward.svelte';
	import projectData from '../projectData.json';
	import { currentPage } from '../store';

	const projectRoutes = Object.values(projectData).map((project) => project.route);
	let prevProjectRoute;
	let nextProjectRoute;

	const setPrevAndNextProjectRoutes = () => {
		for (let i = 0; i < projectRoutes.length; i++) {
			if ($currentPage === projectRoutes[i]) {
				if (projectRoutes[i - 1]) {
					prevProjectRoute = projectRoutes[i - 1];
				} else {
					prevProjectRoute = null;
				}
				if (projectRoutes[i + 1]) {
					nextProjectRoute = projectRoutes[i + 1];
				} else {
					nextProjectRoute = null;
				}
				break;
			}
		}
	};

	$: $currentPage, setPrevAndNextProjectRoutes();
</script>

<div class="container">
	<a href={prevProjectRoute} style="visibility: {prevProjectRoute ? 'visible' : 'hidden'}">
		<div class="icon">
			<FaArrowLeft />
		</div>
		<div class="icon">
			<FaArrowLeft />
		</div>
		<span>Previous Project</span>
	</a>

	<a href={nextProjectRoute} style="visibility: {nextProjectRoute ? 'visible' : 'hidden'}">
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

	.icon {
		width: 12px;
		height: 12px;
		margin: 0 -3px;
	}
</style>

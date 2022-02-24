<script>
	import FaArrowLeft from 'svelte-icons/io/IoIosArrowBack.svelte';
	import FaArrowRight from 'svelte-icons/io/IoIosArrowForward.svelte';
	import projectData from '../projectData.json';
	import { currentPage } from '../store';

	const projects = Object.keys(projectData);

	let prevProject;
	let nextProject;

	const setPrevAndNextProjects = () => {
		for (let i = 0; i < projects.length; i++) {
			if ($currentPage === `/${projects[i]}`) {
				if (projects[i - 1]) {
					prevProject = projectData[projects[i - 1]].route;
				} else {
					prevProject = null;
				}
				if (projects[i + 1]) {
					nextProject = projectData[projects[i + 1]].route;
				} else {
					nextProject = null;
				}
				break;
			}
		}
	};

	$: $currentPage, setPrevAndNextProjects();
</script>

<div class="container">
	<a href={prevProject} style="visibility: {prevProject ? 'visible' : 'hidden'}">
		<div class="icon">
			<FaArrowLeft />
		</div>
		<div class="icon">
			<FaArrowLeft />
		</div>
		<span>Previous Project</span>
	</a>

	<a href={nextProject} style="visibility: {nextProject ? 'visible' : 'hidden'}">
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

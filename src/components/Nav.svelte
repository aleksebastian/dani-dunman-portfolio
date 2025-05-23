<script>
	import { onMount } from 'svelte';
	import { isMobileNavOpen$ } from '../store';
	import projectData from '../projectData.json';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const projects = Object.values(projectData);
	const id = 'work';
	const defaultYOffset = -70;
	let element;
	let pageBody;

	let mounted = false;
	onMount(() => {
		element = document.getElementById(id);
		pageBody = document.body;
		mounted = true;
	});

	const handleClick = () => {
		dispatch('click');
	};

	let boxShadow = 'none';
	let y;
	$: if (y > 1) {
		boxShadow = 'rgba(0, 0, 0, 0.08) 0px 1px 12px';
	} else {
		boxShadow = 'none';
	}

	$: isMobileNavOpenLocal = false;
	$: isMobileNavOpenLocal, toggleMobileNav();

	const toggleLocalNavState = () => {
		isMobileNavOpenLocal = !isMobileNavOpenLocal;
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			toggleLocalNavState();
		}
	};

	const toggleMobileNav = () => {
		isMobileNavOpen$.set(isMobileNavOpenLocal);
		if (pageBody) {
			if (!isMobileNavOpenLocal) {
				pageBody.style.overflow = null;
			} else {
				pageBody.style.overflow = 'hidden';
			}
		}
	};
</script>

<nav class="nav" style="box-shadow: {boxShadow}">
	<a style="opacity: {isMobileNavOpenLocal ? '0' : '1'}" href="/">Daniela Dunman</a>
	<!-- MOBILE NAV -->
	<div class="ham">
		<input type="checkbox" bind:checked={isMobileNavOpenLocal} />
		<span></span>
		<span></span>
		<span></span>
		<ul id="menu" style="transform: {!isMobileNavOpenLocal ? 'translate(100%, 0)' : 'none'}">
			<div class="actions">
				<button type="button" on:click={toggleLocalNavState} on:keydown={handleKeyDown}>
					<a href="/"> Home </a>
				</button>
				<button type="button" on:click={toggleLocalNavState} on:keydown={handleKeyDown}>
					<a href="/about"> About </a>
				</button>
			</div>
			<div class="projects">
				{#each projects as project}
					<button type="button" on:click={toggleLocalNavState} on:keydown={handleKeyDown}>
						<a href={project.route}>{project.name}</a>
					</button>
				{/each}
			</div>
		</ul>
	</div>

	<div class="nav-links">
		<a href="/?scroll=true">Work</a>
		<a href="/about">About</a>
	</div>
</nav>

<style>
	.projects {
		padding-top: 3rem;
		padding-bottom: 3rem;
		text-align: center;
	}

	/* REMOVED .actions li, .projects li */

	#menu {
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 101vw;
		min-height: 100vh;
		margin: 20px 0 0 -84vw;
		padding: 90px 0 50px 0;
		list-style-type: none;
		-webkit-font-smoothing: antialiased;
		transform-origin: 0% 0%;
		transform: translate(100%, 0);
		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
		background-color: rgba(255, 255, 255, 0.95);
	}

	/* REMOVED #menu li */

	.ham input:checked ~ ul {
		transform: none;
	}

	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 4rem;
		padding: 0 2rem;
		font-size: 1.2rem;
		background-color: rgba(255, 255, 255, 0.95);
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 10;
		transition-property: all;
		transition-duration: 250ms;
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
	}

	.nav a {
		transition: all;
		transition-duration: 400ms;
	}

	.nav-links {
		display: none;
	}

	.ham {
		display: block;
		position: relative;
		z-index: 1000;
		-webkit-user-select: none;
		user-select: none;
	}

	.ham input {
		display: block;
		width: 2.2rem;
		height: 1.8rem;
		position: absolute;
		top: -7px;
		left: -5px;
		cursor: pointer;
		opacity: 0;
		z-index: 2;
		-webkit-touch-callout: none;
	}

	.ham span {
		display: block;
		position: relative;
		z-index: 1;
		width: 32px;
		height: 3px;
		margin-bottom: 5px;
		background: #d3a615;
		border-radius: 1px;
		transform-origin: 4px 0px;
		transition:
			transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			opacity 0.55s ease;
	}

	.ham span:first-child {
		transform-origin: 0% 0%;
	}

	.ham span:nth-last-child(2) {
		transform-origin: 0% 100%;
	}

	.ham span:nth-last-child(3) {
		transform-origin: 100% 0%;
	}

	.ham input:checked ~ span {
		opacity: 1;
		transform: rotate(45deg) translate(-2px, 0px);
		background: #d3a615;
	}

	.ham input:checked ~ span:nth-last-child(3) {
		opacity: 0;
		transform: rotate(0deg) scale(0.2, 0.2);
	}

	.ham input:checked ~ span:nth-last-child(2) {
		transform: rotate(-45deg) translate(-2px, 0px);
	}

	a {
		color: #d3a615;
	}

	.nav-links a {
		color: #d3a615;
	}

	/* MOBILE LANDSCAPE */
	@media (min-width: 640px) {
		.ham {
			display: none;
		}

		.nav {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 4rem;
			padding: 0 3rem;
			font-size: 1.2rem;
		}

		.nav-links {
			display: flex;
			gap: 2rem;
		}

		a {
			color: #d3a615;
		}

		.nav-links a {
			color: #d3a615;
		}
	}

	/* SMALL TABLET */
	@media (min-width: 768px) {
		.nav {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 4rem;
			padding: 0 3rem;
			font-size: 1.2rem;
		}

		.nav-links {
			display: flex;
			gap: 2rem;
		}

		a {
			color: #d3a615;
		}

		.nav-links a {
			color: #d3a615;
		}
	}

	/* LANDSCAPE TABLET */
	@media (min-width: 1024px) {
		.nav {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 4rem;
			padding: 0 3rem;
			font-size: 1.2rem;
		}

		.nav-links {
			display: flex;
			gap: 2rem;
		}

		a {
			color: #d3a615;
		}

		.nav-links a {
			color: #d3a615;
		}
	}

	/* Add styles for the new button elements to mimic the old li elements */
	.actions button,
	.projects button {
		background: none;
		border: none;
		padding: 0.1rem;
		margin: 0;
		font-size: 1.8rem; /* Copied from #menu li */
		font-weight: 600; /* Copied from #menu li */
		color: #d3a615; /* Copied from a */
		cursor: pointer;
		width: 100%;
		text-align: center;
	}

	.actions button a,
	.projects button a {
		color: inherit; /* Ensure link color is inherited from button */
		text-decoration: none;
	}

	/* MACBOOK */
	@media (min-width: 1280px) {
		.nav {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 4rem;
			padding: 0 3rem;
			font-size: 1.2rem;
		}

		.nav-links {
			display: flex;
			gap: 2rem;
		}

		a {
			color: #d3a615;
		}

		.nav-links a {
			color: #d3a615;
		}
	}

	/* MONITOR */
	@media (min-width: 1536px) {
		.nav {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 5rem;
			padding: 0 3rem;
			font-size: 1.4rem;
		}

		.nav-links {
			display: flex;
			gap: 2rem;
		}

		a {
			color: #d3a615;
		}

		.nav-links a {
			color: #d3a615;
		}
	}
</style>

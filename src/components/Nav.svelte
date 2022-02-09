<script>
	import { onMount } from 'svelte';
	import smoothscroll from 'smoothscroll-polyfill';
	import { yOffSet } from '../store';

	const id = 'work';
	const yOffset = -70;
	let element;

	onMount(() => {
		smoothscroll.polyfill();
		element = document.getElementById(id);
		if (element) {
			yOffSet.set(element.getBoundingClientRect().top + window.pageYOffset + yOffset);
		}
	});

	const handleClick = () => {
		setTimeout(() => {
			window.scrollTo({ top: $yOffSet, behavior: 'smooth' });
		}, 100);
	};

	let boxShadow = 'none';
	let y;
	$: if (y > 1) {
		boxShadow = 'rgba(0, 0, 0, 0.08) 0px 1px 12px';
	} else {
		boxShadow = 'none';
	}
</script>

<svelte:window bind:scrollY={y} />

<nav class="nav" style={`box-shadow: ${boxShadow}`}>
	<a href="/">Daniela Dunman</a>
	<div class="nav-links">
		<a href="/" on:click={handleClick}>Work</a>
		<a href="/">About</a>
	</div>
</nav>

<style>
	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 4rem;
		padding: 0 3rem;
		font-size: 1.2rem;
		overflow: hidden;
		background-color: rgba(255, 255, 255, 0.97);
		position: fixed; /* Set the navbar to fixed position */
		top: 0; /* Position the navbar at the top of the page */
		width: 100%; /* Full width */
		z-index: 10;
		transition-property: all;
		transition-duration: 250ms;
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
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

	/* MOBILE LANDSCAPE */
	@media (min-width: 640px) {
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

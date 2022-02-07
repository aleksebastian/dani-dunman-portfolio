<script>
	import { onMount } from 'svelte';
	import smoothscroll from 'smoothscroll-polyfill';

	const id = 'work';
	const yOffset = -70;
	let element;
	let yOffSet;

	onMount(() => {
		smoothscroll.polyfill();
		element = document.getElementById(id);
		yOffSet = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
	});

	const handleClick = () => {
		// document.getElementById('work').scrollIntoView({ behavior: 'smooth', block: 'start' });
		// document.getElementById('work').scrollTop -= 100;

		// const id = 'work';
		// const yOffset = -70;
		// const element = document.getElementById(id);
		// const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

		window.scrollTo({ top: yOffSet, behavior: 'smooth' });
	};

	let boxShadow = 'none';
	let backgroundColor = 'white';
	let y;
	$: if (y > 1) {
		// backgroundColor = '--background-color';
		boxShadow = 'rgba(0, 0, 0, 0.08) 0px 1px 12px';
	} else {
		// backgroundColor = 'white';
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

<script>
	import { onMount } from 'svelte';
	import smoothscroll from 'smoothscroll-polyfill';

	onMount(() => {
		smoothscroll.polyfill();
	});

	const handleClick = () => {
		document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
	};
</script>

<nav class="nav">
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

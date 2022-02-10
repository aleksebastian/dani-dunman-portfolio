<script>
	import { onMount } from 'svelte';
	import smoothscroll from 'smoothscroll-polyfill';
	import { yOffSet, isMobileNavOpen } from '../store';

	import FaEnvelopeSquare from 'svelte-icons/fa/FaEnvelopeSquare.svelte';

	const id = 'work';
	const yOffset = -70;
	let element;
	let win;

	onMount(() => {
		smoothscroll.polyfill();
		element = document.getElementById(id);
		if (element) {
			yOffSet.set(element.getBoundingClientRect().top + window.pageYOffset + yOffset);
		}
		win = document.body;
		console.log(win);
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

	$: isMobileNavOpenLocal = false;
	$: isMobileNavOpenLocal, toggleMobileNav();

	const toggleMobileNav = () => {
		isMobileNavOpen.set(isMobileNavOpenLocal);
		if (win) {
			if (!isMobileNavOpenLocal) {
				win.style.overflow = null;
			} else {
				win.style.overflow = 'hidden';
			}
		}
	};
</script>

<svelte:window bind:scrollY={y} />

<nav class="nav" style={`box-shadow: ${boxShadow}`}>
	<a href="/">Daniela Dunman</a>
	<!-- MOBILE NAV -->
	<div class="ham">
		<input type="checkbox" bind:checked={isMobileNavOpenLocal} />
		<span />
		<span />
		<span />
		<ul id="menu" style="transform: {!isMobileNavOpenLocal ? 'translate(100%, 0)' : 'none'}">
			<li>
				<a href="/">Projects</a>
			</li>
			<li>
				<a href="/resume"> Resume </a>
			</li>
			<li>
				<a href="/contact"> Contact </a>
			</li>
			<li class="flex gap-10 mt-10">
				<a
					aria-label="Link to linkedin"
					href="https://linkedin.com/in/alek-ortiz/"
					rel="noopener"
					target="_blank"
					class="w-12 h-12"
				>
					<FaEnvelopeSquare />
				</a>
				<a
					aria-label="Link to github"
					href="https://github.com/aleksebastian"
					rel="noopener"
					target="_blank"
					class="w-12 h-12"
				>
					<FaEnvelopeSquare />
				</a>
				<a
					aria-label="Link to email"
					href="mailto:aleksebastian@outlook.com"
					rel="noopener"
					target="_blank"
					class="w-12 h-12"
				>
					<FaEnvelopeSquare />
				</a>
			</li>
		</ul>
	</div>

	<div class="nav-links">
		<a href="/" on:click={handleClick}>Work</a>
		<a href="/about">About</a>
	</div>
</nav>

<style>
	#menu {
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
		height: 100vh;
		margin: 1rem 0 0 -83vw;
		padding: 50px;
		padding-top: 125px;
		list-style-type: none;
		-webkit-font-smoothing: antialiased;
		transform-origin: 0% 0%;
		transform: translate(100%, 0);
		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
		background-color: rgba(255, 255, 255, 0.9);
	}

	#menu li {
		padding: 15px 0;
		font-size: 22px;
	}

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
		/* overflow: hidden; */
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

	.nav-links {
		display: none;
		/* display: flex;
		gap: 2rem; */
	}

	.flex {
		display: flex;
		gap: 4rem;
		margin-top: 4rem;
	}

	.w-12 {
		width: 3rem;
		height: 3rem;
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
		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
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

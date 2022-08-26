<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { currentPage } from '../../store';

	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaPinterestSquare from 'svelte-icons/fa/FaPinterestSquare.svelte';

	const imgSrc =
		'https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/v1645321739/Dani/About/dani_mxgsyl.png';

	let imgLoaded = false;
	onMount(() => {
		currentPage.set('/about');
		const img = new Image();
		img.src = imgSrc;
		img.onload = () => {
			imgLoaded = true;
		};
	});
</script>

<svelte:head>
	<title>About | Daniela Dunman</title>
</svelte:head>

{#if imgLoaded}
	<div transition:fade={{ duration: 150 }} class="container">
		<div class="img-container">
			<img
				alt="portrait"
				src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/v1645321739/Dani/About/dani_mxgsyl.png"
			/>
		</div>
		<div class="right">
			<div class="text">
				<p class="header">Olá! E aí, tudo bem?</p>
				<p>
					My name is Daniela, but everyone calls me Dani. I’m an Austinite and recent Texas State
					University graduate with a BFA in Communication Design. I’m a Ux Designer, Researcher, and
					Problem-Solver. What I love most in design is creating things and experiences that make a
					difference in someone’s day.
				</p>
				<p>
					Growing up, I spent every summer visiting family in Brazil, getting to immerse myself in
					another culture, practicing and perfecting my Portuguese, and eating great food. When I’m
					not in the studio, you’ll find me watching a movie, reading, cooking, or watching Spanish
					telenovelas to “practice my Español”!
				</p>
				<div class="contact">
					<div class="row">
						<a href="Daniela Dunman resume.pdf" rel="noopener" target="_blank">
							<p>Resume</p>
						</a>
						<a href="Daniela Dunman e-resume.pdf" rel="noopener" target="_blank">
							<p>E-resume</p>
						</a>
					</div>
					<a href="mailto:danieladunman.design@gmail.com" class="email"
						>danieladunman.design@gmail.com</a
					>
					<div class="icons">
						<a
							href="https://www.instagram.com/danidunmanart/?hl=en"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram />
						</a>
						<a
							href="https://www.linkedin.com/in/daniela-dunman/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin />
						</a>
						<a
							href="https://www.pinterest.com/danidunman/_saved/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaPinterestSquare />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div style="min-height: 100vh" />
{/if}

<style>
	.email {
		color: black;
	}

	.row p,
	.email {
		cursor: pointer;
		color: black;
	}

	.row p:hover,
	.email:hover {
		color: var(--accent-color);
	}

	.contact {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		padding: 1rem 0;
	}
	.row {
		display: flex;
		gap: 3rem;
	}

	.header {
		font-size: var(--label-size);
	}

	.container {
		display: flex;
		gap: 3rem;
		padding: 2rem;
		flex-wrap: wrap;
	}

	img {
		max-width: 100%;
		height: auto;
		transform: rotate(-2deg);
		max-height: calc(100vh - 11rem);
	}

	.img-container {
		justify-self: center;
	}

	@media (min-width: 768px) {
		.container {
			padding: 3.5rem;
		}
		img {
			max-height: calc(100vh - 11rem);
		}
		.img-container {
			flex-basis: 30%;
		}

		.right {
			flex-basis: 50%;
		}
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.icons {
		display: flex;
		gap: 2rem;
	}

	.icons > a {
		width: 32px;
		height: 32px;
		cursor: pointer;
		color: var(--accent-color);
	}
</style>

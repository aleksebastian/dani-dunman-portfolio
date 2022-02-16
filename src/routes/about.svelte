<script>
	import { fade } from 'svelte/transition';

	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaPinterestSquare from 'svelte-icons/fa/FaPinterestSquare.svelte';
</script>

<div transition:fade={{ duration: 150 }} class="container">
	<div class="img-container">
		<img
			alt="portrait"
			src="https://freight.cargo.site/w/800/q/75/i/3e3ad5f598fcba7a6e849c8dabb36d3babcabce1c682818d8d34b878c7412986/Screen-Shot-2021-10-07-at-11.31.44-AM.png"
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
					<p>Resume</p>
					<p>E-Resume</p>
				</div>
				<a href="mailto:danieladunman@gmail.com" class="email">danieladunman@gmail.com</a>
				<div class="icons">
					<div class="icon">
						<FaInstagram />
					</div>
					<div class="icon">
						<FaLinkedin />
					</div>
					<div class="icon">
						<FaPinterestSquare />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.email {
		color: black;
	}

	.row p,
	.email,
	.icon {
		cursor: pointer;
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
		/* padding: 3rem; */
	}

	.container {
		display: flex;
		gap: 3rem;
		padding: 3.5rem;
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
		color: var(--accent-color);
	}

	.icon {
		width: 32px;
		height: 32px;
	}
</style>

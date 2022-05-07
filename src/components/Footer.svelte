<script>
	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaPinterestSquare from 'svelte-icons/fa/FaPinterestSquare.svelte';

	import { onMount } from 'svelte';

	const setGif = (gifId, hoveringState) => {
		gifId = `gif-${currPlayingGif}`;
		let imgId = `footer-text-${currPlayingGif}`;
		const imgToAnimate = document.getElementById(gifId);
		// const textToAnimate = document.getElementById(imgId);

		if (gifId === 'gif-1') {
			if (hoveringState) {
				// textToAnimate.classList.add('shake-lr');
				imgToAnimate.src =
					'https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/v1643897805/Dani/Footer/hippo_animation_loop_qnan1e.gif';
			} else {
				imgToAnimate.src =
					'https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/pg_1/v1643897805/Dani/Footer/hippo_animation_loop_qnan1e.gif';
				// textToAnimate.classList.remove('shake-lr');
				// textToAnimate.style.animation = 'none';
				// textToAnimate.offsetHeight;
			}
		}
		if (gifId === 'gif-2') {
			if (hoveringState) {
				// textToAnimate.classList.add('shake-lr');
				imgToAnimate.src =
					'https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/v1643897805/Dani/Footer/pizza-loop_ed5rvh.gif';
			} else {
				imgToAnimate.src =
					'https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/pg_1/v1643897805/Dani/Footer/pizza-loop_ed5rvh.gif';
				// textToAnimate.classList.remove('shake-lr');
				// textToAnimate.style.animation = 'none';
				// textToAnimate.offsetHeight;
			}
		}
		if (gifId === 'gif-3') {
			if (hoveringState) {
				// textToAnimate.classList.add('shake-lr');
				imgToAnimate.src =
					'https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/v1643897805/Dani/Footer/coffee_animation_ejkykd.gif';
			} else {
				imgToAnimate.src =
					'https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/pg_1/v1643897805/Dani/Footer/coffee_animation_ejkykd.gif';
				// textToAnimate.classList.remove('shake-lr');
				// textToAnimate.style.animation = 'none';
				// textToAnimate.offsetHeight;
			}
		}
		if (gifId === 'gif-4') {
			if (hoveringState) {
				// textToAnimate.classList.add('shake-lr');
				imgToAnimate.src =
					'https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/v1643897805/Dani/Footer/acai-animtion-loop_xguomg.gif';
			} else {
				imgToAnimate.src =
					'https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/pg_1/v1643897805/Dani/Footer/acai-animtion-loop_xguomg.gif';
				// textToAnimate.classList.remove('shake-lr');
				// textToAnimate.style.animation = 'none';
				// textToAnimate.offsetHeight;
			}
		}
	};

	const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

	let currPlayingGif;
	let counter = 10;
	let interval;
	const playGif = function () {
		if (interval) {
			clearTimeout(interval);
		}
		let nextGifToPlay = getRandomInt(1, 4);
		while (nextGifToPlay === currPlayingGif) {
			nextGifToPlay = getRandomInt(1, 4);
		}
		setGif(currPlayingGif, false);
		currPlayingGif = nextGifToPlay;
		setGif(currPlayingGif, true);
		counter = getRandomInt(3300, 3400);
		interval = setTimeout(playGif, counter);
	};

	let target;
	let observer;
	onMount(() => {
		target = document.querySelector('.footer');

		observer = new IntersectionObserver((entry) => {
			let footerElement = entry[0];
			if (footerElement.isIntersecting) {
				setTimeout(playGif, counter);
			} else {
				clearTimeout(interval);
			}
		});

		observer.observe(target);

		return () => clearTimeout(interval);
	});
</script>

<div class="footer">
	<div class="gifs-container">
		<div class="gif-container">
			<div id="footer-gif-1" class="footer-gif">
				<img
					id="gif-1"
					src="https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/pg_1/v1643897805/Dani/Footer/hippo_animation_loop_qnan1e.gif"
					alt="hippo"
				/>
			</div>
			<p id="footer-text-1">Hippos are cool</p>
		</div>
		<div class="gif-container">
			<div id="footer-gif-2" class="footer-gif">
				<img
					id="gif-2"
					src="https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/pg_1/v1643897805/Dani/Footer/pizza-loop_ed5rvh.gif"
					alt="pizza"
				/>
			</div>
			<p id="footer-text-2">Pineapple goes on pizza</p>
		</div>
		<div class="gif-container">
			<div id="footer-gif-3" class="footer-gif">
				<img
					id="gif-3"
					src="https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/pg_1/v1643897805/Dani/Footer/coffee_animation_ejkykd.gif"
					alt="coffee cup"
				/>
			</div>
			<p id="footer-text-3">I take my coffee black</p>
		</div>
		<div class="gif-container">
			<div id="footer-gif-4" class="footer-gif">
				<img
					id="gif-4"
					src="https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/pg_1/v1643897805/Dani/Footer/acai-animtion-loop_xguomg.gif"
					alt="açaí bowl"
				/>
			</div>
			<p id="footer-text-4">It’s açaí (ah-sah-ee) Not acai (uh-kai)</p>
		</div>
	</div>
	<div class="right-footer">
		<div class="info">
			<a href="mailto:danieladunman@gmail.com">danieladunman@gmail.com</a>
			<a href="/about">More interesting facts</a>
		</div>
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

<p class="copyright">Copyright © 2021 Daniela Dunman. All Rights Reserved.</p>

<style>
	#footer-text-1 {
		width: 8ch;
	}

	#footer-text-2 {
		width: 13ch;
	}

	#footer-text-3 {
		width: 10ch;
	}

	#footer-gif-3 {
		margin-left: 0.3rem;
	}

	.right-footer > div > a:hover {
		color: var(--accent-color);
	}

	.info {
		display: flex;
		gap: 1rem;
		padding: 1rem;
		font-size: 0.9rem;
	}

	.info a {
		color: black;
	}

	.gifs-container {
		display: flex;
		gap: 0.5rem;
		padding: 0 1rem;
		justify-content: space-around;
	}

	.footer {
		display: flex;
		flex-direction: column;
		padding: 3rem 0;
		border-top: 12px solid #d3a615;
		color: black;
	}

	.icons {
		display: flex;
		gap: 2rem;
	}

	.icons > a {
		width: 32px;
		height: 32px;
		cursor: pointer;
		color: black;
	}

	.gif-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 6rem;
		text-align: center;
		font-size: 0.6rem;
	}

	.footer-gif {
		max-width: 3rem;
		height: auto;
	}

	.copyright {
		color: black;
		text-align: center;
		padding: 0 1rem 1rem 1rem;
		font-size: 0.8rem;
	}

	.right-footer {
		display: flex;
		flex-direction: column;
		padding-top: 2rem;
		align-items: center;
		gap: 1.8rem;
	}

	@media (min-width: 640px) {
		.gif-container {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			max-width: 10rem;
			text-align: center;
			gap: 1rem;
			font-size: 1rem;
		}

		.footer-gif {
			max-width: 4rem;
			height: auto;
		}

		.right-footer {
			align-items: flex-end;
			justify-content: center;
			padding-top: 0rem;
		}

		.info {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-end;
			gap: 1rem;
			padding: 0;
			font-size: 1rem;
		}

		.gifs-container {
			align-items: flex-start;
			flex-grow: 1;
		}

		.footer {
			display: flex;
			flex-direction: row;
			gap: 3rem;
			padding: 3rem;
			border-top: 12px solid #d3a615;
			color: black;
		}
	}
</style>

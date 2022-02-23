<script>
	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaPinterestSquare from 'svelte-icons/fa/FaPinterestSquare.svelte';

	import ImageLoader from './image/ImageLoader.svelte';

	import { onMount } from 'svelte';

	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
	}

	let currBouncingGif;

	// const randomBounce = () => {
	// 	let nextBouncingGifNum = getRandomIntInclusive(1, 4);
	// 	let nextBouncingGif = document.getElementById(`footer-gif-${nextBouncingGifNum}`);
	// 	nextBouncingGif.classList.add('bounce');
	// };

	let counter = 10;
	let isHovering = false;
	const setBounceAndCounter = function () {
		let next = getRandomIntInclusive(1, 4);
		while (next === currBouncingGif) {
			next = getRandomIntInclusive(1, 4);
		}
		currBouncingGif = next;
		counter = getRandomIntInclusive(1500, 2500);
		if (!isHovering) {
			setTimeout(setBounceAndCounter, counter);
		}
	};

	// setTimeout(setBounceAndCounter, counter);

	const handleMouseEnter = (gifId) => {
		isHovering = true;
		let imgToAnimate = document.getElementById(gifId);
		if (gifId === 'gif-1') {
			imgToAnimate.src =
				'https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/e_loop:1/v1643897805/Dani/Footer/hippo_animation_loop_qnan1e.gif';
		}
		if (gifId === 'gif-2') {
			imgToAnimate.src =
				'https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/e_loop:1/v1643897805/Dani/Footer/pizza-loop_ed5rvh.gif';
		}
		if (gifId === 'gif-3') {
			imgToAnimate.src =
				'https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/e_loop:1/v1643897805/Dani/Footer/coffee_animation_ejkykd.gif';
		}
		if (gifId === 'gif-4') {
			imgToAnimate.src =
				'https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/e_loop:1/v1643897805/Dani/Footer/acai-animtion-loop_xguomg.gif';
		}
	};

	const handleMouseLeave = (gifId) => {
		isHovering = false;
		let imgToAnimate = document.getElementById(gifId);
		if (gifId === 'gif-1') {
			imgToAnimate.src =
				'https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/pg_1/v1643897805/Dani/Footer/hippo_animation_loop_qnan1e.gif';
		}
		if (gifId === 'gif-2') {
			imgToAnimate.src =
				'https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/pg_1/v1643897805/Dani/Footer/pizza-loop_ed5rvh.gif';
		}
		if (gifId === 'gif-3') {
			imgToAnimate.src =
				'https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/pg_1/v1643897805/Dani/Footer/coffee_animation_ejkykd.gif';
		}
		if (gifId === 'gif-4') {
			imgToAnimate.src =
				'https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/pg_1/v1643897805/Dani/Footer/acai-animtion-loop_xguomg.gif';
		}

		// setTimeout(setBounceAndCounter, counter);
	};
</script>

<div class="footer">
	<div class="gifs-container">
		<div
			class="gif-container"
			on:mouseenter={() => handleMouseEnter('gif-1')}
			on:mouseleave={() => handleMouseLeave('gif-1')}
		>
			<div id="footer-gif-1" class="footer-gif">
				<img
					id="gif-1"
					src="https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/pg_1/v1643897805/Dani/Footer/hippo_animation_loop_qnan1e.gif"
					alt="hippo"
				/>
			</div>
			<p>Hippos are cool</p>
		</div>
		<div
			class="gif-container"
			on:mouseenter={() => handleMouseEnter('gif-2')}
			on:mouseleave={() => handleMouseLeave('gif-2')}
		>
			<div id="footer-gif-2" class="footer-gif">
				<img
					id="gif-2"
					src="https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/pg_1/v1643897805/Dani/Footer/pizza-loop_ed5rvh.gif"
					alt="hippo"
				/>
			</div>
			<p>Pineapple goes on pizza</p>
		</div>
		<div
			class="gif-container"
			on:mouseenter={() => handleMouseEnter('gif-3')}
			on:mouseleave={() => handleMouseLeave('gif-3')}
		>
			<div id="footer-gif-3" class="footer-gif">
				<img
					id="gif-3"
					src="https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/pg_1/v1643897805/Dani/Footer/coffee_animation_ejkykd.gif"
					alt="hippo"
				/>
			</div>
			<p>I take my coffee black</p>
		</div>
		<div
			class="gif-container"
			on:mouseenter={() => handleMouseEnter('gif-4')}
			on:mouseleave={() => handleMouseLeave('gif-4')}
		>
			<div id="footer-gif-4" class="footer-gif">
				<img
					id="gif-4"
					src="https://res.cloudinary.com/blitva/image/upload/q_auto/c_scale,w_200/pg_1/v1643897805/Dani/Footer/acai-animtion-loop_xguomg.gif"
					alt="hippo"
				/>
			</div>
			<p>It’s açaí (ah-sah-ee) Not acai (uh-kai)</p>
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
	.bounce {
		animation: bounce 2s;
		-webkit-animation: bounce 2s;
		-moz-animation: bounce 2s;
		-o-animation: bounce 2s;
	}

	@-webkit-keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			-webkit-transform: translateY(0);
		}
		40% {
			-webkit-transform: translateY(-10px);
		}
		60% {
			-webkit-transform: translateY(-3px);
		}
	}

	@-moz-keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			-moz-transform: translateY(0);
		}
		40% {
			-moz-transform: translateY(-10px);
		}
		60% {
			-moz-transform: translateY(-3px);
		}
	}

	@-o-keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			-o-transform: translateY(0);
		}
		40% {
			-o-transform: translateY(-10px);
		}
		60% {
			-o-transform: translateY(-3px);
		}
	}
	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-10px);
		}
		60% {
			transform: translateY(-3px);
		}
	}

	#footer-gif-2 {
		max-width: 3.5rem;
		padding: 0.25rem 0rem;
		height: auto;
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
		padding: 0 1rem 0 1rem;
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
			gap: 0.8rem;
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
			display: flex;
			justify-content: space-around;
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

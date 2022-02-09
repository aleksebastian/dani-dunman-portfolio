<script>
	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaPinterestSquare from 'svelte-icons/fa/FaPinterestSquare.svelte';

	import ImageLoader from './image/ImageLoader.svelte';
</script>

<div class="footer">
	<div class="gifs-container">
		<div class="gif-container">
			<div class="footer-gif">
				<ImageLoader
					src="https://res.cloudinary.com/blitva/image/upload/v1643897805/Dani/hippo_animation_loop_qnan1e.gif"
					alt="hippo"
				/>
			</div>
			<p>Hippos are cool</p>
		</div>
		<div class="gif-container">
			<div class="footer-gif">
				<ImageLoader
					src="https://res.cloudinary.com/blitva/image/upload/v1643897805/Dani/pizza-loop_ed5rvh.gif"
					alt="hippo"
				/>
			</div>
			<p>Pineapple goes on pizza</p>
		</div>
		<div class="gif-container">
			<div class="footer-gif">
				<ImageLoader
					src="https://res.cloudinary.com/blitva/image/upload/v1643897805/Dani/coffee_animation_ejkykd.gif"
					alt="hippo"
				/>
			</div>
			<p>I take my coffee black</p>
		</div>
		<div class="gif-container">
			<img
				class="footer-gif"
				src="https://res.cloudinary.com/blitva/image/upload/v1643897805/Dani/acai-animtion-loop_xguomg.gif"
				alt="hippo"
			/>
			<p>It’s açaí (ah-sah-ee) Not acai (uh-kai)</p>
		</div>
	</div>
	<div class="right-footer">
		<div class="info">
			<a href="mailto:danieladunman@gmail.com">danieladunman@gmail.com</a>
			<a href="/about">More interesting facts</a>
		</div>
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

<p class="copyright">Copyright © 2021 Daniela Dunman. All Rights Reserved.</p>

<style>
	/* screens: {
			MOBILE LANDSCAPE
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
			TABLET PORTRAIT
      'md': '768px',
      // => @media (min-width: 768px) { ... }
			TABLET LANDSCAPE
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
			MACBOOK
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
			MONITOR
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    } */

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
		flex-wrap: wrap;
		/* justify-content: space-between; */
		/* align-items: flex-start; */
		padding: 3rem 0;
		border-top: 12px solid #d3a615;
		color: black;
	}

	.icons {
		display: flex;
		gap: 2rem;
	}

	.icon {
		width: 32px;
		height: 32px;
	}

	.gif-container {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		max-width: 6rem;
		text-align: center;
		/* gap: 1rem; */
		font-size: 0.6rem;
	}

	.footer-gif {
		max-width: 3rem;
		height: auto;
		aspect-ratio: 1 / 1;
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
			/* flex-basis: 100%; */
		}

		.footer-gif {
			max-width: 4rem;
			height: auto;
			aspect-ratio: 1 / 1;
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
			justify-content: space-between;
			/* gap: 1rem; */
			align-items: flex-start;
			flex-grow: 1;
		}

		/* .gifs-container {
			display: flex;
			gap: 0.5rem;
			padding: 0 1rem 0 1rem;
		} */

		.footer {
			display: flex;
			flex-wrap: wrap;
			gap: 3rem;
			/* justify-content: space-between; */
			/* align-items: flex-start; */
			padding: 3rem;
			border-top: 12px solid #d3a615;
			color: black;
		}
	}
</style>

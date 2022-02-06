<script>
	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaPinterestSquare from 'svelte-icons/fa/FaPinterestSquare.svelte';
</script>

<div class="footer">
	<div class="gif-container">
		<img
			class="footer-gif"
			src="https://res.cloudinary.com/blitva/image/upload/v1643897805/Dani/hippo_animation_loop_qnan1e.gif"
			alt="hippo"
		/>
		<p>Hippos are cool</p>
	</div>
	<div class="gif-container">
		<img
			class="footer-gif"
			src="https://res.cloudinary.com/blitva/image/upload/v1643897805/Dani/pizza-loop_ed5rvh.gif"
			alt="hippo"
		/>
		<p>Pineapple goes on pizza</p>
	</div>
	<div class="gif-container">
		<img
			class="footer-gif"
			src="https://res.cloudinary.com/blitva/image/upload/v1643897805/Dani/coffee_animation_ejkykd.gif"
			alt="hippo"
		/>
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
	<div class="right-footer">
		<p>danieladunman@gmail.com</p>
		<p>More interesting facts</p>
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
	@media (min-width: 640px) {
		.footer {
			display: flex;
			justify-content: space-around;
			align-items: flex-start;
			padding: 4rem 0;
			border-top: 12px solid #d3a615;
			color: black;
		}
	}

	.footer {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: flex-start;
		padding: 4rem 0;
		border-top: 12px solid #d3a615;
		color: black;
	}

	.gif-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 10rem;
		text-align: center;
		gap: 0.8rem;
	}

	.footer-gif {
		max-width: 5rem;
		height: auto;
		aspect-ratio: 1 / 1;
	}

	@media (min-width: 640px) {
		.right-footer {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			gap: 1.8rem;
		}
	}

	.right-footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		padding-top: 2rem;
	}

	.icons {
		display: flex;
		gap: 2rem;
	}

	.icon {
		width: 32px;
		height: 32px;
	}

	.copyright {
		color: black;
		text-align: center;
		padding: 0 0 1rem 0;
	}
</style>

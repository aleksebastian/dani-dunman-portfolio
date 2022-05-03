<div>
	<p>Coming soon!</p>
</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		height: calc(100vh - 20rem);
		width: 100vw;
		position: absolute;
		background: rgb(255, 255, 255, 0.3);
		backdrop-filter: saturate(180%) blur(6px);
		-webkit-backdrop-filter: saturate(180%) blur(6px);
	}
	p {
		font-size: 3rem;
	}

	@media (min-width: 640px) {
		p {
			font-size: 4.5rem;
			margin-top: -6rem;
		}

		div {
			height: calc(100vh - 4rem);
		}
	}
</style>

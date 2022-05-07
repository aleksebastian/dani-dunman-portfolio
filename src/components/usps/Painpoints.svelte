<div class="content grid py-md">
	<p class="label full">Pain Points</p>
	<div class="pain-top content">
		<div class="painPoint">
			<img
				class="point"
				alt="oops dialog box"
				src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/c_scale,w_200/v1645400438/Dani/usps/Artboard_15_copy_3_kk7h7d.png"
			/>
			<p>Past financial mistakes</p>
		</div>
		<div class="painPoint">
			<img
				class="point"
				alt="crossed out handshake"
				src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/c_scale,w_200/v1645400439/Dani/usps/Artboard_15_copy_5_iz3rue.png"
			/>
			<p>Lack of trust in banks (the system)</p>
		</div>
		<div class="painPoint">
			<img
				class="point"
				alt="empty pocket"
				src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/c_scale,w_200/v1645400434/Dani/usps/USPS_Data_pnnfu4.jpg"
			/>
			<p>Not enough money to keep in an account</p>
		</div>
		<div class="painPoint">
			<img
				class="point"
				alt="crossed out upward arrow"
				src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/c_scale,w_200/v1645400441/Dani/usps/Artboard_15_copy_6_rxy4sf.png"
			/>
			<p>Inconvenient and/or lack of access</p>
		</div>
	</div>
	<div class="pain-bottom">
		<div class="painPoint">
			<img
				class="point"
				alt="crossed out graduation cap"
				src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/c_scale,w_200/v1645400438/Dani/usps/Artboard_15_copy_4_qme2mw.png"
			/>
			<p>Lack of financial education</p>
		</div>
		<div class="painPoint">
			<img
				class="point"
				alt="Dialog boxes with question mark and exclamation marks, respectively"
				src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/c_scale,w_200/v1645400437/Dani/usps/Artboard_15_copy_2_kaezjn.png"
			/>
			<p>Language and/or literacy barrier</p>
		</div>
		<div class="painPoint">
			<img
				class="point"
				alt="Crossed out ID"
				src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/c_scale,w_200/v1645400435/Dani/usps/Artboard_15_f97tkw.png"
			/>
			<p>Inability to provide personal information</p>
		</div>
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-column-gap: 1rem;
		justify-items: center;
	}

	.point {
		width: 100px;
		height: 100px;
	}

	.painPoint p {
		text-align: center;
		padding: 0;
		margin-top: -0.5rem;
		max-width: 12rem;
	}

	.pain-top {
		grid-column: 1 / 2;
	}

	.pain-bottom {
		grid-column: 2 / 3;
	}

	.painPoint {
		padding: 0.2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 1rem;
	}

	.content p {
		place-self: start;
		padding: 1rem 0;
	}

	@media (min-width: 768px) {
		.painPoint {
			font-size: 1.1rem;
		}
		.grid {
			display: grid;
			grid-template-columns: repeat(12, minmax(0, 1fr));
			grid-column-gap: 1rem;
			justify-items: start;
		}

		.pain-top {
			width: 100%;
			grid-column: 2 / 12;
			display: flex;
			justify-content: space-around;
			padding: 1rem 0;
		}

		.point {
			width: 100px;
			height: 100px;
		}

		.pain-bottom {
			width: 100%;
			grid-column: 3 / 11;
			display: flex;
			justify-content: space-around;
			padding: 1rem 0;
		}
	}
</style>

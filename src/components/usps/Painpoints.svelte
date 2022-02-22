<div class="content grid py-md">
	<p class="label full">Pain Points</p>
	<div class="pain-top content">
		<div class="painPoint">
			<!-- <div class="point" /> -->
			<img
				class="point"
				alt="painpoint"
				src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/c_scale,w_200/v1645400438/Dani/usps/Artboard_15_copy_3_kk7h7d.png"
			/>
			<p>Label</p>
		</div>
		<div class="painPoint">
			<img
				class="point"
				alt="painpoint"
				src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/c_scale,w_200/v1645400439/Dani/usps/Artboard_15_copy_5_iz3rue.png"
			/>
			<p>Label</p>
		</div>
		<div class="painPoint">
			<img
				class="point"
				alt="painpoint"
				src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/c_scale,w_200/v1645400434/Dani/usps/USPS_Data_pnnfu4.jpg"
			/>
			<p>Label</p>
		</div>
		<div class="painPoint">
			<img
				class="point"
				alt="painpoint"
				src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/c_scale,w_200/v1645400441/Dani/usps/Artboard_15_copy_6_rxy4sf.png"
			/>
			<p>Label</p>
		</div>
	</div>
	<div class="pain-bottom">
		<div class="painPoint">
			<img
				class="point"
				alt="painpoint"
				src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/c_scale,w_200/v1645400438/Dani/usps/Artboard_15_copy_4_qme2mw.png"
			/>
			<p>Label</p>
		</div>
		<div class="painPoint">
			<img
				class="point"
				alt="painpoint"
				src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/c_scale,w_200/v1645400437/Dani/usps/Artboard_15_copy_2_kaezjn.png"
			/>
			<p>Label</p>
		</div>
		<div class="painPoint">
			<img
				class="point"
				alt="painpoint"
				src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/c_scale,w_200/v1645400435/Dani/usps/Artboard_15_f97tkw.png"
			/>
			<p>Label</p>
		</div>
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-column-gap: 1rem;
		justify-items: center;
		/* gap: 1rem; */
	}

	.point {
		width: 100px;
		height: 100px;
		/* background-color: grey; */
	}

	.painPoint p {
		text-align: center;
		padding: 0;
		margin-top: -0.5rem;
	}

	.pain-top {
		grid-column: 1 / 2;
	}

	.pain-bottom {
		grid-column: 2 / 3;
	}

	.painPoint {
		padding: 0.2rem;
	}

	.content p {
		place-self: start;
		padding: 1rem 0;
	}

	/* .label {
		font-size: var(--label-size);
	} */

	@media (min-width: 768px) {
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
			/* background-color: grey; */
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

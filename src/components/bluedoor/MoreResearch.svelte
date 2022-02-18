<script>
	import { slide } from 'svelte/transition';
	import ImageLoader from '../image/ImageLoader.svelte';
</script>

<div transition:slide={{ duration: 1000 }}>
	<!-- UX RESEARCH METHODS -->
	<div class="flex-row content ux-methods-reverse pb-md flex-wrap">
		<div class="text">
			<p class="label py-sm">UX RESEARCH METHOD 01: How Might We (HMW’s)</p>
			<p>
				My team and I created a Miro board where we could share our research findings and organize
				them in such a way that we could easily compare and contrast between different questions and
				problem spaces. We looked over our HMWs and reorganized our sticky notes into the categories
				of information distribution, resources/education, security, utility services, and tasks.
				From there, we sorted through them once again and created another table with the most
				relevant and helpful questions. In this table, we listed possible answers to the HMWs.
			</p>
		</div>
		<div class="image">
			<ImageLoader alt="rectangle" src={'https://picsum.photos/800/500'} />
		</div>
	</div>
	<div class="flex-row content ux-methods-reverse pb-md flex-wrap">
		<div class="image-75">
			<ImageLoader alt="rectangle" src={'https://picsum.photos/800/500'} />
		</div>
		<div class="text-25">
			<p class="label py-sm">UX RESEARCH METHOD 01: How Might We (HMW’s)</p>
			<p>
				My team and I created a Miro board where we could share our research findings and organize
				them in such a way that we could easily compare and contrast between different questions and
				problem spaces. We looked over our HMWs and reorganized our sticky notes into the categories
				of information distribution, resources/education, security, utility services, and tasks.
				From there, we sorted through them once again and created another table with the most
				relevant and helpful questions. In this table, we listed possible answers to the HMWs.
			</p>
		</div>
	</div>
	<div class="flex-row content ux-methods-reverse pb-md flex-wrap">
		<div class="text">
			<p class="label py-sm">UX RESEARCH METHOD 01: How Might We (HMW’s)</p>
			<p>
				My team and I created a Miro board where we could share our research findings and organize
				them in such a way that we could easily compare and contrast between different questions and
				problem spaces. We looked over our HMWs and reorganized our sticky notes into the categories
				of information distribution, resources/education, security, utility services, and tasks.
				From there, we sorted through them once again and created another table with the most
				relevant and helpful questions. In this table, we listed possible answers to the HMWs.
			</p>
		</div>
		<div class="image">
			<ImageLoader alt="rectangle" src={'https://picsum.photos/800/500'} />
		</div>
	</div>
</div>

<style>
	.ux-method-3 {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.moreResearch {
		display: grid;
		grid-template-columns: repeat(10, minmax(0, 1fr));
		grid-column: 2 / 12;
	}

	.ux-methods-col {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.moreResearch > p {
		grid-column: 1 / 11;
	}

	.flex-row {
		display: flex;
	}

	.proposals {
		grid-column: 1 / 10;
		display: flex;
		flex-direction: column;
	}

	.ux-methods {
		grid-column: 2 / 12;
		display: flex;
		flex-direction: column;
	}

	.ux-methods-reverse {
		grid-column: 2 / 12;
		display: flex;
		flex-direction: column-reverse;
		gap: 1rem;
	}

	.img-grid > div {
		gap: 1rem;
	}

	.proposals > div {
		padding: 1rem 0;
	}

	.proposals > div > p {
		padding: 0.5rem 0;
	}

	.img-grid {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.image {
		height: auto;
		padding-top: 1rem;
	}

	.placeholder {
		flex-basis: 100%;
	}

	@media (min-width: 768px) {
		.methods > div {
			padding: 3rem 0;
		}

		.proposals {
			grid-column: 2 / 10;
			flex-direction: row;
			justify-content: space-around;
		}

		.proposals > div {
			flex-basis: 25%;
		}

		.ux-methods {
			flex-direction: row;
			align-items: center;
			justify-content: center;
			gap: 1rem;
		}

		.ux-methods-reverse {
			flex-direction: row;
			align-items: center;
			justify-content: center;
			gap: 1rem;
		}

		.text {
			flex-basis: calc(50% - 0.5rem);
			max-width: calc(50% - 0.5rem);
		}

		.text-25 {
			flex-basis: calc(25% - 0.5rem);
			max-width: calc(25% - 0.5rem);
		}

		.image {
			flex-basis: calc(50% - 0.5rem);
			max-width: calc(50% - 0.5rem);
			height: auto;
			padding-top: 0rem;
		}

		.image-75 {
			flex-basis: calc(75% - 0.5rem);
			max-width: calc(75% - 0.5rem);
			height: auto;
			padding-top: 0rem;
		}

		.img-grid {
			flex-basis: calc(50% - 0.5rem);
			max-width: calc(50% - 0.5rem);
		}

		.ux-method-3 {
			flex-direction: row-reverse;
			align-items: center;
		}
	}
</style>

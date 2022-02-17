<script>
	import { slide } from 'svelte/transition';
	import ImageLoader from '../image/ImageLoader.svelte';
</script>

<div transition:slide={{ duration: 1000 }} class="full grid">
	<div class="moreResearch pb-md">
		<p class="label pb-sm">Competitive Audit</p>
		<p class="py-sm">There have been proposals to solve this issue:</p>
		<div class="proposals">
			<div>
				<p>{'Cryptocurrencies'.toUpperCase()}</p>
				<p>are fully digital and easy to access, and location and income are not a barrier.</p>
			</div>
			<div>
				<p>{'“Outlet” bank branch offices'.toUpperCase()}</p>
				<p>
					are branches of participating banks that are conveniently located for lower-income
					households.
				</p>
			</div>
			<div>
				<p>{'Neobanks'.toUpperCase()}</p>
				<p>
					a type of direct bank that functions fully online, such as Chime, Current, and Aspiration.
				</p>
			</div>
		</div>
		<div class="full">
			<p>However,</p>
			<p>there are no active soluctions.</p>
		</div>
	</div>

	<!-- UX RESEARCH METHODS -->
	<div class="flex-row content ux-methods-reverse pb-md flex-wrap">
		<div class="image">
			<ImageLoader alt="rectangle" src={'https://picsum.photos/800/500'} />
		</div>
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
	</div>
	<div class="flex-row content ux-methods py-md flex-wrap">
		<div class="text">
			<p class="label py-sm">UX RESEARCH METHOD 02: Survey</p>
			<p>
				I created a quick survey that I shared on my Instagram for people to answer questions about
				their experience with banking, their frustrations, and what they would be willing to do to
				open a bank account if they found themselves on the bank's deny-list.
			</p>
			<p class="py-sm">
				Those who are denied standard bank accounts due to a rocky banking history were identified
				as part of the unbanked community, and are the target audience.
			</p>
		</div>

		<div class="img-grid">
			<div class="flex-row">
				<div class="sq-img">
					<ImageLoader alt="square" src={`https://picsum.photos/400`} />
				</div>
				<div class="sq-img">
					<ImageLoader alt="square" src={`https://picsum.photos/400`} />
				</div>
			</div>
			<div class="img">
				<ImageLoader alt="square" src="https://picsum.photos/800/300" />
			</div>
		</div>
	</div>

	<div class="content ux-methods-col py-md">
		<div class="ux-method-3">
			<div class="text">
				<p class="label py-sm">UX RESEARCH METHOD 03/04: User Persona and Journey Map</p>
				<p>
					My target audience is deny-listed, bank users. People who have been kicked out of the
					banking system are unable to open an account independent of where they go because their
					history follows them. Not being able to bank pushes them further into “unbankedness” for
					longer and makes it harder for them to get out.
				</p>
			</div>
			<img alt="rectangle" src="https://picsum.photos/750/450" class="image" />
		</div>
		<div class="content placeholder">
			<ImageLoader alt="placeholder" src="https://picsum.photos/1600/300" />
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

		.image {
			flex-basis: calc(50% - 0.5rem);
			max-width: calc(50% - 0.5rem);
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

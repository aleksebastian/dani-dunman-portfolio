<script>
	import { slide } from 'svelte/transition';
	import ImageLoader from '../image/ImageLoader.svelte';
	import SurveyQs1 from './SurveyQs1.svelte';
	import SurveyQs2 from './SurveyQs2.svelte';
	import SurveyQs3 from './SurveyQs3.svelte';
</script>

<div transition:slide={{ duration: 1000 }} class="full grid">
	<div class="moreResearch pb-md">
		<p class="label pb-sm">Competitive Audit</p>
		<p class="py-sm">There have been proposals to solve this issue:</p>
		<div class="proposals">
			<div>
				<a
					href="https://unbanked.com/cryptocurrencies-as-a-solution-for-the-financially-unbanked/"
					target="_blank"
					rel="noopener noreferrer">{'Cryptocurrencies'.toUpperCase()}</a
				>
				<p>are fully digital and easy to access, and location and income are not a barrier.</p>
			</div>
			<div>
				<a
					href="https://www.brookings.edu/articles/bringing-unbanked-households-into-the-banking-system/"
					target="_blank"
					rel="noopener noreferrer">{'“Outlet” bank branch offices'.toUpperCase()}</a
				>
				<p>
					are branches of participating banks that are conveniently located for lower-income
					households.
				</p>
			</div>
			<div>
				<a
					href="https://www.forbes.com/sites/columbiabusinessschool/2021/03/16/neobanks-a-fintech-solution-for-underbanked-communities/?sh=7e04722d7690"
					target="_blank"
					rel="noopener noreferrer">{'Neobanks'.toUpperCase()}</a
				>
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
			<ImageLoader
				alt="How might wes"
				src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/c_scale,w_800/v1645580734/Dani/usps/PostalBanking_HMW_c8bxbi.jpg"
			/>
		</div>
		<div class="text">
			<p class="label py-sm">UX RESEARCH METHOD 01: How Might We (HMWs)</p>
			<p>
				My team and I created a Miro board where we could share our research findings and organize
				them in such a way that we could easily compare and contrast between different questions and
				problem spaces. We looked over our HMWs and reorganized our sticky notes into the categories
				of Information Distribution, Resources/Education, Security, Utility Services, and Tasks.
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
				open a bank account if they found themselves on the bank's deny list.
			</p>
			<p class="py-sm">
				Those who are denied standard bank accounts due to a rocky banking history were identified
				as part of the unbanked community, and are the target audience.
			</p>
		</div>

		<div class="img-grid">
			<!-- <div class="flex-row"> -->
			<div>
				<SurveyQs1 />
			</div>
			<div>
				<SurveyQs2 />
			</div>
			<div><SurveyQs3 /></div>
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
			<img
				alt="Art board"
				src="https://res.cloudinary.com/blitva/image/upload/q_auto:best/f_auto/c_scale,w_750/v1645400441/Dani/usps/Artboard_7_h2mau0.png"
				class="image"
			/>
		</div>
		<div class="content placeholder">
			<ImageLoader
				alt="Journey map"
				src="https://res.cloudinary.com/blitva/image/upload/q_auto:best/f_auto/v1647368347/Dani/usps/journeymap1_mmgvyv.jpg"
			/>
		</div>
	</div>

	<p class="full-text label py-sm">UX RESEARCH METHOD 04(.2): Revisiting the Journey Map</p>
	<p class="full-text">
		Once I had found the best solution for my intended audience, I revisited the user journey map I
		created for my persona. I created a second one reflecting Janine’s typical day after having a
		Second Chance Account for 8 months, 1 year into COVID, showing some of her improved skills.
	</p>
	<div class="content py-sm">
		<ImageLoader
			alt="Journey map 2"
			src="https://res.cloudinary.com/blitva/image/upload/q_auto:best/f_auto/v1647368346/Dani/usps/journeymap2_wqhh5h.jpg"
		/>
	</div>
	<div class="content fullWidth">
		<p>The top three things that changed for Janine were:</p>
		<div class="proposals py-sm">
			<div class="ux-method-4">
				<p>1.</p>
				<p class="center">
					Janine started saving money on small things that add up to a larger sum
				</p>
			</div>
			<div class="ux-method-4">
				<p>2.</p>
				<p class="center">
					Janine started regularly checking her finances and budgeting for the things she wanted to
					buy
				</p>
			</div>
			<div class="ux-method-4">
				<p>3.</p>
				<p class="center">
					Janine started an emergency fund and can get through unexpected events that come up
				</p>
			</div>
		</div>
	</div>
	<p class="content py-sm">
		Main Takeaway: Janine doesn’t have to worry about not having money in her account due to
		unnecessary expenses because she has spent 8 months learning and preparing for emergencies and
		practicing good banking habits.
	</p>
</div>

<style>
	.center {
		text-align: center;
	}
	.ux-method-4 {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* gap: 1rem; */
	}
	.fullWidth {
		min-width: 100%;
	}
	a {
		color: black;
		text-decoration: underline;
	}
	a:hover {
		color: var(--accent-color);
	}
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
	}

	.image {
		height: auto;
		padding-top: 1rem;
	}

	.placeholder {
		flex-basis: 100%;
	}

	@media (min-width: 768px) {
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

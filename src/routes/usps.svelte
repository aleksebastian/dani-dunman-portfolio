<script>
	import { slide } from 'svelte/transition';
	import { currentPage } from '../store';

	import ProjectHero from '../components/ProjectHero.svelte';
	import ProjectOverview from '../components/ProjectOverview.svelte';
	import ProjectGallery from '../components/ProjectGallery.svelte';
	import Painpoints from '../components/usps/Painpoints.svelte';
	import ImageLoader from '../components/image/ImageLoader.svelte';
	import Expandable from '../components/Expandable.svelte';

	let percentage = 0;
	$: showStatistics = false;
	$: showResearch = false;
	$: showAbout = false;

	const handleClick = (section) => {
		if (section === 'statistics') {
			showStatistics = !showStatistics;
			return;
		}
		if (section === 'research') {
			showResearch = !showResearch;
			return;
		}
		if (section === 'about') {
			showAbout = !showAbout;
		}
	};

	import { onMount } from 'svelte';

	const heroSrc = 'https://via.placeholder.com/1980x495?text=+';
	let heroLoaded = false;
	onMount(() => {
		currentPage.set('usps');
		const heroImg = new Image();
		heroImg.src = heroSrc;
		heroImg.onload = () => {
			heroLoaded = true;
		};
	});

	function rand(min, max) {
		let randomNum = Math.random() * (max - min) + min;
		return Math.round(randomNum);
	}

	const projectOverviewData = [
		{
			label: 'Goal',
			text: 'To provide the underbanked and unbanked community a service for reentering the banking system through USPS. The service should be a stepping stone back into traditional banking, not a replacement for it.'
		},
		{
			label: 'What I Did',
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
		}
	];
</script>

<div class="grid">
	<!-- HERO -->
	{#if heroLoaded}
		<ProjectHero {heroSrc} />

		<ProjectOverview {projectOverviewData} />

		<!-- GALLERY -->
		<ProjectGallery />

		<!-- RESEARCH -->
		<div class="research full">
			<div class="researchLeft">
				<p class="label bold">Research</p>
				<p class="label">Initial Research</p>
				<p>
					Underbanked: Someone who does not receive all the services available from a bank, be it
					from location to hours, they are not receiving full benefits. They are people with bank
					accounts that continue to use non-bank financial services such as moeny orders and bill
					payments.
				</p>
				<p>&nbsp;</p>
				<p>Unbanked: A person who does not use banks or banking institutions in any way or form.</p>
			</div>
			<div class="researchRight">
				<p class="callout-lg">~34%</p>

				<p>of the US population is considered under/un banked</p>
			</div>
		</div>

		<!-- EXPANDABLE SECTION -->
		<Expandable
			{handleClick}
			state={showStatistics}
			section={'statistics'}
			text={'More statistics'}
		/>

		<!-- MORE STATISTICS -->
		{#if showStatistics}
			<div transition:slide class="moreStatistics" />
		{/if}

		<!-- PAIN POINTS -->
		<Painpoints />

		<!-- HOW IS USPS QUALIFIED TO SERVE -->
		<div class="qualifications content py-md">
			<p class="label">How is USPS qualified to serve the un/under banked</p>
			<div>
				<div class="flex-col pt-sm">
					<p>serves</p>
					<p class="header">161.4 MM</p>
					<p>addresses in the country</p>
				</div>
				<div class="flex-col pt-sm">
					<p>serves</p>
					<p class="header">161.4 MM</p>
					<p>addresses in the country</p>
				</div>
				<div class="flex-col pt-sm">
					<p>serves</p>
					<p class="header">161.4 MM</p>
					<p>addresses in the country</p>
				</div>
			</div>
		</div>

		<!-- EXPANDABLE SECTION -->
		<Expandable
			{handleClick}
			state={showResearch}
			section={'research'}
			text={'More research and exploration'}
		/>

		<!-- MORE RESEARCH -->
		{#if showResearch}
			<div transition:slide={{ duration: 1000 }} class="full grid">
				<div class="moreResearch py-md">
					<p class="researchText label pb-sm">Competitive Audit</p>
					<p class="researchText py-sm">There have been proposals to solve this issue.</p>
					<div class="flex-row proposals py-sm">
						<div class="proposal">
							<p>{'Cryptocurrencies'.toUpperCase()}</p>
							<p>
								are fully digital and easy to access, and location and income are not a barrier.
							</p>
						</div>
						<div class="proposal">
							<p>{'“Outlet” bank branch offices'.toUpperCase()}</p>
							<p>
								are branches of participating banks that are conveniently located for lower-income
								households.
							</p>
						</div>
						<div class="proposal">
							<p>{'Neobanks'.toUpperCase()}</p>
							<p>
								a type of direct bank that functions fully online, such as Chime, Current, and
								Aspiration.
							</p>
						</div>
					</div>
					<p class="researchText">However,</p>
					<p class="researchText">there are no active soluctions.</p>
				</div>

				<!-- UX RESEARCH METHODS -->
				<div class="flex-row content ux-methods py-md flex-wrap">
					<div class="image">
						<ImageLoader alt="rectangle" src={'https://picsum.photos/800/500'} />
					</div>
					<div class="text">
						<p class="label py-sm">UX RESEARCH METHOD 01: How Might We (HMW’s)</p>
						<p>
							My team and I created a Miro board where we could share our research findings and
							organize them in such a way that we could easily compare and contrast between
							different questions and problem spaces. We looked over our HMWs and reorganized our
							sticky notes into the categories of information distribution, resources/education,
							security, utility services, and tasks. From there, we sorted through them once again
							and created another table with the most relevant and helpful questions. In this table,
							we listed possible answers to the HMWs.
						</p>
					</div>
				</div>
				<div class="flex-row content ux-methods py-md flex-wrap">
					<div class="text">
						<p class="label py-sm">UX RESEARCH METHOD 02: Survey</p>
						<p>
							I created a quick survey that I shared on my Instagram for people to answer questions
							about their experience with banking, their frustrations, and what they would be
							willing to do to open a bank account if they found themselves on the bank's deny-list.
						</p>
						<p class="py-md">
							Those who are denied standard bank accounts due to a rocky banking history were
							identified as part of the unbanked community, and are the target audience.
						</p>
					</div>

					<div class="complex">
						<div class="imgs flex-row">
							<div class="sq-img">
								<ImageLoader alt="square" src={`https://picsum.photos/600`} />
							</div>
							<div class="sq-img">
								<ImageLoader alt="square" src={`https://picsum.photos/600`} />
							</div>
						</div>
						<div class="img">
							<ImageLoader alt="square" src="https://picsum.photos/800/300" />
						</div>
					</div>
				</div>

				<div class="flex-row content ux-methods last flex-wrap">
					<img alt="rectangle" src="https://picsum.photos/750/450" class="image" />
					<div class="text">
						<p class="label py-sm">UX RESEARCH METHOD 03/04: User Persona and Journey Map</p>
						<p>
							My target audience is deny-listed, bank users. People who have been kicked out of the
							banking system are unable to open an account independent of where they go because
							their history follows them. Not being able to bank pushes them further into
							“unbankedness” for longer and makes it harder for them to get out.
						</p>
					</div>
					<div class="content placeholder">
						<ImageLoader alt="placeholder" src="https://picsum.photos/1950/350" />
					</div>
				</div>
			</div>
		{/if}

		<!-- SUMMARY OF RESEARCH -->
		<div class="content py-md">
			<!-- <div class="this flex-row"> -->
			<div class="pb-sm">
				<p class="label">Summary of Research</p>
				<p>
					There are plenty of apps/services that help people try to budget, but there aren’t any
					educational services that help people understand the why and the how of banking.︎
				</p>
			</div>
			<div class="py-sm">
				<p class="label">Hypothesis</p>
				<p>
					If I make an application that will educate people on personal finances, they will be less
					likely to fall back into being un/underbanked.
				</p>
			</div>
			<div class="py-sm">
				<p class="label">Conclusion/Opportunity Statement</p>
				<p>
					We will provide convenient banking services for the people who are deny-listed from the
					banking system so they can easily establish financial security through the USPS Banking
					services by building trust and knowledge about personal finances.
				</p>
			</div>
			<!-- </div> -->
		</div>

		<!-- SOLUTION -->
		<div class="full grid bg-grey">
			<div class="content">
				<p class="label bold py-sm">Solution</p>
				<p class="py-sm">USPS Second Chance Account</p>
				<p class="py-sm">
					The SmartBanking Account (USPS Second Chance Account) will give the client a second chance
					at banking, along with knowledge about finances that will help speed up their financial
					literacy and put them back on their feet faster and more effectively.
				</p>
				<p class="py-sm">
					A second chance bank account gives customers with troubled records a fresh opportunity to
					demonstrate they can bank responsibly. If your banking history is less than perfect, past
					overdraft fees and other negative information could hinder your ability to get a
					traditional checking account. A second chance checking account can give you access to
					payment tools like checks and debit cards. And it can help you build a better banking
					history.
				</p>
			</div>
			<Expandable
				{handleClick}
				state={showAbout}
				section={'about'}
				text={'More About SmartBanking'}
			/>
			{#if showAbout}
				<div transition:slide class="content py-md">
					<p class="py-sm">The Who:</p>
					<p>
						Those who are denied standard bank accounts due to a rocky (poor) banking history. (Bank
						history reports track how you have handled savings and checking accounts in the past.
						These show if you have overdrawn accounts, fees that you did not pay, or have been
						suspected of fraud.)
					</p>
					<p class="py-sm">The problem we are solving:</p>
					<p>
						People who are on the ChexSystems cant open bank accounts except for second chance
						accounts. These can be found in various places, but they only provide a second
						opportunity to either fail again or try to grow a little bit. There are no
					</p>
				</div>
			{/if}
		</div>

		<p class="content label">Final Deliverable</p>
		<div class="content flex-row py-md">
			<div class="del">I am Deliverable</div>
			<div class="del">
				<p class="label">Suggested Walk-through</p>
				<ul>
					<li>Go to the Sign-In page</li>
					<li>Type in your user and password, and sign in</li>
					<li>Toggle between your in progress and saved courses</li>
					<li>Toggle between your achived and current goals</li>
					<li>Toggle between your inprogress and achived challenges</li>
					<li>Pick up where you left off on your most recent course</li>
					<li>Check what part of the lesson you are currently on</li>
					<li>Go back to the Dashboard</li>
				</ul>
			</div>
		</div>
	{:else}
		<div style="min-height: 100vh" />
	{/if}
</div>

<style>
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	li {
		padding: 0.9rem 0;
	}

	.del {
		flex-basis: calc(50% - 0.5rem);
		max-width: calc(50% - 0.5rem);
	}

	.bold {
		font-weight: 500;
	}

	.bg-grey {
		background-color: var(--background-color);
	}

	.ux-methods {
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.complex {
		flex-basis: calc(50% - 0.5rem);
		max-width: calc(50% - 0.5rem);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.image {
		/* max-width: 600px; */
		flex-basis: calc(50% - 0.5rem);
		max-width: calc(50% - 0.5rem);
		height: auto;
	}

	.text {
		flex-basis: calc(50% - 0.5rem);
		max-width: calc(50% - 0.5rem);
	}

	.flex-wrap {
		flex-wrap: wrap;
	}

	.imgs {
		gap: 1rem;
	}

	.img {
		background-color: blue;
		max-height: 300px;
	}

	.placeholder {
		/* height: 300px; */
		background-color: grey;
	}

	.last {
		padding: 3rem 0 3rem 0;
	}

	.researchText {
		grid-column: 1 / 11;
	}

	.proposals {
		grid-column: 2 / 10;
		justify-content: space-around;
	}

	.proposal {
		flex-basis: 25%;
	}

	.proposal p {
		padding: 0.5rem 0;
	}

	.moreResearch {
		display: grid;
		grid-template-columns: repeat(10, minmax(0, 1fr));
		/* height: 16rem; */
		grid-column: 2 / 12;
	}

	.flex-row {
		display: flex;
	}

	.flex-col {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.header {
		font-size: var(--header-size);
	}

	.moreStatistics {
		height: 16rem;
		grid-column: 2 / 12;
		background-color: grey;
	}

	.research {
		display: grid;
		grid-column-gap: 1rem;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		padding: 3rem 0;
	}

	.researchLeft,
	.researchRight {
		grid-column: 2 / 12;
	}

	.researchRight {
		padding: 0 2rem;
	}

	.researchRight p {
		text-align: center;
	}

	.qualifications > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	@media (min-width: 768px) {
		.moreStatistics {
			height: 16rem;
			grid-column: 3 / 11;
			background-color: grey;
		}

		.researchLeft {
			grid-column: 2 / 7;
		}

		.researchRight {
			grid-column: 8 / 11;
			place-self: center;
		}
	}

	@media (min-width: 1280px) {
		.qualifications > div {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}
	}

	@media (min-width: 1536px) {
		.text {
			grid-column: 1 / -1;
		}
		.qualifications > p {
			grid-column: 1 / 12;
		}
		.qualifications {
			display: grid;
			grid-template-columns: subgrid;
		}
		.qualifications > div {
			grid-column: 3 / 10;
		}
	}
</style>

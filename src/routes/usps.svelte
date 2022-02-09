<script>
	import { slide, fade } from 'svelte/transition';
	import MdArrowDownward from 'svelte-icons/md/MdArrowDownward.svelte';
	import { currentPage } from '../store';

	import ImageLoader from '../components/image/ImageLoader.svelte';
	import Expandable from '../components/Expandable.svelte';

	let percentage = 0;
	$: showStatistics = false;
	$: showResearch = false;

	const handleClick = (section) => {
		if (section === 'statistics') {
			showStatistics = !showStatistics;
			return;
		}
		if (section === 'research') {
			showResearch = !showResearch;
			return;
		}
	};

	import { onMount } from 'svelte';
	const heroSrc = 'https://picsum.photos/1950/450';
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
</script>

<div class="grid">
	<!-- HERO -->
	{#if heroLoaded}
		<div in:fade class="hero full py-md">
			<p class="header">USPS SmartBanking</p>
			<p class="subheader">UX/Research</p>
		</div>

		<!-- <div class="hero full py-md" /> -->

		<!-- PROJECT INFO -->
		<div class="projectInfo py-md">
			<div>
				<p class="name">Goal</p>
				<p class="body-text">
					To provide the underbanked and unbanked community a service for reentering the banking
					system through USPS. The service should be a stepping stone back into traditional banking,
					not a replacement for it.
				</p>
			</div>
			<div>
				<p class="name">What I Did</p>
				<p class="body-text">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</p>
			</div>
		</div>

		<!-- GALLERY -->
		<!-- <div class="galleryBackground"> -->
		<div id="work" class="gallery full">
			<div class="photos">
				<div>
					<div class="project-image">
						<ImageLoader src={`https://picsum.photos/seed/${rand(0, 200)}/800/550`} alt="dani" />
					</div>
				</div>
				<div>
					<div class="project-image">
						<ImageLoader src={`https://picsum.photos/seed/${rand(0, 200)}/800/550`} alt="dani" />
					</div>
				</div>
				<div>
					<div class="project-image">
						<ImageLoader src={`https://picsum.photos/seed/${rand(0, 200)}/800/550`} alt="dani" />
					</div>
				</div>
				<div>
					<div class="project-image">
						<ImageLoader src={`https://picsum.photos/seed/${rand(0, 200)}/800/550`} alt="dani" />
					</div>
				</div>
				<div>
					<div class="project-image">
						<ImageLoader src={`https://picsum.photos/seed/${rand(0, 200)}/800/550`} alt="dani" />
					</div>
				</div>
				<div>
					<div class="project-image">
						<ImageLoader src={`https://picsum.photos/seed/${rand(0, 200)}/800/550`} alt="dani" />
					</div>
				</div>
			</div>
		</div>
		<!-- </div> -->

		<!-- RESEARCH -->
		<div class="research full">
			<div class="researchLeft">
				<p class="name">Research</p>
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
				<p class="hugeNumber">~32%</p>

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
			<div transition:slide|local class="moreStatistics" />
		{/if}

		<!-- PAIN POINTS -->
		<p class="label main py-md">Pain Points</p>
		<div class="pain-top main">
			<div class="painPoint">
				<div class="point" />
				<p>Label</p>
			</div>
			<div class="painPoint">
				<div class="point" />
				<p>Label</p>
			</div>
			<div class="painPoint">
				<div class="point" />
				<p>Label</p>
			</div>
			<div class="painPoint">
				<div class="point" />
				<p>Label</p>
			</div>
		</div>
		<div class="pain-bottom">
			<div class="painPoint">
				<div class="point" />
				<p>Label</p>
			</div>
			<div class="painPoint">
				<div class="point" />
				<p>Label</p>
			</div>
			<div class="painPoint">
				<div class="point" />
				<p>Label</p>
			</div>
		</div>

		<!-- HOW IS USPS QUALIFIED TO SERVE -->
		<div class="main py-md">
			<p class="label main">How is USPS qualified to serve the un/under banked</p>
			<div class="flex-row main space-between py-md">
				<div class="flex-col">
					<p>serves</p>
					<p class="header">161.4 MM</p>
					<p>addresses in the country</p>
				</div>
				<div class="flex-col">
					<p>serves</p>
					<p class="header">161.4 MM</p>
					<p>addresses in the country</p>
				</div>
				<div class="flex-col">
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
			<div transition:slide|local class="moreResearch py-md">
				<p class="researchText label py-sm">Competitive Audit</p>
				<p class="researchText py-sm">There have been proposals to solve this issue.</p>
				<div class="flex-row proposals py-sm">
					<div class="proposal">
						<p>{'Cryptocurrencies'.toUpperCase()}</p>
						<p>are fully digital and easy to access, and location and income are not a barrier.</p>
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
			<div class="flex-row main ux-methods py-md flex-wrap">
				<div class="image">
					<ImageLoader alt="rectangle" src={'https://picsum.photos/750/500'} />
				</div>
				<div class="text">
					<p class="label py-sm">UX RESEARCH METHOD 01: How Might We (HMW’s)</p>
					<p>
						My team and I created a Miro board where we could share our research findings and
						organize them in such a way that we could easily compare and contrast between different
						questions and problem spaces. We looked over our HMWs and reorganized our sticky notes
						into the categories of information distribution, resources/education, security, utility
						services, and tasks. From there, we sorted through them once again and created another
						table with the most relevant and helpful questions. In this table, we listed possible
						answers to the HMWs.
					</p>
				</div>
			</div>
			<div class="flex-row main ux-methods py-md flex-wrap">
				<div class="text">
					<p class="label py-sm">UX RESEARCH METHOD 02: Survey</p>
					<p>
						I created a quick survey that I shared on my Instagram for people to answer questions
						about their experience with banking, their frustrations, and what they would be willing
						to do to open a bank account if they found themselves on the bank's deny-list.
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

			<div class="flex-row main ux-methods last flex-wrap">
				<img alt="rectangle" src="https://picsum.photos/750/450" class="image" />
				<div class="text">
					<p class="label py-sm">UX RESEARCH METHOD 03/04: User Persona and Journey Map</p>
					<p>
						My target audience is deny-listed, bank users. People who have been kicked out of the
						banking system are unable to open an account independent of where they go because their
						history follows them. Not being able to bank pushes them further into “unbankedness” for
						longer and makes it harder for them to get out.
					</p>
				</div>
				<div class="main placeholder">
					<ImageLoader alt="placeholder" src="https://picsum.photos/1950/350" />
				</div>
			</div>
		{/if}
	{:else}
		<div style="min-height: 100vh" />
	{/if}
</div>

<style>
	* {
		font-size: var(--body-size);
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

	.sq-img {
		/* flex-basis: 20%; */
		/* flex-basis: calc(50% - 0.5rem);
		min-width: calc(50% - 0.5rem) !important;
		height: auto; */
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

	.space-between {
		justify-content: space-between;
	}

	.label {
		font-size: var(--label-size);
	}

	.header {
		font-size: var(--header-size);
	}

	.body-text {
		font-size: var(--body-size);
	}

	.hugeNumber {
		font-size: 4rem;
	}

	.full {
		grid-column: 1 / -1;
	}

	.main {
		grid-column: 2 / 12;
	}

	.py-sm {
		padding: 1rem 0;
	}

	.py-md {
		padding: 3rem 0;
	}

	.painPoint p {
		text-align: center;
	}

	.pain-top {
		display: flex;
		justify-content: space-around;
		padding: 1rem 0;
	}

	.pain-bottom {
		grid-column: 3 / 11;
		display: flex;
		justify-content: space-around;
		padding: 1rem 0;
	}

	.point {
		width: 100px;
		height: 100px;
		background-color: grey;
	}

	.moreStatistics {
		height: 16rem;
		grid-column: 3 / 11;
		background-color: grey;
	}

	.icon {
		margin-bottom: 0.1rem;
		width: 40px;
		height: 32px;
		transition: all 0.4s ease;
		cursor: pointer;
		/* transform: rotateZ(180deg); */
	}

	.expandable {
		/* grid-column: 1 / -1; */
		display: grid;
		grid-template-columns: subgrid;
	}

	.expandableLeft {
		/* grid-column: 1 / 2; */
	}

	.second {
		align-items: center;
	}

	.expandableRight {
		display: flex;
		align-items: center;
		align-self: center;
		grid-column: 1 / 2;
	}

	.line {
		width: 100%;
		border-bottom: 1px solid black;
		text-align: center;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		grid-column-gap: 1rem;
	}

	.hero {
		height: 24rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* background-color: gray; */
		background-image: url('https://picsum.photos/1950/450');
	}

	.header {
		font-size: var(--header-size);
		font-weight: 500;
	}

	.subheader {
		margin-top: -0.25rem;
		font-size: var(--label-size);
	}

	.projectInfo {
		grid-column: 3 / 11;
		display: flex;
		justify-content: space-between;
	}

	.projectInfo div {
		flex-basis: 40%;
	}

	.name {
		font-size: var(--label-size);
		font-weight: 600;
	}

	.gallery {
		display: grid;
		grid-column-gap: 1rem;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		padding: 3rem 0;
		min-height: 100vh;
		background-color: var(--background-color);
	}

	.photos {
		grid-column: 3 / 11;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 3rem;
		justify-items: center;
	}

	.research {
		display: grid;
		grid-column-gap: 1rem;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		padding: 3rem 0;
	}

	.researchLeft {
		grid-column: 2 / 7;
	}

	.researchRight {
		grid-column: 8 / 11;
		place-self: center;
	}

	.researchRight p {
		text-align: center;
	}
</style>

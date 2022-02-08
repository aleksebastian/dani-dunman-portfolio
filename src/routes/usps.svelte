<script>
	import { slide } from 'svelte/transition';
	import MdArrowDownward from 'svelte-icons/md/MdArrowDownward.svelte';

	import IntersectionObserver from '../components/IntersectionObserver.svelte';

	let percentage = 0;
	let showMoreStatistics = false;
	let showResearch = false;

	const handleClick = (section) => {
		if (section === 'statistics') {
			showMoreStatistics = !showMoreStatistics;
			return;
		}
		if (section === 'research') {
			showResearch = !showResearch;
			return;
		}
	};
</script>

<div class="grid">
	<!-- HERO -->
	<div class="hero full section">
		<p class="header">USPS SmartBanking</p>
		<p class="subheader">UX/Research</p>
	</div>

	<!-- PROJECT INFO -->
	<div class="projectInfo section">
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
				been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type specimen book.
			</p>
		</div>
	</div>

	<!-- GALLERY -->
	<!-- <div class="galleryBackground"> -->
	<div id="work" class="gallery full">
		<div class="photos">
			<div>
				<IntersectionObserver once={true} let:intersecting>
					{#if intersecting}
						<img class="project-image" src="https://picsum.photos/800/550" alt="dani" />
					{/if}
				</IntersectionObserver>
			</div>
			<div>
				<IntersectionObserver once={true} let:intersecting>
					{#if intersecting}
						<img class="project-image" src="https://picsum.photos/800/550" alt="dani" />
					{/if}
				</IntersectionObserver>
			</div>
			<div>
				<IntersectionObserver once={true} let:intersecting>
					{#if intersecting}
						<img class="project-image" src="https://picsum.photos/800/550" alt="dani" />
					{/if}
				</IntersectionObserver>
			</div>
			<div>
				<IntersectionObserver once={true} let:intersecting>
					{#if intersecting}
						<img class="project-image" src="https://picsum.photos/800/550" alt="dani" />
					{/if}
				</IntersectionObserver>
			</div>
			<div>
				<IntersectionObserver once={true} let:intersecting>
					{#if intersecting}
						<img class="project-image" src="https://picsum.photos/800/550" alt="dani" />
					{/if}
				</IntersectionObserver>
			</div>
			<div>
				<IntersectionObserver once={true} let:intersecting>
					{#if intersecting}
						<img class="project-image" src="https://picsum.photos/800/550" alt="dani" />
					{/if}
				</IntersectionObserver>
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
				Underbanked: Someone who does not receive all the services available from a bank, be it from
				location to hours, they are not receiving full benefits. They are people with bank accounts
				that continue to use non-bank financial services such as moeny orders and bill payments.
			</p>
			<p>&nbsp;</p>
			<p>Unbanked: A person who does not use banks or banking institutions in any way or form.</p>
		</div>
		<div class="researchRight">
			<IntersectionObserver once={true} let:intersecting>
				{#if intersecting}
					<p class="hugeNumber">~32%</p>
				{/if}
			</IntersectionObserver>
			<p>of the US population is considered under/un banked</p>
		</div>
	</div>

	<!-- EXPANDABLE SECTION -->
	<div class="expandable">
		<div class="expandableLeft">
			<p>More statistics</p>
			<div class="line" />
			<p>&nbsp;</p>
		</div>
		<div class="expandableRight">
			<div class="line" />
			<div class="icon" on:click={() => handleClick('statistics')}>
				<MdArrowDownward />
			</div>
		</div>
	</div>

	<!-- MORE STATISTICS -->
	{#if showMoreStatistics}
		<div transition:slide|local class="moreStatistics" />
	{/if}

	<!-- PAIN POINTS -->
	<p class="label main section">Pain Points</p>
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
	<div class="main section">
		<p class="label main">How is USPS qualified to serve the un/under banked</p>
		<div class="flex-row main space-between section">
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
	<div class="expandable">
		<div class="expandableLeft">
			<p>More research and exploration</p>
			<div class="line" />
			<p>&nbsp;</p>
		</div>
		<div class="expandableRight">
			<div class="line" />
			<div class="icon" on:click={() => handleClick('research')}>
				<MdArrowDownward />
			</div>
		</div>
	</div>

	<!-- MORE RESEARCH -->
	{#if !showResearch}
		<div transition:slide|local class="moreResearch">
			<p class="researchText label">Competitive Audit</p>
			<p class="researchText">There have been proposals to solve this issue.</p>
			<div class="flex-row proposals">
				<div class="proposal">
					<p>Label</p>
					<p>Text Text Text Text Text Text Text Text Text Text Text</p>
				</div>
				<div class="proposal">
					<p>Label</p>
					<p>Text Text Text Text Text Text Text Text Text Text Text</p>
				</div>
				<div class="proposal">
					<p>Label</p>
					<p>Text Text Text Text Text Text Text Text Text Text Text</p>
				</div>
			</div>
			<p class="researchText">However,</p>
			<p class="researchText">there are no active soluctions.</p>
		</div>
	{/if}
</div>

<style>
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

	.moreResearch {
		display: grid;
		grid-template-columns: repeat(10, minmax(0, 1fr));
		height: 16rem;
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

	.section {
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
		width: 32px;
		height: 32px;
		transition: all 0.25s ease-in-out;
	}

	.expandable {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
	}

	.expandableLeft {
		grid-column: 2 / 11;
	}

	.expandableRight {
		display: flex;
		align-items: center;
		align-self: center;
		grid-column: 11 / 12;
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
		background-color: gray;
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
		grid-column: 2 / 12;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 3rem;
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

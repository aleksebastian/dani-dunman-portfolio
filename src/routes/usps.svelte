<script>
	import { slide } from 'svelte/transition';
	// import { quintOut } from 'svelte/easing';

	import Gallery from '../components/Gallery.svelte';
	import MdArrowDownward from 'svelte-icons/md/MdArrowDownward.svelte';

	import IntersectionObserver from './IntersectionObserver.svelte';

	let percentage = 0;
	let showMoreStatistics = false;
	const handleClick = () => (showMoreStatistics = !showMoreStatistics);
</script>

<div class="grid">
	<!-- HERO -->
	<div class="hero">
		<p class="header">USPS SmartBanking</p>
		<p class="subheader">UX/Research</p>
	</div>

	<!-- PROJECT INFO -->
	<div class="projectInfo">
		<div class="goal">
			<p class="name">Goal</p>
			<p class="description">
				To provide the underbanked and unbanked community a service for reentering the banking
				system through USPS. The service should be a stepping stone back into traditional banking,
				not a replacement for it.
			</p>
		</div>
		<div class="whatIDid">
			<p class="name">What I Did</p>
			<p class="description">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type specimen book.
			</p>
		</div>
	</div>

	<!-- GALLERY -->
	<!-- <div class="galleryBackground"> -->
	<div id="work" class="gallery">
		<div class="photos">
			<div class="project">
				<IntersectionObserver once={true} let:intersecting>
					{#if intersecting}
						<img class="project-image" src="https://picsum.photos/800/550" alt="dani" />
					{/if}
				</IntersectionObserver>
			</div>
			<div class="project">
				<IntersectionObserver once={true} let:intersecting>
					{#if intersecting}
						<img class="project-image" src="https://picsum.photos/800/550" alt="dani" />
					{/if}
				</IntersectionObserver>
			</div>
			<div class="project">
				<IntersectionObserver once={true} let:intersecting>
					{#if intersecting}
						<img class="project-image" src="https://picsum.photos/800/550" alt="dani" />
					{/if}
				</IntersectionObserver>
			</div>
			<div class="project">
				<IntersectionObserver once={true} let:intersecting>
					{#if intersecting}
						<img class="project-image" src="https://picsum.photos/800/550" alt="dani" />
					{/if}
				</IntersectionObserver>
			</div>
			<div class="project">
				<IntersectionObserver once={true} let:intersecting>
					{#if intersecting}
						<img class="project-image" src="https://picsum.photos/800/550" alt="dani" />
					{/if}
				</IntersectionObserver>
			</div>
			<div class="project">
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
	<div class="research">
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
			<div class="icon" on:click={handleClick}>
				<MdArrowDownward />
			</div>
		</div>
	</div>

	<!-- MORE STATISTICS -->
	{#if showMoreStatistics}
		<div transition:slide class="moreStatistics" />
	{/if}

	<!-- PAIN POINTS -->
	<p class="painPoints">Pain Points</p>
	<div class="pain-top">
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

	<!-- HOW IS USPS QUALIFIED TO SERVE... -->
	<div class="main section">
		<p class="label main">How is USPS qualified to serve the un/under banked</p>
		<div class="flex-row main space-between">
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
			<div class="icon" on:click={handleClick}>
				<MdArrowDownward />
			</div>
		</div>
	</div>
</div>

<style>
	.expandablePlaceholder {
		height: 1rem;
		visibility: hidden;
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

	.main {
		grid-column: 2 / 12;
	}

	.section {
		padding: 3rem 0;
	}

	.painPoints {
		grid-column: 2 / 12;
		font-size: var(--label-size);
		padding: 3rem 0;
	}

	.painPoint p {
		text-align: center;
	}

	.pain-top {
		grid-column: 2 / 12;
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
		/* margin: 1rem 0 3rem 0; */
	}

	.icon {
		width: 32px;
		height: 32px;
	}

	.expandable {
		padding-top: 3rem;
		grid-column: 1 / 13;
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		/* gap: 1rem; */
	}

	.expandableLeft {
		grid-column: 2 / 11;
	}

	.line {
		width: 100%;
		border-bottom: 1px solid black;
		text-align: center;
	}

	.expandableRight {
		display: flex;
		align-items: center;
		/* align-self: center; */
		grid-column: 11 / 12;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		gap: 1rem;
	}

	.hero {
		height: 24rem;
		padding: 3rem 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: gray;
		grid-column: 1 / 13;
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
		padding: 4rem 0;
		display: grid;
		grid-template-columns: repeat(10, minmax(0, 1fr));
		gap: 1rem;
		grid-column: 2 / 12;
	}

	.goal {
		grid-column: 2 / 5;
	}

	.whatIDid {
		grid-column: 7 / 10;
	}

	.name {
		font-size: var(--label-size);
		font-weight: 600;
	}

	.projectInfo div {
		flex-basis: 30%;
	}

	.goal,
	.whatIDid {
		font-size: 2rem;
	}

	.description {
		font-size: var(--body-size);
	}

	.gallery {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		padding: 3rem 0;
		min-height: 100vh;
		background-color: var(--background-color);
		grid-column: 1 / 13;
	}

	.photos {
		grid-column: 2 / 12;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		grid-gap: 3rem;
	}

	.project {
		position: relative;
		width: 100%;
		color: white;
		cursor: pointer;
		transition-property: all;
		transition-duration: 500ms;
	}

	.project:hover {
		-webkit-filter: grayscale(50%);
		filter: grayscale(50%);
	}

	.research {
		grid-column: 1 / 13;
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		padding: 3rem 0;
	}

	.researchLeft {
		grid-column: 2 / 7;
	}

	.researchRight {
		grid-column: 8 / 11;
		place-self: center;
		/* display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center; */
		/* flex-basis: 30%; */
	}

	.researchRight p {
		text-align: center;
	}

	.label {
		font-size: var(--label-size);
	}

	.hugeNumber {
		font-size: 4rem;
	}
</style>

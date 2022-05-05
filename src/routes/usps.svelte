<script>
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { currentPage } from '../store';
	import { usps } from '../projectData.json';

	import ProjectHero from '../components/ProjectHero.svelte';
	import ProjectOverview from '../components/ProjectOverview.svelte';
	import UspsProjectGallery from '../components/usps/UspsProjectGallery.svelte';
	import Painpoints from '../components/usps/Painpoints.svelte';
	import Expandable from '../components/Expandable.svelte';
	import MoreResearch from '../components/usps/MoreResearch.svelte';
	import Chart from '../components/usps/Chart.svelte';

	const project = usps;
	const { route, name, heroSrc, overview, gallerySrcs } = usps;

	let heroLoaded = false;

	onMount(() => {
		currentPage.set(route);
		const heroImg = new Image();
		heroImg.src = heroSrc;
		heroImg.onload = () => {
			heroLoaded = true;
			setTimeout(() => {
				observePercentage();
			}, 150);
		};
	});

	let target;
	let observer;

	const observePercentage = () => {
		target = document.getElementById('percentage');
		observer = new IntersectionObserver((entry) => {
			let percentageElement = entry[0];
			if (percentageElement.isIntersecting) {
				increasePercentage(maxPercentage);
			}
		});

		observer.observe(target);
	};

	let percentage = 0;
	let maxPercentage = 34;

	const increasePercentage = (max) => {
		if (percentage < max) {
			percentage += 1;
			setTimeout(() => {
				increasePercentage(max);
			}, 45);
		} else {
			observer.unobserve(target);
		}
	};

	let showStatistics = false;
	let showResearch = false;
	let showAbout = false;

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

	let innerWidth;
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	<title>{name}</title>
</svelte:head>

<div class="grid">
	<!-- HERO -->
	{#if heroLoaded}
		<ProjectHero {project} />
		<ProjectOverview {overview} />
		<UspsProjectGallery {gallerySrcs} />

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
				<p id="percentage" class="callout-lg">~{percentage}%</p>

				<p>of the US population is considered under/un banked</p>
			</div>
		</div>

		<Expandable
			{handleClick}
			state={showStatistics}
			section={'statistics'}
			text={'More statistics'}
		/>
		<!-- MORE STATISTICS -->
		{#if showStatistics}
			<div transition:slide class="content">
				<Chart />
			</div>
		{/if}

		<Painpoints />

		<!-- HOW IS USPS QUALIFIED TO SERVE -->
		<div class="qualifications content py-md">
			<p class="label">How is USPS qualified to serve the un/under banked?</p>
			<div>
				<div class="flex-col pt-sm">
					<p>serves</p>
					<p class="header">161.4 MM</p>
					<p>addresses in the country</p>
				</div>
				<div class="flex-col pt-sm">
					<p>has more than</p>
					<p class="header">34,000</p>
					<p>retail locations—covering every state, city, and town</p>
				</div>
				<div class="flex-col pt-sm">
					<p>The US had postal banking</p>
					<p class="header">1911-1966</p>
					<p>and it worked</p>
				</div>
			</div>
		</div>

		<Expandable
			{handleClick}
			state={showResearch}
			section={'research'}
			text={'More research and exploration'}
		/>
		{#if showResearch}
			<MoreResearch />
		{/if}

		<!-- SUMMARY OF RESEARCH -->
		<div class="full-text py-md">
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
				<p class="label">Conclusion / Opportunity Statement</p>
				<p>
					We will provide convenient banking services for the people who are deny-listed from the
					banking system so they can easily establish financial security through the USPS Banking
					services by building trust and knowledge about personal finances.
				</p>
			</div>
		</div>

		<!-- SOLUTION -->
		<div class="full grid bg-grey">
			<div class="full-text">
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
				<div transition:slide class="full-text pb-md">
					<p class="pb-sm bold">The Who:</p>
					<p>
						Those who are denied standard bank accounts due to a rocky banking history. Bank history
						reports track how a person has handled their saving and checking accounts in the past.
						For example, these reports show if the person has overdrawn accounts, failed to pay
						fees, and even if they have been suspected of fraud.
					</p>
					<p class="pt-sm bold">The problem we are solving:</p>
					<p>
						People who are on the ChexSystems can only open second chance accounts. These accounts
						can be found in various places, but they only provide a second opportunity to either
						fail again or try to grow a little bit. There are no
					</p>
				</div>
			{/if}
		</div>
		<!-- WIREFRAME -->
		{#if innerWidth <= 640}
			<p class="label content pt-sm">Wireframe Prototype</p>
			<video class="full" controls width={innerWidth} preload="metadata">
				<source
					src="https://res.cloudinary.com/blitva/video/upload/v1645400463/Dani/usps/Untitled_design-2_odwror.mp4#t=0.5"
				/>

				<track kind="captions" />

				Sorry, your browser doesn't support embedded videos.
			</video>
			<p style="font-size: 0.95rem" class="pt-sm pb-md content">
				Interactive wireframe prototype available on desktop
			</p>
		{:else}
			<div class="content py-md">
				<p class="label">Wireframe Prototype</p>
				<div class="walkthrough flex-row py-md gap-1 flex-wrap">
					<iframe
						title="walkthrough"
						width="944"
						height="576"
						src="https://xd.adobe.com/embed/8065d6e2-a5e3-441a-8fb1-4f8d474356e8-d536/?fullscreen&amp;hints=off"
						frameborder="0"
						allowfullscreen=""
						style=""
						class="proto"
						data-scale="100"
					/>
					<div class="del">
						<p class="label">Suggested Walk-through</p>
						<ul class="steps">
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
			</div>
		{/if}

		<!-- TAKEAWAYS -->
		<div class="full grid py-md" style="background-color: var(--background-color)">
			<div class="full-text py-md">
				<p class="label bold">Takeaways/What I learned:</p>
				<div class="pt-sm">
					<p class="med">My love for UX that makes changes.</p>
					<p>
						This was the first project that I worked on that was completely driven by research.
						Truth be told, when I first started working on this project, I came up with a different
						solution than I had imaged and found research to back it up. A few weeks into the
						project I realized that I was letting my project lead my research instead of letting my
						research lead my project. I also felt that what I was creating wasn’t going to make a
						difference in anyone's life. I scrapped everything I had until then and started once
						again from the ground up. In the last 3 weeks that I had to work on the project, I found
						and created what I’ve shown in this presentation. I hope you’re impressed! I was
						certainly very passionate about getting to work on a project that I saw the potential
						for making waves in financial education and the betterment of people’s lives.
					</p>
				</div>
			</div>

			<div class="full-text pb-md">
				<p class="label bold">Further Development:</p>

				<div class="py-sm">
					<p class="med">I would like to further develope the fidelity of this project.</p>
					<p>
						Because I had a limited amount of time to research this topic and create a realistic
						solution, especially after starting over halfway through that time, the furthest I was
						able to push this project was a low fidelity prototype.
					</p>
				</div>

				<div class="py-sm">
					<p class="med">I want to create the data bank (ba-dom-ch🥁) for the lessons.</p>
					<p>
						Being able to use the SmartBanking function is great, but where do we find all the
						lessons? Well, if I had additional time, that would be the next page I would design. I’d
						make a page where the user can take a quiz about what their needs are in regards to
						financial education and explore suggested workshops and additional/popular workshops.
					</p>
				</div>
			</div>
		</div>
	{:else}
		<div style="min-height: 100vh" />
	{/if}
</div>

<style>
	.med {
		font-size: 1.3rem;
	}

	.walkthrough {
		display: flex;
		align-items: center;
	}

	.proto {
		max-height: 250px;
		transition-duration: initial;
	}

	.del > p {
		padding-bottom: 1rem;
	}

	.steps li {
		margin: 0;
		padding: 0.5rem 0 0.5rem 0;
	}

	.gap-1 {
		gap: 1rem;
		justify-content: space-around;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	li {
		padding: 0.9rem 0;
	}

	.bold {
		font-weight: 500;
	}

	.bg-grey {
		background-color: var(--background-color);
	}

	.flex-wrap {
		flex-wrap: wrap;
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
		.walkthrough {
			flex-wrap: nowrap;
			gap: 1rem !important;
		}
		.walkthrough iframe {
			margin: 0;
		}
		.proto {
			max-width: calc(50vw - 1rem);
			max-height: 80vh;
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

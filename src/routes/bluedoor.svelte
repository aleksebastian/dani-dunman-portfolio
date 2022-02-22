<script>
	import { onMount } from 'svelte';
	import { currentPage } from '../store';
	import { bluedoor } from '../projectData.json';

	import ProjectHero from '../components/ProjectHero.svelte';
	import ProjectOverview from '../components/ProjectOverview.svelte';
	import ProjectGallery from '../components/ProjectGallery.svelte';
	import Expandable from '../components/Expandable.svelte';
	import MoreResearch from '../components/bluedoor/MoreResearch.svelte';

	let heroLoaded = false;
	onMount(() => {
		currentPage.set(bluedoor.route);
		const heroImg = new Image();
		heroImg.src = bluedoor.heroSrc;
		heroImg.onload = () => {
			heroLoaded = true;
		};
	});

	let showResearch = false;
	``;
	const handleClick = (section) => {
		if (section === 'research') {
			showResearch = !showResearch;
			return;
		}
	};
</script>

<div class="grid">
	{#if heroLoaded}
		<ProjectHero project={bluedoor} />
		<ProjectOverview overview={bluedoor.overview} />
		<ProjectGallery />

		<!-- RESEARCH -->
		<div class="research content">
			<div class="sub">
				<p class="label bold">Research</p>
				<div class="first">
					<p class="label">Initial Problem Discovery</p>
					<div>
						<p>
							Underbanked: Someone who does not receive all the services available from a bank, be
							it from location to hours, they are not receiving full benefits. They are people with
							bank accounts that continue to use non-bank financial services such as moeny orders
							and bill payments.
						</p>
					</div>
				</div>
				<div>
					<p class="label">Initial Problem Discovery</p>
					<p class="label">Initial Problem Discovery</p>
					<div>
						<p>
							Underbanked: Someone who does not receive all the services available from a bank, be
							it from location to hours, they are not receiving full benefits. They are people with
							bank accounts that continue to use non-bank financial services such as moeny orders
							and bill payments.
						</p>
						<p>
							Underbanked: Someone who does not receive all the services available from a bank, be
							it from location to hours, they are not receiving full benefits. They are people with
							bank accounts that continue to use non-bank financial services such as moeny orders
							and bill payments.
						</p>
						<p>
							Underbanked: Someone who does not receive all the services available from a bank, be
							it from location to hours, they are not receiving full benefits. They are people with
							bank accounts that continue to use non-bank financial services such as moeny orders
							and bill payments.
						</p>
					</div>
				</div>
			</div>
		</div>
		<Expandable
			{handleClick}
			state={showResearch}
			section={'research'}
			text={'More Research and Exploration'}
		/>
		{#if showResearch}
			<MoreResearch />
		{/if}

		<div class="full grid" style="background-color: var(--background-color)">
			<div class="content py-md">
				<p class="label">Header</p>
				<p>Text</p>
			</div>

			<div class="content py-md">
				<p class="label">Header</p>
				<p>Text</p>
			</div>
		</div>

		<div class="content py-md">
			<p class="label">Final Deliverable</p>
			<div class="walkthrough flex-row py-md flex-wrap">
				<!-- <div class="walkthrough"> -->
				<iframe
					title="walkthrough"
					width="944"
					height="576"
					src="https://xd.adobe.com/embed/a1ebb32a-07e7-4efc-b750-4a4a4ce43691-f4b8/"
					frameborder="0"
					allowfullscreen=""
					style=""
					class="proto"
					data-scale="100"
				/>
				<!-- </div> -->
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

		<div class="full grid py-md" style="background-color: var(--background-color)">
			<div class="content py-md">
				<p class="label bold">HELLO</p>
				<div class="py-sm">
					<p class="med">hello</p>
					<p>hello 2</p>
				</div>
				<div class="py-sm">
					<p class="med">hello</p>
					<p>hello 2</p>
				</div>
				<div class="py-sm">
					<p class="med">hello</p>
					<p>hello 2</p>
				</div>
			</div>
			<div class="content py-md">
				<p class="label bold">HELLO</p>
				<div class="py-sm">
					<p class="med">hello</p>
					<p>hello 2</p>
				</div>
				<div class="py-sm">
					<p class="med">hello</p>
					<p>hello 2</p>
				</div>
				<div class="pt-sm">
					<p class="med">hello</p>
					<p>hello 2</p>
				</div>
			</div>
		</div>
	{:else}
		<div style="min-height: 100vh" />
	{/if}
</div>

<style>
	.walkthrough {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	.med {
		font-size: 1.3rem;
	}
	/* 
	.takeaway > div {
		padding
	} */

	.proto {
		/* max-width: 100vw; */
		max-height: 250px;
		transition-duration: initial;
	}

	.del > p {
		padding-bottom: 1rem;
	}

	ul {
		padding: 0;
		list-style-type: none;
	}

	.steps li {
		margin: 0;
		padding: 0.5rem 0 0.5rem 0;
	}

	.first {
		padding-bottom: 3rem !important;
	}

	.research {
		display: grid;
		grid-template-columns: repeat(10, minmax(0, 1fr));
		grid-column-gap: 1rem;
	}

	.sub {
		grid-column: 1 / -1;
	}

	.sub > div {
		padding: 1rem 0;
	}

	.sub > div > p {
		padding: 0.5rem 0;
	}

	.sub > div > div {
		padding: 0.5rem 0;
	}

	.sub > div > div > p {
		padding: 0.5rem 0;
	}

	@media (min-width: 768px) {
		.walkthrough {
			gap: 1rem;
			justify-content: space-around;
			flex-wrap: nowrap;
			gap: 1rem !important;
		}
		.walkthrough iframe {
			margin: 0;
		}
		.sub {
			grid-column: 1 / 6;
		}
		.proto {
			max-width: calc(50vw - 1rem);
			max-height: 80vh;
		}
	}
</style>

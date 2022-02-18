<script>
	import ProjectHero from '../components/ProjectHero.svelte';
	import ProjectOverview from '../components/ProjectOverview.svelte';
	import ProjectGallery from '../components/ProjectGallery.svelte';
	import Expandable from '../components/Expandable.svelte';
	import MoreResearch from '../components/bluedoor/MoreResearch.svelte';
	import { currentPage } from '../store';

	import { onMount } from 'svelte';

	const heroSrc = 'https://via.placeholder.com/1980x695?text=+';
	const hero = {
		imgSrc: 'https://via.placeholder.com/1980x695?text=+',
		header: 'BlueDoor',
		subheader: 'UX/UI'
	};
	let heroLoaded = false;
	onMount(() => {
		currentPage.set('bluedoor');
		const heroImg = new Image();
		heroImg.src = heroSrc;
		heroImg.onload = () => {
			heroLoaded = true;
		};
	});

	let showResearch = false;

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

	const projectOverviewData = [
		{
			label: 'Goal',
			text: 'To provide the underbanked and unbanked community a service for reentering the banking system through USPS. The service should be a stepping stone back into traditional banking, not a replacement for it.'
		},
		{
			label: 'Problem Statement',
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
		},
		{
			label: 'What I Did',
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
		}
	];
</script>

<div class="grid">
	{#if heroLoaded}
		<ProjectHero {hero} />
		<ProjectOverview {projectOverviewData} />
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
	{:else}
		<div style="min-height: 100vh" />
	{/if}
</div>

<style>
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
		.sub {
			grid-column: 1 / 6;
		}
	}
</style>

<script>
	import ProjectHero from '../components/ProjectHero.svelte';
	import ProjectOverview from '../components/ProjectOverview.svelte';
	import ProjectGallery from '../components/ProjectGallery.svelte';
	import Painpoints from '../components/usps/Painpoints.svelte';
	import Expandable from '../components/Expandable.svelte';
	import MoreResearch from '../components/usps/MoreResearch.svelte';

	const heroSrc = 'https://via.placeholder.com/1980x495?text=+';
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
		if (section === 'about') {
			showAbout = !showAbout;
		}
	};
</script>

<div class="grid">
	<ProjectHero {heroSrc} />
	<ProjectOverview {projectOverviewData} />
	<ProjectGallery />
	<Painpoints />
	<Expandable
		{handleClick}
		state={showResearch}
		section={'research'}
		text={'More research and exploration'}
	/>
	{#if !showResearch}
		<MoreResearch />
	{/if}
</div>

<script>
	import ProjectHero from '../components/ProjectHero.svelte';
	import ProjectOverview from '../components/ProjectOverview.svelte';
	import ProjectGallery from '../components/ProjectGallery.svelte';
	import Painpoints from '../components/usps/Painpoints.svelte';

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
</script>

<div class="grid">
	<ProjectHero {heroSrc} />
	<ProjectOverview {projectOverviewData} />
	<ProjectGallery />
	<Painpoints />
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		grid-column-gap: 1rem;
	}
</style>

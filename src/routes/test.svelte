<script>
	import ProjectHero from '../components/ProjectHero.svelte';
	import ProjectOverview from '../components/ProjectOverview.svelte';

	const heroSrc = 'https://via.placeholder.com/1280x320?text=+';
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

<ProjectHero {heroSrc} />
<ProjectOverview {projectOverviewData} />

<script>
	import { onMount } from 'svelte';
	import { currentPage } from '../store';
	import { radio } from '../projectData.json';

	import ImageLoader from '../components/image/ImageLoader.svelte';
	import ProjectHero from '../components/ProjectHero.svelte';
	import ProjectOverview from '../components/ProjectOverview.svelte';

	let heroLoaded = false;

	onMount(async () => {
		currentPage.set(radio.route);

		const heroImg = new Image();
		heroImg.src = radio.heroSrc;
		heroImg.onload = () => {
			heroLoaded = true;
		};
	});
</script>

<svelte:head>
	<title>{radio.name}</title>
</svelte:head>

{#if heroLoaded}
	<div class="grid">
		<ProjectHero project={radio} />
		<ProjectOverview overview={radio.overview} />
	</div>
{:else}
	<div style="min-height: 100vh" />
{/if}

<style>
	@media (min-width: 640px) {
	}
</style>

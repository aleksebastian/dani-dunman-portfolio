<script>
	import ComingSoon from '../components/ComingSoon.svelte';

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
	<ComingSoon />
	<div class="grid">
		<ProjectHero project={radio} />
		<div class="space" />
		<!-- <ProjectOverview overview={radio.overview} />
		<div class="video-wrapper content">
			<div class="video content"><p>VIDEO GOES HERE</p></div>
		</div> -->
	</div>
{:else}
	<div style="min-height: 100vh" />
{/if}

<style>
	.space {
		height: 14rem;
	}

	.video-wrapper {
		min-height: 850px;
		background-color: grey;
	}

	.video {
		position: relative;
		min-height: 650px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: black;
		color: white;
	}

	@media (min-width: 640px) {
	}
</style>

<script>
	import ComingSoon from '../components/ComingSoon.svelte';

	import { onMount } from 'svelte';
	import { currentPage } from '../store';
	import { radio } from '../projectData.json';

	import ImageLoader from '../components/image/ImageLoader.svelte';
	import ProjectHero from '../components/ProjectHero.svelte';
	import ProjectOverview from '../components/ProjectOverview.svelte';
	import NewExpandable from '../components/NewExpandable.svelte';
	import MoreResearch from '../components/radio/MoreResearch.svelte';

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
		<div class="video-wrapper content">
			<div class="video"><p>VIDEO GOES HERE</p></div>
		</div>

		<div class="full-text">
			<p class="callout-lg">Research</p>
			<p class="callout">Field Research</p>
			<p class="py-sm">
				This is going to be something i come up with and ill type it out later... about visiting
				other museums and how this project started.
			</p>
			<p class="pb-sm">
				Before I researched anything about radio, I focused on what kind of experience I wanted to
				create for the audience. There were a couple of things that I wanted to make sure were true
				for my exhibit, so I made a list that I came back to to make sure I was still focused on the
				challenge at hand. I call it the “needs to be true” list.
			</p>
		</div>
		<div class="research content">
			<div class="imageGrid">
				<div class="placeholderSqr" />
				<div class="placeholderSqr" />
				<div class="placeholderSqr" />
				<div class="placeholderSqr" />
				<div class="placeholderSqr" />
				<div class="placeholderSqr" />
				<div class="placeholderSqr" />
			</div>
		</div>
		<NewExpandable title="More Research and Exploration">
			<MoreResearch />
		</NewExpandable>
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

	.imageGrid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
		gap: 1rem;
	}

	.placeholderSqr {
		min-width: 135px;
		min-height: 135px;
		background-color: black;
	}

	@media (min-width: 640px) {
	}
</style>

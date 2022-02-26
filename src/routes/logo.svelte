<script>
	import { onMount } from 'svelte';
	import { currentPage } from '../store';
	import { logo } from '../projectData.json';

	import ImageLoader from '../components/image/ImageLoader.svelte';
	import ProjectHero from '../components/ProjectHero.svelte';

	let heroLoaded = false;

	onMount(async () => {
		currentPage.set(logo.route);

		const heroImg = new Image();
		heroImg.src = logo.heroSrc;
		heroImg.onload = () => {
			heroLoaded = true;
		};
	});

	const logoSrcs = [
		'https://res.cloudinary.com/blitva/image/upload/q_auto:best/f_auto/v1645400434/Dani/logos/Artboard_32_pvd1ag.png',
		'https://res.cloudinary.com/blitva/image/upload/q_auto:best/f_auto/v1645400432/Dani/logos/Artboard_39_fpoy7b.png',
		'https://res.cloudinary.com/blitva/image/upload/q_auto:best/f_auto/v1645400433/Dani/logos/Artboard_38_iiywsm.png',
		'https://res.cloudinary.com/blitva/image/upload/q_auto:best/f_auto/v1645400433/Dani/logos/Artboard_33_bf7b6m.png',
		'https://res.cloudinary.com/blitva/image/upload/q_auto:best/f_auto/v1645400436/Dani/logos/Artboard_36_lx2oab.png',
		'https://res.cloudinary.com/blitva/image/upload/q_auto:best/f_auto/v1645400437/Dani/logos/Artboard_37_gss4bi.png',
		'https://res.cloudinary.com/blitva/image/upload/q_auto:best/f_auto/v1645400438/Dani/logos/Artboard_35_qyvg6e.png',
		'https://res.cloudinary.com/blitva/image/upload/q_auto:best/f_auto/v1645400439/Dani/logos/Artboard_34_pe1kit.png'
	];
</script>

<svelte:head>
	<title>{logo.name}</title>
</svelte:head>

{#if heroLoaded}
	<div class="grid">
		<ProjectHero project={logo} />
		<p class="full-text pt-md">
			Here are a couple of logos I’ve designed. They came together by concept, and some have even
			won awards.
		</p>
		<div class="subgrid content pb-md">
			{#each logoSrcs as logoSrc}
				<ImageLoader class="img-container" src={logoSrc} alt="logo" />
			{/each}
		</div>
	</div>
{:else}
	<div style="min-height: 100vh" />
{/if}

<style>
	.subgrid {
		display: grid;
		grid-gap: 3rem;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}

	@media (min-width: 640px) {
	}
</style>

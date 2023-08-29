<script>
	import ProjectHero from '../../components/ProjectHero.svelte';
	import { onMount } from 'svelte';

	const heroSrc = 'https://via.placeholder.com/1980x695?text=+';
	const hero = {
		imgSrc: 'https://via.placeholder.com/1980x695?text=+',
		header: 'BlueDoor',
		subheader: 'UX/UI'
	};
	let heroLoaded = false;
	onMount(() => {
		const heroImg = new Image();
		heroImg.src = heroSrc;
		heroImg.onload = () => {
			heroLoaded = true;
		};
	});
</script>

<div class="grid">
	{#if heroLoaded}
		<ProjectHero {hero} />
	{:else}
		<div style="min-height: 100vh" />
	{/if}
</div>

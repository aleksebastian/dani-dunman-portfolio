<script>
	import Hero from '../components/Hero.svelte';
	import Gallery from '../components/Gallery.svelte';
	import { page } from '$app/stores';
	import { afterUpdate, beforeUpdate, onMount } from 'svelte';

	let galleryEle;
	const defaultYOffset = -70;

	const getScrollToPosition = (element) =>
		element.getBoundingClientRect().top + window.scrollY + defaultYOffset;

	const replaceStateWithQuery = (values) => {
		const url = new URL($page.url);
		url.searchParams.delete('scroll');
		history.replaceState({}, '', url);
	};

	const scrollToGallery = () => {
		setTimeout(
			() =>
				window.scrollTo({
					top: getScrollToPosition(galleryEle),
					behavior: 'smooth'
				}),
			150
		);
	};

	$: {
		if (mounted && $page.url.searchParams.get('scroll')) {
			replaceStateWithQuery();
			scrollToGallery();
		}
	}

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Daniela Dunman</title>
</svelte:head>

<section class="content">
	<Hero />
	<Gallery bind:galleryEle />
</section>

<style>
	.content {
		padding: 2rem;
		color: #d3a615;
	}

	@media (min-width: 768px) {
		.content {
			padding: 0 6rem;
		}
	}
</style>

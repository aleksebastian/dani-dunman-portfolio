<script>
	export let src;
	export let alt;

	import { onMount } from 'svelte';
	import IntersectionObserver from './IntersectionObserver.svelte';
	import Image from './Image.svelte';
	let nativeLoading = false;

	onMount(() => {
		if ('loading' in HTMLImageElement.prototype) {
			nativeLoading = true;
		}
	});
</script>

<IntersectionObserver once={true} let:intersecting>
	{#if intersecting || nativeLoading}
		<Image {alt} {src} />
	{/if}
</IntersectionObserver>

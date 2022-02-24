<script>
	import { onMount } from 'svelte';
	import { currentPage } from '../store';
	import { radio } from '../projectData.json';

	onMount(() => currentPage.set(radio.route));
</script>

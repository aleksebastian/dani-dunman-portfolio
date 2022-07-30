<script>
	import { slide } from 'svelte/transition';
	import MdArrowDownward from 'svelte-icons/md/MdArrowDownward.svelte';

	// export let handleClick;
	// export let state;
	// export let section;
	export let title;
	let isOpen = true;
	const handleClick = () => (isOpen = !isOpen);
</script>

<div class="expandable content pt-md">
	<p on:click={handleClick}>{title}</p>
	<div>
		<div class="line" />
		<div
			class="icon"
			style="transform: {isOpen ? 'rotateZ(0)' : 'rotateZ(180deg)'}"
			on:click={handleClick}
		>
			<MdArrowDownward />
		</div>
	</div>
</div>
{#if isOpen}
	<div transition:slide={{ duration: 1000 }} class="content grid">
		<slot />
	</div>
{/if}

<style>
	p {
		cursor: pointer;
		z-index: 1;
	}

	.expandable {
		display: grid;
		margin-bottom: 1rem;
	}

	.expandable > p {
		font-size: var(--expand-label);
		margin-bottom: -1rem;
	}

	.expandable > div {
		align-items: center;
		display: flex;
	}

	.line {
		width: 100%;
		border-bottom: 1px solid black;
	}

	.icon {
		margin-bottom: 0.1rem;
		width: 40px;
		height: 32px;
		transition: all 0.4s ease;
		cursor: pointer;
	}
</style>

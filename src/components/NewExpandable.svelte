<script>
	import { slide } from 'svelte/transition';
	import MdArrowDownward from 'svelte-icons/md/MdArrowDownward.svelte';
	export let title;
	let isOpen = false;
	const handleClick = () => {
		isOpen = !isOpen;
	};
	const handleKeyDown = (event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			handleClick();
		}
	};
</script>

<div class="expandable-container">
	<div
		class="expandable-header"
		on:click={handleClick}
		on:keydown={handleKeyDown}
		role="button"
		tabindex="0"
	>
		<span class="title">{title}</span>
		<div class="line-icon-wrapper">
			<div class="line"></div>
			<button
				type="button"
				class="icon"
				style="transform: {isOpen ? 'rotateZ(0)' : 'rotateZ(180deg)'}"
				aria-expanded={isOpen}
				aria-label={isOpen ? 'Collapse' : 'Expand'}
			>
				<MdArrowDownward />
			</button>
		</div>
	</div>

	{#if isOpen}
		<div transition:slide={{ duration: 1000 }} class="content grid">
			<slot></slot>
		</div>
	{/if}
</div>

<style>
	.expandable-container {
		margin-bottom: 1rem;
	}

	.expandable-header {
		display: flex;
		align-items: center;
		cursor: pointer;
		width: 100%;
		padding: 0.5rem 0; /* Add some padding for better clickability */
	}

	.title {
		font-size: var(--expand-label);
		margin-right: auto; /* Pushes line-icon-wrapper to the right */
		z-index: 1; /* From original p style */
	}

	.line-icon-wrapper {
		display: flex;
		align-items: center;
		flex-grow: 1; /* Allows line to take space */
		margin-left: 1rem; /* Space between title and line */
	}

	.line {
		flex-grow: 1;
		height: 1px;
		background-color: black;
		margin-right: 8px;
	}

	.icon {
		width: 40px; /* Original width */
		height: 32px; /* Original height */
		transition: all 0.4s ease;
		background: none;
		border: none;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		cursor: pointer; /* Ensure cursor indicates interactivity */
	}

	.content {
		/* Styles for the content area, if any, were in the slot's wrapper */
		/* Ensure it's clear this is a separate block */
		padding-top: 0.5rem; /* Add some space when expanded */
	}
</style>

<script>
	import MdArrowDownward from 'svelte-icons/md/MdArrowDownward.svelte';

	export let handleClick;
	export let state;
	export let section;
	export let text;
</script>

<div class="expandable content">
	<p>{text}</p>
	<div>
		<div class="line" />
		<div
			class="icon"
			style="transform: {state ? 'rotateZ(0)' : 'rotateZ(180deg)'}"
			on:click={() => handleClick(section)}
		>
			<MdArrowDownward />
		</div>
	</div>
</div>

<style>
	.expandable {
		display: grid;
		grid-template-columns: subgrid;
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

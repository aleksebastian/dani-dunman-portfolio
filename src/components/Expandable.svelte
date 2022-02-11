<script>
	import MdArrowDownward from 'svelte-icons/md/MdArrowDownward.svelte';

	export let handleClick;
	export let state;
	export let section;
	export let text;
</script>

<div class="expandable main py-md">
	<p>{text}</p>
	<div class="second flex-row">
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
	p {
		font-size: var(--expand-label);
		margin-bottom: -1rem;
		padding: 0;
	}
	.expandable {
		display: grid;
		grid-template-columns: subgrid;
		margin-bottom: 1rem;
	}

	.main {
		grid-column: 2 / 12;
	}

	.second {
		align-items: center;
	}

	.flex-row {
		display: flex;
	}

	.line {
		width: 100%;
		border-bottom: 1px solid black;
		text-align: center;
	}

	.py-md {
		padding: 0;
	}

	.icon {
		margin-bottom: 0.1rem;
		width: 40px;
		height: 32px;
		transition: all 0.4s ease;
		cursor: pointer;
	}
</style>

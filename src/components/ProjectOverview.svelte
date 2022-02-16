<script>
	export let projectOverviewData;

	let gridColumn;
	let flexBasis;
	let cols = projectOverviewData.length;

	if (cols === 1) {
		gridColumn = '2 / 12';
		flexBasis = '100%';
	}
	if (cols === 2) {
		gridColumn = '3 / 11';
		flexBasis = '40%';
	}
	if (cols === 3) {
		gridColumn = '2 / 12';
		flexBasis = '30%';
	}
</script>

<div class="projectInfo py-md" style="grid-column: {gridColumn}">
	{#each projectOverviewData as projectData}
		<div style="flex-basis: {flexBasis}">
			<p class="label bold">{projectData.label}</p>
			<p class="body-text">{projectData.text}</p>
		</div>
	{/each}
</div>

<style>
	.projectInfo {
		display: flex;
	}
	@media (max-width: 1023px) {
		.projectInfo {
			grid-column: 2 / 12 !important;
			flex-direction: column;
			gap: 2rem;
		}
		.projectInfo div {
			flex-basis: 100%;
		}
	}

	/* .py-md {
		padding: 3rem 0;
	} */

	/* .label {
		font-size: var(--label-size);
	} */

	.body-text {
		font-size: var(--body-size);
	}

	.bold {
		font-weight: 500;
	}

	@media (min-width: 1024px) {
		.projectInfo {
			justify-content: space-between;
			gap: 0;
		}
	}
</style>

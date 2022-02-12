<script>
	import { fade } from 'svelte/transition';

	export let heroSrc;
</script>

<!-- <div class="grid"> -->
<div in:fade class="hero full py-md">
	<img src={heroSrc} alt="project" />
	<div class="text">
		<p class="project-name">USPS SmartBanking</p>
		<p class="subheader">UX/Research</p>
	</div>
</div>

<!-- </div> -->
<style>
	/* GRID RULE AND GRID ELEMENT SHOULD BE REMOVED */
	/* .grid {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		grid-column-gap: 1rem;
	} */

	img {
		display: block;
	}

	.text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}

	.hero {
		position: relative;
		display: inline-block;
		/* margin-bottom: 3rem; */
	}

	/* .full {
		grid-column: 1 / -1;
	} */

	.project-name {
		font-size: var(--label-size);
		font-weight: 600;
	}

	.subheader {
		margin-top: -0.25rem;
		font-size: var(--body-size);
	}

	@media (min-width: 768px) {
		.project-name {
			font-size: var(--header-size);
			font-weight: 500;
		}

		.subheader {
			font-size: var(--label-size);
		}
	}
</style>

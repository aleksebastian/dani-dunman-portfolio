<script>
	import { slide } from 'svelte/transition';
	import ImageLoader from '../image/ImageLoader.svelte';
</script>

<div transition:slide={{ duration: 1000 }} class="content container">
	<!-- UX RESEARCH METHODS -->

	<div class="txt-1">
		<p class="label py-sm">UX RESEARCH METHOD 01: How Might We (HMW’s)</p>
		<p>
			My team and I created a Miro board where we could share our research findings and organize
			them in such a way that we could easily compare and contrast between different questions and
			problem spaces. We looked over our HMWs and reorganized our sticky notes into the categories
			of information distribution, resources/education, security, utility services, and tasks. From
			there, we sorted through them once again and created another table with the most relevant and
			helpful questions. In this table, we listed possible answers to the HMWs.
		</p>
	</div>
	<div class="img-1">
		<ImageLoader alt="rectangle" src={'https://picsum.photos/800/500'} />
	</div>

	<p class="txt-2 section">
		My team and I created a Miro board where we could share our research findings and organize them
		in such a way that we could easily compare and contrast between different questions and problem
		spaces. We looked over our HMWs and reorganized our sticky notes into the categories of
		information distribution, resources/education, security, utility services, and tasks. From
		there, we sorted through them once again and created another table with the most relevant and
		helpful questions. In this table, we listed possible answers to the HMWs.
	</p>

	<div class="txt-3 section">
		<p class="label py-sm">UX RESEARCH METHOD 01: How Might We (HMW’s)</p>
		<p>
			My team and I created a Miro board where we could share our research findings and organize
			them in such a way that we could easily compare and contrast between different questions and
			problem spaces. We looked over our HMWs and reorganized our sticky notes into the categories
			of information distribution, resources/education, security, utility services, and tasks. From
			there, we sorted through them once again and created another table with the most relevant and
			helpful questions. In this table, we listed possible answers to the HMWs.
		</p>
	</div>
	<div class="img-3">
		<ImageLoader alt="rectangle" src={'https://picsum.photos/800/500'} />
	</div>

	<div class="txt-4 section">
		<p class="label py-sm">UX RESEARCH METHOD 01: How Might We (HMW’s)</p>
		<p>
			My team and I created a Miro board where we could share our research findings and organize
			them in such a way that we could easily compare and contrast between different questions and
			problem spaces. We looked over our HMWs and reorganized our sticky notes into the categories
			of information distribution, resources/education, security, utility services, and tasks. From
			there, we sorted through them once again and created another table with the most relevant and
			helpful questions. In this table, we listed possible answers to the HMWs.
		</p>
	</div>
	<div class="img-4">
		<div>
			<ImageLoader alt="rectangle" src={'https://picsum.photos/400/50'} />
		</div>
		<div>
			<ImageLoader alt="rectangle" src={'https://picsum.photos/400/50'} />
		</div>
		<div>
			<ImageLoader alt="rectangle" src={'https://picsum.photos/400/50'} />
		</div>
		<div>
			<ImageLoader alt="rectangle" src={'https://picsum.photos/400/50'} />
		</div>
		<div>
			<ImageLoader alt="rectangle" src={'https://picsum.photos/400/50'} />
		</div>
		<div>
			<ImageLoader alt="rectangle" src={'https://picsum.photos/400/50'} />
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.section {
		padding-top: 2rem;
	}

	.txt-2 {
		text-align: center;
	}

	div.img-4 > * {
		padding: 0.25rem;
	}

	@media (min-width: 768px) {
		.container {
			display: grid;
			column-gap: 1rem;
			row-gap: 3rem;
			grid-template-columns: repeat(8, 1fr) !important;
			align-items: center;
			grid-template:
				'txt-1 txt-1 txt-1 txt-1 img-1 img-1 img-1 img-1'
				'  .   txt-2 txt-2 txt-2 txt-2 txt-2 txt-2   . '
				'img-3 img-3 img-3 img-3 img-3 txt-3 txt-3 txt-3'
				'txt-4 txt-4 txt-4 txt-4   .   img-4 img-4 img-4';
		}

		.section {
			padding-top: 0;
		}

		.img-1 {
			grid-area: img-1;
		}
		.txt-1 {
			grid-area: txt-1;
		}
		.txt-2 {
			margin-top: -1.5rem;
			grid-area: txt-2;
		}
		.img-3 {
			grid-area: img-3;
		}
		.txt-3 {
			grid-area: txt-3;
		}
		.img-4 {
			grid-area: img-4;
		}

		.txt-4 {
			grid-area: txt-4;
		}
	}
</style>

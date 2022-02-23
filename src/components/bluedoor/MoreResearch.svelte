<script>
	import { slide } from 'svelte/transition';
	import ImageLoader from '../image/ImageLoader.svelte';
</script>

<div transition:slide={{ duration: 1000 }} class="content container">
	<!-- UX RESEARCH METHODS -->

	<div class="txt-1">
		<p class="label py-sm">RESEARCH METHOD 01: Interview</p>
		<p>
			I interviewed my friend Alex, who has also taught languages in the US as well as overseas. He
			had a lot of the same frustrations what I had, although he did meantion a few things that
			differed from my experience. His classes were in-person, while mine are online, and therefore
			required different tools.
		</p>
	</div>
	<div class="img-1">
		<ImageLoader
			alt="rectangle"
			src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/c_scale,w_800/v1645400430/Dani/bluedoor/alex_interview_gif_alvael.gif"
		/>
	</div>

	<p class="txt-2 section">
		“Every time after the class, I had to write in a folder. I had the outline of the day, what did
		you cover, how did the student do, all that. That was for people, not only for the managers to
		understand that you were working, but also because the next teacher would know on what page to
		start, or they'd know what to do the next class." —Alex Spadaro
	</p>

	<div class="txt-3 section">
		<p class="label py-sm">RESEARCH METHOD 02: How Might We</p>
		<p>
			I was able to make a list of all the ideas that came to me and later go through and mark the
			ones that eventually made it into the solution. The HMWs helped me keep my focus on what
			needed to be addressed without jumping to hypothetical cool features.
		</p>
	</div>
	<div class="img-3">
		<ImageLoader
			alt="rectangle"
			src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/c_scale,w_800/v1645400426/Dani/bluedoor/HMW_bluedoor_drlki9.jpg"
		/>
	</div>

	<div class="txt-4 section">
		<p class="label py-sm">RESEARCH METHOD 03: Need Statements</p>
		<p>
			Need Statements helped me stay focused on the problem. When you have too many ideas, and too
			many of them are "good", how do you know what is necessary and what isn't? Need statements
			helped keep me focused on the NEEDS of the user. I was able to find my way back to the
			basics—does this feature directly point back to the needs of my user?
		</p>
	</div>
	<div class="img-4">
		<ImageLoader
			alt="rectangle"
			src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/c_scale,w_800/v1645400423/Dani/bluedoor/needStatements_bluedoor_i4j2jd.jpg"
		/>
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
		/* padding: 0.25rem; */
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
				'txt-4 txt-4 txt-4 txt-4 img-4 img-4 img-4 img-4';
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
			padding: 0.5rem;
			grid-area: img-4;
			box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
		}

		.txt-4 {
			grid-area: txt-4;
		}
	}
</style>

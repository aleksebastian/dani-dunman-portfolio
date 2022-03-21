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
			src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/c_scale,w_800/r_215/v1645400430/Dani/bluedoor/alex_interview_gif_alvael.gif"
		/>
	</div>

	<p class="txt-2 section pb-md">
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
	<div class="img-3 pb-md">
		<ImageLoader
			alt="rectangle"
			src="https://res.cloudinary.com/blitva/image/upload/q_auto/f_auto/c_scale,w_800/v1645400426/Dani/bluedoor/HMW_bluedoor_drlki9.jpg"
		/>
	</div>

	<div class="txt-4" style={'margin-top: -0.5rem'}>
		<p class="label py-sm">RESEARCH METHOD 03: Need Statements</p>
		<p>
			Need Statements helped me stay focused on the problem. When you have too many ideas, and too
			many of them are "good", how do you know what is necessary and what isn't? Need statements
			helped keep me focused on the NEEDS of the user. I was able to find my way back to the
			basics—does this feature directly point back to the needs of my user?
		</p>
	</div>

	<div class="img-4" style={'margin-top: -0.5rem'}>
		<p class="thought">
			Eduardo needs a way to share files with the other teacher with notes so that he can train her
			more effectively, easily (which in turn would create a better teaching experience for her, and
			her students).
		</p>
		<p class="thought">
			Eduardo needs a way to keep track of how many classes Daniela has given so that he can pay her
			accordingly.
		</p>
		<p class="thought">
			Daniela needs a way to keep Eduardo in the know of how many classes she has given during each
			pay-period so that she can get paid on time, without hassle.
		</p>
		<p class="thought">
			Daniela needs a way to come up with better ideas for lessons and activities so that she can
			deliver a lesson that is entertaining and educational for the student (which keeps them
			interested and wanting to learn.
		</p>
		<p class="thought">
			Alex needs a way to send personalized homework to students, and notify the teacher that will
			deliver the next lesson to the student so that they can all be on the same page as far as
			where the student is in his studies and what (s)he needs to do next.
		</p>
		<p class="thought">
			Alex needs a way to keep track of the assignments he was assigned to his students so that he
			can seem more professional.
		</p>
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

	.thought {
		background-color: #fff;
		border-radius: 15px;
		font-size: 0.9rem;
		padding: 15px;
	}

	.img-4 {
		background: rgb(8, 58, 75);
		background: linear-gradient(180deg, rgba(8, 58, 75, 1) 0%, rgba(15, 116, 150, 1) 100%);
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
		gap: 20px;
		padding: 20px;
		/* margin-bottom: 2.5rem; */
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
				'txt-4 txt-4 txt-4 img-4 img-4 img-4 img-4 img-4';
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
		.txt-4 {
			grid-area: txt-4;
		}

		.img-4 {
			grid-area: img-4;
			background: rgb(8, 58, 75);
			background: linear-gradient(180deg, rgba(8, 58, 75, 1) 0%, rgba(15, 116, 150, 1) 100%);
			display: flex;
			flex-flow: row wrap;
			justify-content: center;
			align-items: center;
			gap: 20px;
			padding: 20px;
			/* margin-bottom: 2.5rem; */
		}

		.thought {
			background-color: #fff;
			padding: 0 20px;
			border-radius: 30px;
			max-width: 190px;
			font-size: 0.85rem;
			padding: 20px;
		}
	}
</style>

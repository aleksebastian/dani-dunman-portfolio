<script>
	import ComingSoon from '../../components/ComingSoon.svelte';

	import { onMount } from 'svelte';
	import { currentPage } from '../../store';
	import { radio } from '../../projectData.json';

	import ImageLoader from '../../components/image/ImageLoader.svelte';
	import ProjectHero from '../../components/ProjectHero.svelte';
	import ProjectOverview from '../../components/ProjectOverview.svelte';
	import NewExpandable from '../../components/NewExpandable.svelte';
	import MoreResearch from '../../components/radio/MoreResearch.svelte';
	import MdArrowForward from 'svelte-icons/md/MdArrowForward.svelte';
	import MoreResearch2 from '../../components/radio/MoreResearch2.svelte';

	let heroLoaded = false;

	onMount(async () => {
		currentPage.set(radio.route);

		const heroImg = new Image();
		heroImg.src = radio.heroSrc;
		heroImg.onload = () => {
			heroLoaded = true;
		};
	});
</script>

<svelte:head>
	<title>{radio.name}</title>
</svelte:head>

{#if heroLoaded}
	<div class="grid">
		<ProjectHero project={radio} />
		<ProjectOverview overview={radio.overview} />
		<div class="video-wrapper full bg-grey">
			<video controls>
				<source
					src="https://res.cloudinary.com/blitva/video/upload/v1650507985/Dani/radio/MarconiIntroduction_xqi2ve.mp4"
					type="video/mp4"
				/>
				<track kind="captions" />
			</video>
		</div>

		<div class="full-text py-md">
			<p class="label bold">Research</p>
			<p class="label">Field Research</p>
			<p class="py-sm">
				Before researching anything related to radio, I focused on what kind of experience I wanted to create for the audience. There were a couple of things I wanted to make sure were true for my exhibit, so I made a list that I could reference to ensure that I stayed focused on the challenge. I call it the “needs to be true” list.

			</p>
		</div>
		<div class="research content">
			<img
				class="stickyNotesImg"
				src="https://res.cloudinary.com/blitva/image/upload/v1645400440/Dani/radio/Radio_pr6g2w.jpg"
				alt="Sticky notes - needs to be true list"
			/>
		</div>
		<NewExpandable title="More Research and Exploration">
			<MoreResearch />
		</NewExpandable>
		<div class="bestPractices content pt-md">
			<p>Next, I began my research on types of interactive exhibits and technologies.</p>
			<p class="label">Best Practices</p>
			<p>
				The first thing I searched for were best practices for museums. And what I found was pretty
				straight forward:
			</p>
			<ul>
				<li>
					<div class="icon">
						<MdArrowForward />
					</div>
					<p>Have a persona (audience) in mind</p>
				</li>
				<li>
					<div class="icon">
						<MdArrowForward />
					</div>
					<p>A good exhibit will tell a story (and stories within that story)</p>
				</li>
				<li>
					<div class="icon">
						<MdArrowForward />
					</div>
					<p>Have a defined linear flow</p>
				</li>
				<li>
					<div class="icon">
						<MdArrowForward />
					</div>
					<p>Gamification can make an exhibit exciting</p>
				</li>
				<li>
					<div class="icon">
						<MdArrowForward />
					</div>
					<p>Divide large exhibits into sections</p>
				</li>
			</ul>
			<p>So I added these things to my “needs to be true” list.</p>
		</div>
		<NewExpandable title="More Research and Exploration">
			<MoreResearch2 />
		</NewExpandable>
	</div>
	<div class="full grid bg-grey">
		<div class="full-text py-md">
			<p class="label pb-sm">Conclusion/Opportunity Statement</p>
			<p>
				With an interactive exhibit that puts the visitor in the context of the subject, minimizes reading as the main form of contextualizing and education, and guides the visitor through a definite timeline and path, I can enhance the visitor experience at the Museum of Communication while also appealing to a wider audience. This will ultimately bring in more people and give them a more interesting and memorable experience.
			</p>
		</div>
	</div>
	<div class="grid py-md">
		<div class="full-text bestPractices">
			<p class="label">Solution</p>
			<p>
				Through this exhibit, the visitor will experience firsthand what it was like to be in 5 different times in history when radio changed the world. Each room presents, in story form, one of these eras. And in each, the visitor plays an assisting role in the achievement of the event. The last room of the walk-through will recap everything the viewer learned and present them with a takeaway. The visitor will go home having learned about how the radio was discovered and invented, how it works, and how it has changed and influenced history.
			</p>
			<p>The five stories that the visitor will travel through, in order, are:
</p>
			<ol>
				<li>The First Radio Message</li>
				<li>Radio in WW1</li>
				<li>The First Radio Station</li>
				<li>Edwin Armstrong and The Creation of FM Radio</li>
				<li>What about now?</li>
			</ol>
			<p>For the sake of this project, I focused on the first room, The First Radio Message.</p>
		</div>
		<div class="content py-md museumImgs">
			<img
				src="https://res.cloudinary.com/blitva/image/upload/v1645400424/Dani/radio/floorplan1_obr2q4.jpg"
				alt="Museum of Communication Radio Exhibit"
			/>
			<img
				src="https://res.cloudinary.com/blitva/image/upload/v1645400423/Dani/radio/floorplan2_elniuo.jpg"
				alt="Room 1: The First Radio Message: Marconi's First Successful Test"
			/>
		</div>
		<div class="content pb-md">
			<p class="label">User journey map and mock-ups</p>
			<img
				class="journeyImg"
				src="https://res.cloudinary.com/blitva/image/upload/v1645400431/Dani/radio/journey-map-and-mockups-_qss8fj.jpg"
				alt="User journey map and mock-ups"
			/>
		</div>
		<div class="full-text py-md">
			<p class="label pb-sm">Takeaways/What I learned:</p>
			<p class="text-md">
				Look for inspiration in places unrelated to the project you’re working on.
			</p>
			<p>
				When I researched museum exhibits, I wanted to see what other museums had done about radio. In a nutshell, I couldn’t find any exhibit styles besides the traditional “look but don’t touch.” No one had done anything interesting with the radio. This was a good thing because whatever I decided to do would be new. But I also had no jumping-off point or inspiration on how to present radio. This led me to search for inspiration outside of museums. One of the most interesting things I found was escape rooms, and I believe this helped jumpstart a more exciting direction for this exhibit.
			</p>
		</div>

		<div class="full-text py-md">
			<p class="label pb-sm">Further Development</p>
			<div class="furtherDev">
				<div class="bestPractices">
					<p class="text-md">I would like to develop the other rooms in the exhibit.</p>
					<p>
						This seems pretty straightforward as further development. But what I would also try to
						do is make the transition from room to room smoother.
					</p>
				</div>
				<div class="bestPractices">
					<p class="text-md">I’d create specific personas for visitors.</p>
					<p>
						If visitors had specified roles to fulfill, everyone would actively participate. When
						everyone is part of a team and has specific jobs, they start to build trust with each
						other, and this would make the experience that much more gratifying. I’d look into
						making levels for the challenges.
					</p>
				</div>
				<div class="bestPractices">
					<p class="text-md">I’d look into adding levels of difficulty.</p>
					<p>
						To make the experience more engaging to all audiences. This way, younger children would have an easier time in the exhibit, and older visitors who are up for a challenge can have a more realistic experience.
					</p>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div style="min-height: 100vh" />
{/if}

<style>
	.furtherDev {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.furtherDev > div > p:last-child {
		margin-top: -1rem;
	}

	.bestPractices {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.museumImgs {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
		gap: 1rem;
		/* border: 1px solid red; */
	}

	.stickyNotesImg {
		/* border: 1px solid red; */
	}

	ul {
		list-style-type: none;
		padding: 0;
		margin-top: -0.5rem;
	}

	ol {
		margin-top: -0.5rem;
	}

	ol > li {
		list-style-type: decimal;
		/* list-style-position: outside; */
		/* margin-left: -1rem; */
		display: list-item;
	}

	li {
		display: flex;
		/* align-items: center; */
		gap: 0.5rem;
		margin: 0.5rem 0;
	}

	.icon {
		min-width: 32px;
		max-width: 32px;
		margin-bottom: -0.5rem;
		/* height: 32px; */
		/* margin: 1rem; */
	}

	.video-wrapper {
		display: flex;
		justify-content: center;
		padding: 2rem 0;
	}

	.video-wrapper > video {
		max-width: 100%;
	}

	@media (min-width: 640px) {
		li {
			align-items: center;
		}
	}
</style>

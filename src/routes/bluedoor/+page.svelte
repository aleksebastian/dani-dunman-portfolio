<script>
	import { onMount } from 'svelte';
	import { bluedoor } from '../../projectData.json';
	import ProjectHero from '../../components/ProjectHero.svelte';
	import ProjectOverview from '../../components/ProjectOverview.svelte';
	import ProjectGallery from '../../components/ProjectGallery.svelte';
	import Expandable from '../../components/Expandable.svelte';
	import MoreResearch from '../../components/bluedoor/MoreResearch.svelte';

	const project = bluedoor;
	const { route, name, heroSrc, overview, gallerySrcs } = bluedoor;

	let heroLoaded = false;
	onMount(() => {
		const heroImg = new Image();
		heroImg.src = heroSrc;
		heroImg.onload = () => {
			heroLoaded = true;
		};
	});

	let showResearch = false;
	const handleClick = (section) => {
		if (section === 'research') {
			showResearch = !showResearch;
			return;
		}
	};
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<div class="grid">
	{#if heroLoaded}
		<ProjectHero {project} />
		<ProjectOverview {overview} />
		<ProjectGallery {gallerySrcs} />

		<!-- RESEARCH -->
		<div class="research content py-md">
			<div class="sub">
				<p class="label bold">Research</p>
				<div class="first">
					<p class="label">Initial Problem Discovery</p>
					<div>
						<p>
							Because this project was aimed at solving a problem in my own life and work, it was
							pretty easy to find the problem without having to do too much research. Because the
							company I work for is small and based in Brazil (2 employees total, including myself),
							there hasn't been a need for more sophisticated communication and file sharing. But
							this has made my job less efficient and file keeping and sharing complicated.
						</p>
					</div>
				</div>
				<div>
					<p class="label">Initial Research</p>
					<p class="label">Competitive Audit</p>
					<div>
						<p>
							I started looking into Content Management Systems (CMS) and Learning Management
							Systems (LMS) to see what programs were already out there that were.
						</p>
						<p>
							Educational LMSs like Canvas, Blackboard, and Tracs were helpful with organizing
							files, but there was no way of sharing them with other teachers.
						</p>
						<p>
							My first question was: Does anyone else have issues like this? So, to answer this, I
							looked around in my community for someone who had a similar job as I did.
						</p>
					</div>
				</div>
			</div>
			<div class="screenshots">
				<img
					src="https://res.cloudinary.com/blitva/image/upload/r_60/v1647368118/Dani/bluedoor/IMG_1174_kc1hs8.jpg"
					alt="whatsapp conversation screenshot"
					class="screenshot"
				/>
				<img
					src="https://res.cloudinary.com/blitva/image/upload/r_60/v1647368119/Dani/bluedoor/IMG_1177_cq5ke1.jpg"
					alt="whatsapp conversation screenshot"
					class="screenshot"
				/>
			</div>
		</div>
		<Expandable
			{handleClick}
			state={showResearch}
			section={'research'}
			text={'More Research and Exploration'}
		/>
		{#if showResearch}
			<div class="content pb-md">
				<MoreResearch />
			</div>
		{/if}

		<div class="full grid mt-md" style="background-color: var(--background-color)">
			<div class="full-text pt-md pb-sm">
				<p class="label">Conclusion / Opportunity Statement</p>
				<p>
					CSE needs a way to store and organize lesson files, homework, teacher-teacher
					communication, and student records, and facilitate the sharing of this information.
				</p>
			</div>

			<div class="full-text pb-md">
				<p class="label">Solution</p>
				<p>
					BlueDoor is an interactive app for the iPad that allows teachers/tutors and free-lancers
					in small businesses to communicate (instructor-to-instructor), organize, and share
					information more efficiently and in a standardized manner, in a way that makes their job
					easier, more efficient, and better.
				</p>
			</div>
		</div>

		<div class="content py-md">
			<p class="label">Wireframe Prototype</p>
			<div class="walkthrough flex-row py-md flex-wrap">
				<iframe
					title="walkthrough"
					width="944"
					height="576"
					src="https://xd.adobe.com/embed/a1ebb32a-07e7-4efc-b750-4a4a4ce43691-f4b8/"
					frameborder="0"
					allowfullscreen=""
					style=""
					class="proto"
					data-scale="100"
				/>
				<div class="del">
					<p class="label">Suggested Walk-through</p>
					<ul class="steps">
						<li>Sign up as an administrator OR Log in</li>
						<li>Check out the calander in month view</li>
						<li>Go to Files, and add “Lesson 27”</li>
						<li>Go to Messages, and send an Email</li>
						<li>Look for Dan’s phone number</li>
						<li>In the skype meeting, open “Book 2, Review 2”</li>
						<li>End the call, and go back to the Dashboard</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="full grid py-md" style="background-color: var(--background-color)">
			<div class="full-text py-md">
				<p class="label bold">Takeaways / What I learned:</p>
				<div class="py-sm">
					<p class="med">
						Researching the solution carrier/vessel can sometimes be just as valuable as researching
						your problem.
					</p>
					<p>
						I had never used an iPad before doing this project, and I had a really hard time
						creating an app for it. I spent as much time researching and doing visual audits of how
						things look on an iPad as I spend researching for my solution. Besides learning how the
						iPad looks or works, I also learned its assets, features, and limitations which opened
						more doors (ba-dom-ch🥁) for features.
					</p>
				</div>
				<div class="py-sm">
					<p class="med">
						Assumptions hinder user experience and neglect the possibility of better outcomes.
					</p>
					<p>
						Even though I have so much first-hand experience in the job that I'm creating this app
						for, there is always more I can learn from other people. Talking to other people and
						getting other users' experiences is gold, even if the app is designed for my job.
					</p>
				</div>
				<div class="py-sm">
					<p class="med">The more I worked on this project, the more I found needed to be done.</p>
					<p>
						Appreciation for this app design is a HUGE thing I’ve learned. I never really noticed
						how many edge cases there are and how many details seem minute but actually keep apps
						running smoothly.
					</p>
				</div>
			</div>
			<div class="full-text py-sm pb-md">
				<p class="label bold">Additional Development:</p>
				<div class="py-sm">
					<p class="med">
						I’d create a separate page for the contacts and progress history for each student.
					</p>
					<p>
						Having it all in one place makes for easy organization and keeps everything in one
						place. However, it might not be intuitive to have student records in the contact
						section.
					</p>
				</div>
				<div class="py-sm">
					<p class="med">
						I’d create more pages in the app such as a page and form for adding new students.
					</p>
					<p>
						It’s great to upgrade your small business with an app that helps you organize and
						communicate, but if this helps your business, there needs to be a way to do this in the
						app.
					</p>
				</div>
				<div class="pt-sm">
					<p class="med">
						I would create a social media aspect to the app that would help teachers share resources
						and tips.
					</p>
					<p>
						Teachers need a way to stay inspired, get new lessons, activities, and learn methods to
						teach students with different learning styles. If taken advantage of, having a community
						of people in the education field to chat with, and exchange ideas and activities could
						be a game changer for teachers/tutors and thier lessons.
					</p>
				</div>
			</div>
		</div>
	{:else}
		<div style="min-height: 100vh" />
	{/if}
</div>

<style>
	.walkthrough {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	.med {
		font-size: 1.3rem;
	}

	.proto {
		max-height: 250px;
		transition-duration: initial;
	}

	.del > p {
		padding-bottom: 1rem;
	}

	ul {
		padding: 0;
		list-style-type: none;
	}

	.steps li {
		margin: 0;
		padding: 0.5rem 0 0.5rem 0;
	}

	.first {
		padding-bottom: 3rem !important;
	}

	.research {
		display: grid;
		grid-template-columns: repeat(10, minmax(0, 1fr));
		grid-column-gap: 1rem;
	}

	.sub {
		grid-column: 1 / -1;
	}

	.sub > div {
		padding: 1rem 0;
	}

	.sub > div > p {
		padding: 0.5rem 0;
	}

	.sub > div > div {
		padding: 0.5rem 0;
	}

	.sub > div > div > p {
		padding: 0.5rem 0;
	}

	.screenshots {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		grid-column: 1 / -1;
	}

	@media (min-width: 768px) {
		.walkthrough {
			gap: 1rem;
			justify-content: space-around;
			flex-wrap: nowrap;
			gap: 1rem !important;
		}
		.walkthrough iframe {
			margin: 0;
		}
		.sub {
			grid-column: 1 / 6;
		}
		.screenshots {
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			grid-column: 7 / 9;
		}
		.screenshots > img {
			max-width: 100%;
			height: auto;
		}
		.proto {
			max-width: calc(50vw - 1rem);
			max-height: 80vh;
		}
	}
</style>

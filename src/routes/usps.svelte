<script>
	import Gallery from '../components/Gallery.svelte';

	import IntersectionObserver from '../IntersectionObserver.svelte';
</script>

<!-- HERO -->
<div class="hero">
	<p class="header">USPS SmartBanking</p>
	<p class="subheader">UX/Research</p>
</div>

<!-- PROJECT INFO -->
<div class="projectInfo">
	<div class="goal">
		<p class="name">Goal</p>
		<p class="description">
			To provide the underbanked and unbanked community a service for reentering the banking system
			through USPS. The service should be a stepping stone back into traditional banking, not a
			replacement for it.
		</p>
	</div>
	<div class="whatIDid">
		<p class="name">What I Did</p>
		<p class="description">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
			been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
			galley of type and scrambled it to make a type specimen book.
		</p>
	</div>
</div>

<!-- GALLERY -->
<div id="work" class="gallery">
	<div class="project">
		<IntersectionObserver once={true} let:intersecting>
			{#if intersecting}
				<img class="project-image" src="https://picsum.photos/800/550" alt="dani" />
			{/if}
		</IntersectionObserver>
	</div>
	<div class="project">
		<IntersectionObserver once={true} let:intersecting>
			{#if intersecting}
				<img class="project-image" src="https://picsum.photos/800/550" alt="dani" />
			{/if}
		</IntersectionObserver>
	</div>
	<div class="project">
		<IntersectionObserver once={true} let:intersecting>
			{#if intersecting}
				<img class="project-image" src="https://picsum.photos/800/550" alt="dani" />
			{/if}
		</IntersectionObserver>
	</div>
	<div class="project">
		<IntersectionObserver once={true} let:intersecting>
			{#if intersecting}
				<img class="project-image" src="https://picsum.photos/800/550" alt="dani" />
			{/if}
		</IntersectionObserver>
	</div>
	<div class="project">
		<IntersectionObserver once={true} let:intersecting>
			{#if intersecting}
				<img class="project-image" src="https://picsum.photos/800/550" alt="dani" />
			{/if}
		</IntersectionObserver>
	</div>
	<div class="project">
		<IntersectionObserver once={true} let:intersecting>
			{#if intersecting}
				<img class="project-image" src="https://picsum.photos/800/550" alt="dani" />
			{/if}
		</IntersectionObserver>
	</div>
</div>

<!-- RESEARCH -->
<div class="research">
	<div class="researchLeft">
		<p class="name">Research</p>
		<p>Initial Research</p>
		<p>
			Underbanked: Someone who does not receive all the services available from a bank, be it from
			location to hours, they are not receiving full benefits. They are people with bank accounts
			that continue to use non-bank financial services such as moeny orders and bill payments.
		</p>
		<p>Unbanked: A person who does not use banks or banking institutions in any way or form.</p>
	</div>
	<div class="researchRight">
		<p>~34%</p>
		<p>of the US population is considered under/un banked</p>
	</div>
</div>

<style>
	* {
		/* color: black; */
		/* color: var(--header-color); */
	}

	.hero {
		height: 24rem;
		padding: 3rem 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: gray;
	}

	.header {
		font-size: var(--header-size);
		font-weight: 500;
	}

	.subheader {
		margin-top: -0.25rem;
		font-size: var(--label-size);
	}

	.projectInfo {
		height: 24rem;
		padding: 3rem 0;
		display: flex;
		justify-content: space-around;
		gap: 3rem;
	}

	.name {
		font-size: var(--label-size);
	}

	.projectInfo div {
		flex-basis: 30%;
	}

	.goal,
	.whatIDid {
		font-size: 2rem;
	}

	.description {
		font-size: var(--body-size);
	}

	.gallery {
		display: grid;
		grid-gap: 3rem;
		grid-template-columns: repeat(auto-fit, minmax(20.5rem, 1fr));
		padding: 3rem 0;
		min-height: 100vh;
		background-color: var(--background-color);
	}

	@media (min-width: 640px) {
		.gallery {
			display: grid;
			grid-gap: 3rem;
			grid-template-columns: repeat(auto-fit, minmax(26.5rem, 1fr));
			padding: 3rem 6rem;
		}
	}

	.project {
		position: relative;
		width: 100%;
		color: white;
		cursor: pointer;
		transition-property: all;
		transition-duration: 500ms;
	}

	.project:hover {
		-webkit-filter: grayscale(50%);
		filter: grayscale(50%);
	}

	.research {
		display: flex;
		gap: 2rem;
		justify-content: space-between;
	}

	.researchLeft,
	.researchRight {
		flex-basis: 30%;
	}

	.researchRight {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-basis: 30%;
	}
</style>

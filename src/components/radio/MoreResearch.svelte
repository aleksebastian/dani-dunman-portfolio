<!-- <div class="moreResearch content"> -->
<div class="full-text-sub">
	<p class="label">Initial Research</p>
	<p class="label">Market Audit</p>
	<p class="py-sm">
		I visited some museums and researched the most common problem areas in museum exhibits. I concluded that the main issues that most museums have are:
	</p>
</div>

<div class="proposals">
	<div>
		<p class="text-md">Museum exhibits lack context</p>
		<p>
			Museum exhibits that display objects aren’t engaging and they don’t show those objects in context. Visitors don’t learn much from this other than what something looks like unless they read the plaque, which leads me to my next find...
		</p>
	</div>
	<div>
		<p class="text-md">Visitors don’t read plaques</p>
		<p>
			Museum visitors typically will look for the plaques for a displayed work they’re interested in but don’t take the time to read all of the information on the plaque. In fact, the more words on a plaque, the fewer words are read.
		</p>
	</div>
	<div>
		<p class="text-md">Visitors don’t really know where to go</p>
		<p>
			Most museum visitors don’t follow any specific path; They wander around exhibits without seeing a clear route through the museum. Depending on the exhibit, this can hinder the effectiveness of the it.
		</p>
	</div>
</div>

<div class="full-text-sub">
	<p class="text-md">Picking an Audience</p>
	<p class="py-sm">
		I figured the best way to widen the visitor demographics would be to bring in kids, not just because they are the opposite age group of the current visitor demographic, but because with children come older siblings, guardians, relatives, etc. In other words, a wider age range. With that in mind, I needed to create an exhibit that would appeal to multiple age ranges.
	</p>
</div>

<!-- </div> -->
<style>
	.proposals > div {
		padding: 1rem 0;
	}

	.proposals > div > p {
		padding: 0.5rem 0;
	}

	.proposals {
		grid-column: 1 / -1;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	@media (min-width: 768px) {
		.proposals {
			grid-column: 1 / -1;
			flex-direction: row;
			justify-content: space-around;
		}

		.proposals > div {
			flex-basis: 35%;
		}
	}
	@media (min-width: 640px) {
	}
</style>

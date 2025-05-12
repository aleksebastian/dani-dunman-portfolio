<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { language } from '../../projectData.json';
	import ImageLoader from '../../components/image/ImageLoader.svelte';
	import ProjectHero from '../../components/ProjectHero.svelte';

	const carouselImgSrcs = language.carouselImgs;
	let heroLoaded = false;

	onMount(async () => {
		const heroImg = new Image();
		heroImg.src = language.heroSrc;
		heroImg.onload = () => {
			heroLoaded = true;
		};
	});
</script>

<svelte:head>
	<title>{language.name}</title>
</svelte:head>

{#if heroLoaded}
	<div class="grid">
		<ProjectHero project={language} />
		<p class="full-text py-lg">
			For this project, I made an exhibition catalog for an exhibit I created and curated based on
			the theme of alternative currencies. My goal was to document what went into the exhibition and
			expand the viewers' understanding of the topic. The alternative currency I chose was language.
			I included Alice J Lee's DesignInquiry residency project about language because it focussed on
			colloquial language and slang as a form of social currency. I also included an interview with
			Alice and three other essays about language as currency.
		</p>
		<div in:fade class="full">
			<iframe
				title="slideshow"
				width="1728"
				height="800"
				src="https://online.fliphtml5.com/hduvs/puol/"
				seamless="seamless"
				frameborder="0"
				allowtransparency="true"
				allowfullscreen="true"
				style="width: 100%; max-height: 80vh;"
				class=""
			/>
		</div>

		<div class="gallery full py-md">
			<div>
				<ImageLoader
					src={`https://res.cloudinary.com/blitva/image/upload/v1645400433/Dani/language%20/DSC_0160_ztllvm.jpg`}
					alt="language exchange page"
				/>
			</div>
			<div>
				<ImageLoader
					src={`https://res.cloudinary.com/blitva/image/upload/v1645400430/Dani/language%20/DSC_0084_wefwub.jpg`}
					alt="language exchange page"
				/>
			</div>

			<div>
				<ImageLoader
					src={`https://res.cloudinary.com/blitva/image/upload/v1645400428/Dani/language%20/DSC_0070_nmfmg7.jpg`}
					alt="language exchange page"
				/>
			</div>
			<div>
				<ImageLoader
					src={`https://res.cloudinary.com/blitva/image/upload/v1645400426/Dani/language%20/DSC_0085_qcbaqe.jpg`}
					alt="language exchange page"
				/>
			</div>
			<div>
				<ImageLoader
					src={`https://res.cloudinary.com/blitva/image/upload/v1645400424/Dani/language%20/DSC_0079_dgrzwg.jpg`}
					alt="language exchange page"
				/>
			</div>
			<div>
				<ImageLoader
					src={`https://res.cloudinary.com/blitva/image/upload/v1645400424/Dani/language%20/DSC_0069_stvuen.jpg`}
					alt="language exchange page"
				/>
			</div>
		</div>
	</div>
{:else}
	<div style="min-height: 100vh"></div>
{/if}

<style>
	.gallery > div {
		padding-bottom: 3rem;
		/* max-height: 100vh; */
	}

	.gallery > div:last-child {
		margin-bottom: -6rem;
	}
</style>

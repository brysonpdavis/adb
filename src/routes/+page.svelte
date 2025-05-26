<script lang="ts">
	import specLogo from '$lib/assets/spec-logo.svg';
	import specWordmarkLogo from '$lib/assets/spec-wordmark-logo.svg';
	import ingageWordmarkLogo from '$lib/assets/ingage-wordmark-logo.svg';
	import policymeWordmarkLogo from '$lib/assets/policyme-wordmark-logo.svg';
	import sprowtWordmarkLogo from '$lib/assets/sprowt-wordmark-logo.svg';
	import CaseStudySection from '$lib/components/case-study-section.svelte';
	import FunButton from '$lib/components/fun-button.svelte';
	import NameRound from '$lib/components/name-round.svelte';
	import { INGAGE_URL, POLICYME_URL, SPEC_URL } from '$lib/constants';
	import { mountPageObserver } from '$lib/state/active-section.svelte';
	import Nav from '$lib/components/nav.svelte';
	import HashImage from '$lib/components/hash-image.svelte';
	import type { PageProps } from './$types';
	import MouseFollower from '$lib/components/mouse-follower.svelte';
	import LetsConnect from '$lib/components/lets-connect.svelte';
	import ResumeButton from '$lib/components/resume-button.svelte';

	const { data }: PageProps = $props();
	const { annaLaptop, specThumbnail, ingageThumbnail, policymeThumbnail, sprowtThumbnail } = data;

	mountPageObserver();
</script>

<!-- behind main content -->
<div class="pointer-events-none fixed -z-5 h-screen w-screen overflow-hidden">
	<MouseFollower color="primary" factor={80} size="big" offset={{ x: -400, y: -200 }} />
	<MouseFollower color="alt" factor={20} size="small" offset={{ x: 100, y: 130 }} />
</div>

<!-- main content -->
<div class="flex w-full max-w-[924px] flex-col gap-4 text-pretty" id="about">
	<div class="m-0 h-36 shrink-0 p-0 lg:h-40"></div>
	<div class="h-24 w-24 overflow-hidden rounded-full">
		<HashImage image={annaLaptop} className="h-24 w-24" />
	</div>
	<div class="text-2xl font-normal uppercase">hi i'm anna</div>
	<div class="text-4xl leading-14 font-medium uppercase">
		product designer & founder with 6+ years of experience. based in
		<span class="text-primary underline">new york, ny.</span>
	</div>
	<div class="text-lg">
		Over the years, I've worked across early-stage startups and growing teams, primarily in
		healthcare and insurance. Shaping everything from 0→1 products to redesigns and brand refreshes.
	</div>
	<div class="flex flex-row gap-2 text-lg">
		Currently working on
		<a
			class="hover:text-primary flex flex-row items-center gap-2 underline"
			href="http://www.specai.io"
		>
			spec.ai <img src={specLogo} alt="spec logo" class="h-6 w-6" />
		</a>
	</div>
	<div class="mt-2 flex w-full flex-col gap-8 lg:flex-row">
		<FunButton text="explore my work" href="/#work" />
		<ResumeButton />
	</div>
</div>
<div class="flex w-full justify-end pt-2">
	<NameRound />
</div>
<div class="flex w-full flex-col gap-10" id="work">
	<div class="m-0 h-36 shrink-0 p-0"></div>
	<div class="flex w-full flex-col gap-10 lg:flex-row">
		<div class="w-full lg:w-1/2">
			<CaseStudySection
				description="SpecAI is an AI-powered Figma plugin that helps designers get real-time feedback on their work."
				bullets={['Product Strategy', 'UX/UI Design', 'User Research']}
				logoHref={SPEC_URL}
				href="/case/specai"
				thumbnailSrc={specThumbnail}
				logoSrc={specWordmarkLogo}
				imageContainerClassName="pb-8"
			/>
		</div>
		<div class="w-full lg:w-1/2">
			<CaseStudySection
				description="Ingage is a platform that helps you grow on LinkedIn with smart engagement, AI comments, and authentic reach."
				bullets={['UX/UI Design', 'User Research', 'Brand & Visual Identity']}
				logoHref={INGAGE_URL}
				href="/case/ingage"
				thumbnailSrc={ingageThumbnail}
				logoSrc={ingageWordmarkLogo}
				logoHeightPx={32}
			/>
		</div>
	</div>
	<div class="flex w-full flex-col gap-10 lg:flex-row">
		<div class="w-full lg:w-1/2">
			<CaseStudySection
				description="PolicyMe is a Canadian digital insurance platform that simplifies the process of getting life, critical illness, and health & dental insurance."
				bullets={['UX/UI Design', 'User Research & Interviews', 'Product Research']}
				logoHref={POLICYME_URL}
				href="/case/policyme"
				thumbnailSrc={policymeThumbnail}
				logoSrc={policymeWordmarkLogo}
				logoHeightPx={28}
			/>
		</div>
		<div class="w-full lg:w-1/2">
			<CaseStudySection
				description="Sprowt is a mobile app designed to help users strengthen their emotional intelligence through guided meditative practices."
				bullets={['UX/UI Design', 'Brand & Visual Identity', 'Social Media Design']}
				logoHref="https://specai.io"
				href="/case/specai"
				thumbnailSrc={sprowtThumbnail}
				logoSrc={sprowtWordmarkLogo}
				logoHeightPx={32}
				disabled
			/>
		</div>
	</div>
</div>
<LetsConnect extraPadding />

<!-- in front of main content -->
<div
	class="pointer-events-none fixed top-0 z-10 flex h-screen w-screen flex-col items-center overflow-hidden"
>
	<Nav />
</div>

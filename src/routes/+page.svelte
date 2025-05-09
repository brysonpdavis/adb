<script lang="ts">
	import specLogo from '$lib/assets/spec-logo.svg';
	import specWordmarkLogo from '$lib/assets/spec-wordmark-logo.svg';
	import ingageWordmarkLogo from '$lib/assets/ingage-wordmark-logo.svg';
	import policymeWordmarkLogo from '$lib/assets/policyme-wordmark-logo.svg';
	import sprowtWordmarkLogo from '$lib/assets/sprowt-wordmark-logo.svg';
	import CaseStudySection from '$lib/components/case-study-section.svelte';
	import FunButton from '$lib/components/fun-button.svelte';
	import NameRound from '$lib/components/name-round.svelte';
	import { ANNA_EMAIL, ANNA_LINKEDIN } from '$lib/constants';
	import { mountPageObserver } from '$lib/state/active-section.svelte';
	import Nav from '$lib/components/nav.svelte';
	import HashImage from '$lib/components/hash-image.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
	const { annaLaptop, specThumbnail } = data;

	mountPageObserver();
</script>

<div class="flex w-full max-w-[924px] flex-col gap-4 text-pretty" id="about">
	<div class="m-0 h-36 shrink-0 p-0 lg:h-80"></div>
	<div class="h-24 w-24 overflow-hidden rounded-full">
		<HashImage image={annaLaptop} className="h-24 w-24" />
	</div>
	<div class="text-2xl font-normal uppercase">hi i'm anna</div>
	<div class="text-4xl leading-14 font-medium uppercase">
		product designer & founder with 6+ years of experience. based in
		<span class="line-through"> toronto, on</span>
		<span class="text-primary underline">new york, ny.</span>
	</div>
	<div class="mt-2 flex flex-row gap-2 text-2xl leading-14">
		Currently working on
		<a
			class="hover:text-primary flex flex-row items-center gap-2 underline"
			href="http://www.specai.io"
		>
			spec.ai <img src={specLogo} alt="spec logo" class="h-6 w-6" />
		</a>
	</div>
	<div class="mt-2 flex w-full flex-col gap-8 lg:flex-row">
		<FunButton text="explore my work" href="/yes" />
		<FunButton text="my cv" href="/yes" />
	</div>
</div>
<div class="flex w-full justify-end pt-2">
	<NameRound />
</div>
<div class="flex w-full flex-col gap-10" id="work">
	<div class="m-0 h-36 shrink-0 p-0"></div>
	<CaseStudySection
		description="Bridging the gap in design and feedback"
		logoHref="https://specai.io"
		href="/case/specai"
		thumbnailSrc={specThumbnail}
		logoSrc={specWordmarkLogo}
	/>
	<CaseStudySection
		description="Taking a LinkedIn engagement tool from 0 → 1"
		logoHref="https://specai.io"
		href="/case/specai"
		thumbnailSrc={specThumbnail}
		logoSrc={ingageWordmarkLogo}
		disabled
	/>
	<CaseStudySection
		description="Introducing a new product line to an existing brand"
		logoHref="https://specai.io"
		href="/case/specai"
		thumbnailSrc={specThumbnail}
		logoSrc={policymeWordmarkLogo}
		disabled
	/>
	<CaseStudySection
		description="Sprowt xx"
		logoHref="https://specai.io"
		href="/case/specai"
		thumbnailSrc={specThumbnail}
		logoSrc={sprowtWordmarkLogo}
		disabled
	/>
</div>
<div id="contact" class="flex min-h-(--screen-no-footer) w-full flex-col gap-10">
	<div class="m-0 h-36 shrink-0 p-0"></div>
	<div class="text-5xl font-medium uppercase">let's connect!</div>
	<div class="text-2xl uppercase">
		I'm currently open to new opportunities and collaborations! If you're hiring, working on
		something exciting, or just want to chat about design—I'd love to hear from you.
	</div>
	<div class="mt-2 flex w-full flex-col gap-8 lg:flex-row">
		<FunButton text="my cv" href="/yes" newTab />
		<FunButton text="email" href={`mailto:${ANNA_EMAIL}`} />
		<FunButton text="linkedin" href={ANNA_LINKEDIN} newTab />
	</div>
</div>

<!-- in front of main content -->
<div
	class="pointer-events-none fixed top-0 z-10 flex h-screen w-screen flex-col items-center overflow-hidden"
>
	<Nav />
</div>

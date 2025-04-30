<script lang="ts">
	import annaLaptop from '$lib/assets/anna-laptop.png';
	import specThumbnail from '$lib/assets/spec-thumbnail.png';
	import specLogo from '$lib/assets/spec-logo.svg';
	import specWordmarkLogo from '$lib/assets/spec-wordmark-logo.svg';
	import CaseStudySection from '$lib/components/case-study-section.svelte';
	import FunButton from '$lib/components/fun-button.svelte';
	import NameRound from '$lib/components/name-round.svelte';
	import { ANNA_EMAIL, ANNA_LINKEDIN } from '$lib/constants';
</script>

<div class="flex w-full max-w-[924px] flex-col gap-4 text-pretty" id="about">
	<div class="m-0 h-36 shrink-0 p-0 lg:h-80"></div>
	<img src={annaLaptop} class="h-24 w-24 rounded-full" alt="annadavisbandi" />
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
			spec.ai <img src={specLogo} alt="spec logo" class="h-6 w-6" /></a
		>
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
		href="https://specai.io"
		thumbnailSrc={specThumbnail}
		logoSrc={specWordmarkLogo}
	/>
	<CaseStudySection
		description="Bridging the gap in design and feedback"
		href="https://specai.io"
		thumbnailSrc={specThumbnail}
		logoSrc={specWordmarkLogo}
		disabled
	/>
	<CaseStudySection
		description="Bridging the gap in design and feedback"
		href="https://specai.io"
		thumbnailSrc={specThumbnail}
		logoSrc={specWordmarkLogo}
	/>
	<CaseStudySection
		description="Bridging the gap in design and feedback"
		href="https://specai.io"
		thumbnailSrc={specThumbnail}
		logoSrc={specWordmarkLogo}
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

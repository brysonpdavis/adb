<script lang="ts">
	import Carousel from '$lib/components/carousel.svelte';
	import CaseStudyProblemSection from '$lib/components/case-study-problem-section.svelte';
	import CaseStudySolutionRoleSection from '$lib/components/case-study-solution-role-section.svelte';
	import CaseStudy from '$lib/components/case-study.svelte';
	import FunButton from '$lib/components/fun-button.svelte';
	import HashImage from '$lib/components/hash-image.svelte';
	import AsteriskSvg from '$lib/components/svgs/asterisk-svg.svelte';
	import { INGAGE_URL } from '$lib/constants';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
	const {
		INGAGE_PREVIEW,
		INGAGE_PROBLEM,
		INGAGE_SCREENSHOT,
		INGAGE_INPUT_FIELDS,
		INGAGE_BUTTONS,
		INGAGE_FLOWCHART,
		INGAGE_REVIEWS,
		INGAGE_EXTENSION_1,
		INGAGE_EXTENSION_2,
		INGAGE_EXTENSION_3,
		INGAGE_EXTENSION_4,
		INGAGE_EXTENSION_5,
		INGAGE_EXTENSION_6,
		INGAGE_EXTENSION_7,
		INGAGE_EXTENSION_8,
		INGAGE_WEB_1,
		INGAGE_WEB_2,
		INGAGE_WEB_3,
		INGAGE_WEB_4,
		INGAGE_LAPTOP,
	} = data;

	const BRAND_COLOR = '#5E3CE4';
</script>

{#snippet impactOne()}
	<b>300+</b> active user to date
{/snippet}

{#snippet impactTwo()}
	<b>Over 100k</b> comments made since launch
{/snippet}

{#snippet impactThree()}
	Consistent positive feedback on TrustPilot
{/snippet}

<CaseStudy
	title="INGAGE"
	href={INGAGE_URL}
	description="Ingage helps you grow on LinkedIn with smart engagement, AI comments, and authentic reach—no ads or agencies needed."
	splashImage={INGAGE_PREVIEW}
	nextCaseStudyHref="/case/policyme"
	metricsProps={{
		role: [{ label: 'Product Designer' }],
		team: [
			{ label: 'Product Designer', count: 1 },
			{ label: 'QA', count: 1 },
			{ label: 'Engineer', count: 3 },
		],
		scope: [{ label: 'Product Research' }, { label: 'User Testing' }, { label: 'UX/UI Design' }],
		time: {
			start: 'DEC 2024',
			end: 'MARCH 2025',
		},
	}}
>
	<CaseStudyProblemSection
		title="The Roadblocks to Growing on LinkedIn"
		description="Growing on LinkedIn felt slow, confusing, and often came down to paying for ads or help. Other options—like pods, ghostwriters, or agencies—were either too complicated, too expensive, or didn't really work. We wanted to build something simple and effective that helped people grow without the spam or stress."
		brandColor={BRAND_COLOR}
		image={INGAGE_PROBLEM}
	/>
	<CaseStudySolutionRoleSection
		type="role"
		title="Working as a solo designer"
		description={`As the solo product designer, I owned the full design process—from research, UX, UI, and prototyping to QA-ready handoff. I worked cross-functionally with engineering and QA to ensure speed, clarity, and tight execution. \n
			My goal was to make Ingage feel fast, simple, and genuinely helpful—whether you were promoting a post or checking performance.`}
		brandColor={BRAND_COLOR}
		itemsHeading="design approach"
		items={[
			{
				heading: 'Quick wins',
				text: 'I made sure users could get value quickly, like promoting a post or generating a comment instantly.',
			},
			{
				heading: 'Clear and trustworthy UX',
				text: 'I used transparent language, clean layouts, and visible metrics to build user confidence.',
			},
			{
				heading: 'Feedback-first UI',
				text: 'From tooltips to microcopy, every part of the UI helped guide users and explain what Ingage was doing in the background.',
			},
		]}
	/>
	<div class="flex h-fit w-full flex-col gap-8 lg:flex-row lg:gap-12">
		<div class="my-auto flex h-full w-full flex-grow flex-col items-center gap-8 lg:w-1/2">
			<div class="flex w-full flex-col gap-4 text-2xl font-medium">Design system</div>
			<div class="text-pretty">
				I built a lean, scalable design system that made it easy to move quickly without sacrificing
				consistency. I focused on reusable components that could flex across both the web app and
				Chrome extension—like modals, buttons, and input patterns—while keeping the overall look
				clean, minimal, and focused on content.
			</div>
		</div>
		<div class="flex w-full flex-col items-center gap-4 lg:w-1/2">
			<HashImage image={INGAGE_SCREENSHOT} className="rounded-2xl" />
		</div>
	</div>
	<div class="flex w-full flex-col gap-6 lg:flex-row">
		<!-- input fields -->
		<div class="flex w-full flex-col items-start gap-4 lg:w-1/2">
			<div class="text-lg font-medium capitalize">Input fields</div>
			<div class="w-full">
				<HashImage image={INGAGE_INPUT_FIELDS} />
			</div>
		</div>
		<!-- buttons -->
		<div class="flex w-full flex-col items-start gap-4 lg:w-1/2">
			<div class="text-lg font-medium capitalize">buttons</div>
			<div class="w-full">
				<HashImage image={INGAGE_BUTTONS} />
			</div>
		</div>
	</div>
	<div class="w-full">
		<HashImage image={INGAGE_FLOWCHART} />
	</div>
	<Carousel
		gap="small"
		images={[
			INGAGE_EXTENSION_1,
			INGAGE_EXTENSION_2,
			INGAGE_EXTENSION_3,
			INGAGE_EXTENSION_4,
			INGAGE_EXTENSION_5,
			INGAGE_EXTENSION_6,
			INGAGE_EXTENSION_7,
			INGAGE_EXTENSION_8,
		]}
		rowCount={4}
		title="Chrome Extension"
	/>
	<Carousel
		gap="med"
		images={[INGAGE_WEB_1, INGAGE_WEB_2, INGAGE_WEB_3, INGAGE_WEB_4]}
		rowCount={2}
		title="Web App"
	/>
	<div class="w-full">
		<HashImage image={INGAGE_LAPTOP} />
	</div>
	<div class="flex flex-col gap-8 lg:flex-row lg:gap-20">
		<div class="flex w-full flex-col gap-4 lg:w-1/2">
			<div class="text-base font-normal uppercase" style={`color: ${BRAND_COLOR};`}>
				results & impact
			</div>
			<div class="text-2xl font-medium">From December 2024 launch to present day:</div>
			{#each [impactOne, impactTwo, impactThree] as item}
				<div class="flex flex-row gap-1">
					<div class="pt-2">
						<AsteriskSvg className="h-2 w-2" />
					</div>
					<div class="text-pretty">
						{@render item()}
					</div>
				</div>
			{/each}
			<FunButton href={INGAGE_URL} text="check out ingage" newTab />
		</div>
		<div class="w-full lg:w-1/2">
			<HashImage image={INGAGE_REVIEWS} className="w-full" />
		</div>
	</div>
</CaseStudy>

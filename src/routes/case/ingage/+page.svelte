<script lang="ts">
	import CaseStudyProblemSection from '$lib/components/case-study-problem-section.svelte';
	import CaseStudySolutionRoleSection from '$lib/components/case-study-solution-role-section.svelte';
	import CaseStudy from '$lib/components/case-study.svelte';
	import { INGAGE_URL } from '$lib/constants';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
	const { INGAGE_PREVIEW, INGAGE_PROBLEM } = data;

	const BRAND_COLOR = '#5E3CE4';
</script>

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
</CaseStudy>

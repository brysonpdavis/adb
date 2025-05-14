<script lang="ts">
	import Carousel from '$lib/components/carousel.svelte';
	import CaseStudyInterviewResults from '$lib/components/case-study-interview-results.svelte';
	import CaseStudyProblemSection from '$lib/components/case-study-problem-section.svelte';
	import CaseStudySolutionRoleSection from '$lib/components/case-study-solution-role-section.svelte';
	import CaseStudy from '$lib/components/case-study.svelte';
	import FunButton from '$lib/components/fun-button.svelte';
	import HashImage from '$lib/components/hash-image.svelte';
	import AsteriskSvg from '$lib/components/svgs/asterisk-svg.svelte';
	import { SPEC_PLUGIN_URL, SPEC_URL } from '$lib/constants';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
	const {
		SPEC_FIGMA,
		SPEC_COMMENTS,
		SPEC_FINAL_1,
		SPEC_FINAL_2,
		SPEC_FINAL_3,
		SPEC_FINAL_4,
		SPEC_FINAL_5,
		SPEC_FINAL_6,
		SPEC_FEEDBACK,
		SPEC_PLUGIN_SCREENSHOT,
	} = data;

	const BRAND_COLOR = '#5E3CE4';
</script>

{#snippet resultOne()}
	<b>Too much time</b> spent manually checking alignment, spacing, and contrast.
{/snippet}

{#snippet resultTwo()}
	<b>Feedback</b> on UX writing and accessibility was often
	<b>missing or delayed.</b>
{/snippet}

{#snippet resultThree()}
	Many tools existed for design automation, but few
	<b>focused on actual UX principles.</b>
{/snippet}

{#snippet impactOne()}
	Reached <b>1,000+ Figma users</b>
{/snippet}

{#snippet impactTwo()}
	Average session time: <b>6+ minutes per user</b>
{/snippet}

{#snippet impactThree()}
	<b>32% of users returned</b>
	within the first week
{/snippet}

{#snippet impactFour()}
	User feedback praised <b>clarity, speed, and actionable insights</b>
{/snippet}

<CaseStudy
	title="SPEC.AI"
	href={SPEC_URL}
	description="SpecAI is an AI-powered Figma plugin that helps designers get real-time feedback on their UX/UI work—covering everything from accessibility and alignment to copy and usability."
	splashImage={SPEC_FIGMA}
	nextCaseStudyHref="/case/ingage"
	metricsProps={{
		role: [{ label: 'Co-Founder' }, { label: 'Product Designer' }],
		team: [
			{ label: 'Founders', count: 2 },
			{ label: 'Engineer', count: 1 },
		],
		scope: [
			{ label: 'Product Research' },
			{ label: 'User Testing' },
			{ label: 'UX/UI Design' },
			{ label: 'Product Marketing' },
		],
		time: {
			start: 'AUG 2024',
			end: 'ONGOING',
		},
	}}
>
	<CaseStudyProblemSection
		title="Bridging the gap in design feedback"
		description="As a product designer, I often found myself craving a second set of eyes during the design process—especially for quick gut checks on accessibility, UX clarity, and copy tone. After interviewing designers across levels and industries, we found a shared frustration: feedback was slow, inconsistent, and dependent on team availability. There was a clear need for real-time, early-stage feedback that designers could trust."
		brandColor={BRAND_COLOR}
		image={SPEC_COMMENTS}
	/>
	<CaseStudyInterviewResults
		statement="Through initial user interviews and surveys, we learned that"
		results={[resultOne, resultTwo, resultThree]}
	/>
	<CaseStudySolutionRoleSection
		type="solution"
		brandColor={BRAND_COLOR}
		title="Creating a design co-pilot"
		description="The plugin was designed to feel like a helpful design buddy—not a robotic validator. We focused on a friendly tone, lightweight UI, and a no-friction setup to integrate easily into existing workflows. Our goal wasn’t to replace design critique but to empower designers with faster iteration and more confidence."
		itemsHeading="key design choices"
		items={[
			{
				heading: 'Conversational UI',
				text: 'Insights are delivered in plain, constructive language.',
			},
			{
				heading: 'Flexible Feedback Options',
				text: "Designers can choose exactly what kind of help they need—whether it's copywriting tips, visual checks, or accessibility guidance.",
			},
			{
				heading: 'Easy to get started',
				text: 'Designers can log in with their email, and start analyzing their work directly in Figma with just one click.',
			},
		]}
	/>
	<Carousel
		images={[SPEC_FINAL_1, SPEC_FINAL_2, SPEC_FINAL_3, SPEC_FINAL_4, SPEC_FINAL_5, SPEC_FINAL_6]}
		rowCount={3}
		title="The final designs"
	/>
	<div class="flex flex-col gap-8 lg:flex-row lg:gap-20">
		<div class="flex w-full flex-col gap-4 lg:w-1/2">
			<div class="text-base font-normal uppercase" style={`color: ${BRAND_COLOR};`}>
				results & impact
			</div>
			<div class="text-2xl font-medium">Within 8 weeks of public launch:</div>
			{#each [impactOne, impactTwo, impactThree, impactFour] as item}
				<div class="flex flex-row gap-1">
					<div class="pt-2">
						<AsteriskSvg className="h-2 w-2" />
					</div>
					<div class="text-pretty">
						{@render item()}
					</div>
				</div>
			{/each}
			<FunButton href={SPEC_PLUGIN_URL} text="check out spec.ai on figma" newTab />
		</div>
		<div class="w-full lg:w-1/2">
			<HashImage image={SPEC_PLUGIN_SCREENSHOT} className="w-full" />
		</div>
	</div>
	<Carousel images={[SPEC_FEEDBACK]} rowCount={1} title="What our users have to say" />
</CaseStudy>

<script lang="ts">
	import Carousel from '$lib/components/carousel.svelte';
	import CaseStudyImpact from '$lib/components/case-study-impact.svelte';
	import CaseStudyInterviewResults from '$lib/components/case-study-interview-results.svelte';
	import CaseStudyProblemSection from '$lib/components/case-study-problem-section.svelte';
	import CaseStudy from '$lib/components/case-study.svelte';
	import HashImage from '$lib/components/hash-image.svelte';
	import { POLICYME_URL } from '$lib/constants';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
	const {
		POLICYME_PREVIEW,
		POLICYME_PROBLEM,
		POLICYME_INTERVIEW_1,
		POLICYME_INTERVIEW_2,
		POLICYME_MOBILE_1,
		POLICYME_MOBILE_2,
		POLICYME_MOBILE_3,
		POLICYME_DESKTOP_1,
		POLICYME_DESKTOP_2,
		POLICYME_DESKTOP_3,
		POLICYME_DESIGN_ELEMENTS,
		POLICYME_DESIGN_SYSTEM,
		POLICYME_IMPACT,
	} = data;

	const BRAND_COLOR = '#465327';
</script>

{#snippet myRole()}
	<div class="bg-neutral flex flex-col gap-8 rounded-3xl p-8 lg:flex-row lg:gap-20 lg:p-10">
		<div class="flex w-full flex-col gap-4 lg:w-1/2">
			<div class="text-base font-normal uppercase" style={`color: ${BRAND_COLOR};`}>my role</div>
			<div class="text-2xl font-medium">Designing the full cycle</div>
			<div class="text-pretty">
				I led the end-to-end design for the Health & Dental product, starting with a deep focus on
				research to ensure we were building a plan people actually wanted. We began with customer
				interviews, speaking directly with existing PolicyMe users to understand their priorities
				when shopping for health and dental insurance.
			</div>
		</div>
		<div class="flex w-full flex-col gap-8 text-pretty lg:w-1/2">
			<div>
				I also partnered with our customer service team and project manager to analyze support
				tickets and common pain points. This helped shape both the product scope and messaging
				strategy early on, ensuring we prioritized the right benefits.
			</div>
			<div>
				To validate and prioritize these findings, we ran a <b>maximum difference survey</b>—a
				quantitative method that helped us pinpoint which features and benefits mattered most. This
				allowed us to confidently rank plan attributes based on customer preference, rather than
				guesswork.
			</div>
		</div>
	</div>
{/snippet}

{#snippet designSystemDescription()}
	<div class="flex w-full flex-col gap-8 lg:flex-row lg:gap-20">
		<div class="flex flex-col gap-4 lg:w-1/2">
			<div class="text-base font-normal uppercase" style={`color: ${BRAND_COLOR};`}>
				design system
			</div>
			<div class="text-2xl font-medium">Rebrand & design system overhaul</div>
			<div class="text-pretty">
				In parallel with launching Health & Dental, I played a key role in PolicyMe’s company-wide
				rebrand—an initiative that refreshed how we looked and felt across every customer
				touchpoint.
			</div>
			<div>
				What Changed:
				<ul class="list-inside list-disc">
					<li>New logo and brand identity</li>
					<li>Refined color palette with improved accessibility</li>
					<li>Updated typography system</li>
					<li>Updated components with multiple states</li>
				</ul>
			</div>
		</div>
		<div class="flex w-full items-center justify-center lg:w-1/2">
			<HashImage image={POLICYME_DESIGN_SYSTEM} />
		</div>
	</div>
{/snippet}

{#snippet resultOne()}
	<b>Price sensitivity</b> was important - users wanted straightforward, competitive pricing
{/snippet}

{#snippet resultTwo()}
	The ability to <b>easily add spouses or children</b> was a must-have when choosing a plan
{/snippet}

{#snippet resultThree()}
	Users want <b>higher coverage amounts</b> for things like dental work and physiotherapy
{/snippet}

{#snippet impactOne()}
	In its first year, H&D accounted for over <b>39% of all sales</b>
{/snippet}

{#snippet impactTwo()}
	<b>5% increase</b> at checkout
{/snippet}

{#snippet impactThree()}
	Consistent positive reviews and feedback on both the product and the experience
{/snippet}

<CaseStudy
	title="POLICYME"
	href={POLICYME_URL}
	description="At PolicyMe, I led the design and launch of a new Health & Dental insurance product—an extension of our core life insurance line."
	splashImage={POLICYME_PREVIEW}
	splashImageClassName="lg:px-12 lg:w-full xl:px-24 max-h-146"
	metricsProps={{
		role: [{ label: 'Product Designer' }],
		team: [
			{ label: 'Product Designer', count: 1 },
			{ label: 'QA', count: 3 },
			{ label: 'Product Manager', count: 1 },
			{ label: 'Engineer', count: 3 },
		],
		scope: [{ label: 'Product Research' }, { label: 'User Testing' }, { label: 'UX/UI Design' }],
		time: {
			start: 'JAN 2024',
			end: 'SEP 2024',
		},
	}}
>
	<CaseStudyProblemSection
		image={POLICYME_PROBLEM}
		brandColor={BRAND_COLOR}
		title="Introducing a new product in the market"
		description="With life insurance sales gaining traction, PolicyMe saw an opportunity to diversify our offerings and tap into a high-demand segment: Health and Dental insurance. The challenge? Build a competitive product from the ground up that could scale across both B2C and B2B white-label use cases—while simultaneously supporting a company-wide rebrand."
	/>
	{@render myRole()}
	<CaseStudyInterviewResults
		statement="Through user interviews and surveys, we learned that"
		results={[resultOne, resultTwo, resultThree]}
	/>
	<Carousel
		title="User interviews"
		rowCount={2}
		gap="med"
		images={[POLICYME_INTERVIEW_1, POLICYME_INTERVIEW_2]}
	/>
	<Carousel
		title="Mobile screens"
		rowCount={3}
		gap="med"
		images={[POLICYME_MOBILE_1, POLICYME_MOBILE_2, POLICYME_MOBILE_3]}
	/>
	<Carousel
		title="Desktop screens"
		rowCount={1}
		gap="med"
		images={[POLICYME_DESKTOP_1, POLICYME_DESKTOP_2, POLICYME_DESKTOP_3]}
	/>
	{@render designSystemDescription()}
	<HashImage image={POLICYME_DESIGN_ELEMENTS} className="w-full" />
	<CaseStudyImpact
		brandColor={BRAND_COLOR}
		title="Success metrics"
		image={POLICYME_IMPACT}
		ctaHref={POLICYME_URL}
		ctaText="check out policyme"
		impacts={[impactOne, impactTwo, impactThree]}
	/>
</CaseStudy>

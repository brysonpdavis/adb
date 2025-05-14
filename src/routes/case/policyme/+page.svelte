<script lang="ts">
	import CaseStudy from '$lib/components/case-study.svelte';
	import { POLICYME_URL } from '$lib/constants';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
	const { POLICYME_PREVIEW } = data;

	const BRAND_COLOR = '#5E3CE4';
</script>

<CaseStudy
	title="POLICYME"
	href={POLICYME_URL}
	description="At PolicyMe, I led the design and launch of a new Health & Dental insurance product—an extension of our core life insurance line."
	splashImage={POLICYME_PREVIEW}
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
	HELLO
</CaseStudy>

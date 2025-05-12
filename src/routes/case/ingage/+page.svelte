<script lang="ts">
	import CaseStudy from '$lib/components/case-study.svelte';
	import { INGAGE_URL } from '$lib/constants';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
	const { INGAGE_PREVIEW } = data;

	const BRAND_COLOR = '#5E3CE4';
</script>

<CaseStudy
	title="INGAGE"
	href={INGAGE_URL}
	description="Ingage helps you grow on LinkedIn with smart engagement, AI comments, and authentic reach—no ads or agencies needed."
	splashImage={INGAGE_PREVIEW}
	metricsProps={{
		role: [{ label: 'Product Designer' }],
		team: [
			{ label: 'Product Designer', count: 1 },
			{ label: 'QA', count: 1 },
			{ label: 'Engineer', count: 3 }
		],
		scope: [{ label: 'Product Research' }, { label: 'User Testing' }, { label: 'UX/UI Design' }],
		time: {
			start: 'DEC 2024',
			end: 'MARCH 2025'
		}
	}}
>
	HELLO
</CaseStudy>

<script lang="ts">
	import CaseStudyMetrics, {
		type CaseStudyMetricsProps
	} from '$lib/components/case-study-metrics.svelte';
	import HashImage from '$lib/components/hash-image.svelte';
	import ArrowUpRightSvg from '$lib/components/svgs/arrow-up-right-svg.svelte';
	import type { SerializableHashableImage } from '$lib/images';
	import type { Snippet } from 'svelte';

	type CaseStudyHeaderProps = {
		description: string;
		href: string;
		title: string;
		splashImage: SerializableHashableImage;
		metricsProps: CaseStudyMetricsProps;
		children?: Snippet;
	};

	const { description, href, title, splashImage, metricsProps, children }: CaseStudyHeaderProps =
		$props();
</script>

<div class="flex w-full max-w-7xl flex-col gap-8 pt-40">
	<a {href} class="group flex w-fit flex-row items-center gap-2">
		<div
			class="text-5xl font-medium underline decoration-2 underline-offset-3 group-hover:no-underline"
		>
			{title}
		</div>
		<ArrowUpRightSvg className="w-8 h-8" />
	</a>
	<div class="flex flex-col gap-8 lg:flex-row">
		<div class="flex flex-col gap-8 lg:w-min">
			<div>
				{description}
			</div>
			<CaseStudyMetrics {...metricsProps} />
		</div>
		<div class="flex w-full content-center items-center justify-center">
			<HashImage image={splashImage} />
		</div>
	</div>
	<span class="h-32 w-full flex-shrink-0"></span>
	{#if children}
		<div class="m-auto flex w-full max-w-5xl flex-col gap-8 lg:gap-24">
			{@render children()}
		</div>
		<span class="h-12 w-full flex-shrink-0"></span>
	{/if}
</div>

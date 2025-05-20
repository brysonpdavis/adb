<script lang="ts">
	import CaseStudyMetrics, {
		type CaseStudyMetricsProps,
	} from '$lib/components/case-study-metrics.svelte';
	import HashImage from '$lib/components/hash-image.svelte';
	import ArrowUpRightSvg from '$lib/components/svgs/arrow-up-right-svg.svelte';
	import type { SerializableHashableImage } from '$lib/images';
	import type { Snippet } from 'svelte';
	import FunButton from './fun-button.svelte';
	import LetsConnect from '$lib/components/lets-connect.svelte';
	import { cn } from '$lib/utils';

	type CaseStudyHeaderProps = {
		description: string;
		href: string;
		title: string;
		splashImage: SerializableHashableImage;
		splashImageClassName?: string;
		metricsProps: CaseStudyMetricsProps;
		nextCaseStudyHref?: string;
		children?: Snippet;
	};

	const {
		description,
		href,
		title,
		splashImage,
		splashImageClassName,
		metricsProps,
		nextCaseStudyHref,
		children,
	}: CaseStudyHeaderProps = $props();
</script>

<div class="flex w-full max-w-7xl flex-col gap-8 pt-8">
	<a href="/" class="hover:text-primary w-fit transition-colors">ANNA DAVIS-BANDI</a>

	<a {href} class="group flex w-fit flex-row items-center gap-2">
		<div
			class="group-hover:text-primary text-5xl font-medium underline decoration-2 underline-offset-3 transition-colors group-hover:no-underline"
		>
			{title}
		</div>
		<ArrowUpRightSvg className="w-8 h-8 group-hover:stroke-primary transition-colors" />
	</a>
	<div class="flex flex-col gap-8 lg:flex-row">
		<div class="flex flex-col gap-8 lg:w-min">
			<div class="text-pretty">
				{description}
			</div>
			<CaseStudyMetrics {...metricsProps} />
		</div>
		<div class={cn(splashImageClassName, 'flex w-full content-center items-center justify-center')}>
			<HashImage image={splashImage} />
		</div>
	</div>
	<span class="h-32 w-full flex-shrink-0"></span>
	{#if children}
		<div class="m-auto flex w-full max-w-5xl flex-col gap-8 lg:gap-24">
			{@render children()}
			{#if nextCaseStudyHref}
				<div class="flex h-fit w-full lg:hidden">
					<FunButton fullWidth text="Next Case Study" href={nextCaseStudyHref} />
				</div>
			{/if}
			<LetsConnect />
		</div>
		<span class="h-12 w-full flex-shrink-0"></span>
	{/if}
</div>

{#if nextCaseStudyHref}
	<!-- in front of main content -->
	<div
		class="pointer-events-none fixed top-0 z-10 flex h-screen w-screen flex-col items-end overflow-hidden"
	>
		<div class="pointer-events-auto absolute top-20 right-18 hidden lg:flex">
			<FunButton href={nextCaseStudyHref} fullWidth text="next case study" />
		</div>
	</div>
{/if}

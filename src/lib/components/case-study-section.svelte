<script lang="ts">
	import type { SerializableHashableImage } from '$lib/images';
	import { cn } from '$lib/utils';
	import FunButton from './fun-button.svelte';
	import HashImage from './hash-image.svelte';

	interface Props {
		description: string;
		bullets: string[];
		href: string;
		logoHref: string;
		thumbnailSrc: SerializableHashableImage;
		logoSrc: string;
		disabled?: boolean;
		imageContainerClassName?: string;
		logoHeightPx?: number;
	}

	const {
		description,
		bullets,
		href,
		logoHref,
		thumbnailSrc,
		logoSrc,
		disabled = false,
		imageContainerClassName,
		logoHeightPx = 24,
	}: Props = $props();
</script>

<label
	class={cn(
		'bg-neutral text-base-300 transition-outline flex h-fit min-h-72 shrink-0 flex-col justify-between gap-8 overflow-hidden rounded-3xl px-8 py-0 outline-[#A1A1A1] duration-300 lg:aspect-square',
		{
			['group cursor-pointer hover:shadow-lg hover:outline']: !disabled,
			['cursor-not-allowed']: disabled,
		},
	)}
>
	<div class="flex flex-col gap-8 py-4 pt-6 lg:gap-4">
		<div class="w-fit" style={`padding-top: ${40 - logoHeightPx}px;`}>
			<a href={logoHref}> <img style={`height: ${logoHeightPx}px;`} src={logoSrc} alt="logo" /></a>
		</div>
		<div class="text-base text-pretty">{description}</div>
		<div class="flex flex-col items-center gap-1 text-base text-pretty lg:flex-row">
			{#each bullets as bullet, idx}
				{#if idx > 0}
					<span class="text-primary text-pretty">•</span>
				{/if}
				<div class="w-fit">{bullet}</div>
			{/each}
		</div>
		<FunButton isGrouped text={disabled ? 'coming soon' : 'see case study'} {href} {disabled} />
	</div>
	<div class="h-fit w-full lg:w-auto">
		<div class={cn('m-auto flex h-full max-w-144 flex-row', imageContainerClassName)}>
			<HashImage image={thumbnailSrc} className="w-full" />
		</div>
	</div>
</label>

<script lang="ts">
	import type { SerializableHashableImage } from '$lib/images';
	import { cn } from '$lib/utils';
	import FunButton from './fun-button.svelte';
	import HashImage from './hash-image.svelte';

	interface Props {
		description: string;
		href: string;
		logoHref: string;
		thumbnailSrc: SerializableHashableImage;
		logoSrc: string;
		disabled?: boolean;
		imageContainerClassName?: string;
	}

	const {
		description,
		href,
		logoHref,
		thumbnailSrc,
		logoSrc,
		disabled = false,
		imageContainerClassName,
	}: Props = $props();
</script>

<div
	class="bg-neutral text-base-300 transition-outline flex h-fit min-h-72 w-full shrink-0 flex-col justify-between gap-8 rounded-3xl px-12 py-0 outline-[#A1A1A1] duration-300 hover:shadow-lg hover:outline lg:flex-row lg:gap-4"
>
	<div class="flex flex-col gap-8 py-4 pt-18 lg:gap-4">
		<div class="w-fit">
			<a href={logoHref}> <img class="h-6" src={logoSrc} alt="logo" /></a>
		</div>
		<div class="text-2xl text-balance">{description}</div>
		<FunButton text={disabled ? 'coming soon' : 'see case study'} {href} {disabled} />
	</div>
	<div class="h-fit w-full lg:w-auto">
		<div class={cn('m-auto flex h-full max-w-144 flex-row lg:min-h-72', imageContainerClassName)}>
			<HashImage image={thumbnailSrc} className="w-full lg:w-124" />
		</div>
	</div>
</div>

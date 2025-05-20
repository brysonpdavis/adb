<script lang="ts">
	import FunButton from '$lib/components/fun-button.svelte';
	import HashImage from '$lib/components/hash-image.svelte';
	import AsteriskSvg from '$lib/components/svgs/asterisk-svg.svelte';
	import type { SerializableHashableImage } from '$lib/images';
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		brandColor: string;
		impacts: Snippet[];
		image: SerializableHashableImage;
		ctaText: string;
		ctaHref: string;
	}

	const { title, brandColor, impacts, image, ctaHref, ctaText }: Props = $props();
</script>

<div class="flex flex-col gap-8 lg:flex-row lg:gap-20">
	<div class="flex w-full flex-col gap-4 lg:w-1/2">
		<div class="text-base font-normal uppercase" style={`color: ${brandColor};`}>
			results & impact
		</div>
		<div class="text-2xl font-medium">{title}</div>
		{#each impacts as item}
			<div class="flex flex-row gap-1">
				<div class="pt-2">
					<AsteriskSvg className="h-2 w-2" />
				</div>
				<div class="text-pretty">
					{@render item()}
				</div>
			</div>
		{/each}
		<FunButton href={ctaHref} text={ctaText} newTab />
	</div>
	<div class="w-full lg:w-1/2">
		<HashImage {image} className="w-full" />
	</div>
</div>

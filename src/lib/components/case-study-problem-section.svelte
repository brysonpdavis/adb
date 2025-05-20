<script lang="ts">
	import type { SerializableHashableImage } from '$lib/images';
	import HashImage from './hash-image.svelte';

	interface Props {
		brandColor: string;
		title: string;
		description: string;
		image: SerializableHashableImage;
	}

	const { brandColor, title, description, image }: Props = $props();
</script>

<div class="flex flex-col gap-8 lg:flex-row lg:gap-20">
	<div class="flex w-full flex-col justify-center gap-4 lg:w-1/2">
		<div class="text-base font-normal uppercase" style={`color: ${brandColor};`}>the problem</div>
		<div class="text-2xl font-medium">{title}</div>
		<div class="text-pretty whitespace-pre-line">
			{description}
		</div>
	</div>
	<div class="flex w-full flex-col items-center lg:w-1/2">
		<HashImage {image} />
	</div>
</div>

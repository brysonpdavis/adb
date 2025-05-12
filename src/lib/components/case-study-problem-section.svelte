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
	<div class="flex w-full flex-col gap-4 lg:w-1/2">
		<div class="text-base font-normal uppercase" style={`color: ${brandColor};`}>the problem</div>
		<div class="text-2xl font-medium">{title}</div>
		<div class="text-pretty">
			{description}
		</div>
	</div>
	<div class="w-full lg:w-1/2">
		<HashImage {image} />
	</div>
</div>

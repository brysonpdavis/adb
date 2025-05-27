<script lang="ts">
	import type { SerializableHashableImage } from '$lib/images';
	import { cn } from '$lib/utils';
	import HashImage from './hash-image.svelte';

	interface Props {
		brandColor: string;
		title: string;
		description: string;
		image: SerializableHashableImage;
		type?: 'problem' | 'future';
		imageSize?: 'small' | 'large';
	}

	const {
		brandColor,
		title,
		description,
		image,
		type = 'problem',
		imageSize = 'small',
	}: Props = $props();
</script>

<div class="flex flex-col gap-8 lg:flex-row lg:gap-20">
	<div
		class={cn('flex w-full flex-col justify-center gap-4', {
			['lg:w-1/2']: imageSize === 'small',
			['lg:w-1/3']: imageSize === 'large',
		})}
	>
		<div class="text-base font-normal uppercase" style={`color: ${brandColor};`}>the {type}</div>
		<div class="text-2xl font-medium text-balance">{title}</div>
		<div class="text-pretty whitespace-pre-line">
			{description}
		</div>
	</div>
	<div
		class={cn('flex w-full flex-col items-center', {
			['lg:w-1/2']: imageSize === 'small',
			['lg:w-2/3']: imageSize === 'large',
		})}
	>
		<HashImage {image} />
	</div>
</div>

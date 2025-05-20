<script lang="ts">
	import type { SerializableHashableImage } from '$lib/images';
	import { cn } from '$lib/utils';
	import HashImage from './hash-image.svelte';

	interface Props {
		title: string;
		rowCount: 1 | 2 | 3 | 4;
		images: SerializableHashableImage[];
		gap?: 'big' | 'med' | 'small';
	}

	const { title, rowCount, images, gap = 'big' }: Props = $props();
</script>

<div class="flex w-full flex-col gap-8">
	<div class="text-center text-2xl font-medium">{title}</div>
	<div
		class={cn(
			`hidden w-full grid-cols-1 md:grid lg:grid-cols-2 xl:grid-cols-3 row-count-${rowCount}`,
			{
				'gap-8': gap === 'big',
				'gap-6': gap === 'med',
				'lg:gap-2': gap === 'small',
			},
		)}
	>
		{#each images as image}
			<div class="flex flex-col gap-4">
				<HashImage {image} className="w-full" />
			</div>
		{/each}
	</div>
	<div
		class={cn('grid w-full grid-cols-1 md:hidden', {
			'gap-4': gap === 'big',
			'gap-2': gap === 'med',
			'gap-0': gap === 'small',
		})}
	>
		{#each images as image}
			<div class="flex flex-col gap-4">
				<HashImage {image} className="w-full" />
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.row-count-1 {
		grid-template-columns: repeat(1, 1fr);
	}

	.row-count-2 {
		grid-template-columns: repeat(2, 1fr);
	}

	.row-count-3 {
		grid-template-columns: repeat(3, 1fr);
	}

	.row-count-4 {
		grid-template-columns: repeat(4, 1fr);
	}
</style>

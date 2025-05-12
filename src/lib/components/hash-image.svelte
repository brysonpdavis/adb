<script lang="ts">
	import { onMount } from 'svelte';
	import type { SerializableHashableImage } from '$lib/images';
	import { cn } from '$lib/utils';

	interface Props {
		image: SerializableHashableImage;
		className?: string;
	}

	const { image, className = '' }: Props = $props();
	const { src, alt, width, height, dataUrl } = image;

	let loaded = $state(false);

	onMount(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => {
			loaded = true;
		};
	});

	const style = `aspect-ratio: ${width / height};`;
</script>

<div class={`container ${className}`} {style}>
	<img src={dataUrl} {style} class={cn('temp-hash-image h-full w-full', { loaded })} {alt} />
	<img {src} {style} class={cn('loaded-hash-image', { loaded })} {alt} />
</div>

<style>
	.container {
		position: relative;
		display: inline-block;
		overflow: hidden;
	}

	img {
		position: absolute;
		top: 0;
		left: 0;
		transition: opacity 300ms ease-out;
	}

	.temp-hash-image {
		opacity: 1;
		filter: blur(8px);
		object-fit: cover;
		overflow: hidden;
	}

	.temp-hash-image.loaded {
		opacity: 0;
	}

	.loaded-hash-image {
		opacity: 0;
	}

	.loaded-hash-image.loaded {
		opacity: 1;
	}
</style>

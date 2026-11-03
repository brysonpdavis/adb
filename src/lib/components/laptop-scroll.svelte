<script lang="ts">
	import type { SerializableHashableImage } from '$lib/images';
	import HashImage from './hash-image.svelte';

	interface Props {
		frame: SerializableHashableImage;
		screen: SerializableHashableImage;
		// where the screen sits inside the frame, as percentages of the frame
		screenRect?: { left: number; top: number; width: number; height: number };
		durationSeconds?: number;
	}

	const {
		frame,
		screen,
		screenRect = { left: 12.405, top: 4.072, width: 75.445, height: 79.751 },
		durationSeconds = 18,
	}: Props = $props();

	const screenStyle = `left: ${screenRect.left}%; top: ${screenRect.top}%; width: ${screenRect.width}%; height: ${screenRect.height}%;`;
</script>

<div class="laptop w-full">
	<HashImage image={frame} className="w-full" />
	<div class="screen" style={screenStyle}>
		<img
			src={screen.src}
			alt={screen.alt}
			class="screen-content"
			style={`animation-duration: ${durationSeconds}s;`}
		/>
	</div>
</div>

<style>
	.laptop {
		position: relative;
	}

	.screen {
		position: absolute;
		overflow: hidden;
		/* rounded top corners, square bottom corners, matching the frame */
		border-radius: 1.35% 1.35% 0 0 / 2.27% 2.27% 0 0;
		container-type: size;
	}

	.screen-content {
		display: block;
		width: 100%;
		height: auto;
		animation-name: scroll-screen;
		animation-timing-function: ease-in-out;
		animation-iteration-count: infinite;
	}

	/* pause at the top, glide down, pause at the bottom, glide back up */
	@keyframes scroll-screen {
		0%,
		12% {
			transform: translateY(0);
		}
		50%,
		62% {
			transform: translateY(calc(-100% + 100cqh));
		}
		100% {
			transform: translateY(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.screen-content {
			animation: none;
		}
	}
</style>

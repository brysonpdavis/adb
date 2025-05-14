<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';

	type Position = {
		x: number;
		y: number;
	};

	let {
		color = 'primary',
		size = 'big',
		factor = 20,
		offset = { x: 0, y: 0 },
	}: {
		color?: 'primary' | 'alt';
		size: 'big' | 'small';
		/** bigger number == slower follow */
		factor: number;
		offset?: Position;
	} = $props();

	let mousePosition: Position = $state({ x: 0, y: 0 });
	let followerPosition: Position = $state({ x: 0, y: 0 });

	onMount(() => {
		document.addEventListener('mousemove', (e) => {
			mousePosition = { x: e.clientX, y: e.clientY };
		});

		setInterval(() => {
			const naiveDeltaX = mousePosition.x - followerPosition.x;
			const naiveDeltaY = mousePosition.y - followerPosition.y;

			const deltaX = naiveDeltaX / factor;
			const deltaY = naiveDeltaY / factor;

			followerPosition = {
				x: followerPosition.x + deltaX,
				y: followerPosition.y + deltaY,
			};
		}, 1000 / 60);
	});
</script>

<div
	style="top: {followerPosition.y + offset.y}px; left: {followerPosition.x + offset.x}px;"
	class={cn('pointer-events-none absolute rounded-full blur-3xl', {
		'bg-primary opacity-20': color === 'primary',
		'from-accent to-neutral bg-linear-to-b': color === 'alt',
		'h-100 w-100': size === 'big',
		'h-32 w-32': size === 'small',
	})}
></div>

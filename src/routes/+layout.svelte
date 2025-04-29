<script lang="ts">
	import NameRound from '$lib/components/NameRound.svelte';
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import MouseFollower from '$lib/components/MouseFollower.svelte';

	let { children } = $props();
</script>

<div class="pointer-events-none fixed z-0 h-screen w-screen overflow-hidden">
	<MouseFollower color="primary" factor={80} size="big" offset={{ x: -400, y: -200 }} />
	<MouseFollower color="alt" factor={20} size="small" offset={{ x: 100, y: 130 }} />
</div>

<main class="relative z-5 flex h-screen flex-col items-center justify-start">
	<content class="mx-auto flex min-h-screen w-full max-w-[924px] flex-col px-4 text-left">
		{@render children()}
	</content>
</main>

<div
	class="pointer-events-none fixed top-0 z-10 flex h-screen w-screen flex-col items-center overflow-hidden"
>
	<Nav />
	<NameRound />
</div>

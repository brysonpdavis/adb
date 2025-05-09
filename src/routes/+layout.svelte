<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/nav.svelte';
	import MouseFollower from '$lib/components/mouse-follower.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<!-- behind main content -->
<div class="pointer-events-none fixed z-0 h-screen w-screen overflow-hidden">
	<MouseFollower color="primary" factor={80} size="big" offset={{ x: -400, y: -200 }} />
	<MouseFollower color="alt" factor={20} size="small" offset={{ x: 100, y: 130 }} />
</div>

<!-- main content -->
<main class="relative z-5 flex flex-col items-center justify-start">
	<content class="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center px-4 text-left">
		{@render children()}
	</content>
</main>
<Footer />

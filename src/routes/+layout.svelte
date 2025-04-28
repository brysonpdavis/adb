<script lang="ts">
	import NameRound from '$lib/components/NameRound.svelte';
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import MouseFollower from '$lib/components/MouseFollower.svelte';

	let { children } = $props();
</script>

<div class="bg-base-100 z-10 flex h-screen flex-col items-center justify-start">
	<Nav />
	{@render children()}
</div>

<NameRound />
<MouseFollower color="primary" factor={40} size="big" offset={{ x: -400, y: -200 }} />
<MouseFollower color="alt" factor={20} size="small" offset={{ x: 100, y: 130 }} />

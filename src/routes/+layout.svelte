<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/footer.svelte';
	import Nav from '$lib/components/nav.svelte';

	let { children } = $props();
</script>

<main class="relative z-5 flex flex-col items-center justify-start">
	<content class="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center px-4 text-left">
		{@render children()}
	</content>
</main>
<Footer />

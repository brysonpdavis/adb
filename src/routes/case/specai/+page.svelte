<script lang="ts">
	import HashImage from '$lib/components/hash-image.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
	const { SPEC_FIGMA } = data;
</script>

<HashImage image={SPEC_FIGMA} className="w-24" />

<script lang="ts">
	import { SITE_SECTIONS, type SiteSection } from '$lib/constants';
	import { cn } from '$lib/utils';
	import { activeSection } from '$lib/state/active-section.svelte';
	import { page } from '$app/state';

	const showActive = $derived(page.route.id === '/');
</script>

{#snippet navSection(section: SiteSection)}
	{@const isActive = activeSection() === section.name}

	<a href={`/#${section.id}`} class={'group flex flex-row items-center gap-2'}>
		{#if isActive && showActive}
			<div>
				<div class="bg-primary h-2.5 w-2.5 rounded-full"></div>
			</div>
		{/if}
		<div
			class={cn('text-sm group-hover:font-bold', {
				'font-bold': isActive && showActive,
			})}
		>
			{section.name}
		</div>
	</a>
{/snippet}

<nav
	class="bg-neutral border-base-200 pointer-events-auto absolute top-18 flex w-fit flex-row gap-6 rounded-full border-2 px-4 py-2 font-normal"
>
	{#each SITE_SECTIONS as section}
		{@render navSection(section)}
	{/each}
</nav>

<script lang="ts">
	import { SITE_SECTIONS, type SiteSection } from '$lib/constants';
	import { cn } from '$lib/utils';
	import { activeSection } from '$lib/state/active-section.svelte';
</script>

{#snippet navSection(section: SiteSection)}
	{@const isActive = activeSection() === section.name}

	<a href={`/#${section.id}`} class={'group flex flex-row items-center gap-2'}>
		<div>
			<div class={cn('h-2.5 w-2.5', { 'bg-primary rounded-full': isActive })}></div>
		</div>
		<div
			class={cn('flex-grow text-sm transition-all duration-300 group-hover:font-bold', {
				'font-bold': isActive,
			})}
		>
			{section.name}
		</div>
		<div>
			<div class={'h-2.5 w-2.5'}></div>
		</div>
	</a>
{/snippet}

<nav
	class="bg-neutral border-base-200 pointer-events-auto absolute top-18 flex w-fit flex-row gap-0 rounded-full border-2 px-4 py-2 font-normal"
>
	{#each SITE_SECTIONS as section}
		{@render navSection(section)}
	{/each}
</nav>

<script lang="ts">
	import { ANNA_EMAIL, ANNA_LINKEDIN } from '$lib/constants';
	import FunButton from '$lib/components/fun-button.svelte';
	import { cn } from '$lib/utils';

	const { extraPadding }: { extraPadding?: boolean } = $props();
</script>

<div
	id="contact"
	class={cn('flex w-full flex-col gap-10', { 'min-h-(--screen-no-footer)': extraPadding })}
>
	{#if extraPadding}
		<div class="m-0 h-36 shrink-0 p-0"></div>
	{/if}
	<div class="text-5xl font-medium uppercase">let's connect!</div>
	<div class="text-2xl uppercase">
		I'm currently open to new opportunities and collaborations! If you're hiring, working on
		something exciting, or just want to chat about design—I'd love to hear from you.
	</div>
	<div class="mt-2 flex w-full flex-col gap-8 lg:flex-row">
		<FunButton text="my cv" href="/yes" newTab />
		<FunButton text="email" href={`mailto:${ANNA_EMAIL}`} />
		<FunButton text="linkedin" href={ANNA_LINKEDIN} newTab />
	</div>
</div>

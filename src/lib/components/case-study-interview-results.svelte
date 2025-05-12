<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		statement: string;
		results: Snippet[];
	}

	const { statement, results }: Props = $props();
</script>

<div class="flex w-full flex-col items-center gap-12">
	<div class="text-center text-2xl font-medium text-balance">
		{statement}:
	</div>
	<div class="flex flex-col gap-8 lg:flex-row xl:gap-16">
		{#each results as result, idx}
			<div class="outline-base-200 flex flex-col gap-2 rounded-3xl p-6 outline-2">
				<div class="text-2xl font-medium">
					{idx + 1}.
				</div>
				<div class="text-pretty">
					{@render result()}
				</div>
			</div>
		{/each}
	</div>
</div>

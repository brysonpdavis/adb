<script lang="ts">
	export type MetricItem = {
		label: string;
		count?: number;
	};

	export type CaseStudyMetricsProps = {
		role: MetricItem[];
		team: MetricItem[];
		scope: MetricItem[];
		time: {
			start: string;
			end: string;
		};
	};

	const { role, team, scope, time }: CaseStudyMetricsProps = $props();
</script>

{#snippet badge(item: MetricItem)}
	<div class="rounded-full px-4 py-2 text-base font-light outline-1 outline-[#8b8b8b]">
		{item.label}
		{#if item.count !== undefined}
			x{item.count}
		{/if}
	</div>
{/snippet}

<div
	class="outline-base-200 bg-base-100 flex h-fit w-full flex-col gap-6 rounded-xl p-4 outline-1 lg:w-md"
>
	<div class="flex w-full flex-row">
		<div class="h-fit w-24 py-2 text-base font-light uppercase">role</div>
		<div class="flex flex-row flex-wrap gap-3">
			{#each role as item}
				{@render badge(item)}
			{/each}
		</div>
	</div>
	<div class="flex w-full flex-row">
		<div class="h-fit w-24 flex-shrink-0 py-2 text-base font-light uppercase">team</div>
		<div class="flex flex-row flex-wrap gap-3">
			{#each team as item}
				{@render badge(item)}
			{/each}
		</div>
	</div>
	<div class="flex w-full flex-row">
		<div class="h-fit w-24 flex-shrink-0 py-2 text-base font-light uppercase">scope</div>
		<div class="flex flex-row flex-wrap gap-3">
			{#each scope as item}
				{@render badge(item)}
			{/each}
		</div>
	</div>
	<div class="flex w-full flex-row">
		<div class="h-fit w-24 flex-shrink-0 text-base font-light uppercase">time</div>
		<div class="flex flex-row flex-wrap font-light">
			{time.start} - {time.end}
		</div>
	</div>
</div>

<script lang="ts">
	import AsteriskSvg from './svgs/asterisk-svg.svelte';

	interface Props {
		type: 'solution' | 'role';
		brandColor: string;
		title: string;
		description: string;
		itemsHeading: string;
		items: { heading: string; text: string }[];
	}

	const { type, brandColor, title, description, itemsHeading, items }: Props = $props();
</script>

<div class="bg-neutral flex flex-col gap-8 rounded-3xl p-8 lg:flex-row lg:gap-20 lg:p-10">
	<div class="flex w-full flex-col gap-4 lg:w-3/5">
		<div class="text-base font-normal uppercase" style={`color: ${brandColor};`}>the {type}</div>
		<div class="text-2xl font-medium">{title}</div>
		<div class="text-pretty whitespace-pre-line">
			{description}
		</div>
	</div>
	<div class="flex w-full flex-col gap-4 lg:w-2/5">
		<div class="font-medium uppercase">
			{itemsHeading}
		</div>
		{#each items as item}
			<div class="flex flex-row gap-1">
				<div class="pt-2">
					<AsteriskSvg className="h-2 w-2" />
				</div>
				<div class="text-pretty">
					<span class="font-bold">
						{item.heading}:
					</span>
					{item.text}
				</div>
			</div>
		{/each}
	</div>
</div>

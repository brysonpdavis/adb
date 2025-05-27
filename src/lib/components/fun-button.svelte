<script lang="ts">
	import ArrowUpRightSvg from '$lib/components/svgs/arrow-up-right-svg.svelte';
	import { cn } from '$lib/utils';

	interface Props {
		text: string;
		href: string;
		disabled?: boolean;
		newTab?: boolean;
		fullWidth?: boolean;
		download?: boolean;
		isGrouped?: boolean;
	}
	let {
		text,
		href,
		newTab = false,
		disabled = false,
		fullWidth = false,
		download,
		isGrouped = false,
	}: Props = $props();
</script>

<a
	class={cn({ 'w-fit': !fullWidth, 'w-full': fullWidth, group: !isGrouped })}
	{href}
	{download}
	target={newTab ? '_blank' : undefined}
>
	<button
		class={cn(
			'shadow-base-300 flex flex-row gap-4 rounded-full px-8 py-2 shadow-[4px_6px_0_0] outline-1 transition duration-300',
			{
				'group-hover:bg-base-300 bg-neutral cursor-pointer group-hover:shadow-none': !disabled,
				'bg-base-100 cursor-not-allowed': disabled,
				'w-full justify-center': fullWidth,
			},
		)}
		{disabled}
	>
		<div
			class={cn('font-medium whitespace-nowrap uppercase transition duration-300', {
				'group-hover:text-neutral text-base': !disabled,
				'text-base-300': disabled,
			})}
		>
			{text}
		</div>
		<ArrowUpRightSvg
			className={cn('h-6 w-6 transition duration-300 ease-out', {
				'group-hover:stroke-neutral group-hover:rotate-45': !disabled,
			})}
		/>
	</button>
</a>

<script lang="ts">
	import upRightArrow from '$lib/assets/arrow-up-right.svg';
	import ArrowUpRightSvg from '$lib/components/svgs/ArrowUpRightSvg.svelte';
	interface Props {
		text: string;
		href: string;
		alt: string;
	}
	let { text, href, alt }: Props = $props();
</script>

<a class="group w-fit" {href}>
	<button
		class="shadow-base-300 bg-neutral hover:bg-base-300 flex cursor-pointer flex-row gap-4 rounded-full px-8 py-4 shadow-[4px_6px_0_0] outline-1 transition"
	>
		<div class="group-hover:text-neutral text-base font-medium uppercase transition duration-300">
			{text}
		</div>
		<ArrowUpRightSvg
			className="group-hover:stroke-neutral h-6 w-6 transition duration-300 ease-out group-hover:rotate-45"
		/>
	</button>
</a>

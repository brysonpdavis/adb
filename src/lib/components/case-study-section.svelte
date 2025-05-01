<script lang="ts">
	import FunButton from './fun-button.svelte';

	interface Props {
		description: string;
		href: string;
		thumbnailSrc: string;
		logoSrc: string;
		disabled?: boolean;
	}

	const { description, href, thumbnailSrc, logoSrc, disabled = false }: Props = $props();
</script>

<div
	class="border-base-200 bg-neutral text-base-300 flex h-fit min-h-72 w-full shrink-0 flex-col justify-between gap-4 rounded-3xl border-2 px-12 py-4 lg:flex-row"
>
	<div class="flex flex-col gap-4 pt-18">
		<div class="w-fit">
			<img class="h-6" src={logoSrc} alt="logo" />
		</div>
		<div class="text-2xl text-pretty">{description}</div>
		<FunButton text={disabled ? 'coming soon' : 'see case study'} {href} {disabled} />
	</div>
	<div class="flex h-full min-h-72 max-w-144 flex-row items-center">
		<img src={thumbnailSrc} alt="thumbnail" />
	</div>
</div>

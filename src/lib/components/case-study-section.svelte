<script lang="ts">
	import type { SerializableHashableImage } from '$lib/images';
	import FunButton from './fun-button.svelte';
	import HashImage from './hash-image.svelte';

	interface Props {
		description: string;
		href: string;
		logoHref: string;
		thumbnailSrc: SerializableHashableImage;
		logoSrc: string;
		disabled?: boolean;
	}

	const { description, href, logoHref, thumbnailSrc, logoSrc, disabled = false }: Props = $props();
</script>

<div
	class="border-base-200 bg-neutral text-base-300 flex h-fit min-h-72 w-full shrink-0 flex-col justify-between gap-4 rounded-3xl border-2 px-12 py-4 lg:flex-row"
>
	<div class="flex flex-col gap-4 pt-18">
		<div class="w-fit">
			<a href={logoHref}> <img class="h-6" src={logoSrc} alt="logo" /></a>
		</div>
		<div class="text-2xl text-pretty">{description}</div>
		<FunButton text={disabled ? 'coming soon' : 'see case study'} {href} {disabled} />
	</div>
	<div class="flex h-full min-h-72 max-w-144 flex-row items-center">
		<HashImage image={thumbnailSrc} className="w-full lg:w-124" />
	</div>
</div>

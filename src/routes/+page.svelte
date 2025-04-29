<script lang="ts">
	import annaLaptop from '$lib/assets/anna-laptop.png';
	import FunButton from '$lib/components/FunButton.svelte';
</script>

<div class="m-0 h-80 shrink-0 p-0"></div>
<div class="flex w-full flex-col gap-4 text-pretty">
	<img src={annaLaptop} class="h-24 w-24 rounded-full" alt="annadavisbandi" />
	<div class="text-2xl font-medium uppercase">hi i'm anna</div>
	<div class="text-4xl leading-14 font-medium uppercase">
		product designer & founder with 6+ years of experience. based in
		<span class="line-through"> toronto, on</span>
		<span class="text-primary underline">new york, ny.</span>
	</div>
</div>
<div class="mt-2 text-2xl leading-14">
	Currently working on <a class="hover:text-primary underline" href="http://www.specai.io"
		>spec.ai</a
	>
</div>
<div class="mt-6 flex w-full flex-row gap-8">
	<FunButton alt="test" text="explore my work" href="/yes" />
	<FunButton alt="test" text="my cv" href="/yes" />
</div>
<div class="mt-8"></div>

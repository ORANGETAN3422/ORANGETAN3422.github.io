<script lang="ts">
	import trophyOne from '$lib/assets/list/trophy_1.png';
	import trophyTwo from '$lib/assets/list/trophy_2.png';
	import trophyThree from '$lib/assets/list/trophy_3.png';

	import type { Completion } from '$lib/types';
	import { onMount } from 'svelte';

	let levelThumb: string = $state('');

	const {
		completion,
		selected = false,
		onclick
	}: { completion: Completion; selected?: boolean; onclick?: () => void } = $props();

	onMount(async () => {
		levelThumb = `https://raw.githubusercontent.com/All-Rated-Extreme-Demon-List/Thumbnails/main/levels/full/${completion.id}.webp`;
	});
</script>

<button
	{onclick}
	class="group relative flex w-full items-center gap-4 overflow-hidden rounded-sm border bg-white/5 px-2 py-3 transition-all duration-300 hover:bg-white/10 {selected
		? 'border-white/40'
		: 'border-white/10 hover:border-white/25'}"
>
	{#if levelThumb}
		<img
			src={levelThumb}
			alt=""
			class="absolute top-0 right-0 h-full w-1/2 mask-[linear-gradient(to_left,black_0%,transparent_100%)] object-cover object-right opacity-30"
		/>
	{/if}
	<span class="relative flex w-10 shrink-0 items-center justify-end">
		{#if completion.position === 1}
			<img src={trophyOne} alt="#1" class="h-5 w-auto" />
		{:else if completion.position === 2}
			<img src={trophyTwo} alt="#2" class="h-5 w-auto" />
		{:else if completion.position === 3}
			<img src={trophyThree} alt="#3" class="h-5 w-auto" />
		{:else}
			<span class="text-sm font-light text-white/30 tabular-nums">#{completion.position}</span>
		{/if}
	</span>
	<span class="relative h-4 w-px shrink-0 bg-white/10"></span>
	<span class="relative flex-1 text-left text-sm font-medium text-white">{completion.name}</span>
</button>

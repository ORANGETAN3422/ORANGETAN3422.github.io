<script lang="ts">
	import completionsJson from '$lib/data/completions.json';
	import CompletionCard from '$lib/components/CompletionCard.svelte';

	import type { Completion, Level } from '$lib/types';
	import { fetchLevel } from '$lib/api';
	import { SvelteMap } from 'svelte/reactivity';

	import trophyOne from '$lib/assets/list/trophy_1.png';
	import trophyTwo from '$lib/assets/list/trophy_2.png';
	import trophyThree from '$lib/assets/list/trophy_3.png';

	const completions: Completion[] = completionsJson.completions;
	let selected: Completion | null = $state(null);
	let levelData: Level | null = $state(null);
	const cache = new SvelteMap<number, Level>();

	let thumbUrl = $derived.by(() =>
		selected
			? `https://raw.githubusercontent.com/All-Rated-Extreme-Demon-List/Thumbnails/main/levels/full/${selected.id}.webp`
			: ''
	);

	let youtubeThumbUrl = $derived.by((): string => {
		if (!selected) return '';
		if (selected.video) return `https://i.ytimg.com/vi/${selected.video}/maxresdefault.jpg`;
		return thumbUrl;
	});

	async function selectCompletion(completion: Completion | null) {
		if (completion === null || selected?.id === completion.id) {
			selected = null;
			levelData = null;
			return;
		}
		selected = completion;
		if (cache.has(completion.id)) {
			levelData = cache.get(completion.id)!;
			return;
		}
		levelData = null;
		const data = await fetchLevel(completion.id);
		cache.set(completion.id, data);
		levelData = data;
	}
</script>

<svelte:head>
	<title>Completions</title>
</svelte:head>
<section class="px-6 pb-32">
	<div class="mx-auto max-w-3xl">
		<div class="flex h-[60vh] gap-4">
			<!-- list -->
			<div class="flex min-w-0 flex-1 flex-col gap-2 overflow-y-auto pr-1">
				{#each completions as completion (completion.id)}
					<CompletionCard
						{completion}
						selected={selected?.id === completion.id}
						onclick={() => selectCompletion(completion)}
					/>
				{/each}
			</div>

			<!-- panel -->
			<div
				class="overflow-hidden backdrop-blur-sm transition-all duration-300 ease-out {selected
					? 'w-80 opacity-100'
					: 'w-0 opacity-0'}"
			>
				<div
					class="flex h-full w-80 flex-col overflow-hidden rounded-sm border border-white/10 bg-white/5"
				>
					{#if selected}
						<a
							href={selected.video ? `https://youtu.be/${selected.video}` : undefined}
							target={selected.video ? '_blank' : ''}
							rel="noopener noreferrer external"
							class="group block {selected.video ? 'cursor-pointer' : 'cursor-default'}"
							tabindex={selected.video ? 0 : -1}
						>
							<img
								src={youtubeThumbUrl}
								alt={selected.name}
								class="h-40 w-full shrink-0 object-cover brightness-100 duration-300 group-hover:brightness-110"
								style="mask-image: linear-gradient(to bottom, black 60%, transparent 100%);"
							/>
						</a>
						<div class="p-4">
							<div class="flex items-center gap-2">
								{#if selected.position === 1}
									<img src={trophyOne} alt="#1" class="h-6 w-auto shrink-0" />
								{:else if selected.position === 2}
									<img src={trophyTwo} alt="#2" class="h-6 w-auto shrink-0" />
								{:else if selected.position === 3}
									<img src={trophyThree} alt="#3" class="h-6 w-auto shrink-0" />
								{:else}
									<span class="text-sm font-light text-white/40">#{selected.position}</span>
								{/if}
								<h3 class="text-base font-semibold text-white">{selected.name}</h3>
							</div>

							<!-- api data -->
							{#if levelData}
								<p class="mt-1 text-xs text-white/40">by {levelData.publisher.global_name}</p>

								<div class="mt-3 flex flex-wrap gap-2">
									{#if levelData.gddl_tier}
										<span class="rounded-sm bg-white/10 px-2 py-0.5 text-xs text-white/60"
											>Tier {Math.round(levelData.gddl_tier)}</span
										>
									{/if}
									{#if levelData.nlw_tier}
										<span class="rounded-sm bg-white/10 px-2 py-0.5 text-xs text-white/60"
											>{levelData.nlw_tier}</span
										>
									{/if}
									{#if levelData.points}
										<span class="rounded-sm bg-white/10 px-2 py-0.5 text-xs text-white/60"
											>{levelData.points / 10} pts</span
										>
									{/if}
									{#if levelData.two_player}
										<span class="rounded-sm bg-white/10 px-2 py-0.5 text-xs text-white/60">2P</span>
									{/if}
								</div>

								{#if levelData.description}
									<p class="mt-3 text-xs leading-relaxed text-white/40">{levelData.description}</p>
								{/if}
							{:else}
								<p class="mt-2 text-xs text-white/25">Loading...</p>
							{/if}

							<!-- personal stats -->

							{#if selected.attempts || selected.enjoyment || selected.ranking}
								<hr class="my-3 border-white/10" />
								{#if selected.attempts}
									<p class="text-xs text-white/40">
										<b class="text-white/60">Attempts: </b>{selected.attempts}
									</p>
								{/if}
								{#if selected.enjoyment}
									<p class="text-xs text-white/40">
										<b class="text-white/60">Enjoyment: </b>{selected.enjoyment}/10
									</p>
								{/if}
								{#if selected.ranking}
									<p class="text-xs text-white/40">
										<b class="text-white/60">Ranking: </b>{selected.ranking}/10
									</p>
								{/if}
							{/if}
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

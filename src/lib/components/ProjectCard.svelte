<script lang="ts">
	import githubIcon from '$lib/assets/github_icon.svg';

	import type { Project } from '$lib/types';
	import { expoOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const { project, index = 0 }: { project: Project; index?: number } = $props();

	const tagColors: Record<string, string> = {
		Svelte: '#FF3E00',
		SvelteKit: '#FF3E00',
		TypeScript: '#3178C6',
		JavaScript: '#F7DF1E',
		'C#': '#9B4F96',
		'.NET': '#512BD4',
		Python: '#3776AB',
		React: '#61DAFB',
		HTML: '#E34F26',
		CSS: '#1572B6'
	};

	function tagStyle(tag: string): string {
		const color = tagColors[tag];
		if (!color) return '';
		return `background-color: ${color}20; color: ${color};`;
	}
</script>

<div
	class="group relative rounded-sm border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 [&:hover:not(:has(a.github-btn:hover))]:border-white/25 [&:hover:not(:has(a.github-btn:hover))]:bg-white/10"
	transition:fly|global={{ y: 40, duration: 450, delay: index * 50, easing: expoOut }}
>
	<a href={project.link} rel="external" class="block p-6">
		<div class="flex items-start justify-between">
			<h3 class="text-base font-medium text-white">{project.name}</h3>
			<span
				class="translate-x-1 text-white/30 opacity-0 transition-all duration-300 group-[&:hover:not(:has(a.github-btn:hover))]:translate-x-0 group-[&:hover:not(:has(a.github-btn:hover))]:opacity-100"
				>↗</span
			>
		</div>
		<p class="mt-2 text-sm leading-relaxed text-white/50">{project.description}</p>
		<div class="mt-4 flex flex-wrap gap-2">
			{#each project.tags as tag (tag)}
				<span
					class="rounded-sm px-2 py-0.5 text-xs"
					style={tagStyle(tag) ||
						'background-color: rgba(255,255,255,0.1); color: rgba(255,255,255,0.6);'}>{tag}</span
				>
			{/each}
		</div>
	</a>
	{#if project.github !== ''}
		<a
			href={project.github}
			rel="external noopener noreferrer"
			target="_blank"
			class="github-btn absolute right-4 bottom-4 opacity-40 transition-opacity duration-200 hover:opacity-100"
			aria-label="View on GitHub"
		>
			<img src={githubIcon} alt="GitHub" class="h-8 w-8 invert" />
		</a>
	{/if}
</div>

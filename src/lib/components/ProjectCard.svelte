<script lang="ts">
    import githubIcon from '$lib/assets/github_icon.svg';

	import type { Project } from '$lib/types';

	const { project }: { project: Project } = $props();
</script>

<div class="group relative rounded-sm border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 [&:hover:not(:has(a.github-btn:hover))]:border-white/25 [&:hover:not(:has(a.github-btn:hover))]:bg-white/10">
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
				<span class="rounded-sm bg-white/10 px-2 py-0.5 text-xs text-white/60">{tag}</span>
			{/each}
		</div>
	</a>
	<a
		href={project.github}
        rel="external noopener noreferrer"
		target="_blank"
		class="github-btn absolute right-4 bottom-4 opacity-40 transition-opacity duration-200 hover:opacity-100"
		aria-label="View on GitHub"
	>
		<img src={githubIcon} alt="GitHub" class="h-8 w-8 invert" />
	</a>
</div>

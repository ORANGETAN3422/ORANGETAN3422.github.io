<script lang="ts">
	import projectsJson from '$lib/data/projects.json';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { Project } from '$lib/types';

	const projects: Project[] = projectsJson.projects;
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>
<section class="px-6 pb-32">
	<div class="mx-auto max-w-5xl">
		<div class="grid gap-4 sm:grid-cols-2">
			{#each projects as project (project.name)}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</section>

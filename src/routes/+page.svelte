<script lang="ts">
	// assets and data
	import plungeBg from '$lib/assets/theplunge_bg.png';
	import birdGd from '$lib/assets/bird_gd.png';
	import projectsJson from '$lib/data/projects.json';

	// components
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	// types and functions
	import type { Project } from '$lib/types';

	const projects: Project[] = projectsJson.projects;
</script>

<div class="relative min-h-screen font-sans text-white">
	<!-- bg -->
	<div
		class="fixed inset-0 bg-cover bg-center bg-no-repeat"
		style="background-image: url({plungeBg})"
	></div>
	<div class="fixed inset-0 bg-black/70"></div>

	<div class="relative z-10 flex min-h-screen flex-col">
		<!-- title -->
		<section class="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
			<h1 class="mb-6 text-6xl font-medium tracking-tight text-white md:text-8xl">
				ORANGETAN
			</h1>
			<p class="max-w-lg text-lg font-light text-white/60">
				Geometry Dash Player and Programmer, mostly working in Frontend Web development and DotNet.
				My current hardest is Cold Sweat and I have 9 Extremes.
			</p>
			<div class="mt-10 h-px w-150 bg-white/20"></div>
		</section>

		<!-- projects -->
		<section class="px-6 pb-32">
			<div class="mx-auto max-w-5xl">
			<!-- implement a arrow change cycle button left right kinda thing -->
				<h2 class="mb-12 text-center text-md tracking-widest text-white/80 uppercase">My Projects</h2>
				<div class="grid gap-4 sm:grid-cols-2">
					{#each projects as project (project.name)}
						<ProjectCard {project} />
					{/each}
				</div>
			</div>
		</section>

		<!-- footer -->
		<footer class="border-t border-white/10 px-6 py-6 text-center">
			<img src={birdGd} alt="OvO" class="mx-auto mb-4 h-16 w-16 object-contain brightness-75 opacity-75" />
		</footer>
	</div>
</div>

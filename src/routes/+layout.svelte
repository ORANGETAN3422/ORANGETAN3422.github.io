<script lang="ts">
	import './layout.css';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import favicon from '$lib/assets/cube_23.png';
	import plungeBg from '$lib/assets/theplunge_bg.png';
	import birdGd from '$lib/assets/bird_gd.png';
	import iconGithub from '$lib/assets/icons/github.svg';
	import iconYoutube from '$lib/assets/icons/youtube.svg';
	import iconGd from '$lib/assets/icons/gd.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="relative min-h-screen font-sans text-white">
	<div
		class="fixed inset-0 bg-cover bg-center bg-no-repeat"
		style="background-image: url({plungeBg})"
	></div>
	<div class="fixed inset-0 bg-black/70"></div>

	<div class="relative z-10 flex min-h-screen flex-col">
		<section class="flex flex-col items-center justify-center px-6 py-16 pt-32 text-center">
			<div class="flex flex-row gap-6">
				<img src={favicon} alt="Cube" class="rotate mx-auto mb-6 h-24 w-24 object-contain" />
				<h1 class="mb-6 text-6xl font-medium tracking-tight text-white md:text-8xl">ORANGETAN</h1>
			</div>
			<p class="max-w-lg text-lg font-light text-white/60">
				Geometry Dash Player and Programmer, mostly working in Frontend Web development and DotNet.
				My current hardest is Cold Sweat and I have 9 Extremes.
			</p>
			<div class="mt-4 flex gap-4">
				<a
					href="https://www.youtube.com/@orangetangd"
					aria-label="YouTube"
					class="shrink-0 opacity-70 transition-opacity hover:opacity-100"
				>
					<img
						src={iconYoutube}
						alt="YouTube"
						class="h-7 w-auto"
						style="filter: brightness(0) invert(1);"
					/>
				</a>
				<a
					href="https://github.com/ORANGETAN3422"
					aria-label="GitHub"
					class="shrink-0 opacity-70 transition-opacity hover:opacity-100"
				>
					<img
						src={iconGithub}
						alt="GitHub"
						class="h-7 w-auto"
						style="filter: brightness(0) invert(1);"
					/>
				</a>
				<a
					href="https://gdbrowser.com/u/orangetan3422"
					aria-label="Geometry Dash"
					class="shrink-0 opacity-70 transition-opacity hover:opacity-100"
				>
					<img
						src={iconGd}
						alt="Geometry Dash"
						class="h-7 w-auto"
						style="filter: brightness(0) invert(1);"
					/>
				</a>
			</div>
			<div class="mt-6 h-px w-150 bg-white/20"></div>
		</section>

		<nav class="mb-8 flex justify-center gap-8">
			<a
				href={resolve('/projects')}
				class="text-sm tracking-widest uppercase transition-colors {page.url.pathname ===
				resolve('/projects')
					? 'font-bold text-white underline underline-offset-4'
					: 'text-white/50 hover:text-white/90'}">Projects</a
			>
			<a
				href={resolve('/completions')}
				class="text-sm tracking-widest uppercase transition-colors {page.url.pathname ===
				resolve('/completions')
					? 'font-bold text-white underline underline-offset-4'
					: 'text-white/50 hover:text-white/90'}">Completions</a
			>
		</nav>

		{@render children()}

		<footer class="border-t border-white/10 px-6 py-6 text-center">
			<img
				src={birdGd}
				alt="OvO"
				class="mx-auto h-16 w-16 object-contain opacity-75 brightness-75"
			/>
		</footer>
	</div>
</div>

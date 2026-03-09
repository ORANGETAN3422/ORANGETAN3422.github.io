<script lang="ts">
    let active: number | null = null;

    const panels = [
        {
            id: 0,
            label: "01",
            title: "My Projects",
            content:
                "This is the expanded content for the first panel. You can put anything here — rich text, components, images, forms. The panel grows to claim the horizontal space released by its siblings.",
        },
        {
            id: 1,
            label: "02",
            title: "My Completions",
            content:
                "Second panel content lives here. When expanded, this section stretches out while the others compress to their minimum width, staying visible as slim vertical tabs.",
        },
        {
            id: 2,
            label: "03",
            title: "Something",
            content:
                "Third panel content. Click any tab to expand it. Clicking an already-active panel collapses it back to equal distribution.",
        },
    ];

    function toggle(id: number) {
        active = active === id ? null : id;
    }
</script>

<div class="flex flex-row h-150 w-full bg-[#0d0d0d] gap-0.5 font-mono">
    {#each panels as panel}
        {@const isExpanded = active === panel.id}
        {@const isCollapsed = active !== null && active !== panel.id}

        <div
            class="relative flex flex-row overflow-hidden border border-[#222] bg-[#111] transition-all duration-550 ease-[cubic-bezier(0.77,0,0.175,1)]"
            style="flex: {isExpanded ? 5 : isCollapsed ? 0.15 : 1}"
        >
            <!-- l;ine -->
            <div
                class="absolute top-0 left-0 right-0 h-0.5 z-10 transition-colors duration-300 {isExpanded
                    ? 'bg-[#f5c97a]'
                    : 'bg-transparent'}"
            ></div>

            <!-- vertical header -->
            <button
                on:click={() => toggle(panel.id)}
                aria-expanded={isExpanded}
                class="flex flex-col items-center gap-4 px-5 py-7 cursor-pointer shrink-0 border-r border-[#1e1e1e] transition-colors duration-200 hover:bg-[#181818] select-none outline-none"
            >
                <span
                    class="vertical text-[0.65rem] tracking-[0.18em] text-[#666]"
                >
                    {panel.label}
                </span>
                <span
                    class="vertical flex-1 text-[1.15rem] font-light tracking-[0.01em] whitespace-nowrap transition-colors duration-200 {isExpanded
                        ? 'text-[#f5c97a]'
                        : 'text-[#e8e2d9]'}"
                    style="font-family: 'Fraunces', serif"
                >
                    {panel.title}
                </span>
                <span
                    class="vertical text-[0.9rem] transition-all duration-450 ease-[cubic-bezier(0.77,0,0.175,1)] {isExpanded
                        ? 'rotate-180 text-[#f5c97a]'
                        : 'text-[#444]'}"
                >
                    →
                </span>
            </button>

            <!-- panel content -->
            <div
                class="flex flex-1 items-start min-w-0 overflow-hidden transition-all duration-350 ease-in-out {isExpanded
                    ? 'opacity-100 translate-x-0 p-7 pointer-events-auto'
                    : 'opacity-0 translate-x-2 p-0 pointer-events-none'}"
            >
                <p
                    class="text-[0.82rem] leading-[1.8] text-[#888] m-0 whitespace-normal"
                >
                    {panel.content}
                </p>
            </div>
        </div>
    {/each}
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Fraunces:opsz,wght@9..144,300;9..144,600&display=swap");

    .vertical {
        writing-mode: vertical-rl;
    }
</style>

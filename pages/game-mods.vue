<template>
  <main class="bg-neutral-950 text-white">
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.07),transparent_55%)]" />
        <div class="absolute inset-0 shadow-[inset_0_0_220px_rgba(0,0,0,0.88)]" />
      </div>

      <div class="relative mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p class="text-[12px] font-semibold tracking-[0.18em] text-white/70">
              GOH — OSTFRONT MODS
            </p>

            <h1 class="mt-6 font-serif text-[clamp(2.6rem,5.2vw,4.6rem)] leading-[0.92] tracking-tight">
              Mods built for
              <span class="text-red-600">Call to Arms</span>
              gameplay.
            </h1>

            <p class="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
              Download and install any of the mods below. Each download is a zipped mod folder you can
              extract into your GOH-Ostfront <span class="text-white/85 font-semibold">mods</span> directory.
            </p>

            <div class="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                  href="#mods"
                  class="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/10 px-6 py-3
                       text-[12px] font-semibold tracking-[0.2em] text-white backdrop-blur-md transition
                       hover:bg-white/14 hover:border-white/26"
              >
                VIEW MODS
                <span class="ml-2 text-white/60">↘</span>
              </a>

              <a
                  href="#install"
                  class="inline-flex items-center justify-center rounded-full border border-white/14 bg-transparent px-6 py-3
                       text-[12px] font-semibold tracking-[0.2em] text-white/85 transition hover:text-white hover:border-white/22"
              >
                INSTALL GUIDE
                <span class="ml-2 text-white/60">↗</span>
              </a>
            </div>
          </div>

          <!-- Right side panel -->
          <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md lg:p-8">
            <p class="text-[11px] font-semibold tracking-[0.28em] text-white/60">COMPATIBILITY</p>
            <div class="mt-4 space-y-3 text-sm text-white/70">
              <p><span class="text-white/85 font-semibold">Game:</span> Gates of Hell: Ostfront</p>
              <p><span class="text-white/85 font-semibold">Install:</span> Extract into <code class="text-white/85">mods/</code></p>
              <p><span class="text-white/85 font-semibold">Format:</span> .zip (folder inside)</p>
            </div>

            <div class="mt-8 border-t border-white/10 pt-6">
              <p class="text-[11px] font-semibold tracking-[0.28em] text-white/60">NOTE</p>
              <p class="mt-3 text-sm leading-relaxed text-white/65">
                If a mod doesn’t appear in your in-game mod list, double-check the folder name
                and that the extracted folder contains <code class="text-white/85">mod.info</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mods list -->
    <section id="mods" class="bg-neutral-100 text-neutral-950">
      <div class="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div class="flex items-end justify-between gap-6">
          <h2 class="font-serif text-[clamp(2rem,3.4vw,3rem)] leading-[0.95] tracking-tight">
            Downloads
          </h2>
          <p class="text-[12px] font-semibold tracking-[0.18em] text-neutral-900/60">
            {{ mods.length }} MODS
          </p>
        </div>

        <div class="mt-10 border-t border-neutral-900/10">
          <div
              v-for="m in mods"
              :key="m.id"
              class="grid items-start gap-6 border-b border-neutral-900/10 py-7 md:grid-cols-[1fr_auto]"
          >
            <div>
              <div class="flex flex-wrap items-center gap-3">
                <p class="text-[12px] font-semibold tracking-[0.18em] text-neutral-900/55">
                  {{ m.tag }}
                </p>
                <span class="h-1 w-1 rounded-full bg-neutral-900/25" aria-hidden="true" />
                <p class="text-[12px] font-semibold tracking-[0.18em] text-neutral-900/55">
                  {{ m.version }}
                </p>
              </div>

              <h3 class="mt-3 text-xl font-semibold tracking-tight text-neutral-950">
                {{ m.name }}
              </h3>

              <p class="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-900/70">
                {{ m.description }}
              </p>

              <div class="mt-4 flex flex-wrap gap-2">
                <span
                    v-for="t in m.features"
                    :key="t"
                    class="rounded-full border border-neutral-900/15 bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-neutral-900/70"
                >
                  {{ t }}
                </span>
              </div>
            </div>

            <div class="flex flex-col items-stretch gap-3 md:items-end">
              <a
                  :href="m.downloadUrl"
                  download
                  class="inline-flex items-center justify-center rounded-full border border-neutral-900/20 bg-neutral-950 px-6 py-3
                       text-[12px] font-semibold tracking-[0.2em] text-white transition hover:bg-neutral-900"
              >
                DOWNLOAD
                <span class="ml-2 text-white/70">↯</span>
              </a>

              <a
                  href="#install"
                  class="inline-flex items-center justify-center rounded-full border border-neutral-900/15 bg-white px-6 py-3
                       text-[12px] font-semibold tracking-[0.2em] text-neutral-900/70 transition hover:text-neutral-950 hover:border-neutral-900/25"
              >
                INSTALL STEPS
                <span class="ml-2 text-neutral-900/55">↘</span>
              </a>
            </div>
          </div>
        </div>

        <p class="mt-8 text-xs text-neutral-900/55">
          Tip: Name the extracted folder exactly as expected by the game. Avoid “-main”, “(1)”, or extra suffixes.
        </p>
      </div>
    </section>

    <!-- Install guide -->
    <section id="install" class="bg-neutral-950 text-white">
      <div class="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div class="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <h2 class="font-serif text-[clamp(2rem,3.8vw,3.4rem)] leading-[0.95] tracking-tight">
              Install guide
            </h2>
            <p class="mt-6 max-w-xl text-base leading-relaxed text-white/70">
              Each download is a zip containing the mod folder. Extract it into your game’s mods directory.
            </p>
          </div>

          <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md lg:p-8">
            <ol class="space-y-4 text-sm leading-relaxed text-white/75">
              <li class="flex gap-3">
                <span class="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xs font-semibold">
                  1
                </span>
                <span>Download the mod zip.</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xs font-semibold">
                  2
                </span>
                <span>Extract the folder (inside the zip) into your <code class="text-white/85">mods/</code> directory.</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xs font-semibold">
                  3
                </span>
                <span>Confirm the extracted folder contains <code class="text-white/85">mod.info</code> at its root.</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xs font-semibold">
                  4
                </span>
                <span>Launch the game → Mods → enable the mod → restart if needed.</span>
              </li>
            </ol>

            <div class="mt-8 border-t border-white/10 pt-6">
              <p class="text-[11px] font-semibold tracking-[0.28em] text-white/60">
                TROUBLESHOOTING
              </p>
              <ul class="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
                <li>Folder name must be valid (no “-main”, no weird suffixes).</li>
                <li>Don’t nest folders: <code class="text-white/85">mods/MyMod/MyMod/mod.info</code> is wrong.</li>
                <li>Disable conflicting mods and test one at a time.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-12 flex justify-end">
          <a
              href="#mods"
              class="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-white/80 hover:text-white"
          >
            BACK TO DOWNLOADS
            <span class="inline-flex h-5 w-5 items-center justify-center rounded border border-white/25 text-[11px]" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'no-contact'
});
type ModItem = {
  id: number;
  tag: string;
  name: string;
  version: string;
  description: string;
  features: string[];
  downloadUrl: string;
};

const mods: ModItem[] = [
  {
    id: 1,
    tag: "MOD 1",
    name: "mod1",
    version: "v0.1 (placeholder)",
    description:
        "Placeholder mod description. Replace with what this mod changes, why it exists, and any compatibility notes.",
    features: ["Balance tweaks", "AI changes", "QoL"],
    downloadUrl: "/downloads/goh-ostfront/mod1.zip",
  },
  {
    id: 2,
    tag: "MOD 2",
    name: "mod2",
    version: "v0.1 (placeholder)",
    description:
        "Placeholder mod description. Use this space for a short summary that reads well like a product blurb.",
    features: ["Units", "Economy", "Difficulty"],
    downloadUrl: "/downloads/goh-ostfront/mod2.zip",
  },
  {
    id: 3,
    tag: "MOD 3",
    name: "mod3",
    version: "v0.1 (placeholder)",
    description:
        "Placeholder mod description. Add any key requirements (DLC, map packs) and known conflicts.",
    features: ["Immersion", "FX", "Tuning"],
    downloadUrl: "/downloads/goh-ostfront/mod3.zip",
  },
  {
    id: 4,
    tag: "MOD 4",
    name: "mod4",
    version: "v0.1 (placeholder)",
    description:
        "Placeholder mod description. When ready, swap name and update the zip file path.",
    features: ["Overhaul", "UI", "Ruleset"],
    downloadUrl: "/downloads/goh-ostfront/mod4.zip",
  },
];
</script>

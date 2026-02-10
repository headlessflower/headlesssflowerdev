<template>
  <section class="bg-neutral-200 text-neutral-950">
    <div class="mx-auto max-w-7xl px-6 py-14 lg:px-12 lg:py-20">
      <!-- Top row: kicker + headline + poster -->
      <div class="grid gap-10 lg:grid-cols-[140px_1fr_360px] lg:items-start">
        <!-- Kicker -->
        <p class="pt-3 text-[12px] font-semibold tracking-[0.18em] text-neutral-900/70">
          {{ kicker }}
        </p>

        <!-- Headline -->
        <div>
          <h1
              class="font-serif font-normal leading-[0.92] tracking-tight
                   text-[clamp(2.8rem,5.8vw,5rem)]"
          >
            <span>{{ headline.before }}</span>
            <span class="text-red-600">{{ headline.accent }}</span>
            <span>{{ headline.after }}</span>
          </h1>
        </div>

        <!-- Poster / image block -->
        <div class="lg:pt-3">


        </div>
      </div>

      <!-- Bottom row: 3 columns of copy -->
      <div class="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-3 lg:gap-14">
        <p class="text-sm leading-relaxed text-neutral-900/75">
          {{ paragraphs[0] }}
        </p>
        <p class="text-sm leading-relaxed text-neutral-900/75">
          {{ paragraphs[1] }}
        </p>
        <p class="text-sm leading-relaxed text-neutral-900/75">
          {{ paragraphs[2] }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
      kicker?: string;
      headline?: { before: string; accent: string; after: string };
      paragraphs?: [string, string, string];
      posterSrc?: string;
      posterAlt?: string;
    }>(),
    {
      kicker: "WORK",
      headline: () => ({
        before: "Bridging ",
        accent: "craft",
        after: " with systems.",
      }),
      paragraphs: () => ([
        "Headless Flower builds service websites and product pages with a calm, editorial layout and conversion-first structure — designed to earn trust quickly.",
        "We focus on performance, clarity, and maintainability: fast pages, clean components, and content systems that scale without turning into a mess.",
        "Each project is shipped with measurable improvements and a clear handoff path, so your site continues to work long after launch.",
      ]) as [string, string, string],
      posterSrc: "",
      posterAlt: "Work poster",
    },
);
</script>

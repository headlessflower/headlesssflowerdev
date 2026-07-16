<template>
  <section class="bg-[#f7f7f4] px-5 pb-16 pt-32 text-[#080808] sm:px-8 lg:pb-24 lg:pt-40">
    <div class="mx-auto max-w-[96rem]">
      <div class="grid gap-14 lg:grid-cols-[0.28fr_0.72fr]">
        <p class="text-2xl font-semibold leading-none">
          {{ kicker }}
        </p>

        <div>
          <h1 class="max-w-6xl text-[clamp(4rem,3.8vw,10.5rem)] font-bold leading-[0.88] tracking-normal">
            {{ headline.before }}{{ headline.accent }}{{ headline.after }}
          </h1>

          <div class="mt-14 grid gap-8 border-t border-black/12 pt-8 lg:grid-cols-3 lg:gap-12">
            <p v-for="paragraph in paragraphs" :key="paragraph"
              class="max-w-md text-[clamp(1.1rem,1.25vw,1.35rem)] font-semibold leading-[1.28] text-black/54">
              {{ paragraph }}
            </p>
          </div>
        </div>
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
    kicker: "(Our work)",
    headline: () => ({
      before: "Selected websites, systems, and digital tools ",
      accent: "built for",
      after: " real momentum.",
    }),
    paragraphs: () => ([
      "A focused archive of brand sites, product pages, local service funnels, and internal tools shaped around clarity.",
      "Each project balances visual trust with practical systems: fast pages, maintainable components, and content that can keep growing.",
      "The throughline is simple: design decisions should make the business easier to understand, contact, and operate.",
    ]) as [string, string, string],
    posterSrc: "",
    posterAlt: "Work poster",
  },
);
</script>

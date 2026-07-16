<script setup lang="ts">
import { cities } from "~/data/cities";

const cityList = Object.values(cities);

useHead({
  title: "Locations | Headless Flower",
  meta: [
    {
      name: "description",
      content:
        "Explore Headless Flower web design service pages for Los Angeles, Pasadena, Santa Monica, Long Beach, Burbank, and nearby local markets.",
    },
  ],
});
</script>

<template>
  <main class="bg-[#f7f7f4] text-[#080808]">
    <section class="px-5 pb-20 pt-32 sm:px-8 lg:pb-28 lg:pt-40">
      <div class="mx-auto grid max-w-[96rem] gap-14 lg:grid-cols-[0.34fr_0.66fr]">
        <p class="text-2xl font-semibold">(Locations)</p>

        <div>
          <h1 class="max-w-5xl text-[clamp(4rem,8vw,9rem)] font-bold leading-[0.9] tracking-normal">
            Local service pages for focused markets.
          </h1>
          <p class="mt-10 max-w-3xl text-[clamp(1.45rem,2vw,2.35rem)] font-semibold leading-[1.12] text-black/56">
            These pages help local businesses meet visitors with clear positioning, useful proof, and location-aware search structure.
          </p>
        </div>
      </div>
    </section>

    <section class="border-t border-black/10 px-5 py-14 sm:px-8 lg:py-20">
      <div class="mx-auto max-w-[96rem]">
        <NuxtLink
          v-for="city in cityList"
          :key="city.slug"
          :to="`/locations/${city.slug}`"
          class="grid gap-5 border-b border-black/10 py-8 text-left md:grid-cols-[0.34fr_0.66fr]"
        >
          <span class="text-2xl font-semibold">{{ city.name }}, {{ city.state }}</span>
          <span class="max-w-3xl text-[clamp(1.75rem,3.4vw,4rem)] font-bold leading-[0.96] tracking-normal">
            {{ city.heroHeadline }}
          </span>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

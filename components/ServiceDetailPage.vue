<script setup lang="ts">
type ServiceStat = {
  label: string;
  value: string;
};

type ServiceCard = {
  title: string;
  body: string;
};

type ServiceSection = {
  eyebrow?: string;
  title: string;
  body?: string;
  items?: string[];
  cards?: ServiceCard[];
};

const props = defineProps<{
  eyebrow: string;
  title: string;
  intro: string;
  stats: ServiceStat[];
  sections: ServiceSection[];
  ctaTitle: string;
  ctaText: string;
  ctaLink?: string;
  ctaLabel?: string;
}>();

const ctaLink = props.ctaLink ?? "/#contact";
const ctaLabel = props.ctaLabel ?? "Start a project";
</script>

<template>
  <main class="bg-[#f7f7f4] text-[#080808]">
    <section class="px-5 pb-16 pt-32 sm:px-8 lg:pb-24 lg:pt-40">
      <div class="mx-auto grid max-w-[96rem] gap-14 lg:grid-cols-[0.34fr_0.66fr]">
        <p class="text-2xl font-semibold">
          ({{ eyebrow }})
        </p>

        <div>
          <h1 class="max-w-6xl text-[clamp(4rem,8vw,9.25rem)] font-bold leading-[0.9] tracking-normal">
            {{ title }}
          </h1>
          <p class="mt-10 max-w-4xl text-[clamp(1.45rem,2vw,2.35rem)] font-semibold leading-[1.12] text-black/56">
            {{ intro }}
          </p>

          <div class="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-2xl font-semibold">
            <NuxtLink :to="ctaLink">
              {{ ctaLabel }}
            </NuxtLink>
            <NuxtLink to="/work">
              View work
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="px-5 sm:px-8">
      <div class="mx-auto grid max-w-[96rem] border-y border-black/10 py-8 md:grid-cols-3">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="border-b border-black/10 py-6 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
        >
          <p class="text-xl font-semibold text-black/44">
            {{ stat.label }}
          </p>
          <p class="mt-4 text-[clamp(1.6rem,2.4vw,3rem)] font-semibold leading-[1] tracking-normal">
            {{ stat.value }}
          </p>
        </div>
      </div>
    </section>

    <section class="px-5 py-16 sm:px-8 lg:py-24">
      <div class="mx-auto max-w-[96rem]">
        <div
          v-for="(section, index) in sections"
          :key="section.title"
          class="grid gap-10 border-b border-black/10 py-12 first:border-t lg:grid-cols-[0.34fr_0.66fr]"
        >
          <div>
            <p class="text-2xl font-semibold text-black/44">
              {{ section.eyebrow ?? String(index + 1).padStart(2, "0") }}
            </p>
          </div>

          <div>
            <h2 class="max-w-5xl text-[clamp(2.8rem,5.5vw,6.75rem)] font-bold leading-[0.92] tracking-normal">
              {{ section.title }}
            </h2>

            <p
              v-if="section.body"
              class="mt-8 max-w-4xl text-[clamp(1.35rem,1.8vw,2.05rem)] font-semibold leading-[1.14] text-black/56"
            >
              {{ section.body }}
            </p>

            <ul v-if="section.items?.length" class="mt-10">
              <li
                v-for="item in section.items"
                :key="item"
                class="border-t border-black/10 py-5 text-[clamp(1.35rem,2vw,2.35rem)] font-semibold leading-[1.08] text-black/68 last:border-b"
              >
                {{ item }}
              </li>
            </ul>

            <div v-if="section.cards?.length" class="mt-10 grid gap-6 md:grid-cols-2">
              <article
                v-for="card in section.cards"
                :key="card.title"
                class="border-t border-black/12 pt-5"
              >
                <h3 class="text-[clamp(1.6rem,2.3vw,2.85rem)] font-semibold leading-[1]">
                  {{ card.title }}
                </h3>
                <p class="mt-4 text-xl font-semibold leading-tight text-black/48">
                  {{ card.body }}
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#080808] px-5 py-16 text-[#f7f7f4] sm:px-8 lg:py-24">
      <div class="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
        <h2 class="text-[clamp(3.4rem,7vw,8.5rem)] font-bold leading-[0.9] tracking-normal">
          {{ ctaTitle }}
        </h2>
        <div>
          <p class="text-[clamp(1.45rem,2vw,2.35rem)] font-semibold leading-[1.12] text-white/56">
            {{ ctaText }}
          </p>
          <NuxtLink :to="ctaLink" class="mt-8 inline-block text-2xl font-semibold">
            {{ ctaLabel }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

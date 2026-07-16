<script setup lang="ts">
import { computed, ref } from "vue";

const services = [
  {
    title: "Web Design",
    description:
      "Clear, high-trust websites built around positioning, conversion paths, and the details that make a service brand feel credible.",
    image: "/monarch_laptop_mockup2.webp",
    href: "/web-design",
  },
  {
    title: "Lead Capture",
    description:
      "Forms, quote paths, booking flows, and follow-up systems that help visitors become useful conversations.",
    image: "/Flow.webp",
    href: "/lead-capture-booking",
  },
  {
    title: "Business Systems",
    description:
      "Dashboards, customer records, internal tools, and workflows that make the daily operation easier to run.",
    image: "/headless-dev-hero.png",
    href: "/white-label-business-apps",
  },
  {
    title: "Managed Presence",
    description:
      "Ongoing updates, performance checks, content edits, and measured improvements after the first launch.",
    image: "/dev-hero-alt.png",
    href: "/managed-web-presence",
  },
];

const activeIndex = ref(0);
const active = computed(() => services[activeIndex.value]);
</script>

<template>
  <section class="bg-[#f7f7f4] px-5 py-20 text-[#080808] sm:px-8 lg:py-28">
    <div class="mx-auto max-w-[96rem]">
      <div class="grid gap-12 lg:grid-cols-[0.73fr_0.27fr]">
        <div>
          <p class="text-2xl font-semibold">(Services)</p>

          <div class="mt-20 space-y-3">
            <NuxtLink
              v-for="(service, index) in services"
              :key="service.title"
              :to="service.href"
              class="service-link no-link-underline block text-[clamp(4rem,9.7vw,11rem)] font-bold leading-[0.86] tracking-normal"
              :class="index === activeIndex ? 'is-active text-[#080808]' : 'text-black/10'"
              :data-title="service.title"
              @mouseenter="activeIndex = index"
              @focus="activeIndex = index"
            >
              {{ service.title }}
            </NuxtLink>
          </div>
        </div>

        <aside class="lg:pt-10">
          <img
            :src="active.image"
            :alt="`${active.title} service preview`"
            class="aspect-[1.05/1] w-full object-cover"
          />
          <h2 class="mt-8 text-3xl font-semibold leading-tight">
            {{ active.description }}
          </h2>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-link {
  position: relative;
}

.service-link::after {
  position: absolute;
  inset: 0;
  width: 0;
  overflow: hidden;
  color: rgba(8, 8, 8, 0.48);
  content: attr(data-title);
  pointer-events: none;
  white-space: nowrap;
  transition: width 900ms cubic-bezier(0.16, 1, 0.3, 1);
}

.service-link:hover::after,
.service-link:focus-visible::after {
  width: 100%;
}

.service-link.is-active::after {
  width: 0;
}
</style>

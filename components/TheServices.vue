<template>
  <section class="w-full bg-neutral-100 text-neutral-950">
    <div class="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
      <!-- Top label -->
      <div class="flex items-start justify-between gap-6">
        <p class="text-[12px] font-semibold tracking-[0.18em] text-neutral-800/80">
          <span class="uppercase">{{ labelLeft }}</span>
          <span class="mx-2 text-neutral-500/80">·</span>
          <span class="uppercase">{{ labelRight }}</span>
        </p>

        <!-- Optional small top-right link, if you want parity later -->
        <NuxtLink
            v-if="topLinkTo"
            :to="topLinkTo"
            class="hidden sm:inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-neutral-900/70 hover:text-neutral-900"
        >
          {{ topLinkLabel }}
          <span
              class="inline-flex h-5 w-5 items-center justify-center rounded border border-neutral-900/20 text-[11px]"
              aria-hidden="true"
          >
            ↗
          </span>
        </NuxtLink>
      </div>

      <!-- Big editorial headline -->
      <h2
          class="mt-10 font-serif font-normal leading-[0.92] tracking-tight text-neutral-950
               text-[clamp(2.4rem,6vw,4.9rem)]"
      >
        <span>{{ titleBefore }}</span>
        <span class="text-red-600">{{ titleAccent }}</span>
        <span>{{ titleAfter }}</span>
      </h2>

      <!-- Bottom columns (services) -->
      <div class="mt-16 grid gap-8 md:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-10">
        <NuxtLink
            v-for="(s, i) in columns"
            :key="i"
            :to="s.href"
            class="group block text-[14px] leading-relaxed text-neutral-900/80
         transition-colors hover:text-neutral-950 focus:outline-none"
        >
          <p
              class="font-medium text-neutral-950 underline-offset-4
           decoration-neutral-900/0 transition
           group-hover:underline group-hover:decoration-neutral-900/40"
          >
            {{ s.title }}
          </p>

          <p class="mt-3">
            {{ s.description }}
          </p>

          <!-- subtle affordance -->
          <span
              class="mt-4 inline-block text-[12px] font-semibold tracking-[0.18em]
           text-neutral-900/60 opacity-0 transition
           group-hover:opacity-100"
              aria-hidden="true"
          >
    READ MORE ↗
  </span>
        </NuxtLink>

      </div>

      <!-- Bottom bar -->
      <div class="mt-16 flex flex-col gap-6 border-t border-neutral-900/10 pt-8 md:flex-row md:items-end md:justify-between">
        <p class="text-[12px] font-semibold tracking-[0.16em] text-neutral-900/70">
          {{ footnote }}
        </p>


      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Service = {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
};

const props = withDefaults(
    defineProps<{
      services?: Service[];

      // Header label
      labelLeft?: string;
      labelRight?: string;

      // Title split (lets us color one word without v-html)
      titleBefore?: string;
      titleAccent?: string;
      titleAfter?: string;

      // CTA
      ctaLabel?: string;
      ctaTo?: string;

      // Optional top-right link
      topLinkLabel?: string;
      topLinkTo?: string;

      // Small footer line
      footnote?: string;
    }>(),
    {
      services: undefined,

      labelLeft: "HEADLESS FLOWER",
      labelRight: "MANAGED GROWTH SYSTEMS",

      titleBefore: "Managed services that turn more ",
      titleAccent: "traffic",
      titleAfter: " into customers.",

      ctaLabel: "READ OUR SERVICES",
      ctaTo: "/services",

      topLinkLabel: "LET’S TALK",
      topLinkTo: "",

      footnote: "Strategy, systems, and ongoing upkeep for small businesses that need leads, bookings, and smoother operations.",
    },
);

const defaultServices: Service[] = [
  {
    title: "Managed web presence",
    description:
        "Your website is included as a managed business asset: positioning, page updates, uptime, and ongoing improvements handled for you.",
    href: "/managed-web-presence",
  },
  {
    title: "Lead capture and booking",
    description:
        "Forms, intake flows, and booking paths designed to reduce friction and turn more visitors into qualified inquiries.",
    href: "/lead-capture-booking",
  },
  {
    title: "Maintenance and upkeep",
    description:
        "Security updates, content edits, performance checks, and reporting that keep your system healthy after launch.",
    href: "/maintenance-upkeep",
  },
  {
    title: "White-label business apps",
    description:
        "Admin dashboards, customer records, and custom internal tools that give small businesses one place to run the essentials.",
    href: "/white-label-business-apps",
  },
];

const columns = computed(() => {
  const list = props.services?.length ? props.services : defaultServices;
  // The reference layout shows 4 columns — we match that.
  return list.slice(0, 4);
});
</script>

<template>
  <section class="relative overflow-hidden bg-neutral-950 text-white">
    <!-- subtle background + vignette -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute inset-0 bg-neutral-950"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_55%)]"></div>
      <div class="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.85)]"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
      <!-- Top row: kicker + headline + CTA -->
      <div class="grid gap-10 lg:grid-cols-[240px_1fr_auto] lg:items-start">
        <p class="text-[12px] font-semibold tracking-[0.18em] text-white/70">
          {{ kicker }}
        </p>

        <h2
            class="font-serif font-normal leading-[0.95] tracking-tight text-white
                 text-[clamp(2.2rem,4.4vw,4.2rem)]"
        >
          <span>{{ headline.before }}</span>
          <span class="text-red-600">{{ headline.accent1 }}</span>
          <span>{{ headline.middle }}</span>
          <span class="text-red-600">{{ headline.accent2 }}</span>
          <span>{{ headline.after }}</span>
        </h2>

        <div class="lg:justify-self-end">
          <NuxtLink
              :to="cta.to"
              class="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-white/80 hover:text-white"
          >
            {{ cta.label }}
            <span
                class="inline-flex h-5 w-5 items-center justify-center rounded border border-white/25 text-[11px] text-white/80"
                aria-hidden="true"
            >
              ↗
            </span>
          </NuxtLink>
        </div>
      </div>

      <!-- Center panel (replaces screenshot image) -->
      <div class="mt-14 flex justify-center lg:mt-16">
        <div
            class="w-full max-w-4xl rounded-2xl border border-white/15 bg-white/5
                 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-md"
        >
          <div class="p-6 sm:p-8">
            <div class="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p class="text-[11px] font-semibold tracking-[0.28em] text-white/60">
                  WEB CONVERSION SNAPSHOT
                </p>
                <p class="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
                  Real outcomes from performance + UX improvements. These are typical ranges for
                  service sites after cleaning up messaging, speed, and lead capture flow.
                </p>
              </div>

              <div class="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2">
                <span class="h-2 w-2 rounded-full bg-red-600"></span>
                <span class="text-[11px] font-semibold tracking-[0.18em] text-white/70">
                  LAST 90 DAYS
                </span>
              </div>
            </div>

            <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard label="Avg. load time" value="1.2s" hint="from ~3.8s" />
              <StatCard label="Lead conversion" value="+38%" hint="form completion" />
              <StatCard label="Bounce rate" value="-22%" hint="better intent match" />
              <StatCard label="Quote requests" value="+41%" hint="CTA clarity" />
            </div>

            <div class="mt-8 border-t border-white/10 pt-6">
              <div class="grid gap-4 sm:grid-cols-3">
                <MiniStat label="Top channel" value="Organic Search" />
                <MiniStat label="Best page" value="/services" />
                <MiniStat label="Avg. session" value="2m 18s" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom features (A/B/C/D) -->
      <div class="mt-14 grid gap-10 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        <div v-for="f in features" :key="f.key">
          <div class="flex items-center gap-4">
            <span
                class="inline-flex h-6 w-6 items-center justify-center rounded border border-red-600/40 bg-red-600/15
                     text-[12px] font-bold text-red-500"
                aria-hidden="true"
            >
              {{ f.key }}
            </span>
            <h3 class="text-base font-semibold tracking-tight text-white">
              {{ f.title }}
            </h3>
          </div>

          <p class="mt-4 text-sm leading-relaxed text-white/65">
            {{ f.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const kicker = "WHAT IS HEADLESS FLOWER?";

const headline = {
  before: "A full-stack web partner for ",
  accent1: "high-converting",
  middle:
      " service businesses—shipping production-grade sites that reduce admin work and surface the leads ",
  accent2: "you actually want",
  after: ".",
};

const cta = {
  label: "BOOK A CONSULTATION",
  to: "#contact",
};

const features = [
  {
    key: "A",
    title: "Conversion-first pages",
    description:
        "Clear hierarchy, stronger CTAs, and forms designed to reduce friction and increase completed inquiries.",
  },
  {
    key: "B",
    title: "Performance engineering",
    description:
        "Fast load times and smooth interactions built with budgets, audit-driven fixes, and best-practice Nuxt setups.",
  },
  {
    key: "C",
    title: "Human-in-the-loop iteration",
    description:
        "We refine the site with real feedback—what prospects ask, where they drop off, and what improves trust.",
  },
  {
    key: "D",
    title: "Traceable improvements",
    description:
        "We document what changed and why, so you can connect updates to real outcomes and keep the system maintainable.",
  },
];
</script>

<script lang="ts">
/**
 * Local subcomponents (keeps this drop-in simple for Nuxt).
 */
export default {
  components: {
    StatCard: {
      props: {
        label: { type: String, required: true },
        value: { type: String, required: true },
        hint: { type: String, default: "" },
      },
      template: `
        <div class="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
          <p class="text-[11px] font-semibold tracking-[0.18em] text-white/55">{{ label }}</p>
          <p class="mt-3 font-serif text-3xl leading-none text-white">{{ value }}</p>
          <p v-if="hint" class="mt-2 text-xs leading-relaxed text-white/55">{{ hint }}</p>
        </div>
      `,
    },
    MiniStat: {
      props: {
        label: { type: String, required: true },
        value: { type: String, required: true },
      },
      template: `
        <div class="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
          <p class="text-[11px] font-semibold tracking-[0.18em] text-white/55">{{ label }}</p>
          <p class="mt-2 text-sm font-semibold text-white/85">{{ value }}</p>
        </div>
      `,
    },
  },
};
</script>

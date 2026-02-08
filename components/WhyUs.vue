<template>
  <section class="relative overflow-hidden bg-neutral-950 text-white">
    <!-- subtle vignette -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      <div class="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.85)]" />
    </div>

    <div class="relative mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
      <!-- Top: big title + short intro + CTA -->
      <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <h2
              class="font-serif font-normal leading-[0.92] tracking-tight text-white
                   text-[clamp(2.6rem,4.8vw,4.4rem)]"
          >
            {{ title }}
          </h2>

          <p class="mt-8 max-w-xl text-base leading-relaxed text-white/70">
            {{ intro }}
          </p>

          <NuxtLink
              :to="cta.to"
              class="mt-8 inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.2em] text-white/85 hover:text-white"
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

        <!-- Right side intentionally quiet/empty like the reference -->
        <div class="hidden lg:block" />
      </div>

      <!-- Bottom: two columns -->
      <div class="mt-20 grid gap-12 lg:mt-24 lg:grid-cols-2 lg:gap-16">
        <article>
          <h3 class="text-base font-semibold tracking-tight text-white">
            {{ left.title }}
          </h3>
          <p class="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
            {{ left.body }}
          </p>
        </article>

        <article>
          <h3 class="text-base font-semibold tracking-tight text-white">
            {{ right.title }}
          </h3>
          <p class="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
            {{ right.body }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
      title?: string;
      intro?: string;
      cta?: { label: string; to: string };
      left?: { title: string; body: string };
      right?: { title: string; body: string };
    }>(),
    {
      title: "Why Headless Flower",
      intro:
          "We build high-trust service websites by combining editorial design with performance engineering—so your site looks premium, loads fast, and turns visits into booked work.",
      cta: () => ({ label: "WORK WITH US", to: "#contact" }),
      left: () => ({
        title: "Conversion meets clarity",
        body:
            "We design pages the way people actually read: strong hierarchy, restraint, and clear calls-to-action. The result is less friction, more qualified leads, and a site that feels intentional—like a brand, not a template.",
      }),
      right: () => ({
        title: "Systems that stay maintainable",
        body:
            "We ship with scalable components, clean content structure, and performance budgets. That means fewer regressions, faster iteration, and a website your business can rely on—without constant rebuilds or vendor lock-in.",
      }),
    },
);
</script>

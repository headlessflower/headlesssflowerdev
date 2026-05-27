<template>
  <section class="relative overflow-hidden bg-neutral-950 text-white">
    <!-- background texture / vignette -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.07),transparent_55%)]" />
      <div class="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.85)]" />
    </div>

    <div class="relative mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
      <div class="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <!-- Copy -->
        <div>
          <p class="text-[11px] font-semibold tracking-[0.28em] text-white/60">
            MONTHLY CARE PLAN
          </p>

          <h3
              class="mt-5 font-serif font-normal leading-[0.95] tracking-tight text-white
                   text-[clamp(1.9rem,3.2vw,2.6rem)]"
          >
            Maintenance & Support
            <span class="text-red-600"> that keeps your site sharp.</span>
          </h3>

          <p class="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
            Ongoing support for managed websites that need updates, backups,
            monitoring, and practical content help so the site stays secure, current, and useful.
          </p>

          <ul class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <li v-for="p in points" :key="p" class="flex items-start gap-3">
              <span
                  class="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full
                       border border-white/15 bg-white/10 text-white/80"
                  aria-hidden="true"
              >
                <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                  <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="text-sm leading-relaxed text-white/80">{{ p }}</span>
            </li>
          </ul>

          <div class="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <NuxtLink
                :to="primaryLink"
                class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10
                     px-6 py-3 text-[12px] font-semibold tracking-[0.2em] text-white
                     backdrop-blur-md transition hover:bg-white/15 hover:border-white/30"
            >
              START MAINTENANCE
              <span class="ml-2 text-white/60">↗</span>
            </NuxtLink>

            <NuxtLink
                :to="secondaryLink"
                class="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent
                     px-6 py-3 text-[12px] font-semibold tracking-[0.2em] text-white/90
                     transition hover:border-white/25 hover:text-white"
            >
              SEE PLAN DETAILS
              <span class="ml-2 text-white/60">↗</span>
            </NuxtLink>

            <span class="text-xs font-medium tracking-[0.12em] text-white/55">
              Built for ongoing support
            </span>
          </div>
        </div>

        <!-- Care plan card -->
        <div class="lg:pt-2">
          <div
              class="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                   backdrop-blur-md"
          >
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="text-[11px] font-semibold tracking-[0.28em] text-white/60">
                  CARE PLAN
                </p>
                <h4 class="mt-2 text-lg font-semibold tracking-tight text-white">
                  Basic managed website
                </h4>
              </div>

              <span
                  class="inline-flex items-center rounded-full border border-red-600/30 bg-red-600/10
                       px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-red-400"
              >
                RECOMMENDED
              </span>
            </div>

            <div class="mt-6">
              <p class="text-[11px] font-semibold tracking-[0.22em] text-white/55">
                WHAT IT SUPPORTS
              </p>
              <p class="mt-2 text-sm leading-relaxed text-white/65">
                A healthier website, fewer surprise issues, and a reliable path for small improvements after launch.
              </p>
            </div>

            <ul class="mt-6 space-y-3">
              <li v-for="f in features" :key="f" class="flex items-start gap-3">
                <span
                    class="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full
                         border border-white/15 bg-white/10 text-white/80"
                    aria-hidden="true"
                >
                  <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span class="text-sm leading-relaxed text-white/75">{{ f }}</span>
              </li>
            </ul>

            <div class="mt-8">
              <NuxtLink
                  :to="primaryLink"
                  class="inline-flex w-full items-center justify-center rounded-full border border-white/20
                       bg-white/10 px-6 py-3 text-[12px] font-semibold tracking-[0.2em] text-white
                       backdrop-blur-md transition hover:bg-white/15 hover:border-white/30"
              >
                GET STARTED
                <span class="ml-2 text-white/60">↗</span>
              </NuxtLink>
            </div>

            <p class="mt-5 text-xs leading-relaxed text-white/50">
              *Turnaround targets apply to site sizes under 25 pages. Enterprise?
              <NuxtLink to="#contact" class="underline underline-offset-4 decoration-white/30 hover:decoration-white/60">
                Contact us
              </NuxtLink>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  primaryLink?: string;
  secondaryLink?: string;
}>();

const primaryLink = props.primaryLink ?? "#contact";
const secondaryLink = props.secondaryLink ?? "/monthly-maintenance-subscription";

const points = [
  "Core/CMS/plugin updates & testing",
  "Daily backups + 30-day retention",
  "Uptime & security monitoring",
  "Performance checks & fixes",
  "Accessibility & SEO quick fixes",
  "Up to 1 hour content edits/month",
];

const features = [
  "Monthly update cycle with rollback plan",
  "Broken link checks & form testing",
  "Image optimization & cache review",
  "Priority email support",
  "Emergency hotfix (fair use)",
];
</script>

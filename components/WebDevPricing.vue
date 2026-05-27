<template>
  <section class="relative overflow-hidden bg-neutral-950">
    <!-- Subtle background texture -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/0" />
      <div class="absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.85)]" />
    </div>

    <div class="relative mx-auto max-w-7xl px-6 py-20 lg:px-12">
      <!-- Header -->
      <div class="text-center">
        <p class="text-[11px] font-semibold tracking-[0.28em] text-white/65">
          SERVICE PACKAGES
        </p>
        <h2
            class="mt-5 font-serif font-normal leading-[0.95] tracking-tight text-white
                 text-[clamp(2.2rem,4.2vw,3.6rem)]"
        >
          Pick the right growth path.
        </h2>
        <p class="mt-5 mx-auto max-w-2xl text-base leading-relaxed text-white/70">
          Service paths for small businesses that need a stronger web presence,
          better lead capture, useful workflows, and reliable upkeep under one roof.
        </p>
      </div>

      <!-- Plans -->
      <div class="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <article
            v-for="plan in plans"
            :key="plan.slug"
            class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                 backdrop-blur-md transition
                 hover:border-white/20 hover:bg-white/7"
        >
          <!-- top sheen -->
          <div
              class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
          />

          <div class="flex flex-col items-start justify-between gap-4">
            <span
                v-if="plan.badge"
                class="shrink-0 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1
                     text-[11px] font-semibold tracking-[0.14em] text-white/85"
            >
              {{ plan.badge }}
            </span>
            <div>
              <h3 class="text-lg font-semibold tracking-tight text-white">
                {{ plan.name }}
              </h3>
              <p class="mt-2 text-sm  leading-relaxed text-white/70">
                {{ plan.description }}
              </p>
            </div>

            
          </div>

          <!-- Funnel context -->
          <div class="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p class="text-[11px] font-semibold tracking-[0.22em] text-white/55">
              BEST FIT
            </p>
            <p class="mt-2 text-sm leading-relaxed text-white/75">
              {{ plan.fit }}
            </p>

            <p class="mt-4 text-[11px] font-semibold tracking-[0.22em] text-white/55">
              PRIMARY OUTCOME
            </p>
            <p class="mt-2 text-sm leading-relaxed text-white/75">
              {{ plan.outcome }}
            </p>
          </div>

          <!-- Features -->
          <ul class="mt-6 space-y-3">
            <li v-for="f in plan.features" :key="f" class="flex items-start gap-3">
              <span
                  class="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80"
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
              <span class="text-sm leading-relaxed text-white/80">{{ f }}</span>
            </li>
          </ul>

          <!-- CTAs -->
          <div class="mt-8 flex flex-col gap-3">
            <NuxtLink
                :to="plan.ctaLink"
                class="inline-flex w-full items-center justify-center rounded-full border border-white/20
                     bg-white/10 px-5 py-3 text-[12px] font-semibold tracking-[0.2em] text-white
                     backdrop-blur-md transition hover:bg-white/15 hover:border-white/30"
            >
              {{ plan.cta }} <span class="ml-2 text-white/60">↗</span>
            </NuxtLink>

            <NuxtLink
                to="#contact"
                class="inline-flex w-full items-center justify-center rounded-full border border-white/15
                     bg-transparent px-5 py-3 text-[12px] font-semibold tracking-[0.2em] text-white/90
                     transition hover:border-white/25 hover:text-white"
            >
              TALK THROUGH FIT <span class="ml-2 text-white/60">↗</span>
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- Standalone services -->
      <div class="mt-16">
        <div class="text-center">
          <p class="text-[11px] font-semibold tracking-[0.28em] text-white/65">
            SERVICE ENTRY POINTS
          </p>
          <h4 class="mt-4 font-serif font-normal tracking-tight text-white text-2xl sm:text-3xl">
            Start with the piece you need most.
          </h4>
          <p class="mt-4 text-white/70 max-w-2xl mx-auto">
            Focused services that can stand alone or become the first step toward a larger managed package.
          </p>
        </div>

        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <NuxtLink
              v-for="service in services"
              :key="service.title"
              :to="service.href"
              class="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md
                   transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/7"
          >
            <h5 class="text-sm font-semibold tracking-tight text-white">
              {{ service.title }}
            </h5>
            <p class="mt-2 text-[11px] font-semibold tracking-[0.2em] text-white/55">
              {{ service.kicker }}
            </p>
            <p class="mt-3 text-sm leading-relaxed text-white/75">
              {{ service.description }}
            </p>
            <span class="mt-5 inline-flex text-[11px] font-semibold tracking-[0.16em] text-white/65 transition group-hover:text-white">
              LEARN MORE ↗
            </span>
          </NuxtLink>
        </div>

        <div class="mt-10 flex justify-center">
          <NuxtLink
              to="/services"
              class="inline-flex items-center justify-center rounded-full border border-white/20
                   bg-white/10 px-6 py-3 text-[12px] font-semibold tracking-[0.2em] text-white
                   backdrop-blur-md transition hover:bg-white/15 hover:border-white/30"
          >
            EXPLORE SERVICES <span class="ml-2 text-white/60">↗</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Note -->
      <p class="mt-12 text-center text-xs font-medium tracking-[0.12em] text-white/55">
        Every package is scoped around goals, site complexity, integrations, and the level of support your business needs.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const plans = [
  {
    slug: "starter",
    name: "Starter Growth Foundation",
    badge: "1 marketing channel",
    description:
        "For freelancers, newer service businesses, and small brands that need a confident growth foundation.",
    fit: "You want one focused channel, a credible website, and a clear way to measure early traction.",
    outcome: "A polished web presence, one primary acquisition channel, and plain-English reporting that shows what to improve next.",
    features: [
      "Website + conversion-ready service pages",
      "1 marketing channel: SEO, Ads, Social, or Email",
      "Monthly strategy call",
      "Competitor and setup audit",
      "Monthly performance report",
      "Email support",
    ],
    cta: "View Package",
    ctaLink: "/starter-package",
  },
  {
    slug: "standard",
    name: "Growth System",
    badge: "Most popular",
    description:
        "For businesses ready to combine channels, tighten strategy, and scale with better visibility.",
    fit: "You already get some leads and need stronger channel strategy, reporting, and conversion testing.",
    outcome: "A coordinated growth system with better lead tracking, sharper messaging, and weekly visibility into performance.",
    features: [
      "SEO plus Ads, Social, or Email strategy",
      "Bi-weekly strategy calls",
      "Full marketing and funnel audit",
      "Weekly performance report",
      "A/B testing for pages and CTAs",
      "Reporting dashboard access",
    ],
    cta: "View Package",
    ctaLink: "/standard-package",
  },
  {
    slug: "premium",
    name: "Agency Execution System",
    badge: "Full-stack support",
    description:
        "For serious teams that need full-stack execution, conversion optimization, and dedicated support.",
    fit: "You need all major marketing channels coordinated with your website, analytics, content, and conversion systems.",
    outcome: "A full-funnel growth engine with custom KPI tracking, faster iteration, and ongoing optimization across the whole customer journey.",
    features: [
      "All 4 channels: SEO, Ads, Social, and Email",
      "Weekly strategy calls",
      "Full marketing audit plus CRO",
      "Custom KPI reporting dashboard",
      "Unlimited A/B testing roadmap",
      "Priority implementation support",
    ],
    cta: "View Package",
    ctaLink: "/premium-package",
  },
];

const services = [
  {
    title: "SEO Audit + Metadata",
    kicker: "Visibility foundation",
    href: "/seo-analytics",
    description: "Technical audit, meta improvements, and quick wins to improve visibility.",
  },
  {
    title: "Conversion Copy + Page Flow",
    kicker: "Messaging clarity",
    href: "/brand-aligned-design",
    description: "Clear, brand-aligned copy and page structure that helps visitors understand what to do next.",
  },
  {
    title: "Branding Package",
    kicker: "Visual direction",
    href: "/brand-aligned-design",
    description: "Logo, color palette, and type system to unify your brand presence.",
  },
  {
    title: "CMS Integration",
    kicker: "Content operations",
    href: "/databases",
    description: "Sanity/Contentful setup with content models and editorial workflow.",
  },
];
</script>

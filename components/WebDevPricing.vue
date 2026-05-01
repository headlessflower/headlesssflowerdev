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
          PRICING
        </p>
        <h2
            class="mt-5 font-serif font-normal leading-[0.95] tracking-tight text-white
                 text-[clamp(2.2rem,4.2vw,3.6rem)]"
        >
          Managed Growth Packages
        </h2>
        <p class="mt-5 mx-auto max-w-2xl text-base leading-relaxed text-white/70">
          Ongoing service packages for small businesses that need a managed web presence,
          lead capture, customer workflows, and reliable upkeep under one roof.
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

          <!-- Price -->
          <div class="mt-6">
            <p class="text-[11px] font-semibold tracking-[0.22em] text-white/55">
              MONTHLY RATE
            </p>

            <div class="mt-2 flex items-end justify-between gap-3">
              <p class="font-serif font-normal leading-none text-white text-[clamp(2rem,3vw,2.4rem)]">
                {{ plan.price }}
              </p>
              <p class="text-xs font-medium tracking-[0.14em] text-white/60">/ MONTH</p>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-white/55">
              6-month minimum contract.
            </p>
            <NuxtLink
                to="/terms#managed-plans"
                class="mt-2 inline-flex items-center text-xs font-semibold tracking-[0.14em] text-white/75 underline decoration-white/25 underline-offset-4 transition hover:text-white hover:decoration-white/55"
            >
              VIEW PLAN TERMS <span class="ml-2 text-white/50">↗</span>
            </NuxtLink>
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
              {{ plan.cta }}
            </NuxtLink>

            <NuxtLink
                to="#contact"
                class="inline-flex w-full items-center justify-center rounded-full border border-white/15
                     bg-transparent px-5 py-3 text-[12px] font-semibold tracking-[0.2em] text-white/90
                     transition hover:border-white/25 hover:text-white"
            >
              GET A QUOTE <span class="ml-2 text-white/60">↗</span>
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- Standalone services -->
      <div class="mt-16">
        <div class="text-center">
          <p class="text-[11px] font-semibold tracking-[0.28em] text-white/65">
            ONE-TIME SERVICES
          </p>
          <h4 class="mt-4 font-serif font-normal tracking-tight text-white text-2xl sm:text-3xl">
            Standalone Services
          </h4>
          <p class="mt-4 text-white/70 max-w-2xl mx-auto">
            One-time services available on their own for businesses that need focused support without a monthly management plan.
          </p>
        </div>

        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
              v-for="service in services"
              :key="service.title"
              class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md
                   transition hover:border-white/20 hover:bg-white/7"
          >
            <h5 class="text-sm font-semibold tracking-tight text-white">
              {{ service.title }}
            </h5>
            <p class="mt-2 text-[11px] font-semibold tracking-[0.2em] text-white/55">
              {{ service.price }}
            </p>
            <p class="mt-3 text-sm leading-relaxed text-white/75">
              {{ service.description }}
            </p>
          </div>
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
        Monthly pricing depends on scope, integrations, and support needs. Plans include a 6-month minimum term and early cancellation terms.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const plans = [
  {
    slug: "starter",
    name: "Presence Management",
    badge: "Best for simple lead gen",
    description:
        "A managed website presence for businesses that need a polished brand, working forms, and dependable monthly upkeep.",
    hours: "15–20 hrs",
    price: "$200",
    features: [
      "Managed website setup",
      "Contact form with spam protection",
      "Core SEO and analytics setup",
      "Performance and accessibility baseline",
      "Monthly maintenance and small updates",
    ],
    cta: "View Package",
    ctaLink: "/starter-package",
  },
  {
    slug: "standard",
    name: "Lead Flow Management",
    badge: "Popular",
    description:
        "For growing businesses that need their website, intake flow, and booking path working together to convert more traffic.",
    hours: "25–35 hrs",
    price: "$350",
    features: [
      "Multi-page managed website",
      "Advanced forms and intake logic",
      "Booking or consultation flow setup",
      "SEO schema and reporting setup",
      "Ongoing maintenance and optimization",
    ],
    cta: "View Package",
    ctaLink: "/standard-package",
  },
  {
    slug: "premium",
    name: "Business System Management",
    badge: "Best for custom workflows",
    description:
        "A white-label business system with a managed website, admin tooling, and deeper integrations for teams that need more than marketing pages.",
    hours: "45–55 hrs",
    price: "$475",
    features: [
      "Custom branded website and system UI",
      "Admin dashboard or customer database",
      "Business workflow integrations",
      "Content or data management setup",
      "Priority upkeep and iterative improvements",
    ],
    cta: "View Package",
    ctaLink: "/premium-package",
  },
];

const services = [
  {
    title: "SEO Audit + Metadata",
    price: "$300–$600",
    description: "Technical audit, meta improvements, and quick wins to improve visibility.",
  },
  {
    title: "Copywriting (per page)",
    price: "$150–$300",
    description: "Clear, brand-aligned copy to connect with your target audience.",
  },
  {
    title: "Branding Package",
    price: "$800–$1,200",
    description: "Logo, color palette, and type system to unify your brand presence.",
  },
  {
    title: "CMS Integration",
    price: "$500–$1,000",
    description: "Sanity/Contentful setup with content models and editorial workflow.",
  },
];
</script>

<template>
  <section class="bg-[#080808] px-5 py-20 text-[#f7f7f4] sm:px-8 lg:py-28">
    <div class="mx-auto max-w-[96rem]">
      <div class="grid gap-12 lg:grid-cols-[0.38fr_0.62fr]">
        <p class="text-2xl font-semibold">(Service packages)</p>

        <div>
          <h2 class="max-w-5xl text-[clamp(3.5rem,7vw,8rem)] font-bold leading-[0.9] tracking-normal">
            Pick the right growth path.
          </h2>
          <p class="mt-8 max-w-3xl text-2xl font-semibold leading-tight text-white/42">
            Service paths for small businesses that need a stronger web presence, better lead capture, useful workflows, and reliable upkeep under one roof.
          </p>
        </div>
      </div>

      <div class="mt-20 border-t border-white/14">
        <article
          v-for="(plan, index) in plans"
          :key="plan.slug"
          class="grid gap-8 border-b border-white/14 py-10 lg:grid-cols-[0.16fr_0.34fr_0.28fr_0.22fr] lg:items-start"
        >
          <div class="text-2xl font-semibold text-white/46">
            {{ String(index + 1).padStart(2, "0") }}
          </div>

          <div>
            <p v-if="plan.badge" class="text-lg font-semibold text-white/42">
              {{ plan.badge }}
            </p>
            <h3 class="mt-3 text-[clamp(2.25rem,4.3vw,5rem)] font-bold leading-[0.94] tracking-normal">
              {{ plan.name }}
            </h3>
            <p class="mt-6 max-w-xl text-xl font-semibold leading-tight text-white/48">
              {{ plan.description }}
            </p>
          </div>

          <div class="space-y-7">
            <div>
              <p class="text-lg font-semibold text-white">Best fit</p>
              <p class="mt-3 text-lg font-semibold leading-tight text-white/42">
                {{ plan.fit }}
              </p>
            </div>

            <div>
              <p class="text-lg font-semibold text-white">Primary outcome</p>
              <p class="mt-3 text-lg font-semibold leading-tight text-white/42">
                {{ plan.outcome }}
              </p>
            </div>
          </div>

          <div>
            <ul class="space-y-3 text-lg font-semibold leading-tight text-white/58">
              <li v-for="feature in plan.features" :key="feature">
                {{ feature }}
              </li>
            </ul>

            <div class="mt-8 flex flex-col items-start gap-3 text-lg font-semibold">
              <NuxtLink :to="plan.ctaLink">
                {{ plan.cta }} →
              </NuxtLink>
              <NuxtLink to="#contact" class="text-white/54">
                Talk through fit
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>

      <div class="mt-24 grid gap-12 border-t border-white/14 pt-10 lg:grid-cols-[0.38fr_0.62fr]">
        <p class="text-2xl font-semibold">(Entry points)</p>

        <div>
          <h3 class="max-w-4xl text-[clamp(2.75rem,5vw,5.5rem)] font-bold leading-[0.94] tracking-normal">
            Start with the piece you need most.
          </h3>
          <p class="mt-6 max-w-2xl text-2xl font-semibold leading-tight text-white/42">
            Focused services that can stand alone or become the first step toward a larger managed package.
          </p>

          <div class="mt-14 grid border-t border-white/14 md:grid-cols-2">
            <NuxtLink
              v-for="service in services"
              :key="service.title"
              :to="service.href"
              class="group border-b border-white/14 py-7 md:odd:pr-8 md:even:border-l md:even:border-white/14 md:even:pl-8"
            >
              <p class="text-lg font-semibold text-white/42">
                {{ service.kicker }}
              </p>
              <h4 class="mt-3 text-3xl font-bold leading-none">
                {{ service.title }}
              </h4>
              <p class="mt-5 text-lg font-semibold leading-tight text-white/46">
                {{ service.description }}
              </p>
              <span class="mt-7 inline-block text-lg font-semibold text-white/72">
                Learn more →
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <p class="mt-14 max-w-3xl text-lg font-semibold leading-tight text-white/36 lg:ml-[38%]">
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

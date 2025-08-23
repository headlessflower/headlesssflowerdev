<template>
  <section class="relative bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-20">
      <!-- Header -->
      <div class="text-center">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Transparent Web Development Pricing
        </h2>
        <p class="mt-4 max-w-2xl mx-auto text-gray-600">
          Packages tailored to your goals — built with best practices for security, accessibility,
          and performance. It’s your brand; don’t sell it short.
        </p>
      </div>

      <!-- Plans -->
      <div class="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="plan in plans"
          :key="plan.slug"
          class="group relative rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold text-gray-900">{{ plan.name }}</h3>
            <span
              v-if="plan.badge"
              class="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700"
            >
              {{ plan.badge }}
            </span>
          </div>

          <p class="mt-2 text-gray-600">{{ plan.description }}</p>

          <div class="mt-5 space-y-1">
            <p class="text-2xl font-bold text-gray-900">{{ plan.price }}</p>
            <p class="text-sm text-gray-500">Estimated: {{ plan.hours }} of work</p>
          </div>

          <ul class="mt-6 space-y-3">
            <li v-for="f in plan.features" :key="f" class="flex items-start gap-3">
              <svg class="h-5 w-5 flex-none" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span class="text-gray-700">{{ f }}</span>
            </li>
          </ul>

          <div class="mt-8 flex gap-3">
            <NuxtLink
              :to="plan.ctaLink"
              class="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              {{ plan.cta }}
            </NuxtLink>
            <NuxtLink
              to="#contact"
              class="inline-flex w-full items-center justify-center rounded-xl bg-white border border-gray-300 px-5 py-3 text-gray-800 font-medium shadow hover:bg-gray-50 transition"
            >
              Get a Quote
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- Add-ons -->
      <div class="mt-16">
        <h4 class="text-2xl font-bold text-gray-900 text-center">Add‑ons</h4>
        <p class="mt-2 text-gray-600 text-center max-w-2xl mx-auto">
          Enhance your package with optional services to boost discoverability and polish.
        </p>

        <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="addon in addons"
            :key="addon.title"
            class="rounded-2xl border border-gray-200 p-5 bg-white shadow-sm"
          >
            <h5 class="font-semibold text-gray-900">{{ addon.title }}</h5>
            <p class="mt-1 text-sm text-gray-500">{{ addon.price }}</p>
            <p class="mt-3 text-gray-700">{{ addon.description }}</p>
          </div>
        </div>

        <div class="mt-10 flex justify-center">
          <NuxtLink
            to="/services"
            class="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-white font-medium shadow hover:bg-black/90 transition"
          >
            Explore Services
          </NuxtLink>
        </div>
      </div>

      <!-- Note -->
      <p class="mt-12 text-center text-sm text-gray-500">
        Final pricing depends on scope, timeline, and integrations. Accessibility and performance best practices are included in every build.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const plans = [
  {
    slug: 'starter',
    name: 'Starter',
    badge: 'Best for portfolios',
    description:
      '1-page scrollable site (Hero, About, Services, Contact). A clean, fast launch for a strong first impression.',
    hours: '15–20 hrs',
    price: '$1,400–$1,800',
    features: [
      'Responsive layout',
      'Accessibility-first structure',
      'Contact form with spam protection',
      'Basic SEO (titles/meta)',
      'Performance optimization',
    ],
    cta: 'View Starter',
    ctaLink: '/starter-package',
  },
  {
    slug: 'standard',
    name: 'Standard',
    badge: 'Popular',
    description:
      '3–5 page responsive site with navigation and forms. Ideal for growing businesses and services.',
    hours: '25–35 hrs',
    price: '$2,200–$3,200',
    features: [
      'Multi-page site with nav',
      'Advanced forms (file upload, conditional)',
      'SEO schema & metadata',
      'Blog-ready structure',
      'Analytics-ready setup',
    ],
    cta: 'View Standard',
    ctaLink: '/standard-package',
  },
  {
    slug: 'premium',
    name: 'Premium',
    badge: 'Full brand system',
    description:
      'Custom design system, animation, and CMS integration. Built for long-term content and scale.',
    hours: '45–55 hrs',
    price: '$4,000–$5,000',
    features: [
      'Design system & components',
      'Micro-interactions & animation',
      'Headless CMS integration',
      'Content modeling & training',
      'Advanced performance budget',
    ],
    cta: 'View Premium',
    ctaLink: '/premium-package',
  },
]

const addons = [
  {
    title: 'SEO Audit + Metadata',
    price: '$300–$600',
    description: 'Technical audit, meta improvements, and quick wins to improve visibility.',
  },
  {
    title: 'Copywriting (per page)',
    price: '$150–$300',
    description: 'Clear, brand-aligned copy to connect with your target audience.',
  },
  {
    title: 'Branding Package',
    price: '$800–$1,200',
    description: 'Logo, color palette, and type system to unify your brand presence.',
  },
  {
    title: 'CMS Integration',
    price: '$500–$1,000',
    description: 'Sanity/Contentful setup with content models and editorial workflow.',
  },
]
</script>

<style scoped>
/* Keep it minimal; Tailwind handles most styling */
</style>


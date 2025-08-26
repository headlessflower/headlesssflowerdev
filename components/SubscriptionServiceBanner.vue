<template>
  <section class="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <div class="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-100/60 blur-3xl"></div>
    <div class="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-purple-100/60 blur-3xl"></div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-12 py-14">
      <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
        <!-- Copy -->
        <div>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Monthly Maintenance & Care Plan
          </h3>
          <p class="mt-3 text-gray-700 max-w-xl">
            Keep your site secure, fast, and up‑to‑date. We handle updates, backups, uptime checks, and
            quick content edits — so you can focus on your business.
          </p>

          <ul class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li v-for="p in points" :key="p" class="flex items-start gap-2">
              <svg class="mt-1 h-5 w-5 flex-none" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span class="text-gray-800">{{ p }}</span>
            </li>
          </ul>

          <div class="mt-7 flex flex-wrap items-center gap-3">
            <NuxtLink
              :to="primaryLink"
              class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              Start Maintenance
            </NuxtLink>
            <NuxtLink
              :to="secondaryLink"
              class="inline-flex items-center justify-center rounded-xl bg-white border border-gray-300 px-5 py-3 text-gray-800 font-medium shadow hover:bg-gray-50 transition"
            >
              See Plan Details
            </NuxtLink>
            <span class="text-sm text-gray-500">Cancel anytime • Month‑to‑month</span>
          </div>
        </div>

        <!-- Card -->
        <div class="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
          <div class="flex items-baseline justify-between">
            <h4 class="text-lg font-semibold text-gray-900">Care Plan</h4>
            <span class="rounded-full bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 text-xs font-medium">
              Recommended
            </span>
          </div>

          <div class="mt-4">
            <div class="flex items-end gap-2">
              <p class="text-3xl font-extrabold text-gray-900">{{ price }}</p>
              <span class="text-gray-500">/ month</span>
            </div>
            <p class="mt-1 text-sm text-gray-500">Billed monthly. No long‑term contracts.</p>
          </div>

          <ul class="mt-5 space-y-3">
            <li v-for="f in features" :key="f" class="flex items-start gap-2">
              <svg class="mt-1 h-5 w-5 flex-none" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span class="text-gray-700">{{ f }}</span>
            </li>
          </ul>

          <div class="mt-6">
            <NuxtLink
              :to="primaryLink"
              class="inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-white font-medium shadow hover:bg-black/90 transition"
            >
              Get Started
            </NuxtLink>
          </div>

          <p class="mt-4 text-xs text-gray-500">
            *Turnaround targets apply to site sizes under 25 pages. Enterprise? <NuxtLink to="#contact" class="underline hover:no-underline">Contact us</NuxtLink>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  price: {
    type: String,
    default: '$149'
  },
  primaryLink: {
    type: String,
    default: '#contact'
  },
  secondaryLink: {
    type: String,
    default: '/monthly-maintenance-subscription'
  }
})

const points = [
  'Core/CMS/plugin updates & testing',
  'Daily backups + 30-day retention',
  'Uptime & security monitoring',
  'Performance checks & fixes',
  'Accessibility & SEO quick fixes',
  'Up to 1 hour content edits/month',
]

const features = [
  'Monthly update cycle with rollback plan',
  'Broken link checks & form testing',
  'Image optimization & cache review',
  'Priority email support',
  'Emergency hotfix (fair use)',
]
</script>



<template>
  <main class="min-h-screen bg-neutral-950 text-neutral-100">
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div class="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="mb-3 inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300 ring-1 ring-emerald-400/30">Care Plan • Monthly</p>
            <h1 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Monthly Website Maintenance</h1>
            <p class="mt-4 max-w-2xl text-neutral-300">Stay secure, fast, and up‑to‑date. We proactively maintain your site and send clear monthly reports—so issues are fixed before they become problems.</p>
          </div>
          <div class="w-full max-w-sm rounded-2xl border border-emerald-400/30 bg-neutral-900 p-6">
            <div class="flex items-end gap-2">
              <span class="text-4xl font-extrabold text-emerald-400">$150</span>
              <span class="pb-1 text-neutral-300">/ month</span>
            </div>
            <p class="mt-2 text-sm text-neutral-400">6-month minimum contract for ongoing care plans.</p>
            <NuxtLink to="/#contact" class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
              Enroll now
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4"><path d="M13.5 4.5L21 12l-7.5 7.5m7.5-7.5H3"/></svg>
            </NuxtLink>
            <NuxtLink to="/terms#managed-plans" class="mt-3 inline-flex text-sm text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
              View plan terms
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl" aria-hidden="true" />
    </section>

    <!-- What’s included -->
    <section class="mx-auto max-w-6xl px-6 pb-20">
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-xl font-semibold text-emerald-400">Security & Reliability</h2>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li>Core/CMS/plugin updates with rollback plan</li>
            <li>Uptime monitoring & alerting</li>
            <li>Daily backups with 30‑day retention</li>
            <li>Malware & spam checks; basic WAF rules at the edge</li>
          </ul>
        </div>
        <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-xl font-semibold text-emerald-400">Performance & Quality</h2>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li>Core Web Vitals review and fixes</li>
            <li>Image and asset optimization</li>
            <li>Broken link & form testing</li>
            <li>Accessibility & SEO quick fixes</li>
          </ul>
        </div>
        <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-xl font-semibold text-emerald-400">Support & Content</h2>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li>Up to 1 hour of minor content edits</li>
            <li>Priority email support</li>
            <li>Emergency hotfix (fair use)</li>
            <li>Roadmap suggestions for growth</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Why monthly monitoring -->
    <section class="mx-auto max-w-6xl px-6 pb-20">
      <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
        <h2 class="text-2xl font-bold text-emerald-400">Why monthly monitoring matters</h2>
        <div class="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <h3 class="text-lg font-semibold">Stay ahead of threats</h3>
            <p class="mt-2 text-neutral-300">Most exploits target known issues. Monthly updates and checks close those doors early.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold">Protect conversions</h3>
            <p class="mt-2 text-neutral-300">Speed, reliability, and working forms directly impact leads and sales.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold">Save time & cost</h3>
            <p class="mt-2 text-neutral-300">Preventive care is far cheaper than emergency repairs and downtime.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Reporting -->
    <section class="mx-auto max-w-6xl px-6 pb-20">
      <div class="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
        <h2 class="text-2xl font-bold text-emerald-300">What you’ll receive each month</h2>
        <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div class="rounded-xl border border-neutral-800/60 bg-neutral-900 p-5">
            <h3 class="text-lg font-semibold">Maintenance Report</h3>
            <ul class="mt-3 list-disc space-y-2 pl-5 text-neutral-300">
              <li>Updates applied (core, plugins, dependencies)</li>
              <li>Backups status & restore test date</li>
              <li>Uptime, page speed snapshots, error logs</li>
              <li>Security notes (blocked threats, spam volume)</li>
            </ul>
          </div>
          <div class="rounded-xl border border-neutral-800/60 bg-neutral-900 p-5">
            <h3 class="text-lg font-semibold">Actionable Suggestions</h3>
            <ul class="mt-3 list-disc space-y-2 pl-5 text-neutral-300">
              <li>Conversion ideas (CTA placement, form tweaks)</li>
              <li>Speed wins (image compression, script cleanup)</li>
              <li>Accessibility & SEO improvements</li>
              <li>Content opportunities based on analytics</li>
            </ul>
          </div>
        </div>
        <p class="mt-6 text-sm text-neutral-400">Reports are delivered via email as a shareable link. We can review together on a quick call if helpful.</p>
      </div>
    </section>

    <!-- Sample suggestions -->
    <section class="mx-auto max-w-6xl px-6 pb-20">
      <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
        <h2 class="text-2xl font-bold text-emerald-400">Sample suggestions we might send</h2>
        <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div class="rounded-xl border border-neutral-800/60 bg-neutral-950 p-5">
            <h3 class="text-base font-semibold text-neutral-100">Performance</h3>
            <ul class="mt-2 list-disc space-y-2 pl-5 text-neutral-300">
              <li>Convert hero images to modern formats</li>
              <li>Defer non‑critical scripts on homepage</li>
              <li>Consolidate analytics tags</li>
            </ul>
          </div>
          <div class="rounded-xl border border-neutral-800/60 bg-neutral-950 p-5">
            <h3 class="text-base font-semibold text-neutral-100">Security</h3>
            <ul class="mt-2 list-disc space-y-2 pl-5 text-neutral-300">
              <li>Rotate admin passwords; enable 2FA</li>
              <li>Tighten form rate limits</li>
              <li>Review third‑party embeds</li>
            </ul>
          </div>
          <div class="rounded-xl border border-neutral-800/60 bg-neutral-950 p-5">
            <h3 class="text-base font-semibold text-neutral-100">Conversions</h3>
            <ul class="mt-2 list-disc space-y-2 pl-5 text-neutral-300">
              <li>Test alternative CTA copy on services page</li>
              <li>Add testimonial near contact form</li>
              <li>Improve schema for FAQs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="mx-auto max-w-6xl px-6 pb-24">
      <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
        <h2 class="text-2xl font-bold text-emerald-400">FAQ</h2>
        <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 class="text-base font-semibold">What if an update breaks something?</h3>
            <p class="mt-2 text-neutral-300">We use a rollback plan. If an update causes issues, we revert and schedule a safe fix.</p>
          </div>
          <div>
            <h3 class="text-base font-semibold">What’s not included?</h3>
            <p class="mt-2 text-neutral-300">New features, redesigns, and complex integrations are quoted separately—we’ll flag them in your report.</p>
          </div>
          <div>
            <h3 class="text-base font-semibold">How do we start?</h3>
            <p class="mt-2 text-neutral-300">We run a quick baseline audit, confirm access, and begin within a few business days.</p>
          </div>
          <div>
            <h3 class="text-base font-semibold">What is the minimum commitment?</h3>
            <p class="mt-2 text-neutral-300">Care plans require a 6-month minimum term.</p>
          </div>
          <div>
            <h3 class="text-base font-semibold">What happens if I cancel early?</h3>
            <p class="mt-2 text-neutral-300">Early cancellation terms are documented in your agreement and may include fees tied to the remaining committed term.</p>
          </div>
        </div>
        <div class="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p class="text-neutral-300">Ready to keep your site healthy, secure, and fast—without babysitting it?</p>
          <NuxtLink to="/#contact" class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">Enroll for $150/mo</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Monthly Website Maintenance — Headless Flower',
  meta: [
    { name: 'description', content: 'Proactive updates, backups, monitoring, and monthly reports to keep your site secure, fast, and reliable. $150/month.' },
    { property: 'og:title', content: 'Monthly Website Maintenance' },
    { property: 'og:description', content: 'Stay secure, fast, and up‑to‑date with proactive care and clear monthly reports. $150/month.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})

// Optional: set a custom layout if you have one, else remove
// definePageMeta({ layout: 'marketing' })
</script>

<style scoped>
/* No .prose styles used */
</style>

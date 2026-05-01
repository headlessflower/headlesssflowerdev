<template>
  <main class="min-h-screen bg-neutral-950 text-neutral-100">
    <section class="relative overflow-hidden">
      <div class="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div class="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="mb-3 inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300 ring-1 ring-emerald-400/30">Managed Services • Maintenance</p>
            <h1 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Maintenance and upkeep that keeps your customer-facing system healthy after launch.</h1>
            <p class="mt-4 max-w-2xl text-neutral-300">Launch is only the start. Ongoing upkeep keeps your site secure, current, fast, and reliable so you are not losing opportunities to broken forms, stale copy, or preventable issues.</p>
          </div>
          <NuxtLink to="/#contact" class="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
            Talk to us
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4 transition-transform group-hover:translate-x-0.5"><path d="M13.5 4.5L21 12l-7.5 7.5m7.5-7.5H3"/></svg>
          </NuxtLink>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
            <p class="text-sm font-semibold text-neutral-300">Best for</p>
            <p class="mt-1 text-lg">Businesses that want dependable upkeep without adding another operational burden.</p>
          </div>
          <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
            <p class="text-sm font-semibold text-neutral-300">Primary outcome</p>
            <p class="mt-1 text-lg">A site and customer system that stays current, safe, and less likely to break at the wrong time.</p>
          </div>
          <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
            <p class="text-sm font-semibold text-neutral-300">Engagement model</p>
            <p class="mt-1 text-lg">Starting at $150/month with a 6-month minimum contract.</p>
          </div>
        </div>
      </div>
      <div class="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl" aria-hidden="true" />
    </section>

    <section class="mx-auto max-w-6xl px-6 pb-24">
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-2xl font-bold text-emerald-300">What ongoing upkeep includes</h2>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li>Security updates and routine software maintenance.</li>
            <li>Content edits and small change requests.</li>
            <li>Performance checks and issue prevention.</li>
            <li>Form testing, uptime checks, and monitoring.</li>
            <li>Simple reporting so you know what is happening without digging into tools.</li>
          </ul>
        </div>

        <div class="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-6">
          <h2 class="text-2xl font-bold text-emerald-100">Why this matters after launch</h2>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-emerald-50/90">
            <li>Small issues compound when nobody owns them.</li>
            <li>Outdated content quietly lowers trust and conversion rates.</li>
            <li>Routine maintenance is cheaper than emergency fixes and lost leads.</li>
          </ul>
        </div>

        <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-2xl font-bold text-emerald-300">What clients usually want help with</h2>
          <div class="mt-4 grid gap-4 sm:grid-cols-2">
            <div class="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
              <p class="font-semibold text-neutral-100">Keeping offers current</p>
              <p class="mt-2 text-sm text-neutral-400">Update service details, testimonials, contact paths, and calls to action as the business changes.</p>
            </div>
            <div class="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
              <p class="font-semibold text-neutral-100">Preventing silent failures</p>
              <p class="mt-2 text-sm text-neutral-400">Catch broken forms, poor mobile rendering, or performance regressions before they hurt sales.</p>
            </div>
            <div class="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
              <p class="font-semibold text-neutral-100">Reducing technical debt</p>
              <p class="mt-2 text-sm text-neutral-400">Keep the site supportable instead of letting fixes pile up until a redesign feels unavoidable.</p>
            </div>
            <div class="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
              <p class="font-semibold text-neutral-100">Staying informed</p>
              <p class="mt-2 text-sm text-neutral-400">Get plain-language updates on what changed, what needs attention, and what to do next.</p>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-2xl font-bold text-emerald-300">How this fits your stack</h2>
          <p class="mt-3 text-neutral-300">Whether your site is mostly marketing pages, connected forms, or light customer workflows, the goal is the same: keep the system healthy without making upkeep your job.</p>
          <p class="mt-4 text-neutral-300">If you need deeper support, this also pairs naturally with managed web presence or white-label business app work.</p>
        </div>
      </div>

      <div class="mt-12 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
        <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 class="text-lg font-semibold">Get help keeping your system healthy</h3>
            <p class="mt-1 text-neutral-300">Security, edits, monitoring, and practical upkeep under one roof.</p>
          </div>
          <NuxtLink to="/#contact" class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">Contact us</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Maintenance and Upkeep — Headless Flower',
  meta: [
    { name: 'description', content: 'Monthly maintenance and upkeep for websites and customer systems, including updates, content edits, performance checks, and reporting.' },
    { property: 'og:title', content: 'Maintenance and Upkeep — Headless Flower' },
    { property: 'og:description', content: 'Security updates, content edits, performance checks, and reporting that keep your system healthy after launch.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [{ rel: 'canonical', href: 'https://headlessflower.dev/maintenance-upkeep' }]
})
</script>

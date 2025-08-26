
<template>
  <main class="min-h-screen bg-neutral-950 text-neutral-100">
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div class="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="mb-3 inline-flex items-center rounded-full bg-fuchsia-400/10 px-3 py-1 text-sm font-medium text-fuchsia-300 ring-1 ring-fuchsia-400/30">Performance • Core Web Vitals</p>
            <h1 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Website Performance: Fast Loads, Smooth Interactions, Real Results</h1>
            <p class="mt-4 max-w-2xl text-neutral-300">People won’t wait. A slow site means lost visitors, lower search visibility, and fewer sales. We design your website to feel instant—then measure and tune it so it stays that way.</p>
          </div>
          <NuxtLink to="/#contact" class="group inline-flex items-center gap-2 rounded-xl bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-fuchsia-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400">
            Talk to us
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4 transition-transform group-hover:translate-x-0.5"><path d="M13.5 4.5L21 12l-7.5 7.5m7.5-7.5H3"/></svg>
          </NuxtLink>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
            <p class="text-sm font-semibold text-neutral-300">Published</p>
            <p class="mt-1 text-lg">August 24, 2025</p>
          </div>
          <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
            <p class="text-sm font-semibold text-neutral-300">Reading time</p>
            <p class="mt-1 text-lg">4–6 minutes</p>
          </div>
        </div>
      </div>
      <div class="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-fuchsia-500/10 to-transparent blur-3xl" aria-hidden="true" />
    </section>

    <!-- Body -->
    <section class="mx-auto max-w-3xl px-6 pb-24">
      <article class="space-y-10 text-neutral-200">
        <div>
          <h2 class="text-2xl font-bold text-fuchsia-400">Why performance matters</h2>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li><span class="font-semibold text-neutral-100">More conversions:</span> Faster pages lead to more sign‑ups, calls, and orders.</li>
            <li><span class="font-semibold text-neutral-100">Better search ranking:</span> Search engines reward fast, stable experiences.</li>
            <li><span class="font-semibold text-neutral-100">Happier users:</span> Smooth scrolling and instant taps build trust and brand love.</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-fuchsia-400">Our approach</h2>
          <p class="mt-3 text-neutral-300">We combine smart design choices with modern tooling so your site loads quickly anywhere—Wi‑Fi, 5G, or spotty coffee‑shop internet.</p>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li><span class="font-semibold text-neutral-100">Image optimization:</span> Right‑sized images, modern formats, and responsive loading so visuals look great without slowing pages down.</li>
            <li><span class="font-semibold text-neutral-100">Code splitting:</span> Only ship what’s needed on each page so the first view feels instant.</li>
            <li><span class="font-semibold text-neutral-100">Lean design systems:</span> Beautiful layouts without heavy, bloated assets.</li>
            <li><span class="font-semibold text-neutral-100">Caching &amp; CDN delivery:</span> Your content is served from locations near your visitors for faster loads.</li>
            <li><span class="font-semibold text-neutral-100">Core Web Vitals focus:</span> We track the metrics that matter to real users—speed, responsiveness, and visual stability.</li>
          </ul>
          <p class="mt-3"><NuxtLink to="/#contact" class="text-fuchsia-400 hover:underline">Get a free performance check →</NuxtLink></p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-fuchsia-400">What we measure (and why it matters)</h2>
          <p class="mt-3 text-neutral-300">We don’t guess—we monitor real‑user data and lab tests, then make targeted improvements.</p>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li><span class="font-semibold text-neutral-100">Loading speed</span> (how fast the first content appears) — keeps visitors from bouncing.</li>
            <li><span class="font-semibold text-neutral-100">Interactivity</span> (how quickly the page reacts to taps/clicks) — reduces frustration.</li>
            <li><span class="font-semibold text-neutral-100">Visual stability</span> (no jumpy layouts) — improves trust and readability.</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-fuchsia-400">Quick wins we implement on every project</h2>
          <ol class="mt-4 list-decimal space-y-2 pl-5 text-neutral-300">
            <li><span class="font-semibold text-neutral-100">Optimized media</span> — compressed, responsive, and lazy‑loaded where appropriate.</li>
            <li><span class="font-semibold text-neutral-100">Prioritized content</span> — important content appears first; extras load later.</li>
            <li><span class="font-semibold text-neutral-100">Clean scripts</span> — fewer third‑party extras; we audit what really adds value.</li>
            <li><span class="font-semibold text-neutral-100">Accessible, lightweight UI</span> — fast experiences are usually more accessible too.</li>
            <li><span class="font-semibold text-neutral-100">Global caching + CDN</span> — fast for local visitors and international audiences.</li>
          </ol>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-fuchsia-400">Ongoing care keeps you fast</h2>
          <p class="mt-3 text-neutral-300">Performance can drift over time as content grows. Our maintenance plan includes periodic reviews, monitoring, and tune‑ups so your site stays quick and reliable.</p>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li>Scheduled performance audits.</li>
            <li>Alerts for regressions.</li>
            <li>Reports with plain‑English insights and next steps.</li>
          </ul>
          <p class="mt-3"><NuxtLink to="/#contact" class="text-fuchsia-400 hover:underline">Ask about the maintenance subscription →</NuxtLink></p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-fuchsia-400">Ready to speed up your site?</h2>
          <p class="mt-3 text-neutral-300">We’ll assess where you are today, outline the most impactful fixes, and put a plan in place—without the technical overwhelm.</p>
        </div>
      </article>

      <!-- CTA card -->
      <div class="mt-12 rounded-2xl border border-fuchsia-400/30 bg-fuchsia-400/10 p-6">
        <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 class="text-lg font-semibold">Start your performance audit</h3>
            <p class="mt-1 text-neutral-300">Faster pages, happier users, better results.</p>
          </div>
          <NuxtLink to="/#contact" class="inline-flex items-center justify-center rounded-xl bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-fuchsia-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400">Contact us</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Website Performance — Headless Flower',
  meta: [
    { name: 'description', content: 'Why speed matters for your business and how we deliver faster sites with smart optimization and a Core Web Vitals focus.' },
    { property: 'og:title', content: 'Website Performance: Fast Loads, Smooth Interactions, Real Results' },
    { property: 'og:description', content: 'Faster pages, happier users, better search visibility—delivered with image optimization, code splitting, caching, and Core Web Vitals focus.' },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})
</script>

<style scoped>
.prose :where(a):not(:where([class~="not-prose"])) { text-decoration: none; }
.prose :where(a):not(:where([class~="not-prose"])):hover { text-decoration: underline; }
</style>

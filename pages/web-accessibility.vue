
<template>
  <main class="min-h-screen bg-neutral-950 text-neutral-100">
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div class="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="mb-3 inline-flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-sm font-medium text-sky-300 ring-1 ring-sky-400/30">Accessibility • WCAG</p>
            <h1 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Web Accessibility: Inclusive Experiences That Work for Everyone</h1>
            <p class="mt-4 max-w-2xl text-neutral-300">Accessibility isn’t an add‑on—it’s how you welcome every customer. We build websites that are usable by more people, on more devices, with fewer barriers.</p>
          </div>
          <NuxtLink to="/#contact" class="group inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
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
      <div class="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-sky-500/10 to-transparent blur-3xl" aria-hidden="true" />
    </section>

    <!-- Body -->
    <section class="mx-auto max-w-3xl px-6 pb-24">
      <article class="space-y-10 text-neutral-200">
        <div>
          <h2 class="text-2xl font-bold text-sky-400">Why accessibility matters</h2>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li><span class="font-semibold text-neutral-100">Reach more customers:</span> Make it easy for everyone to use your site—including people using screen readers, keyboard navigation, or zoomed text.</li>
            <li><span class="font-semibold text-neutral-100">Protect your brand:</span> Inclusive experiences show you care and reduce legal risk.</li>
            <li><span class="font-semibold text-neutral-100">Improve quality for all:</span> Accessible sites are often faster, clearer, and easier to navigate for everyone.</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-sky-400">Our approach (no jargon, just outcomes)</h2>
          <p class="mt-3 text-neutral-300">We follow recognized guidelines (like WCAG) and pair them with real‑world testing so your site works for more people in more situations.</p>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li><span class="font-semibold text-neutral-100">Semantic structure:</span> Clear headings, labels, and regions so assistive tech can interpret your content.</li>
            <li><span class="font-semibold text-neutral-100">Keyboard first:</span> Everything important works without a mouse.</li>
            <li><span class="font-semibold text-neutral-100">Color &amp; contrast:</span> Text and UI elements remain readable in bright light or dark mode.</li>
            <li><span class="font-semibold text-neutral-100">Media alternatives:</span> Captions, transcripts, and alt text where needed.</li>
            <li><span class="font-semibold text-neutral-100">Forms that help:</span> Clear instructions, error messages, and accessible validation.</li>
          </ul>
          <p class="mt-3"><NuxtLink to="/#contact" class="text-sky-400 hover:underline">Get a free accessibility check →</NuxtLink></p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-sky-400">What we cover (aligned with WCAG themes)</h2>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li><span class="font-semibold text-neutral-100">Perceivable:</span> Text alternatives for images, captions for video, proper contrast, adaptable layouts.</li>
            <li><span class="font-semibold text-neutral-100">Operable:</span> Keyboard navigation, logical focus order, visible focus states, enough time to read and act.</li>
            <li><span class="font-semibold text-neutral-100">Understandable:</span> Predictable navigation, consistent components, plain‑language copy, helpful errors.</li>
            <li><span class="font-semibold text-neutral-100">Robust:</span> Markup that works with modern assistive technologies and across devices.</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-sky-400">Quick wins we implement on every project</h2>
          <ol class="mt-4 list-decimal space-y-2 pl-5 text-neutral-300">
            <li><span class="font-semibold text-neutral-100">Meaningful alt text</span> for images (and decorative images properly hidden).</li>
            <li><span class="font-semibold text-neutral-100">Accessible color system</span> that passes contrast checks.</li>
            <li><span class="font-semibold text-neutral-100">Skip‑to‑content link</span> and logical heading levels.</li>
            <li><span class="font-semibold text-neutral-100">Visible focus</span> on interactive elements.</li>
            <li><span class="font-semibold text-neutral-100">Accessible forms</span> with labels, descriptions, and clear errors.</li>
            <li><span class="font-semibold text-neutral-100">ARIA only when needed</span>—we prefer native HTML first.</li>
          </ol>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-sky-400">Ongoing care keeps you inclusive</h2>
          <p class="mt-3 text-neutral-300">Accessibility isn’t one‑and‑done. As content changes, so can your accessibility. Our maintenance plan includes periodic reviews, user‑flow testing, and updates to keep you aligned with best practices.</p>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li>Scheduled accessibility audits.</li>
            <li>Real‑user and assistive‑tech checks.</li>
            <li>Plain‑English reports with fixes prioritized by impact.</li>
          </ul>
          <p class="mt-3"><NuxtLink to="/#contact" class="text-sky-400 hover:underline">Ask about the maintenance subscription →</NuxtLink></p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-sky-400">Ready to welcome more customers?</h2>
          <p class="mt-3 text-neutral-300">We’ll assess your current site, highlight the most impactful improvements, and provide a clear, prioritized roadmap.</p>
        </div>
      </article>

      <!-- CTA card -->
      <div class="mt-12 rounded-2xl border border-sky-400/30 bg-sky-400/10 p-6">
        <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 class="text-lg font-semibold">Start your accessibility audit</h3>
            <p class="mt-1 text-neutral-300">Inclusive by design, tested in the real world.</p>
          </div>
          <NuxtLink to="/#contact" class="inline-flex items-center justify-center rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">Contact us</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Web Accessibility — Headless Flower',
  meta: [
    { name: 'description', content: 'Why accessibility matters for your business and how we build inclusive, WCAG‑aligned websites that work across devices.' },
    { property: 'og:title', content: 'Web Accessibility: Inclusive Experiences That Work for Everyone' },
    { property: 'og:description', content: 'Inclusive experiences, WCAG alignment, real‑world testing, and ongoing care—without the jargon.' },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})

// Optional: set a custom layout if you have one, else remove
// definePageMeta({ layout: 'blog' })
</script>

<style scoped>
.prose :where(a):not(:where([class~="not-prose"])) { text-decoration: none; }
.prose :where(a):not(:where([class~="not-prose"])):hover { text-decoration: underline; }
</style>

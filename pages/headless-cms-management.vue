
<template>
  <main class="min-h-screen bg-neutral-950 text-neutral-100">
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div class="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="mb-3 inline-flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-sm font-medium text-amber-300 ring-1 ring-amber-400/30">Headless CMS • Content Management</p>
            <h1 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Easy to Manage Websites: Headless CMS & Clear Content Models</h1>
            <p class="mt-4 max-w-2xl text-neutral-300">Content is only valuable if you can publish it easily. We design websites with headless CMS tools and content models that let your team update pages, post articles, and manage media—without fear of breaking things.</p>
          </div>
          <NuxtLink to="/#contact" class="group inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
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
      <div class="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl" aria-hidden="true" />
    </section>

    <!-- Body -->
    <section class="mx-auto max-w-3xl px-6 pb-24">
      <article class="space-y-10 text-neutral-200">
        <div>
          <h2 class="text-2xl font-bold text-amber-400">Why “easy to manage” matters</h2>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li><span class="font-semibold text-neutral-100">Save time:</span> Non‑technical team members can publish quickly without waiting on developers.</li>
            <li><span class="font-semibold text-neutral-100">Stay consistent:</span> Clear content models mean no broken layouts or off‑brand pages.</li>
            <li><span class="font-semibold text-neutral-100">Scale confidently:</span> Add new sections, campaigns, or pages without reinventing the wheel.</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-amber-400">Our approach</h2>
          <p class="mt-3 text-neutral-300">We help you pick the right CMS and set it up so it works for your team—not against it.</p>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li><span class="font-semibold text-neutral-100">Headless CMS integrations:</span> Modern tools (Sanity, Contentful, etc.) that separate content from design for flexibility.</li>
            <li><span class="font-semibold text-neutral-100">Reusable components:</span> Structured blocks for hero banners, service lists, case studies, and more.</li>
            <li><span class="font-semibold text-neutral-100">Authoring guidance:</span> Labels, descriptions, and validations so your team knows what belongs where.</li>
            <li><span class="font-semibold text-neutral-100">Preview workflows:</span> See changes before they go live.</li>
            <li><span class="font-semibold text-neutral-100">Role‑based access:</span> Editors, authors, and admins with the right permissions.</li>
          </ul>
          <p class="mt-3"><NuxtLink to="/#contact" class="text-amber-400 hover:underline">Get a free CMS demo →</NuxtLink></p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-amber-400">What this looks like in practice</h2>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li>Your marketing team can launch a new landing page in minutes.</li>
            <li>Editors update images and text without touching layout code.</li>
            <li>Content is future‑proof—usable across web, mobile, or even other platforms like apps or displays.</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-amber-400">Quick wins we implement on every project</h2>
          <ol class="mt-4 list-decimal space-y-2 pl-5 text-neutral-300">
            <li><span class="font-semibold text-neutral-100">Clean content models</span> — well‑named fields and predictable structures.</li>
            <li><span class="font-semibold text-neutral-100">Reusable modules</span> — flexible building blocks instead of one‑off templates.</li>
            <li><span class="font-semibold text-neutral-100">Media libraries</span> — optimized image handling with alt text guidance.</li>
            <li><span class="font-semibold text-neutral-100">Preview environments</span> — so changes can be reviewed before publishing.</li>
            <li><span class="font-semibold text-neutral-100">Permissions &amp; workflows</span> — clear roles and approvals where needed.</li>
          </ol>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-amber-400">Ongoing support keeps you confident</h2>
          <p class="mt-3 text-neutral-300">Teams change, campaigns evolve, and content grows. We provide ongoing support to keep your CMS intuitive and stress‑free.</p>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li>Training sessions and documentation.</li>
            <li>Periodic audits to streamline unused content types.</li>
            <li>Guidance on scaling models as your site grows.</li>
          </ul>
          <p class="mt-3"><NuxtLink to="/#contact" class="text-amber-400 hover:underline">Ask about CMS training & support →</NuxtLink></p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-amber-400">Ready to simplify publishing?</h2>
          <p class="mt-3 text-neutral-300">We’ll review your current setup, suggest the right CMS fit, and design clear content models so your team can publish with confidence.</p>
        </div>
      </article>

      <!-- CTA card -->
      <div class="mt-12 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6">
        <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 class="text-lg font-semibold">Start your CMS review</h3>
            <p class="mt-1 text-neutral-300">Simplify publishing, empower your team.</p>
          </div>
          <NuxtLink to="/#contact" class="inline-flex items-center justify-center rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">Contact us</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Easy to Manage Websites — Headless Flower',
  meta: [
    { name: 'description', content: 'Simplify content management with headless CMS integrations, reusable components, and authoring guidance so your team can publish confidently.' },
    { property: 'og:title', content: 'Easy to Manage Websites: Headless CMS & Clear Content Models' },
    { property: 'og:description', content: 'Headless CMS integrations, reusable components, and guided authoring for stress‑free publishing.' },
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

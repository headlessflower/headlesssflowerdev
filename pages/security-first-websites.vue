
<template>
  <main class="min-h-screen bg-neutral-950 text-neutral-100">
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div class="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="mb-3 inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300 ring-1 ring-emerald-400/30">Security • Best Practices</p>
            <h1 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Security‑First Websites: Why Your Business Can’t Afford to Ignore It</h1>
            <p class="mt-4 max-w-2xl text-neutral-300">Your website is your storefront, your portfolio, and often your main point of contact with customers. Security isn’t a nice‑to‑have—it’s essential. Here’s how we keep your site safe and why it matters for your business.</p>
          </div>
          <NuxtLink to="/#contact" class="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
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
            <p class="mt-1 text-lg">5–7 minutes</p>
          </div>
        </div>
      </div>
      <div class="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl" aria-hidden="true" />
    </section>

    <!-- Body -->
    <section class="mx-auto max-w-3xl px-6 pb-24">
      <article class="prose prose-invert prose-emerald max-w-none">
        <h2> What “security‑first” really means</h2>
        <p>When we say <strong>security‑first</strong>, we mean building your website with protection in mind from day one, not as an afterthought. That includes stronger protections against hackers and spam, regular updates to prevent known issues, modern hosting practices to keep your site fast and safe, and backups with monitoring so you’re never caught off guard.</p>

        <p><NuxtLink to="/#contact">Get a free baseline audit →</NuxtLink></p>

        <h2>How Nuxt and AdonisJS help</h2>
        <p>We use <strong>Nuxt</strong> for front‑end websites and <strong>AdonisJS</strong> for web applications. Both are modern frameworks with built‑in guardrails: Nuxt favors safe defaults and reduces common front‑end risks, while AdonisJS offers secure logins, data protection, and role‑based permissions so only the right people access the right tools.</p>

        <h2>Best practices we follow for every business site</h2>
        <ul class="space-y-4">
          <li><strong>Always‑on HTTPS.</strong> Encryption by default so your visitors’ data stays safe.</li>
          <li><strong>Proactive updates.</strong> We stay on top of software updates to reduce risks from outdated tools.</li>
          <li><strong>Spam &amp; bot protection.</strong> Proven methods to block unwanted traffic and keep forms clean.</li>
          <li><strong>Backups &amp; recovery.</strong> Regular backups mean your site can be restored quickly if needed.</li>
          <li><strong>Monitoring &amp; alerts.</strong> We watch for unusual activity so issues can be fixed early.</li>
          <li><strong>Clear access control.</strong> No shared admin accounts; the right people get the right permissions.</li>
        </ul>

        <p><NuxtLink to="/#contact">Need help implementing the checklist? →</NuxtLink></p>

        <h2>Why this matters for your business</h2>
        <p>Customers expect your website to be trustworthy. If your site is hacked, goes down, or leaks customer data, it damages your brand instantly. Investing in security protects your reputation, prevents costly downtime, supports privacy compliance, and gives you peace of mind so you can focus on your business.</p>

        <h2>Our maintenance promise</h2>
        <p>Security isn’t just about the initial build—it’s about keeping things up to date. Our maintenance plan includes monthly software reviews and updates, secure hosting environments, regular backups with restore checks, and alerts and monitoring for early issue detection.</p>
        <p><NuxtLink to="/#contact">Ask about the maintenance subscription →</NuxtLink></p>

        <h2>Ready to strengthen your online presence?</h2>
        <p>We’ll review your current site, highlight the risks, and give you a clear plan to improve security. Whether you need a simple marketing site or a full web app, we’ll make sure it’s built with protection first.</p>
      </article>

      <!-- CTA card -->
      <div class="mt-12 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
        <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 class="text-lg font-semibold">Start your security audit</h3>
            <p class="mt-1 text-neutral-300">No jargon. Clear next steps tailored to your site.</p>
          </div>
          <NuxtLink to="/#contact" class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">Contact us</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Security‑First Websites — Headless Flower',
  meta: [
    { name: 'description', content: 'Learn why keeping your site secure through updates, strong hosting, and best practices is critical for your business. Built with Nuxt and AdonisJS.' },
    { property: 'og:title', content: 'Security‑First Websites: Why Your Business Can’t Afford to Ignore It' },
    { property: 'og:description', content: 'How we keep Nuxt sites and AdonisJS apps safe without the jargon—clear steps, ongoing care, and business value.' },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})

// Optional: set a custom layout if you have one, else remove
// definePageMeta({ layout: 'blog' })
</script>

<style scoped>
h2 {

font-size: 2rem;
margin-bottom: 1rem;
}
</style>

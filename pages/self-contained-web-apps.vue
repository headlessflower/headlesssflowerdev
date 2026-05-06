<template>
  <main class="min-h-screen bg-neutral-950 text-neutral-100">
    <section class="relative overflow-hidden">
      <div class="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div class="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="mb-3 inline-flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300 ring-1 ring-cyan-400/30">Business Systems • Self-Contained Web Apps</p>
            <h1 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Self-contained web apps that give small businesses more control, lower costs, and better workflows.</h1>
            <p class="mt-4 max-w-2xl text-neutral-300">Instead of paying for a stack of disconnected tools, a self-contained web app gives your business one place to manage customer activity, track work, and guide people toward the next step with less friction.</p>
          </div>
          <NuxtLink to="/#contact" class="group inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
            Talk to us
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4 transition-transform group-hover:translate-x-0.5"><path d="M13.5 4.5L21 12l-7.5 7.5m7.5-7.5H3"/></svg>
          </NuxtLink>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
            <p class="text-sm font-semibold text-neutral-300">What it solves</p>
            <p class="mt-1 text-lg">Scattered tools, repetitive admin work, and workflows that leak opportunities.</p>
          </div>
          <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
            <p class="text-sm font-semibold text-neutral-300">Primary benefit</p>
            <p class="mt-1 text-lg">More ownership over how the business runs and how customers move through it.</p>
          </div>
          <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
            <p class="text-sm font-semibold text-neutral-300">Best for</p>
            <p class="mt-1 text-lg">Small businesses that have outgrown inboxes, spreadsheets, and generic SaaS subscriptions.</p>
          </div>
        </div>
      </div>
      <div class="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl" aria-hidden="true" />
    </section>

    <section class="mx-auto max-w-6xl px-6 pb-24">
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-2xl font-bold text-cyan-300">Why a self-contained web app gives you more control</h2>
          <p class="mt-3 text-neutral-300">When the most important parts of your workflow live inside your own system, you are not forced to adapt your business to somebody else’s product decisions. The app can be shaped around how your team actually works.</p>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li>Your intake, booking, follow-up, and customer records can live in one place.</li>
            <li>The system can match your exact workflow instead of forcing awkward workarounds.</li>
            <li>You decide what matters, what gets tracked, and what steps trigger the next action.</li>
          </ul>
        </div>

        <div class="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-6">
          <h2 class="text-2xl font-bold text-cyan-100">Why it can cost less over time</h2>
          <p class="mt-3 text-cyan-50/90">A custom web app is not always the cheapest thing on day one, but it can become more cost-effective when your business is paying for too many subscriptions, duplicated work, and manual coordination.</p>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-cyan-50/90">
            <li>Fewer monthly software subscriptions stacked on top of each other.</li>
            <li>Less wasted admin time moving data between tools.</li>
            <li>Less friction for staff and fewer process mistakes.</li>
            <li>A system that can evolve with the business instead of getting replaced every time the workflow changes.</li>
          </ul>
        </div>

        <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6 lg:col-span-2">
          <h2 class="text-2xl font-bold text-cyan-300">Better workflows can convert more customers</h2>
          <p class="mt-3 text-neutral-300">Conversion is not just about a landing page. It is also about what happens after someone reaches out. If your workflow is slow, unclear, or scattered across tools, that friction shows up in lost leads, slower follow-up, and weaker customer trust.</p>
          <div class="mt-6 grid gap-4 md:grid-cols-3">
            <div class="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
              <p class="text-sm font-semibold text-neutral-100">Faster follow-up</p>
              <p class="mt-2 text-sm text-neutral-400">Leads can move directly into the right status, queue, or workflow without depending on manual sorting.</p>
            </div>
            <div class="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
              <p class="text-sm font-semibold text-neutral-100">Cleaner customer experience</p>
              <p class="mt-2 text-sm text-neutral-400">Booking, intake, and communication feel more consistent when they are part of one system.</p>
            </div>
            <div class="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
              <p class="text-sm font-semibold text-neutral-100">Smarter optimization</p>
              <p class="mt-2 text-sm text-neutral-400">Once the workflow is yours, you can fine-tune steps, remove bottlenecks, and improve conversion over time.</p>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-2xl font-bold text-cyan-300">What this kind of app can include</h2>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li>Inquiry and intake dashboards.</li>
            <li>Booking or scheduling flows.</li>
            <li>Customer records and notes.</li>
            <li>Status tracking for internal work.</li>
            <li>Light reporting and conversion visibility.</li>
            <li>Role-based access for owners, staff, or admins.</li>
          </ul>
        </div>

        <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-2xl font-bold text-cyan-300">A better fit for small businesses</h2>
          <p class="mt-3 text-neutral-300">Small businesses often do not need bloated enterprise software. They need something focused, easier to manage, and built around the handful of workflows that actually drive revenue and operations.</p>
          <p class="mt-4 text-neutral-300">That is where a self-contained app can be powerful: it does the important work well without dragging in unnecessary complexity.</p>
        </div>
      </div>

      <div class="mt-12 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
        <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 class="text-lg font-semibold">Map the workflow before you add another tool</h3>
            <p class="mt-1 text-neutral-300">We can help identify where your current process is leaking time, money, and conversions, then design a cleaner system around it.</p>
          </div>
          <NuxtLink to="/#contact" class="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">Contact us</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Self-Contained Web Apps for Small Business — Headless Flower',
  meta: [
    {
      name: 'description',
      content:
        'Self-contained web apps for small businesses that want more control, lower operating costs, and conversion-focused workflows tailored to how the business actually runs.',
    },
    { property: 'og:title', content: 'Self-Contained Web Apps for Small Business — Headless Flower' },
    {
      property: 'og:description',
      content:
        'Custom business web apps built to reduce tool sprawl, improve workflow control, and help convert more customers.',
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [{ rel: 'canonical', href: 'https://headlessflower.dev/self-contained-web-apps' }],
})
</script>

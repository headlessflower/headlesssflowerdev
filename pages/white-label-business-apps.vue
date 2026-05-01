<template>
  <main class="min-h-screen bg-neutral-950 text-neutral-100">
    <section class="relative overflow-hidden">
      <div class="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div class="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="mb-3 inline-flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-sm font-medium text-amber-300 ring-1 ring-amber-400/30">Managed Services • White-Label Apps</p>
            <h1 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">White-label business apps that give small businesses one place to run the essentials.</h1>
            <p class="mt-4 max-w-2xl text-neutral-300">When forms, customer records, booking details, and internal workflows are scattered everywhere, simple work gets harder. We create branded internal systems that make day-to-day operations cleaner.</p>
          </div>
          <NuxtLink to="/#contact" class="group inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
            Talk to us
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4 transition-transform group-hover:translate-x-0.5"><path d="M13.5 4.5L21 12l-7.5 7.5m7.5-7.5H3"/></svg>
          </NuxtLink>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
            <p class="text-sm font-semibold text-neutral-300">Best for</p>
            <p class="mt-1 text-lg">Small businesses that have outgrown spreadsheets, inboxes, and disconnected tools.</p>
          </div>
          <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
            <p class="text-sm font-semibold text-neutral-300">Primary outcome</p>
            <p class="mt-1 text-lg">A branded internal system for handling customer information, workflows, and admin tasks more cleanly.</p>
          </div>
          <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
            <p class="text-sm font-semibold text-neutral-300">Engagement model</p>
            <p class="mt-1 text-lg">$475/month with a 6-month minimum contract.</p>
          </div>
        </div>
      </div>
      <div class="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl" aria-hidden="true" />
    </section>

    <section class="mx-auto max-w-6xl px-6 pb-24">
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-2xl font-bold text-amber-300">What a white-label business app can include</h2>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li>Admin dashboards for reviewing inquiries, appointments, or customer activity.</li>
            <li>Customer records stored in one place instead of scattered across messages and notes.</li>
            <li>Custom intake workflows that match how your business already operates.</li>
            <li>Internal tools that reduce repetitive admin work.</li>
            <li>Branded interfaces that feel like part of your business instead of generic software.</li>
          </ul>
        </div>

        <div class="rounded-2xl border border-amber-400/20 bg-amber-400/10 p-6">
          <h2 class="text-2xl font-bold text-amber-100">Why businesses choose this route</h2>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-amber-50/90">
            <li>Off-the-shelf tools can create too much friction or too many subscriptions.</li>
            <li>Small teams often need something simpler and more tailored than enterprise software.</li>
            <li>Owning the workflow makes it easier to improve customer experience and internal efficiency together.</li>
          </ul>
        </div>

        <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-2xl font-bold text-amber-300">Examples of what we can build</h2>
          <div class="mt-4 grid gap-4 sm:grid-cols-2">
            <div class="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
              <p class="font-semibold text-neutral-100">Booking admin</p>
              <p class="mt-2 text-sm text-neutral-400">Review requests, assign statuses, and keep scheduling details organized.</p>
            </div>
            <div class="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
              <p class="font-semibold text-neutral-100">Customer records hub</p>
              <p class="mt-2 text-sm text-neutral-400">Store notes, contact details, and intake history in one place.</p>
            </div>
            <div class="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
              <p class="font-semibold text-neutral-100">Operations dashboard</p>
              <p class="mt-2 text-sm text-neutral-400">Give the team one view for pending work, customer activity, and simple reporting.</p>
            </div>
            <div class="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
              <p class="font-semibold text-neutral-100">Role-based internal tools</p>
              <p class="mt-2 text-sm text-neutral-400">Different views and permissions for owners, staff, and admins.</p>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-2xl font-bold text-amber-300">What makes this different from just building a website</h2>
          <p class="mt-3 text-neutral-300">This is about operational usefulness, not only marketing. The public site can still be part of the system, but the real value is having customer-facing and internal tools working together instead of living in separate silos.</p>
          <p class="mt-4 text-neutral-300">That could mean intake data flows into an admin view, customer records stay searchable, and staff have a better way to manage work without hopping between disconnected apps.</p>
        </div>
      </div>

      <div class="mt-12 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6">
        <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 class="text-lg font-semibold">Talk through your workflow</h3>
            <p class="mt-1 text-neutral-300">We can map the manual steps in your business and turn them into a simpler branded system.</p>
          </div>
          <NuxtLink to="/#contact" class="inline-flex items-center justify-center rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">Contact us</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'White-Label Business Apps — Headless Flower',
  meta: [
    { name: 'description', content: 'White-label business apps for small businesses that need admin dashboards, customer records, and custom internal tools in one branded system.' },
    { property: 'og:title', content: 'White-Label Business Apps — Headless Flower' },
    { property: 'og:description', content: 'Admin dashboards, customer records, and custom internal tools that give small businesses one place to run the essentials.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [{ rel: 'canonical', href: 'https://headlessflower.dev/white-label-business-apps' }]
})
</script>


<template>
  <main class="min-h-screen bg-neutral-950 text-neutral-100">
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div class="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="mb-3 inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300 ring-1 ring-emerald-400/30">Legal</p>
            <h1 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Terms & Conditions</h1>
            <p class="mt-4 max-w-2xl text-neutral-300">These terms outline how we work together—covering scope, timelines, payments, and what to expect during and after your project.</p>
          </div>
          <NuxtLink to="/#contact" class="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
            Questions? Contact us
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4 transition-transform group-hover:translate-x-0.5"><path d="M13.5 4.5L21 12l-7.5 7.5m7.5-7.5H3"/></svg>
          </NuxtLink>
        </div>
      </div>
      <div class="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl" aria-hidden="true" />
    </section>

    <!-- Body -->
    <section class="mx-auto max-w-4xl px-6 pb-24">
      <div class="space-y-12">
        <!-- Intro -->
        <section class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-xl font-semibold text-emerald-400">1) Overview</h2>
          <p class="mt-3 text-neutral-300">These Terms & Conditions (the “Terms”) apply to all services provided by Headless Flower (the “Agency,” “we,” “us”). By engaging us, the client (the “Client,” “you”) agrees to these Terms in addition to the statements in the project proposal and any signed work contract (the “Agreement”).</p>
        </section>

        <!-- Scope -->
        <section class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-xl font-semibold text-emerald-400">2) Scope of Work</h2>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-neutral-300">
            <li><span class="font-semibold text-neutral-100">Defined scope:</span> The Agreement lists all deliverables, milestones, and assumptions for the project.</li>
            <li><span class="font-semibold text-neutral-100">Out of scope:</span> <span class="underline">Any work not explicitly listed</span> in the Agreement is out of scope and will be billed as a <span class="font-semibold">new service order</span> at <span class="font-semibold">$45/hour</span> or a quoted flat rate for the new work.</li>
            <li><span class="font-semibold text-neutral-100">Revisions vs. errors:</span> Revisions/changes (new features, layout changes, new content) are out of scope and billed as above. Errors are our mistakes (see Section 6).</li>
          </ul>
        </section>

        <!-- Payment -->
        <section class="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <h2 class="text-xl font-semibold text-emerald-300">3) Payment Terms</h2>
          <div class="mt-3 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="rounded-xl border border-neutral-800/60 bg-neutral-950 p-4">
              <p class="text-sm font-semibold text-neutral-300">Deposit</p>
              <p class="mt-1 text-neutral-100">A <span class="font-semibold text-emerald-300">50% deposit</span> of the total project fee is required to schedule and begin work.</p>
            </div>
            <div class="rounded-xl border border-neutral-800/60 bg-neutral-950 p-4">
              <p class="text-sm font-semibold text-neutral-300">Final balance</p>
              <p class="mt-1 text-neutral-100">The remaining balance is due upon final delivery and <span class="font-semibold text-emerald-300">no later than 90 days</span> from project start date, whichever occurs first.</p>
            </div>
            <div class="rounded-xl border border-neutral-800/60 bg-neutral-950 p-4">
              <p class="text-sm font-semibold text-neutral-300">Payment plan</p>
              <p class="mt-1 text-neutral-100">A monthly payment plan is available upon request. Plan terms will be documented in writing.</p>
            </div>
          </div>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li>Late or failed payments may pause work and delay delivery. Past-due balances may accrue reasonable late fees as allowed by law.</li>
            <li>Hourly work is billed at <span class="font-semibold">$45/hour</span> unless a flat rate is quoted and approved for the new service order.</li>
          </ul>
        </section>

        <!-- Deliverables & Acceptance -->
        <section class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-xl font-semibold text-emerald-400">4) Deliverables & Acceptance</h2>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-neutral-300">
            <li>We will provide deliverables as listed in the Agreement. Access credentials and instructions will be included where applicable.</li>
            <li><span class="font-semibold text-neutral-100">Client review window:</span> You have <span class="font-semibold">7 days</span> from final submittal to raise questions, concerns, or error reports.</li>
            <li><span class="font-semibold text-neutral-100">Errors:</span> Errors include issues such as wrong colors used, typos in copy, and technical bugs.
              We will promptly fix confirmed errors. If we are unable to resolve them, you may request a refund within the 7‑day window.</li>
            <li><span class="font-semibold text-neutral-100">Revisions:</span> Changes or enhancements requested after final submittal—or items not part of the original scope—are treated as new service orders (see Section 2) and billed at <span class="font-semibold">$45/hour</span> or a flat rate.</li>
          </ul>
        </section>

        <!-- Client Responsibilities -->
        <section class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-xl font-semibold text-emerald-400">5) Client Responsibilities</h2>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-neutral-300">
            <li>Provide timely feedback, approvals, and access to required systems and content.</li>
            <li>Ensure you have rights to all materials supplied to us (copy, images, assets).</li>
            <li>Designate a single point of contact for efficient communication.</li>
          </ul>
        </section>

        <!-- Errors, Revisions, Out-of-scope (refunds) -->
        <section class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-xl font-semibold text-emerald-400">6) Errors, Revisions & Refunds</h2>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-neutral-300">
            <li><span class="font-semibold text-neutral-100">Errors (fix or refund):</span> Report within 7 days of final submittal. We will correct errors promptly. If unresolved, you may request a refund for the affected deliverable(s).</li>
            <li><span class="font-semibold text-neutral-100">Revisions/changes:</span> New requests or preference changes are out of scope and billed at <span class="font-semibold">$45/hour</span> or flat rate under a new service order.</li>
          </ul>
        </section>

        <!-- IP & License -->
        <section class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-xl font-semibold text-emerald-400">7) Intellectual Property</h2>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-neutral-300">
            <li>Upon full payment, you receive a license or ownership to project deliverables as specified in the Agreement.</li>
            <li>We may showcase non‑confidential work in our portfolio unless otherwise agreed in writing.</li>
          </ul>
        </section>

        <!-- Timing & Changes -->
        <section class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-xl font-semibold text-emerald-400">8) Timelines & Changes</h2>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-neutral-300">
            <li>Timelines depend on mutual responsiveness. Delays in approvals or content may shift delivery dates.</li>
            <li>Significant changes to scope will require a change order with updated budget and schedule.</li>
          </ul>
        </section>

        <!-- Termination -->
        <section class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-xl font-semibold text-emerald-400">9) Cancellation</h2>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-neutral-300">
            <li>Either party may cancel with written notice. Work completed up to the cancellation date will be invoiced and payable.</li>
            <li>Deposits are applied to work performed and are generally non‑refundable once work has begun.</li>
          </ul>
        </section>

        <!-- Privacy & Confidentiality -->
        <section class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-xl font-semibold text-emerald-400">10) Privacy & Confidentiality</h2>
          <p class="mt-3 text-neutral-300">We maintain reasonable safeguards for your confidential information and adhere to privacy best practices. Please advise us of any specific compliance needs before project start.</p>
        </section>

        <!-- Changes to Terms -->
        <section class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
          <h2 class="text-xl font-semibold text-emerald-400">11) Updates to These Terms</h2>
          <p class="mt-3 text-neutral-300">We may update these Terms from time to time. The version effective at project kickoff will apply unless superseded by a mutually signed amendment.</p>
        </section>

        <!-- CTA -->
        <section class="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 class="text-lg font-semibold text-neutral-100">Ready to get started?</h3>
              <p class="mt-1 text-neutral-300">We’ll finalize scope, collect the 50% deposit, and schedule your project.</p>
            </div>
            <NuxtLink to="/#contact" class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">Contact us</NuxtLink>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Terms & Conditions — Headless Flower',
  meta: [
    { name: 'description', content: 'Scope, payments, acceptance, refunds, and responsibilities for working with Headless Flower. 50% deposit to begin. Balance due within 90 days.' },
    { property: 'og:title', content: 'Terms & Conditions — Headless Flower' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>

<style scoped>
/* Matches dark theme with emerald accents */
</style>

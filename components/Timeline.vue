
<template>
  <section class="w-full" :class="light ? 'bg-neutral-50 text-neutral-900' : 'bg-neutral-950 text-neutral-100'">
    <div class="mx-auto max-w-5xl px-6 py-16 lg:py-20">
      <!-- Header -->
      <div class="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p
            class="mb-2 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ring-1"
            :class="light ? 'bg-sky-600/10 text-sky-700 ring-sky-600/30' : 'bg-emerald-400/10 text-emerald-300 ring-emerald-400/30'"
          >
            <slot name="badge">Project Timeline</slot>
          </p>
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            <slot name="title">How we build your website</slot>
          </h2>
          <p class="mt-2 max-w-2xl" :class="light ? 'text-neutral-600' : 'text-neutral-300'">
            <slot name="subtitle">Clear, collaborative steps from research to launch—so you always know what's next.</slot>
          </p>
        </div>
        <NuxtLink
          to="/#contact"
          class="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2"
          :class="light ? 'bg-sky-600 text-white hover:bg-sky-500 focus-visible:ring-sky-500' : 'bg-emerald-500 text-neutral-950 hover:bg-emerald-400 focus-visible:ring-emerald-400'"
        >
          Start a project <span aria-hidden="true" class="ml-2">→</span>
        </NuxtLink>
      </div>

      <!-- Timeline -->
      <ol class="relative ml-5 border-l" :class="light ? 'border-neutral-200' : 'border-neutral-800/60'">
        <li
          v-for="(step, i) in stepsToRender"
          :key="i"
          class="mb-10 ml-4"
        >
          <!-- Dot / number -->
          <span
            class="absolute -left-3 grid h-8 w-8 place-items-center rounded-full text-sm font-semibold ring-2"
            :class="light ? 'bg-white text-sky-700 ring-sky-300' : 'bg-neutral-900 text-emerald-300 ring-emerald-400/50'"
            aria-hidden="true"
          >
            {{ i + 1 }}
          </span>

          <!-- Card -->
          <div
            class="rounded-2xl p-6"
            :class="light ? 'bg-white border border-neutral-200 shadow-sm' : 'bg-neutral-900 border border-neutral-800/60'"
          >
            <div class="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 class="text-lg font-semibold" :class="light ? 'text-neutral-900' : 'text-neutral-100'">{{ step.title }}</h3>
              <p v-if="step.duration" class="text-xs" :class="light ? 'text-neutral-500' : 'text-neutral-400'">{{ step.duration }}</p>
            </div>
            <p class="mt-2" :class="light ? 'text-neutral-600' : 'text-neutral-300'">{{ step.description }}</p>

            <div v-if="step.outcomes?.length" class="mt-4">
              <p class="text-sm font-semibold" :class="light ? 'text-neutral-800' : 'text-neutral-200'">What you get</p>
              <ul class="mt-2 flex flex-wrap gap-2">
                <li
                  v-for="(o, oi) in step.outcomes"
                  :key="oi"
                  class="rounded-full px-2.5 py-1 text-xs ring-1"
                  :class="light ? 'bg-neutral-100 text-neutral-700 ring-neutral-200' : 'bg-neutral-950 text-neutral-300 ring-neutral-800/60'"
                >
                  {{ o }}
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ol>

      <!-- Footer CTA -->
      <div
        class="mt-12 rounded-2xl p-6"
        :class="light ? 'border border-sky-300 bg-sky-50' : 'border border-emerald-400/30 bg-emerald-400/10'"
      >
        <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 class="text-lg font-semibold" :class="light ? 'text-neutral-900' : 'text-neutral-100'">Ready to move forward?</h3>
            <p class="mt-1" :class="light ? 'text-neutral-600' : 'text-neutral-300'">We’ll confirm scope, timeline, and your kickoff date.</p>
          </div>
          <NuxtLink
            to="/#contact"
            class="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2"
            :class="light ? 'bg-sky-600 text-white hover:bg-sky-500 focus-visible:ring-sky-500' : 'bg-emerald-500 text-neutral-950 hover:bg-emerald-400 focus-visible:ring-emerald-400'"
          >
            Book a call
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Step = {
  title: string
  description: string
  duration?: string
  outcomes?: string[]
}

const props = withDefaults(defineProps<{ steps?: Step[]; light?: boolean }>(), {
  steps: undefined,
  light: false,
})

const stepsToRender = computed<Step[]>(() => props.steps?.length ? props.steps : defaultSteps)

const defaultSteps: Step[] = [
  {
    title: 'Research & Design',
    duration: 'Week 1–2',
    description: 'We learn your goals, audience, and brand. We explore competitors and create a clear plan. Initial wireframes and visual direction set the foundation.',
    outcomes: ['Discovery notes', 'Sitemap', 'Wireframes / moodboard'],
  },
  {
    title: 'Copywriting (if needed)',
    duration: 'Week 2',
    description: 'If content isn’t provided, we write concise, on‑brand copy that highlights your value and prompts action. You’ll review and approve.',
    outcomes: ['Draft website copy', 'CTA recommendations'],
  },
  {
    title: 'MVP Build',
    duration: 'Week 3',
    description: 'We assemble a minimal, functional version that proves the core experience: homepage + key pages and flows.',
    outcomes: ['MVP site preview', 'Priority checklist'],
  },
  {
    title: 'Test Round & Error Fixes',
    duration: 'Week 3–4',
    description: 'We run checks for bugs, typos, and color/brand mismatches. You and our team click through on multiple devices and we fix issues quickly.',
    outcomes: ['Bug list resolved', 'Accessibility and QA checks'],
  },
  {
    title: 'Full Site Build',
    duration: 'Week 4–5',
    description: 'We expand to the full set of pages, components, and integrations. Performance and accessibility remain front‑of‑mind.',
    outcomes: ['All pages templated', 'Reusable components'],
  },
  {
    title: 'Live Testing & Final Corrections',
    duration: 'Week 5',
    description: 'We stage the site on production‑like hosting, validate analytics/events, and correct any last‑minute issues.',
    outcomes: ['Staging link', 'Event tracking verified'],
  },
  {
    title: 'Final Delivery & Summary',
    duration: 'Week 6',
    description: 'We launch, hand over credentials, and provide a summary report with key results and next‑step suggestions.',
    outcomes: ['Launch checklists', 'Handover docs', 'Optimization plan'],
  },
]
</script>

<style scoped>
/* No SVGs used; pure Tailwind layout */
</style>

<template>
  <section class="w-full bg-neutral-950 text-neutral-100">
    <div class="mx-auto max-w-6xl px-6 py-16 lg:py-20">
      <!-- Header -->
      <div class="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="mb-2 inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300 ring-1 ring-emerald-400/30">
            <slot name="badge">Testimonials</slot>
          </p>
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            <slot name="title">What our clients say</slot>
          </h2>
          <p class="mt-2 max-w-2xl text-neutral-300">
            <slot name="subtitle">Real feedback from teams we support with design, performance, and security.</slot>
          </p>
        </div>
        <div class="flex items-center gap-2">
          <button
            class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800/60 bg-neutral-900/80 transition hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            @click="prev" aria-label="Previous testimonial">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
              <path d="M15.75 19.5L8.25 12l7.5-7.5"/>
            </svg>
          </button>
          <button
            class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800/60 bg-neutral-900/80 transition hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            @click="next" aria-label="Next testimonial">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
              <path d="M8.25 4.5L15.75 12 8.25 19.5"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Carousel -->
      <div
        class="relative overflow-hidden rounded-2xl border border-neutral-800/60 bg-neutral-900"
        @mouseenter="pause"
        @mouseleave="play"
      >
        <div
          class="flex transition-transform duration-500 ease-out"
          :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
          role="group"
          aria-roledescription="carousel"
          :aria-label="ariaLabel"
        >
          <div
            v-for="(t, i) in testimonialsToRender"
            :key="i"
            class="min-w-full p-6 sm:p-10"
          >
            <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
              <div class="md:col-span-2">
                <div class="text-lg leading-relaxed text-neutral-200">
                  <svg class="mb-3 h-6 w-6 text-emerald-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.17 6A5.17 5.17 0 002 11.17V22h9v-9H7.17A5.17 5.17 0 017.17 6zm11 0A5.17 5.17 0 0013 11.17V22h9v-9h-3.83A5.17 5.17 0 0018.17 6z"/></svg>
                  <p class="text-balance">{{ t.quote }}</p>
                </div>
                <div class="mt-6 flex items-center gap-4">
                  <img v-if="t.avatar" :src="t.avatar" :alt="`${t.name} avatar`" class="h-12 w-12 rounded-full object-cover ring-1 ring-neutral-700"/>
                  <div>
                    <p class="font-semibold text-neutral-100">{{ t.name }}</p>
                    <p class="text-sm text-neutral-400">{{ t.role }}<span v-if="t.company"> · {{ t.company }}</span></p>
                  </div>
                </div>
              </div>
              <div class="md:col-span-1">
                <div class="rounded-xl border border-neutral-800/60 bg-neutral-950 p-4">
                  <p class="text-sm font-semibold text-neutral-300">Project</p>
                  <p class="mt-1 text-neutral-100">{{ t.project || 'Website redesign & optimization' }}</p>
                  <div class="mt-4">
                    <p class="text-sm font-semibold text-neutral-300">Highlights</p>
                    <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                      <li v-for="(h, hi) in (t.highlights || [])" :key="hi">{{ h }}</li>
                      <li v-if="!t.highlights">Improved conversions</li>
                      <li v-if="!t.highlights">Faster page loads</li>
                      <li v-if="!t.highlights">Clearer authoring</li>
                    </ul>
                  </div>
                  <div v-if="t.metrics && t.metrics.length" class="mt-4">
                    <p class="text-sm font-semibold text-neutral-300">Metrics</p>
                    <ul class="mt-2 space-y-1 text-sm text-neutral-200">
                      <li v-for="(m, mi) in t.metrics" :key="mi" class="flex items-center justify-between rounded-lg border border-neutral-800/60 bg-neutral-900/70 px-3 py-2">
                        <span class="text-neutral-400">{{ m.label }}</span>
                        <span class="font-semibold text-emerald-300">{{ m.value }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Dots -->
        <div class="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
          <button
            v-for="(t, i) in testimonialsToRender"
            :key="`dot-${i}`"
            class="h-2.5 w-2.5 rounded-full transition"
            :class="i === activeIndex ? 'bg-emerald-400' : 'bg-neutral-700 hover:bg-neutral-600'"
            @click="go(i)"
            :aria-label="`Go to slide ${i + 1}`"
            :aria-current="i === activeIndex ? 'true' : 'false'"
          />
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-neutral-300">Ready for results like these? Let’s make your site faster, safer, and easier to manage.</p>
        <NuxtLink to="/#contact" class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">Contact us</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'

interface Metric { label: string; value: string }
interface Testimonial {
  quote: string
  name: string
  role?: string
  company?: string
  avatar?: string
  project?: string
  highlights?: string[]
  metrics?: Metric[]
}

const props = defineProps<{
  testimonials?: Testimonial[]
  intervalMs?: number
  ariaLabel?: string
}>()

const activeIndex = ref(0)
const intervalMs = computed(() => props.intervalMs ?? 6000)
const testimonialsToRender = computed<Testimonial[]>(() => props.testimonials?.length ? props.testimonials : defaultTestimonials)

let timer: ReturnType<typeof setInterval> | undefined

function next() {
  activeIndex.value = (activeIndex.value + 1) % testimonialsToRender.value.length
}
function prev() {
  activeIndex.value = (activeIndex.value - 1 + testimonialsToRender.value.length) % testimonialsToRender.value.length
}
function go(i: number) {
  activeIndex.value = i
}
function play() {
  stop()
  if (typeof window !== 'undefined') {
    timer = setInterval(next, intervalMs.value)
  }
}
function pause() {
  stop()
}
function stop() {
  if (timer) clearInterval(timer)
  timer = undefined
}

function handleVisibility() {
  if (typeof document === 'undefined') return
  if (document.hidden) pause()
  else play()
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

onMounted(() => {
  // ✅ Attach listeners only on client to avoid SSR "undefined" errors
  if (typeof window === 'undefined') return
  play()
  document.addEventListener('visibilitychange', handleVisibility)
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  stop()
  if (typeof window !== 'undefined') {
    document.removeEventListener('visibilitychange', handleVisibility)
    window.removeEventListener('keydown', handleKeydown)
  }
})

const defaultTestimonials: Testimonial[] = [
  {
    quote: 'Headless Flower made our site noticeably faster and easier to update. Our contact form conversions went up within weeks.',
    name: 'Alex Rivera',
    role: 'Marketing Director',
    company: 'Canyon & Co.',
    highlights: ['+22% conversions', 'Faster homepage', 'Cleaner authoring'],
    metrics: [
      { label: 'Form submits', value: '+22%' },
      { label: 'LCP', value: '-28%' },
    ],
  },
  {
    quote: 'Security and uptime have been solid since the maintenance plan. We get clear monthly reports and quick fixes when needed.',
    name: 'Priya N.',
    role: 'COO',
    company: 'Northside Labs',
    highlights: ['Zero downtime incidents', 'Monthly updates', 'Proactive suggestions'],
    metrics: [
      { label: 'Uptime', value: '99.98%' },
      { label: 'Issues resolved', value: '3/mo' },
    ],
  },
  {
    quote: 'Their design system work made our brand feel consistent and premium across pages. Shipping new pages is way faster now.',
    name: 'Miguel Santos',
    role: 'Product Manager',
    company: 'Vista Realty',
    highlights: ['Reusable components', 'Tokenized colors', 'Faster launches'],
    metrics: [
      { label: 'Time to launch', value: '-40%' },
      { label: 'Design QA issues', value: '-60%' },
    ],
  },
]
</script>

<style scoped>
/* Smooth sliding fix for Safari */
:deep(.no-scrollbar)::-webkit-scrollbar { display: none; }
</style>


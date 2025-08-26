    <template>
  <section class="w-full bg-neutral-50 text-neutral-900">
    <div class="mx-auto max-w-6xl px-6 py-16 lg:py-20">
      <!-- Header -->
      <div class="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="mb-2 inline-flex items-center rounded-full bg-sky-600/10 px-3 py-1 text-sm font-medium text-sky-700 ring-1 ring-sky-600/30">
            <slot name="badge">Services</slot>
          </p>
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            <slot name="title">Everything you need to launch and grow</slot>
          </h2>
          <p class="mt-2 max-w-2xl text-neutral-600">
            <slot name="subtitle">Strategy, design, and engineering—delivered with performance, security, and brand consistency.</slot>
          </p>
        </div>
        <NuxtLink
          to="/#contact"
          class="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          Start a project <span aria-hidden="true" class="ml-2">→</span>
        </NuxtLink>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="(s, i) in items"
          :key="i"
          :to="s.href || '/#contact'"
          class="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-sky-300 hover:shadow-md"
        >
          <div class="flex items-center gap-3">
            <!-- Icon replacement: initials badge (no SVG) -->
            <div class="grid h-9 w-9 place-items-center rounded-xl border border-neutral-200 bg-neutral-100 text-sm font-semibold text-sky-700">
              <span aria-hidden="true">{{ initials(s.title) }}</span>
              <span class="sr-only">{{ s.title }} icon</span>
            </div>
            <h3 class="text-lg font-semibold text-neutral-900 group-hover:text-sky-700">{{ s.title }}</h3>
          </div>
          <p class="mt-3 text-neutral-600">{{ s.description }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="(t, ti) in (s.tags || [])" :key="ti" class="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600 ring-1 ring-neutral-200">{{ t }}</span>
          </div>
          <div class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-sky-700">
            <span>Learn more</span><span aria-hidden="true">→</span>
          </div>
        </NuxtLink>
      </div>

      <!-- Footnote / CTA -->
      <div class="mt-12 rounded-2xl border border-sky-300 bg-sky-50 p-6">
        <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 class="text-lg font-semibold text-neutral-900">Not sure where to start?</h3>
            <p class="mt-1 text-neutral-600">We can audit your site and recommend a roadmap across security, speed, and conversions.</p>
          </div>
          <NuxtLink to="/#contact" class="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">Book a call</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Service = {
  title: string
  description: string
  href?: string
  tags?: string[]
}

const props = withDefaults(defineProps<{ services?: Service[] }>(), {
  services: undefined,
})

const items = computed(() => (props.services && props.services.length ? props.services : defaultServices))

function initials(title: string) {
  if (!title) return '•'
  const words = title.trim().split(/\s+/)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

const defaultServices: Service[] = [
  {
    title: 'Security‑first',
    description: 'Hardened configs, dependency updates, and modern hosting patterns keep your site safe.',
    href: '/security-first-websites',
    tags: ['Headers', 'CSP', 'Monitoring'],
  },
  {
    title: 'Performance',
    description: 'Fast loads and smooth interactions out of the box—measured and tuned.',
    href: '/website-performance',
    tags: ['Core Web Vitals', 'CDN'],
  },
  {
    title: 'Accessibility',
    description: 'Inclusive experiences that meet WCAG guidelines and work across devices.',
    href: '/web-accessibility',
    tags: ['WCAG', 'Contrast', 'Keyboard'],
  },
  {
    title: 'Easy to manage',
    description: 'Headless CMS options and clear content models so your team can publish confidently.',
    href: '/headless-cms-management',
    tags: ['Headless', 'Previews'],
  },
  {
    title: 'Conversion‑ready',
    description: 'Clear CTAs, thoughtful layouts, and analytics setup to validate what works.',
    href: '/conversion-ready-websites',
    tags: ['A/B tests', 'Events', 'Schema'],
  },
  {
    title: 'Brand‑aligned',
    description: 'Design system and type/colour tokens that reflect your identity at every breakpoint.',
    href: '/brand-aligned-design',
    tags: ['Tokens', 'Components'],
  },
]
</script>

<style scoped>
</style>

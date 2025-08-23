<template>
  <section class="relative bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-20">
      <!-- Heading -->
      <div class="max-w-2xl">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Built for speed, access, and scale
        </h2>
        <p class="mt-3 text-gray-600">
          We ship modern websites that are secure, accessible, and easy to manage — so your brand
          can connect with the right audience and grow.
        </p>
      </div>

      <!-- Feature Grid -->
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="f in features"
          :key="f.title"
          class="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div class="flex items-center gap-3">
            <div class="h-11 w-11 flex items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <component :is="f.icon" class="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900">{{ f.title }}</h3>
          </div>
          <p class="mt-3 text-gray-600">
            {{ f.description }}
          </p>

          <ul v-if="f.points?.length" class="mt-5 space-y-2">
            <li v-for="p in f.points" :key="p" class="flex items-start gap-2">
              <svg class="mt-1 h-5 w-5 flex-none" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span class="text-gray-700">{{ p }}</span>
            </li>
          </ul>

          <NuxtLink
            v-if="f.link"
            :to="f.link.href"
            class="mt-6 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-white font-medium shadow hover:bg-black/90 transition"
          >
            {{ f.link.label }}
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M13 5l7 7-7 7M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
        </article>
      </div>

      <!-- Footnote -->
      <p class="mt-10 text-sm text-gray-500">
        WCAG‑minded structure, performance budgets, and SEO basics are included on every project.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Icons as inline components for zero-dependency rendering.
 * Replace with your own icon set if desired.
 */
const ShieldIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none' }, [
      h('path', {
        d: 'M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z',
        stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round'
      })
    ])
  }
}
const ZapIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none' }, [
      h('path', {
        d: 'M13 2L3 14h7l-1 8 11-12h-7l1-8z',
        stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round'
      })
    ])
  }
}
const A11yIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none' }, [
      h('circle', { cx: '12', cy: '4', r: '2', stroke: 'currentColor', 'stroke-width': '2' }),
      h('path', { d: 'M4 8h16M7 8l5 4 5-4M12 12v8M7 20h10', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
    ])
  }
}
const CogIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none' }, [
      h('path', { d: 'M12 15a3 3 0 100-6 3 3 0 000 6z', stroke: 'currentColor', 'stroke-width': '2' }),
      h('path', { d: 'M19.4 15a7.96 7.96 0 000-6l2.1-1.2-2-3.4-2.4 1A8.02 8.02 0 0012 3L11 0H9l-1 3a8.02 8.02 0 00-3.1 2.4l-2.4-1-2 3.4 2.1 1.2a7.96 7.96 0 000 6L-1 16.2l2 3.4 2.4-1A8.02 8.02 0 009 21l1 3h2l1-3a8.02 8.02 0 003.1-2.4l2.4 1 2-3.4-2.1-1.2z', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
    ])
  }
}
const RocketIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none' }, [
      h('path', { d: 'M14 4l6 6-6 6-4-4-6 2 2-6-4-4 6-6 4 4z', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
    ])
  }
}
const PencilIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none' }, [
      h('path', { d: 'M3 21l3-1 11-11-2-2L4 18l-1 3zM14 4l2 2 2-2-2-2-2 2z', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
    ])
  }
}

const features = [
  {
    title: 'Security‑first',
    description: 'Hardened configs, dependency updates, and modern hosting patterns keep your site safe.',
    points: ['Secure forms & spam protection', 'Best‑practice headers', 'Regular dependency review'],
    icon: ShieldIcon,
    link: { label: 'See our process', href: '/services' },
  },
  {
    title: 'Performance',
    description: 'Fast loads and smooth interactions out of the box, measured and tuned.',
    points: ['Image optimization', 'Code splitting & caching', 'Core Web Vitals focus'],
    icon: ZapIcon,
    link: { label: 'How we optimize', href: '/services' },
  },
  {
    title: 'Accessibility',
    description: 'Inclusive experiences that meet WCAG guidelines and work across devices.',
    points: ['Semantic HTML structure', 'Keyboard & screen reader checks', 'Color contrast validation'],
    icon: A11yIcon,
    link: { label: 'Accessibility checklist', href: '/services' },
  },
  {
    title: 'Easy to manage',
    description: 'Headless CMS options and clear content models so your team can publish with confidence.',
    points: ['Sanity/Contentful integration', 'Reusable components', 'Authoring guidance'],
    icon: CogIcon,
    link: { label: 'CMS options', href: '/services' },
  },
  {
    title: 'Conversion‑ready',
    description: 'Clear CTAs, thoughtful layouts, and analytics setup to validate what works.',
    points: ['A/B‑ready structure', 'Event tracking', 'SEO schemas & metadata'],
    icon: RocketIcon,
    link: { label: 'See case studies', href: '#work' },
  },
  {
    title: 'Brand aligned',
    description: 'Design system and type/colour tokens that reflect your identity at every breakpoint.',
    points: ['Design tokens', 'Component library', 'Motion & micro‑interactions'],
    icon: PencilIcon,
    link: { label: 'Design services', href: '/services' },
  },
]
</script>


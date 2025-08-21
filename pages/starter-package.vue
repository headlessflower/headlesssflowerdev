<template>
  <section class="bg-neutral-950 text-neutral-100">
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 opacity-20 pointer-events-none"
           aria-hidden="true">
        <div class="absolute -top-24 -right-24 size-[36rem] rounded-full bg-gradient-to-br from-yellow-300/40 to-amber-500/10 blur-3xl"></div>
        <div class="absolute -bottom-24 -left-24 size-[28rem] rounded-full bg-gradient-to-tr from-fuchsia-400/20 to-cyan-400/10 blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-14">
        <div class="max-w-3xl">
          <p class="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-yellow-300">
            Starter Package
            <span class="inline-block size-1.5 rounded-full bg-yellow-300"></span>
            Launch-Ready
          </p>
          <h1 class="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Your brand’s best first impression—secure, accessible, and fast.
          </h1>
          <p class="mt-5 text-neutral-300">
            Don’t sell your identity short. Our Starter Package gives you a polished, trustworthy website built on modern best practices—so you can reach the right customers with confidence.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <NuxtLink
                to="#contact"
                class="inline-flex items-center justify-center rounded-xl bg-yellow-300 px-5 py-3 font-semibold text-neutral-900 shadow-lg shadow-yellow-300/20 transition hover:-translate-y-0.5 hover:shadow-yellow-300/40 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-neutral-900"
                aria-label="Get a quote"
            >
              Get a quote
              <svg class="ml-2 size-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M12.293 3.293a1 1 0 011.414 0l4.999 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z"/>
              </svg>
            </NuxtLink>
            <a href="#details" class="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-5 py-3 font-semibold text-neutral-200 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-700">
              See what’s included
            </a>
          </div>

          <p class="mt-6 text-sm text-neutral-400">
            Typical range: <span class="font-semibold text-neutral-200">$1,400–$1,800</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Trust badges -->
    <div class="border-y border-neutral-800 bg-neutral-900/30">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <ul class="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-neutral-300">
          <li class="inline-flex items-center gap-2">
            <span class="sr-only">Security</span>
            <ShieldIcon class="size-4" />
            SSL + Security Best Practices
          </li>
          <li class="inline-flex items-center gap-2">
            <span class="sr-only">Accessibility</span>
            <A11yIcon class="size-4" />
            WCAG-Informed Design
          </li>
          <li class="inline-flex items-center gap-2">
            <span class="sr-only">Performance</span>
            <SpeedIcon class="size-4" />
            Fast, Mobile-First Build
          </li>
          <li class="inline-flex items-center gap-2">
            <span class="sr-only">SEO</span>
            <SearchIcon class="size-4" />
            Search-Ready Structure
          </li>
        </ul>
      </div>
    </div>

    <!-- Included -->
    <section id="details" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid gap-10 lg:grid-cols-3">
        <div class="lg:col-span-1">
          <h2 class="text-3xl font-bold">What’s included</h2>
          <p class="mt-3 text-neutral-300">
            A launch-ready, 1-page site that communicates your value clearly and converts visitors—without compromising on security, accessibility, or brand credibility.
          </p>
          <div class="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5">
            <p class="text-sm text-neutral-300">
              <span class="font-semibold text-neutral-100">Investment:</span> $1,400–$1,800
            </p>
            <p class="mt-1 text-sm text-neutral-400">Timeline depends on copy/assets readiness.</p>
          </div>
        </div>

        <div class="lg:col-span-2">
          <div class="grid gap-6 sm:grid-cols-2">
            <!-- Card -->
            <FeatureCard
                title="Custom 1‑Page Website"
                desc="Hero, About, Services, and Contact—crafted to match your brand voice and target audience."
            />
            <FeatureCard
                title="Security Built‑In"
                desc="HTTPS/SSL setup, secure contact form, and privacy-forward implementation to protect data and trust."
                :icon="'shield'"
            />
            <FeatureCard
                title="Accessibility Compliance"
                desc="WCAG‑informed color contrast, semantic structure, keyboard navigation, and screen‑reader support."
                :icon="'a11y'"
            />
            <FeatureCard
                title="Search + Performance"
                desc="Metadata, alt text, clean HTML, image optimization, and fast load to support discoverability."
                :icon="'speed'"
            />
            <FeatureCard
                title="Brand‑Aligned Design"
                desc="Design system choices (type, color, spacing) that reflect your identity—no cookie‑cutter templates."
                :icon="'brand'"
            />
            <FeatureCard
                title="Mobile‑First Build"
                desc="Responsive layouts that look great on any device, tested across modern browsers."
                :icon="'mobile'"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Add-ons -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
      <div class="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div class="max-w-2xl">
            <h3 class="text-2xl font-bold">Optional add‑ons</h3>
            <p class="mt-2 text-neutral-300">
              Enhance your launch with services that deepen brand clarity and reach.
            </p>
          </div>
          <div class="grid w-full gap-4 sm:grid-cols-2 lg:max-w-3xl">
            <AddonItem title="SEO Audit + Metadata" price="$300–$600"
                       desc="Fix technical gaps, refine titles/descriptions, and improve search visibility." />
            <AddonItem title="Copywriting (per page)" price="$150–$300"
                       desc="Persuasive, on‑brand messaging that speaks to your ideal customer." />
            <AddonItem title="Branding Package" price="$800–$1,200"
                       desc="Logo, color palette, and type system for a cohesive visual identity." />
            <AddonItem title="CMS Integration" price="$500–$1,000"
                       desc="Sanity or Contentful setup for easy content updates as you grow." />
          </div>
        </div>
      </div>
    </section>

    <!-- Maintenance Upsell -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-8">
          <p class="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-300/10 px-3 py-1 text-xs font-semibold text-yellow-200">
            Recommended
          </p>
          <h3 class="mt-4 text-2xl font-bold text-yellow-100">Monthly Maintenance Subscription</h3>
          <p class="mt-2 text-yellow-50/90">
            The web evolves daily. Keep your site secure, fast, and aligned with best practices—without lifting a finger.
          </p>

          <ul class="mt-6 space-y-3 text-sm text-yellow-50/90">
            <li class="flex gap-3">
              <CheckIcon class="mt-1 size-5 shrink-0" />
              <span><span class="font-semibold text-yellow-100">Security & monitoring</span> — updates, backups, and uptime checks.</span>
            </li>
            <li class="flex gap-3">
              <CheckIcon class="mt-1 size-5 shrink-0" />
              <span><span class="font-semibold text-yellow-100">Framework & plugin updates</span> — Nuxt/Vue and dependencies.</span>
            </li>
            <li class="flex gap-3">
              <CheckIcon class="mt-1 size-5 shrink-0" />
              <span><span class="font-semibold text-yellow-100">Performance & SEO health</span> — monthly tune‑ups and fixes.</span>
            </li>
            <li class="flex gap-3">
              <CheckIcon class="mt-1 size-5 shrink-0" />
              <span><span class="font-semibold text-yellow-100">Analytics snapshot</span> — simple report with actionable insights.</span>
            </li>
            <li class="flex gap-3">
              <CheckIcon class="mt-1 size-5 shrink-0" />
              <span><span class="font-semibold text-yellow-100">Priority support</span> — faster turnaround for small edits.</span>
            </li>
          </ul>

          <div class="mt-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p class="text-sm text-yellow-100/90">Starting at</p>
              <p class="text-3xl font-extrabold text-yellow-100">$150<span class="text-lg font-semibold">/mo</span></p>
            </div>
            <NuxtLink
                to="#contact"
                class="inline-flex items-center justify-center rounded-xl bg-yellow-300 px-5 py-3 font-semibold text-neutral-900 shadow-lg shadow-yellow-300/20 transition hover:-translate-y-0.5 hover:shadow-yellow-300/40 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              Add maintenance
            </NuxtLink>
          </div>
        </div>

        <!-- Brand Reminder -->
        <div class="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8">
          <h3 class="text-2xl font-bold">This is your brand—don’t undersell it.</h3>
          <p class="mt-3 text-neutral-300">
            Your website is your storefront, handshake, and first conversation. A secure, accessible, and well‑built site protects your reputation and helps the right customers say “yes.”
          </p>
          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl border border-neutral-800 p-5">
              <p class="text-sm font-semibold text-neutral-200">Security</p>
              <p class="mt-1 text-sm text-neutral-400">Trust is non‑negotiable. We anchor your site with modern security from day one.</p>
            </div>
            <div class="rounded-2xl border border-neutral-800 p-5">
              <p class="text-sm font-semibold text-neutral-200">Accessibility</p>
              <p class="mt-1 text-sm text-neutral-400">Inclusive by design to reach more people and meet compliance expectations.</p>
            </div>
            <div class="rounded-2xl border border-neutral-800 p-5">
              <p class="text-sm font-semibold text-neutral-200">Performance</p>
              <p class="mt-1 text-sm text-neutral-400">Fast pages keep attention high and bounce rates low—especially on mobile.</p>
            </div>
            <div class="rounded-2xl border border-neutral-800 p-5">
              <p class="text-sm font-semibold text-neutral-200">Brand Integrity</p>
              <p class="mt-1 text-sm text-neutral-400">Every detail—from type to spacing—signals credibility and care.</p>
            </div>
          </div>
          <div class="mt-8">
            <NuxtLink
                to="#contact"
                class="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-5 py-3 font-semibold text-neutral-200 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-700"
            >
              Talk to us about your goals
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
      <div class="rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-10 ring-1 ring-inset ring-neutral-700/60">
        <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 class="text-2xl font-bold">Ready to launch the right way?</h3>
            <p class="mt-2 text-neutral-300">
              Get a secure, accessible, and conversion‑ready site that represents your brand the way it deserves.
            </p>
          </div>
          <div class="flex flex-wrap gap-3">
            <NuxtLink
                to="#contact"
                class="inline-flex items-center justify-center rounded-xl bg-yellow-300 px-5 py-3 font-semibold text-neutral-900 shadow-lg shadow-yellow-300/20 transition hover:-translate-y-0.5 hover:shadow-yellow-300/40 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              Start my project
            </NuxtLink>
            <NuxtLink
                to="/services"
                class="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-5 py-3 font-semibold text-neutral-200 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-700"
            >
              View all services
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
/**
 * Nuxt 3 / Vue 3 Composition API
 * Proper meta head for SEO & social sharing
 */
useHead({
  title: 'Starter Website Package | Secure, Accessible, Brand‑Forward',
  meta: [
    {
      name: 'description',
      content:
          'Launch your brand with a secure, accessible, and fast 1‑page website. Starter Package includes SSL, WCAG‑informed design, SEO‑ready structure, and performance optimizations. Monthly maintenance available.',
    },
    { name: 'robots', content: 'index,follow' },
    // Open Graph
    { property: 'og:title', content: 'Starter Website Package | Secure, Accessible, Brand‑Forward' },
    {
      property: 'og:description',
      content:
          'A polished, trustworthy 1‑page site built on best practices—security, accessibility, and performance—plus optional monthly maintenance.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://headlessflower.dev/starter-package' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Starter Website Package | Secure, Accessible, Brand‑Forward' },
    {
      name: 'twitter:description',
      content:
          'Launch right: secure, accessible, and fast. Starter Package with best practices + optional maintenance.',
    },
  ],
  link: [
    { rel: 'canonical', href: 'https://headlessflower.dev/starter-package' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Starter Website Package',
        description:
            'Secure, accessible, and performant 1‑page website for small businesses and creatives. Optional maintenance subscription.',
        brand: { '@type': 'Brand', name: 'Headless Flower' },
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: 1400,
          highPrice: 1800,
          priceCurrency: 'USD',
          url: 'https://headlessflower.dev/starter-package',
          availability: 'https://schema.org/InStock',
        },
        isRelatedTo: [
          { '@type': 'Service', name: 'Monthly Website Maintenance', offers: { '@type': 'Offer', price: 150, priceCurrency: 'USD' } }
        ]
      }),
    },
  ],
});

// --- Simple local icon components (inline SVG for portability) ---
const baseIcon = 'stroke-current';
</script>

<script lang="ts">
import { defineComponent, h } from 'vue';

export default {
  name: 'StarterPackagePage',
  components: {
    ShieldIcon: defineComponent({
      name: 'ShieldIcon',
      render() {
        return h('svg', { class: 'size-5 ' + 'stroke-current', viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': 'true' }, [
          h('path', { d: 'M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z', fill: 'currentColor', opacity: '0.7' })
        ]);
      }
    }),
    A11yIcon: defineComponent({
      name: 'A11yIcon',
      render() {
        return h('svg', { class: 'size-5 ' + 'stroke-current', viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': 'true' }, [
          h('circle', { cx: '12', cy: '5', r: '2', fill: 'currentColor' }),
          h('path', { d: 'M3 8h18M12 8v9M6 10l6-2 6 2M10 21l2-4 2 4', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round' })
        ]);
      }
    }),
    SpeedIcon: defineComponent({
      name: 'SpeedIcon',
      render() {
        return h('svg', { class: 'size-5 ' + 'stroke-current', viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': 'true' }, [
          h('path', { d: 'M12 21a9 9 0 100-18 9 9 0 000 18z', stroke: 'currentColor', 'stroke-width': '1.5' }),
          h('path', { d: 'M12 12l5-3', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round' })
        ]);
      }
    }),
    SearchIcon: defineComponent({
      name: 'SearchIcon',
      render() {
        return h('svg', { class: 'size-5 ' + 'stroke-current', viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': 'true' }, [
          h('circle', { cx: '11', cy: '11', r: '7', stroke: 'currentColor', 'stroke-width': '1.5' }),
          h('path', { d: 'M20 20l-3.5-3.5', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round' })
        ]);
      }
    }),
    CheckIcon: defineComponent({
      name: 'CheckIcon',
      render() {
        return h('svg', { class: 'size-5 ' + 'stroke-current', viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': 'true' }, [
          h('path', { d: 'M5 13l4 4L19 7', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
        ]);
      }
    }),
    FeatureCard: defineComponent({
      name: 'FeatureCard',
      props: {
        title: { type: String, required: true },
        desc: { type: String, required: true },
        icon: { type: String, default: 'default' }
      },
      setup(props) {
        const iconSwitch = () => {
          switch (props.icon) {
            case 'shield': return '🛡️';
            case 'a11y': return '♿';
            case 'speed': return '⚡';
            case 'brand': return '✨';
            case 'mobile': return '📱';
            default: return '✅';
          }
        };
        return () => h('div', {
          class: 'group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 transition hover:border-neutral-700 hover:bg-neutral-900'
        }, [
          h('div', { class: 'flex items-center gap-3' }, [
            h('div', { class: 'flex size-9 items-center justify-center rounded-lg bg-neutral-800 text-base' }, iconSwitch()),
            h('h4', { class: 'text-lg font-semibold leading-tight' }, props.title),
          ]),
          h('p', { class: 'mt-3 text-sm text-neutral-300' }, props.desc)
        ]);
      }
    }),
    AddonItem: defineComponent({
      name: 'AddonItem',
      props: {
        title: { type: String, required: true },
        price: { type: String, required: true },
        desc: { type: String, required: true }
      },
      render() {
        return h('div', { class: 'rounded-xl border border-neutral-800 bg-neutral-900 p-5' }, [
          h('div', { class: 'flex items-baseline justify-between gap-3' }, [
            h('p', { class: 'font-semibold text-neutral-100' }, this.title),
            h('p', { class: 'text-sm text-neutral-300' }, this.price)
          ]),
          h('p', { class: 'mt-2 text-sm text-neutral-400' }, this.desc)
        ]);
      }
    })
  }
}
</script>

<style scoped>
/* No custom colors; Tailwind handles design. Keep styles minimal for portability. */
</style>

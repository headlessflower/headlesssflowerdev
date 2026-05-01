<template>
  <section class="bg-neutral-950 text-neutral-100">
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div class="absolute -top-24 -right-24 size-[40rem] rounded-full bg-gradient-to-br from-sky-300/40 to-emerald-400/10 blur-3xl"></div>
        <div class="absolute -bottom-24 -left-24 size-[30rem] rounded-full bg-gradient-to-tr from-fuchsia-400/20 to-cyan-400/10 blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-14">
        <div class="max-w-3xl">
          <p class="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-sky-300">
            Lead Flow Management
            <span class="inline-block size-1.5 rounded-full bg-sky-300"></span>
            Growth‑Ready
          </p>
          <h1 class="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            A managed lead-generation system built around your website.
          </h1>
          <p class="mt-5 text-neutral-300">
            This package connects your website, intake flow, and booking path so
            growing businesses can turn more traffic into qualified inquiries
            without piecing together disconnected tools.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <NuxtLink
                to="#contact"
                class="inline-flex items-center justify-center rounded-xl bg-sky-300 px-5 py-3 font-semibold text-neutral-900 shadow-lg shadow-sky-300/20 transition hover:-translate-y-0.5 hover:shadow-sky-300/40 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-neutral-900"
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
            Monthly plan: <span class="font-semibold text-neutral-200">$350/mo</span>
          </p>
          <p class="mt-2 text-sm text-neutral-500">
            6-month minimum contract.
            <NuxtLink to="/terms#managed-plans" class="underline underline-offset-4 hover:text-neutral-300">View plan terms</NuxtLink>.
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
            WCAG‑Informed Design
          </li>
          <li class="inline-flex items-center gap-2">
            <span class="sr-only">Performance</span>
            <SpeedIcon class="size-4" />
            Fast, Mobile‑First Build
          </li>
          <li class="inline-flex items-center gap-2">
            <span class="sr-only">SEO</span>
            <SearchIcon class="size-4" />
            SEO‑Ready Architecture
          </li>
        </ul>
      </div>
    </div>

    <!-- Included Feautures -->
    <section id="details" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid gap-10 lg:grid-cols-3">
        <div class="lg:col-span-1">
          <h2 class="text-3xl font-bold">What’s included</h2>
          <p class="mt-3 text-neutral-300">
            A professional <span class="font-semibold text-neutral-100">3–5 page</span>
            managed website with better lead flow, clearer service messaging,
            and the operational basics needed to support consistent follow-up.
          </p>
          <div class="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5">
            <p class="text-sm text-neutral-300">
              <span class="font-semibold text-neutral-100">Monthly investment:</span> $350/mo
            </p>
            <p class="mt-1 text-sm text-neutral-400">6-month minimum commitment applies.</p>
          </div>
        </div>

        <div class="lg:col-span-2">
          <div class="grid gap-6 sm:grid-cols-2">
            <FeatureCard
                title="3–5 Pages + Navigation"
                desc="Home, About, Services, Contact, and one optional page structured to guide visitors toward inquiry or booking."
                :icon="'pages'"
            />
            <FeatureCard
                title="Secure, Spam‑Resistant Forms"
                desc="Accessible forms with validation, spam protection, and clear states so more qualified leads actually complete the flow."
                :icon="'forms'"
            />
            <FeatureCard
                title="Booking or Intake Flow"
                desc="A stronger path from visit to consultation, quote request, or booking so the site works like part of your sales process."
                :icon="'blocks'"
            />
            <FeatureCard
                title="Security Built‑In"
                desc="HTTPS/SSL setup, secure headers, and privacy‑forward implementation to protect data and trust."
                :icon="'shield'"
            />
            <FeatureCard
                title="Accessibility Compliance"
                desc="WCAG‑informed color contrast, semantic structure, keyboard navigation, and screen‑reader support."
                :icon="'a11y'"
            />
            <FeatureCard
                title="SEO + Performance"
                desc="Metadata, structured headings, sitemap, alt text, image optimization, and fast loads to support local visibility and conversion."
                :icon="'speed'"
            />
            <FeatureCard
                title="Brand‑Aligned Design System"
                desc="Type, color, and spacing tuned to your business so the site feels credible, coherent, and ready for ongoing use."
                :icon="'brand'"
            />
            <FeatureCard
                title="Content Blocks & Reusability"
                desc="Modular sections for services, testimonials, FAQs, and CTAs so your site can evolve without a full rebuild."
                :icon="'blocks'"
            />
            <FeatureCard
                title="Maintenance & Reporting Ready"
                desc="Built for ongoing support, optimization, and future iteration instead of a one-time launch-and-forget project."
                :icon="'mobile'"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Standalone services -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
      <div class="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div class="max-w-2xl">
            <h3 class="text-2xl font-bold">Standalone one-time services</h3>
            <p class="mt-2 text-neutral-300">
              These one-time services are available independently for businesses that need targeted help without a monthly engagement.
            </p>
          </div>
          <div class="grid w-full gap-4 sm:grid-cols-2 lg:max-w-3xl">
            <AddonItem title="SEO Audit + Metadata" price="$300–$600"
                       desc="Fix technical gaps, refine titles/descriptions, schema basics, and improve discoverability." />
            <AddonItem title="Copywriting (per page)" price="$150–$300"
                       desc="Clear, on‑brand messaging and CTAs tailored to your target customer." />
            <AddonItem title="Branding Package" price="$800–$1,200"
                       desc="Logo, color palette, and type stack to unify your visual identity." />
            <AddonItem title="CMS Integration" price="$500–$1,000"
                       desc="Sanity or Contentful setup for easy page/content updates. Roles & drafts optional." />
          </div>
        </div>
      </div>
    </section>

    <!-- Maintenance Upsell -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="rounded-3xl border border-sky-400/20 bg-sky-400/10 p-8">
          <p class="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-300/10 px-3 py-1 text-xs font-semibold text-sky-200">
            Recommended
          </p>
          <h3 class="mt-4 text-2xl font-bold text-sky-100">Monthly Maintenance Subscription</h3>
          <p class="mt-2 text-sky-50/90">
            Keep your lead system healthy while you focus on sales and delivery.
            We handle the updates, fixes, and tune-ups that keep it converting.
          </p>

          <ul class="mt-6 space-y-3 text-sm text-sky-50/90">
            <li class="flex gap-3"><CheckIcon class="mt-1 size-5 shrink-0" /><span><span class="font-semibold text-sky-100">Security & monitoring</span> — updates, backups, uptime checks.</span></li>
            <li class="flex gap-3"><CheckIcon class="mt-1 size-5 shrink-0" /><span><span class="font-semibold text-sky-100">Framework & plugin updates</span> — Nuxt/Vue, Tailwind, and integrations.</span></li>
            <li class="flex gap-3"><CheckIcon class="mt-1 size-5 shrink-0" /><span><span class="font-semibold text-sky-100">Performance & SEO health</span> — monthly audits and fixes.</span></li>
            <li class="flex gap-3"><CheckIcon class="mt-1 size-5 shrink-0" /><span><span class="font-semibold text-sky-100">Analytics snapshot</span> — simple, actionable report.</span></li>
            <li class="flex gap-3"><CheckIcon class="mt-1 size-5 shrink-0" /><span><span class="font-semibold text-sky-100">Priority support</span> — quick help for edits and issues.</span></li>
          </ul>

          <div class="mt-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p class="text-sm text-sky-100/90">Monthly rate</p>
              <p class="text-3xl font-extrabold text-sky-100">$150<span class="text-lg font-semibold">/mo</span></p>
            </div>
            <NuxtLink
                to="#contact"
                class="inline-flex items-center justify-center rounded-xl bg-sky-300 px-5 py-3 font-semibold text-neutral-900 shadow-lg shadow-sky-300/20 transition hover:-translate-y-0.5 hover:shadow-sky-300/40 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              Add maintenance
            </NuxtLink>
          </div>
        </div>

        <!-- Brand Reminder -->
        <div class="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8">
          <h3 class="text-2xl font-bold">This is your brand—don’t undersell it.</h3>
          <p class="mt-3 text-neutral-300">
            When your website, service pages, and intake flow all work together,
            customers get more clarity and more confidence. That usually means
            better leads and less manual back-and-forth.
          </p>
          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl border border-neutral-800 p-5">
              <p class="text-sm font-semibold text-neutral-200">Security</p>
              <p class="mt-1 text-sm text-neutral-400">Modern protections and safe data handling from day one.</p>
            </div>
            <div class="rounded-2xl border border-neutral-800 p-5">
              <p class="text-sm font-semibold text-neutral-200">Accessibility</p>
              <p class="mt-1 text-sm text-neutral-400">Inclusive UX that meets compliance and expands your reach.</p>
            </div>
            <div class="rounded-2xl border border-neutral-800 p-5">
              <p class="text-sm font-semibold text-neutral-200">Performance</p>
              <p class="mt-1 text-sm text-neutral-400">Faster pages, better engagement—especially on mobile.</p>
            </div>
            <div class="rounded-2xl border border-neutral-800 p-5">
              <p class="text-sm font-semibold text-neutral-200">Credibility</p>
              <p class="mt-1 text-sm text-neutral-400">A cohesive design system that signals quality and care.</p>
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
          <p class="mt-4 text-sm text-neutral-500">
            Managed plans are contracted for a 6-month minimum term. Early cancellation fees may apply.
            <NuxtLink to="/terms#managed-plans" class="underline underline-offset-4 hover:text-neutral-300">Read plan terms</NuxtLink>.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
      <div class="rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-10 ring-1 ring-inset ring-neutral-700/60">
        <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 class="text-2xl font-bold">Ready for a site that scales with you?</h3>
            <p class="mt-2 text-neutral-300">
              Launch a managed website and lead flow that supports growth now
              and gives you room to improve over time.
            </p>
          </div>
          <div class="flex flex-wrap gap-3">
            <NuxtLink
                to="#contact"
                class="inline-flex items-center justify-center rounded-xl bg-sky-300 px-5 py-3 font-semibold text-neutral-900 shadow-lg shadow-sky-300/20 transition hover:-translate-y-0.5 hover:shadow-sky-300/40 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-neutral-900"
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
  title: 'Lead Flow Management Package | Website, Intake, and Booking',
  meta: [
    {
      name: 'description',
      content:
          'A managed package for growing businesses that need a multi-page website, stronger intake flow, booking support, and ongoing optimization.',
    },
    { name: 'robots', content: 'index,follow' },
    // Open Graph
    { property: 'og:title', content: 'Lead Flow Management Package | Website, Intake, and Booking' },
    {
      property: 'og:description',
      content:
          'A managed lead-generation package with website pages, intake flow, booking support, and ongoing maintenance options.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://headlessflower.dev/standard-package' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Lead Flow Management Package | Website, Intake, and Booking' },
    {
      name: 'twitter:description',
      content:
          'A managed website package for growing businesses that need more leads, better intake flow, and dependable upkeep.',
    },
  ],
  link: [{ rel: 'canonical', href: 'https://headlessflower.dev/standard-package' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Lead Flow Management Package',
        description:
            'Managed multi-page website with lead-ready forms, intake and booking support, and optional maintenance subscription.',
        brand: { '@type': 'Brand', name: 'Headless Flower' },
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: 2200,
          highPrice: 3200,
          priceCurrency: 'USD',
          url: 'https://headlessflower.dev/standard-package',
          availability: 'https://schema.org/InStock',
        },
        isRelatedTo: [
          {
            '@type': 'Service',
            name: 'Monthly Website Maintenance',
            offers: { '@type': 'Offer', price: 150, priceCurrency: 'USD' },
          },
        ],
      }),
    },
  ],
});
</script>

<script lang="ts">
import { defineComponent, h } from 'vue';

export default {
  name: 'StandardPackagePage',
  components: {
    ShieldIcon: defineComponent({
      name: 'ShieldIcon',
      render() {
        return h(
            'svg',
            { class: 'size-5 stroke-current', viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': 'true' },
            [h('path', { d: 'M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z', fill: 'currentColor', opacity: '0.7' })],
        );
      },
    }),
    A11yIcon: defineComponent({
      name: 'A11yIcon',
      render() {
        return h(
            'svg',
            { class: 'size-5 stroke-current', viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': 'true' },
            [
              h('circle', { cx: '12', cy: '5', r: '2', fill: 'currentColor' }),
              h('path', { d: 'M3 8h18M12 8v9M6 10l6-2 6 2M10 21l2-4 2 4', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round' }),
            ],
        );
      },
    }),
    SpeedIcon: defineComponent({
      name: 'SpeedIcon',
      render() {
        return h(
            'svg',
            { class: 'size-5 stroke-current', viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': 'true' },
            [
              h('path', { d: 'M12 21a9 9 0 100-18 9 9 0 000 18z', stroke: 'currentColor', 'stroke-width': '1.5' }),
              h('path', { d: 'M12 12l5-3', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round' }),
            ],
        );
      },
    }),
    SearchIcon: defineComponent({
      name: 'SearchIcon',
      render() {
        return h(
            'svg',
            { class: 'size-5 stroke-current', viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': 'true' },
            [
              h('circle', { cx: '11', cy: '11', r: '7', stroke: 'currentColor', 'stroke-width': '1.5' }),
              h('path', { d: 'M20 20l-3.5-3.5', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round' }),
            ],
        );
      },
    }),
    CheckIcon: defineComponent({
      name: 'CheckIcon',
      render() {
        return h(
            'svg',
            { class: 'size-5 stroke-current', viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': 'true' },
            [h('path', { d: 'M5 13l4 4L19 7', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })],
        );
      },
    }),
    FeatureCard: defineComponent({
      name: 'FeatureCard',
      props: {
        title: { type: String, required: true },
        desc: { type: String, required: true },
        icon: { type: String, default: 'default' },
      },
      setup(props) {
        const iconSwitch = () => {
          switch (props.icon) {
            case 'shield':
              return '🛡️';
            case 'a11y':
              return '♿';
            case 'speed':
              return '⚡';
            case 'brand':
              return '✨';
            case 'mobile':
              return '📱';
            case 'pages':
              return '📄';
            case 'forms':
              return '📝';
            case 'blocks':
              return '🧱';
            default:
              return '✅';
          }
        };
        return () =>
            h(
                'div',
                { class: 'group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 transition hover:border-neutral-700 hover:bg-neutral-900' },
                [
                  h('div', { class: 'flex items-center gap-3' }, [
                    h('div', { class: 'flex size-9 items-center justify-center rounded-lg bg-neutral-800 text-base' }, iconSwitch()),
                    h('h4', { class: 'text-lg font-semibold leading-tight' }, props.title),
                  ]),
                  h('p', { class: 'mt-3 text-sm text-neutral-300' }, props.desc),
                ],
            );
      },
    }),
    AddonItem: defineComponent({
      name: 'AddonItem',
      props: {
        title: { type: String, required: true },
        price: { type: String, required: true },
        desc: { type: String, required: true },
      },
      render() {
        return h('div', { class: 'rounded-xl border border-neutral-800 bg-neutral-900 p-5' }, [
          h('div', { class: 'flex items-baseline justify-between gap-3' }, [
            h('p', { class: 'font-semibold text-neutral-100' }, this.title),
            h('p', { class: 'text-sm text-neutral-300' }, this.price),
          ]),
          h('p', { class: 'mt-2 text-sm text-neutral-400' }, this.desc),
        ]);
      },
    }),
  },
};
</script>

<style scoped>
/* Minimal overrides—Tailwind handles layout and theming */
</style>

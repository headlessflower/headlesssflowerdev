<template>
  <section class="bg-neutral-950 text-neutral-100">
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div class="absolute -top-24 -right-24 size-[42rem] rounded-full bg-gradient-to-br from-fuchsia-400/40 to-rose-400/10 blur-3xl"></div>
        <div class="absolute -bottom-24 -left-24 size-[30rem] rounded-full bg-gradient-to-tr from-cyan-400/20 to-pink-500/10 blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-14">
        <div class="max-w-3xl">
          <p class="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-fuchsia-300">
            Maintenance + Optimization Plan
            <span class="inline-block size-1.5 rounded-full bg-fuchsia-300"></span>
            Recurring Value
          </p>
          <h1 class="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Maintenance + Optimization Plan
          </h1>
          <p class="mt-5 text-neutral-300">
            For ongoing growth and dependable upkeep. We manage website updates, SEO improvements, performance checks,
            fresh content additions, form/lead tracking, analytics reviews, and technical support.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <NuxtLink
                to="#contact"
                class="inline-flex items-center justify-center rounded-xl bg-fuchsia-300 px-5 py-3 font-semibold text-neutral-900 shadow-lg shadow-fuchsia-300/20 transition hover:-translate-y-0.5 hover:shadow-fuchsia-300/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-300 focus:ring-offset-2 focus:ring-offset-neutral-900"
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
            Monthly plan: <span class="font-semibold text-neutral-200">$475/mo</span>
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
          <li class="inline-flex items-center gap-2"><ShieldIcon class="size-4" /> Enterprise-Grade Security</li>
          <li class="inline-flex items-center gap-2"><A11yIcon class="size-4" /> WCAG Accessibility</li>
          <li class="inline-flex items-center gap-2"><SpeedIcon class="size-4" /> Performance Optimized</li>
          <li class="inline-flex items-center gap-2"><SearchIcon class="size-4" /> SEO + Growth Features</li>
        </ul>
      </div>
    </div>

    <!-- Included -->
    <section id="details" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid gap-10 lg:grid-cols-3">
        <div class="lg:col-span-1">
          <h2 class="text-3xl font-bold">What’s included</h2>
          <p class="mt-3 text-neutral-300">
            A structured maintenance and growth plan designed to maximize recurring lead capture and keep systems running flawlessly.
          </p>
          <div class="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5">
            <p class="text-sm text-neutral-300"><span class="font-semibold text-neutral-100">Monthly investment:</span> $475/mo</p>
            <p class="mt-1 text-sm text-neutral-400">6-month minimum commitment applies.</p>
          </div>
        </div>

        <div class="lg:col-span-2">
          <div class="grid gap-6 sm:grid-cols-2">
            <FeatureCard title="Website Updates" desc="Regular text, image, layout, and service area adjustments to keep your site fresh and accurate as your business grows." :icon="'design'" />
            <FeatureCard title="SEO Improvements" desc="Ongoing optimization of metadata, image tags, internal linking, and search-focused updates to sustain search positions." :icon="'forms'" />
            <FeatureCard title="Performance Checks" desc="Regular testing of load speeds, mobile responsiveness, and Core Web Vitals to prevent slow speeds from hurting conversions." :icon="'scale'" />
            <FeatureCard title="New Content Additions" desc="Regular publishing of customer-provided blogs, case studies, reviews, or new service area cities to expand search coverage." :icon="'blog'" />
            <FeatureCard title="Form & Lead Tracking" desc="Continuous checks and maintenance of your intake forms, phone number tracking, and booking widgets so no lead goes missing." :icon="'shop'" />
            <FeatureCard title="Analytics Review" desc="Periodic deep-dives into your traffic trends, booking conversion rates, and search rankings to find new opportunities." :icon="'scale'" />
            <FeatureCard title="Technical Support" desc="Priority troubleshooting, email support, and fix resolutions for any domain, hosting, email routing, or script conflicts." :icon="'seo'" />
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
              These focused services can be booked separately when you need strategic or implementation help outside a managed plan.
            </p>
          </div>
          <div class="grid w-full gap-4 sm:grid-cols-2 lg:max-w-3xl">
            <AddonItem title="SEO Audit + Strategy" price="$600–$1,000" desc="Comprehensive audit, keyword research, and implementation roadmap." />
            <AddonItem title="Copywriting Package" price="$500–$1,000" desc="Full content package including blog posts, service pages, and calls to action." />
            <AddonItem title="Branding + Visual Identity" price="$1,200–$2,000" desc="Logo, type, brand guide, and social media toolkit." />
            <AddonItem title="Custom Integrations" price="Custom Quote" desc="Integration with CRMs, booking tools, or APIs specific to your business needs." />
          </div>
        </div>
      </div>
    </section>

    <!-- Expected Growth Results -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 border-t border-neutral-900">
      <div class="max-w-3xl">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Tangible Growth Results to Expect
        </h2>
        <p class="mt-4 text-base text-neutral-300">
          Consistent updates, active performance checks, and continuous optimizations protect your pipeline and grow your revenue.
        </p>
      </div>

      <div class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div class="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6">
          <p class="text-4xl font-extrabold text-fuchsia-300">25% - 35%</p>
          <h3 class="mt-2 text-lg font-semibold text-white">Higher Customer Lifetime Value</h3>
          <p class="mt-2 text-sm text-neutral-400">
            Targeted monthly updates, customer review workflows, and optimization prevent retention drops.
          </p>
        </div>
        <div class="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6">
          <p class="text-4xl font-extrabold text-fuchsia-300">99.9%</p>
          <h3 class="mt-2 text-lg font-semibold text-white">Uptime & Peak Performance</h3>
          <p class="mt-2 text-sm text-neutral-400">
            Regular caching, plugin updates, and continuous speed optimization keep your search presence ranks stable.
          </p>
        </div>
        <div class="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6">
          <p class="text-4xl font-extrabold text-fuchsia-300">20%+</p>
          <h3 class="mt-2 text-lg font-semibold text-white">Organic Lead Improvement</h3>
          <p class="mt-2 text-sm text-neutral-400">
            Iterative form optimization, metadata testing, and fresh copy additions keep you ahead of competitors.
          </p>
        </div>
      </div>
    </section>

    <!-- Maintenance Upsell -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="rounded-3xl border border-fuchsia-400/20 bg-fuchsia-400/10 p-8">
          <p class="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-300/10 px-3 py-1 text-xs font-semibold text-fuchsia-200">
            Recommended
          </p>
          <h3 class="mt-4 text-2xl font-bold text-fuchsia-100">Monthly Maintenance Subscription</h3>
          <p class="mt-2 text-fuchsia-50/90">
            Complex systems need ongoing attention. We keep the platform secure,
            updated, and aligned with how your business actually operates.
          </p>
          <ul class="mt-6 space-y-3 text-sm text-fuchsia-50/90">
            <li class="flex gap-3"><CheckIcon class="mt-1 size-5 shrink-0" /><span>Security updates, uptime monitoring, and issue response</span></li>
            <li class="flex gap-3"><CheckIcon class="mt-1 size-5 shrink-0" /><span>Framework, CMS, and integration maintenance</span></li>
            <li class="flex gap-3"><CheckIcon class="mt-1 size-5 shrink-0" /><span>Performance, SEO, and conversion health reviews</span></li>
            <li class="flex gap-3"><CheckIcon class="mt-1 size-5 shrink-0" /><span>Reporting, recommendations, and iterative improvements</span></li>
            <li class="flex gap-3"><CheckIcon class="mt-1 size-5 shrink-0" /><span>Priority support for system updates and small changes</span></li>
          </ul>
          <div class="mt-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p class="text-sm text-fuchsia-100/90">Monthly rate</p>
              <p class="text-3xl font-extrabold text-fuchsia-100">$200<span class="text-lg font-semibold">/mo</span></p>
            </div>
            <NuxtLink
                to="#contact"
                class="inline-flex items-center justify-center rounded-xl bg-fuchsia-300 px-5 py-3 font-semibold text-neutral-900 shadow-lg shadow-fuchsia-300/20 transition hover:-translate-y-0.5 hover:shadow-fuchsia-300/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-300 focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              Add maintenance
            </NuxtLink>
          </div>
        </div>

        <!-- Brand Reminder -->
        <div class="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8">
          <h3 class="text-2xl font-bold">This is your brand—don’t undersell it.</h3>
          <p class="mt-3 text-neutral-300">
            When the website, customer intake, and internal tools all feel like
            one system, the business runs smoother and the customer experience
            feels far more premium.
          </p>
          <p class="mt-6 text-sm text-neutral-500">
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
            <h3 class="text-2xl font-bold">Ready to build your flagship site?</h3>
            <p class="mt-2 text-neutral-300">
              Build the branded system your business can actually operate from,
              not just a site that looks good on launch day.
            </p>
          </div>
          <div class="flex flex-wrap gap-3">
            <NuxtLink
                to="#contact"
                class="inline-flex items-center justify-center rounded-xl bg-fuchsia-300 px-5 py-3 font-semibold text-neutral-900 shadow-lg shadow-fuchsia-300/20 transition hover:-translate-y-0.5 hover:shadow-fuchsia-300/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-300 focus:ring-offset-2 focus:ring-offset-neutral-900"
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
useHead({
  title: 'Maintenance + Optimization Plan | Headless Flower',
  meta: [
    {
      name: 'description',
      content:
          'Ongoing website management, SEO tuning, performance monitoring, form tracking, analytics reviews, and priority technical support under one simple monthly subscription.',
    },
    { name: 'robots', content: 'index,follow' },
    { property: 'og:title', content: 'Maintenance + Optimization Plan | Headless Flower' },
    {
      property: 'og:description',
      content:
          'Keep your presence fresh and ranking. Plan includes website updates, SEO tuning, speed optimizations, and technical support.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://headlessflower.dev/premium-package' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Maintenance + Optimization Plan | Headless Flower' },
    {
      name: 'twitter:description',
      content:
          'Recurring website updates, SEO optimization, and priority troubleshooting to protect and grow your search presence.',
    },
  ],
  link: [{ rel: 'canonical', href: 'https://headlessflower.dev/premium-package' }],
});
</script>

<script lang="ts">
import { defineComponent, h } from 'vue';

export default {
  name: 'PremiumPackagePage',
  components: {
    ShieldIcon: defineComponent({
      render() {
        return h('svg', { class: 'size-5 stroke-current', viewBox: '0 0 24 24', fill: 'none' }, [
          h('path', { d: 'M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z', fill: 'currentColor', opacity: '0.7' }),
        ]);
      },
    }),
    A11yIcon: defineComponent({
      render() {
        return h('svg', { class: 'size-5 stroke-current', viewBox: '0 0 24 24', fill: 'none' }, [
          h('circle', { cx: '12', cy: '5', r: '2', fill: 'currentColor' }),
          h('path', { d: 'M3 8h18M12 8v9M6 10l6-2 6 2M10 21l2-4 2 4', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round' }),
        ]);
      },
    }),
    SpeedIcon: defineComponent({
      render() {
        return h('svg', { class: 'size-5 stroke-current', viewBox: '0 0 24 24', fill: 'none' }, [
          h('path', { d: 'M12 21a9 9 0 100-18 9 9 0 000 18z', stroke: 'currentColor', 'stroke-width': '1.5' }),
          h('path', { d: 'M12 12l5-3', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round' }),
        ]);
      },
    }),
    SearchIcon: defineComponent({
      render() {
        return h('svg', { class: 'size-5 stroke-current', viewBox: '0 0 24 24', fill: 'none' }, [
          h('circle', { cx: '11', cy: '11', r: '7', stroke: 'currentColor', 'stroke-width': '1.5' }),
          h('path', { d: 'M20 20l-3.5-3.5', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round' }),
        ]);
      },
    }),
    CheckIcon: defineComponent({
      render() {
        return h('svg', { class: 'size-5 stroke-current', viewBox: '0 0 24 24', fill: 'none' }, [
          h('path', { d: 'M5 13l4 4L19 7', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
        ]);
      },
    }),
    FeatureCard: defineComponent({
      props: { title: String, desc: String, icon: String },
      setup(props) {
        const iconSwitch = () => {
          switch (props.icon) {
            case 'design': return '🎨';
            case 'animate': return '✨';
            case 'blog': return '📰';
            case 'forms': return '📝';
            case 'shop': return '🛒';
            case 'scale': return '📈';
            case 'seo': return '🔍';
            case 'growth': return '🌱';
            default: return '✅';
          }
        };
        return () =>
            h('div', { class: 'group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 transition hover:border-neutral-700 hover:bg-neutral-900' }, [
              h('div', { class: 'flex items-center gap-3' }, [
                h('div', { class: 'flex size-9 items-center justify-center rounded-lg bg-neutral-800 text-base' }, iconSwitch()),
                h('h4', { class: 'text-lg font-semibold leading-tight' }, props.title),
              ]),
              h('p', { class: 'mt-3 text-sm text-neutral-300' }, props.desc),
            ]);
      },
    }),
    AddonItem: defineComponent({
      props: { title: String, price: String, desc: String },
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
/* Tailwind handles layout; keep overrides minimal. */
</style>

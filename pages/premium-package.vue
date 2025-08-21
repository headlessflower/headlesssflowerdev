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
            Premium Package
            <span class="inline-block size-1.5 rounded-full bg-fuchsia-300"></span>
            High-Impact
          </p>
          <h1 class="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Custom design, advanced features, and future-proof scalability.
          </h1>
          <p class="mt-5 text-neutral-300">
            The Premium Package is built for brands who need more than a website—they need a complete digital experience. Custom design system, animations, blog, integrations, and advanced functionality that grows with you.
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
            Typical range: <span class="font-semibold text-neutral-200">$4,000–$5,500</span>
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
            A feature-rich website that blends storytelling, technology, and design. Built for brands who take their digital presence seriously.
          </p>
          <div class="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5">
            <p class="text-sm text-neutral-300"><span class="font-semibold text-neutral-100">Investment:</span> $4,000–$5,500</p>
            <p class="mt-1 text-sm text-neutral-400">Timeline depends on features, integrations, and custom design scope.</p>
          </div>
        </div>

        <div class="lg:col-span-2">
          <div class="grid gap-6 sm:grid-cols-2">
            <FeatureCard title="Custom Design System" desc="Unique design system (type, color, components) tailored to your brand identity." :icon="'design'" />
            <FeatureCard title="Advanced Animations" desc="Micro-interactions, scroll-based effects, and animation libraries for an immersive experience." :icon="'animate'" />
            <FeatureCard title="Blog + CMS Integration" desc="Dynamic blog with category filters, CMS setup for easy updates, content scheduling." :icon="'blog'" />
            <FeatureCard title="Form Integrations" desc="Custom forms connected to CRM, mailing lists, or third-party tools for lead generation." :icon="'forms'" />
            <FeatureCard title="E-Commerce Ready" desc="Optional product pages, carts, and checkout integration (Shopify, Stripe, etc.)." :icon="'shop'" />
            <FeatureCard title="Scalable Architecture" desc="Nuxt/Vue 3, modular components, API integrations, and cloud hosting support." :icon="'scale'" />
            <FeatureCard title="Accessibility + SEO" desc="Full compliance with accessibility standards, structured data, and on-page SEO best practices." :icon="'seo'" />
            <FeatureCard title="Ongoing Growth Support" desc="Optimized for scaling with new features, pages, and marketing initiatives." :icon="'growth'" />
          </div>
        </div>
      </div>
    </section>

    <!-- Add-ons -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
      <div class="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div class="max-w-2xl">
            <h3 class="text-2xl font-bold">Optional add-ons</h3>
            <p class="mt-2 text-neutral-300">
              Enhance your digital presence with custom integrations and creative services.
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

    <!-- Maintenance Upsell -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="rounded-3xl border border-fuchsia-400/20 bg-fuchsia-400/10 p-8">
          <p class="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-300/10 px-3 py-1 text-xs font-semibold text-fuchsia-200">
            Recommended
          </p>
          <h3 class="mt-4 text-2xl font-bold text-fuchsia-100">Monthly Maintenance Subscription</h3>
          <p class="mt-2 text-fuchsia-50/90">
            Keep your premium site in peak condition—secure, updated, and optimized for growth.
          </p>
          <ul class="mt-6 space-y-3 text-sm text-fuchsia-50/90">
            <li class="flex gap-3"><CheckIcon class="mt-1 size-5 shrink-0" /><span>Security updates and uptime monitoring</span></li>
            <li class="flex gap-3"><CheckIcon class="mt-1 size-5 shrink-0" /><span>Framework & plugin updates (Nuxt, CMS, integrations)</span></li>
            <li class="flex gap-3"><CheckIcon class="mt-1 size-5 shrink-0" /><span>Performance & SEO health audits</span></li>
            <li class="flex gap-3"><CheckIcon class="mt-1 size-5 shrink-0" /><span>Analytics reports & insights</span></li>
            <li class="flex gap-3"><CheckIcon class="mt-1 size-5 shrink-0" /><span>Priority support & small edits</span></li>
          </ul>
          <div class="mt-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p class="text-sm text-fuchsia-100/90">Starting at</p>
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
            The Premium Package is about building a digital identity that’s impossible to ignore. From custom animations to integrations, your website becomes a growth engine for your business.
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
              Invest in a secure, accessible, and future-ready digital experience with the Premium Package.
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
  title: 'Premium Website Package | Custom, Secure, Scalable, High-Impact',
  meta: [
    {
      name: 'description',
      content:
          'Premium Package: A custom digital experience with advanced animations, blog, CMS, integrations, SEO, and enterprise security. Perfect for brands ready to scale. Monthly maintenance available.',
    },
    { name: 'robots', content: 'index,follow' },
    { property: 'og:title', content: 'Premium Website Package | Custom, Secure, Scalable, High-Impact' },
    {
      property: 'og:description',
      content:
          'A flagship website package with custom design system, advanced features, integrations, and SEO best practices. Optional monthly maintenance.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://headlessflower.dev/premium-package' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Premium Website Package | Custom, Secure, Scalable, High-Impact' },
    {
      name: 'twitter:description',
      content:
          'Invest in a custom, secure, and future-proof digital experience. Premium Package includes advanced features, animations, and integrations.',
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

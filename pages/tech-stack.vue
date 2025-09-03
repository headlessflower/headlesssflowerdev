
<template>
  <section class="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
    <!-- Hero -->
    <div class="relative isolate">
      <div class="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950"></div>
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/50 px-3 py-1 text-xs text-slate-300">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Modern full‑stack for fast, secure sites
          </p>
          <h1 class="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Our Tech Stack</h1>
          <p class="mt-5 text-lg leading-8 text-slate-300">We build durable, accessible products with a proven set of tools: <span class="font-semibold text-white">Vue.js</span> for UI, <span class="font-semibold text-white">Nuxt</span> for app structure & SSR, <span class="font-semibold text-white">Tailwind CSS</span> for design systems, <span class="font-semibold text-white">AdonisJS</span> for backends & APIs, and <span class="font-semibold text-white">PostgreSQL</span> for data.</p>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <NuxtLink to="#contact" class="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400">Start a project</NuxtLink>
            <NuxtLink to="/services" class="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800">See services</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Why this stack -->
    <div class="mx-auto max-w-7xl px-6 py-16 my-16 rounded-md lg:px-8 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div class="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 class="text-2xl font-bold tracking-tight text-slate-100">Why this stack works for your business</h2>
          <p class="mt-4 text-slate-300">This combination balances developer velocity, long‑term maintainability, and enterprise‑grade performance. Server rendering and static generation keep pages fast, while an expressive component system and type‑safe APIs reduce bugs and future rework.</p>
          <ul class="mt-8 space-y-3 text-slate-200">
            <li class="flex gap-3"><span class="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400"></span><span><span class="font-semibold">Performance by default</span> — SSR/SSG, route‑level code splitting, and asset optimization.</span></li>
            <li class="flex gap-3"><span class="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400"></span><span><span class="font-semibold">Secure data layer</span> — battle‑tested Postgres with migrations, roles, backups.</span></li>
            <li class="flex gap-3"><span class="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400"></span><span><span class="font-semibold">Design consistency</span> — Tailwind tokens mapped to your brand for rapid iteration.</span></li>
            <li class="flex gap-3"><span class="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400"></span><span><span class="font-semibold">Scales with you</span> — from static marketing sites to full SaaS platforms.</span></li>
          </ul>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <p class="text-4xl font-black text-slate-100">95+</p>
            <p class="mt-1 text-sm text-slate-400">Lighthouse Perf / Best Practices on typical builds</p>
          </div>
          <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <p class="text-4xl font-black text-slate-100">A11y</p>
            <p class="mt-1 text-sm text-slate-400">Semantic HTML, ARIA, keyboard‑first navigation</p>
          </div>
          <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <p class="text-4xl font-black text-slate-100">~50%</p>
            <p class="mt-1 text-sm text-slate-400">Fewer CSS files shipped vs. UI kits thanks to Tailwind</p>
          </div>
          <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <p class="text-4xl font-black text-slate-100">0‑1ms</p>
            <p class="mt-1 text-sm text-slate-400">Database reads at scale with proper indexing & caching</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Stack cards -->
    <div class="mx-auto w-full px-6 py-10 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <h2 class="text-center text-2xl font-bold tracking-tight text-slate-100">The tools we use (and why)</h2>
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="tool in tools" :key="tool.key" class="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-slate-700 hover:bg-slate-900">
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 font-semibold text-slate-200">{{ tool.badge }}</div>
            <h3 class="text-lg font-semibold text-slate-100">{{ tool.title }}</h3>
          </div>
          <p class="mt-3 text-sm leading-6 text-slate-300">{{ tool.summary }}</p>
          <ul class="mt-4 space-y-2 text-sm text-slate-200">
            <li v-for="reason in tool.reasons" :key="reason" class="flex gap-2"><span class="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span><span>{{ reason }}</span></li>
          </ul>
          <div class="mt-5 flex flex-wrap gap-3">
            <a v-for="reference in tool.references" :key="reference.href" :href="reference.href" target="_blank" rel="noopener" class="text-sm font-medium text-emerald-400 underline-offset-2 hover:underline">{{ reference.label }}</a>
          </div>
        </article>
      </div>
    </div>

    <!-- Architecture strip -->
    <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div class="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-8 md:p-10">
        <h2 class="text-xl font-bold text-slate-100">Typical Architecture</h2>
        <div class="mt-6 grid items-start gap-8 md:grid-cols-2">
          <div class="space-y-4 text-slate-300">
            <p>For marketing sites and content hubs we prefer <span class="font-semibold text-white">Nuxt SSG</span> with on‑demand revalidation. For apps, we use <span class="font-semibold text-white">Nuxt SSR</span> with an <span class="font-semibold text-white">AdonisJS</span> API and <span class="font-semibold text-white">PostgreSQL</span> behind a query layer. Authentication uses signed cookies and role‑based access control. Tailwind keeps the UI consistent and themeable.</p>
            <ul class="grid gap-2">
              <li class="flex gap-2"><span class="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span><span>Edge‑cache friendly pages + API routes</span></li>
              <li class="flex gap-2"><span class="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span><span>Database safety with migrations, constraints, and auditing</span></li>
              <li class="flex gap-2"><span class="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span><span>Design tokens + components for rapid iteration</span></li>
            </ul>
          </div>
          <pre aria-label="Sample stack code" class="whitespace-pre-wrap rounded-2xl border border-slate-800 bg-slate-950 p-5 text-xs leading-6 text-slate-200">
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  nitro: { preset: 'cloudflare' },
})

// routes: app.vue
<template>
  <NuxtLayout />
</template>

// api/users.ts (AdonisJS suggestion)
// Route.get('users', 'UsersController.index')

// db migration (PostgreSQL)
// CREATE TABLE users (
//   id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
//   email text UNIQUE NOT NULL,
//   role text NOT NULL DEFAULT 'user',
//   created_at timestamptz DEFAULT now()
// );
          </pre>
        </div>
      </div>
    </div>

    <!-- Comparison callout -->
    <div class="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <div class="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-8 md:p-12">
        <div class="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 class="text-2xl font-bold text-slate-100">Built for real world teams</h3>
            <p class="mt-3 text-slate-300">You get rapid development without vendor lock‑in. Everything runs on open standards so you can hire any modern developer to maintain or extend your product.</p>
            <ul class="mt-6 grid gap-2 text-slate-200">
              <li class="flex gap-2"><span class="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span><span>Open‑source stack with large communities</span></li>
              <li class="flex gap-2"><span class="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span><span>Strict TypeScript and linting for reliability</span></li>
              <li class="flex gap-2"><span class="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span><span>CI/CD ready: preview deploys and automated tests</span></li>
            </ul>
            <div class="mt-8 flex gap-4">
              <NuxtLink to="#contact" class="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400">Discuss your build</NuxtLink>
              <NuxtLink to="/services" class="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800">Explore services</NuxtLink>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p class="text-sm font-semibold text-slate-200">Vue.js</p>
              <p class="mt-1 text-xs text-slate-400">Reactive UI components</p>
            </div>
            <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p class="text-sm font-semibold text-slate-200">Nuxt</p>
              <p class="mt-1 text-xs text-slate-400">SSR, SSG, routing & meta</p>
            </div>
            <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p class="text-sm font-semibold text-slate-200">Tailwind CSS</p>
              <p class="mt-1 text-xs text-slate-400">Design tokens & utility classes</p>
            </div>
            <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p class="text-sm font-semibold text-slate-200">AdonisJS</p>
              <p class="mt-1 text-xs text-slate-400">Auth, validation, IoC container</p>
            </div>
            <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p class="text-sm font-semibold text-slate-200">PostgreSQL</p>
              <p class="mt-1 text-xs text-slate-400">ACID, JSONB, indexing</p>
            </div>
            <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p class="text-sm font-semibold text-slate-200">Testing</p>
              <p class="mt-1 text-xs text-slate-400">Vitest + Playwright</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ -->
    <div class="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
      <h2 class="text-center text-2xl font-bold tracking-tight text-slate-100">Stack FAQs</h2>
      <dl class="mx-auto mt-8 grid max-w-3xl gap-6">
        <div v-for="item in faqs" :key="item.question" class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <dt class="font-semibold text-slate-100">{{ item.question }}</dt>
          <dd class="mt-2 text-slate-300">{{ item.answer }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Tech Stack — Headless Flower',
  meta: [
    { name: 'description', content: 'Our modern Vue, Nuxt, Tailwind, AdonisJS, and PostgreSQL stack for fast, accessible, and scalable web applications.' },
    { property: 'og:title', content: 'Tech Stack — Headless Flower' },
    { property: 'og:description', content: 'See why we use Vue, Nuxt, Tailwind, AdonisJS, and PostgreSQL to build fast, secure websites and full‑stack apps.' }
  ]
})

const tools = [
  {
    key: 'vue',
    badge: 'V',
    title: 'Vue.js (UI Framework)',
    summary: 'Reactive, component‑based UI with the Composition API for clean, reusable logic.',
    reasons: [
      'Small runtime and great dev ergonomics',
      'Scoped components reduce regressions',
      'Thrives with TypeScript and testing tools'
    ],
    references: [
      { label: 'vuejs.org', href: 'https://vuejs.org' }
    ]
  },
  {
    key: 'nuxt',
    badge: 'N',
    title: 'Nuxt (App Framework)',
    summary: 'Production features out of the box: routing, SSR/SSG, data fetching, meta SEO, and file‑based conventions.',
    reasons: [
      'Hybrid rendering (SSR/SSG/ISR) for performance',
      'Auto code‑splitting and image optimization',
      'First‑class DX with modules and layers'
    ],
    references: [
      { label: 'nuxt.com', href: 'https://nuxt.com' }
    ]
  },
  {
    key: 'tailwind',
    badge: 'TW',
    title: 'Tailwind CSS (Design System)',
    summary: 'Utility‑first CSS mapped to your brand tokens. Ship less CSS and iterate faster.',
    reasons: [
      'Consistent spacing, color, and typography',
      'Responsive designs with minimal overhead',
      'Dark mode and theming built in'
    ],
    references: [
      { label: 'tailwindcss.com', href: 'https://tailwindcss.com' }
    ]
  },
  {
    key: 'adonis',
    badge: 'A',
    title: 'AdonisJS (Backend & API)',
    summary: 'Structured Node.js framework with TypeScript, validation, auth, and a powerful IoC container.',
    reasons: [
      'Clear folder conventions and strong typing',
      'Built‑in authentication and validation',
      'Great developer experience for complex apps'
    ],
    references: [
      { label: 'adonisjs.com', href: 'https://adonisjs.com' }
    ]
  },
  {
    key: 'postgres',
    badge: 'PG',
    title: 'PostgreSQL (Database)',
    summary: 'Reliable, ACID‑compliant relational database with JSONB for semi‑structured data.',
    reasons: [
      'Powerful indexing and full‑text search',
      'Robust migrations and role‑based security',
      'Scales from single instance to managed cloud'
    ],
    references: [
      { label: 'postgresql.org', href: 'https://www.postgresql.org' }
    ]
  }
]

const faqs = [
  {
    question: 'Can I start small and grow into a full app later?',
    answer: 'Yes. We often launch with Nuxt SSG for speed, then add an AdonisJS API and Postgres as your needs evolve.'
  },
  {
    question: 'Do you support existing sites built with other stacks?',
    answer: 'We migrate incrementally: wrap legacy endpoints, rebuild critical pages in Nuxt, and move data into Postgres when ready.'
  },
  {
    question: 'How do you keep things accessible and fast?',
    answer: 'Semantic HTML, keyboard tests, color‑contrast checks, image optimization, caching strategies, and performance budgets.'
  },
  {
    question: 'Where will my app be hosted?',
    answer: 'We tailor to your needs: Vercel/Netlify for front‑ends, Fly.io/Render/DigitalOcean for AdonisJS and Postgres, or your preferred cloud.'
  }
]
</script>

<style scoped>
/**** Optional tiny polish for code block scrolling ****/
pre { overflow: auto; }
</style>


<template>
  <div class="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
   

    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-gray-950"></div>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-10">
        <div>
          <div class="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-white/60 px-3 py-1 text-xs font-medium text-blue-700 shadow-sm dark:border-sky-800/50 dark:bg-sky-900/20 dark:text-sky-300">
            <span class="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            Archival Databases, built like modern SaaS
          </div>
          <h1 class="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
            Bespoke archival data platforms
            <span class="block bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">that scale and endure.</span>
          </h1>
          <p class="mt-5 text-lg text-gray-600 dark:text-gray-300">
            Relational core. Search-ready. Standards‑aligned. We design PostgreSQL‑first systems for museums, organizations, and private collections—extensible with search and graph when you need it.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-3">
            <NuxtLink to="#contact" class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow hover:bg-blue-700">
              Start a database consultation
            </NuxtLink>
            <a href="#architecture" class="inline-flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-800 px-5 py-3 font-semibold hover:bg-gray-50 dark:hover:bg-gray-900">
              See the architecture
            </a>
          </div>
          <div class="mt-6 flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
            <span v-for="(heroBadge, heroBadgeIndex) in heroBadges" :key="`hero-badge-${heroBadgeIndex}`" class="inline-flex items-center gap-1 rounded-full border border-gray-200 dark:border-gray-800 px-2 py-1">{{ heroBadge }}</span>
          </div>
        </div>
        <!-- Hero Card -->
        <div class="lg:pl-8">
          <div class="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60 backdrop-blur p-6 shadow-xl">
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div v-for="(heroCard, heroCardIndex) in heroCards" :key="`hero-card-${heroCardIndex}`" class="rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                <p class="text-xs text-gray-500">{{ heroCard.category }}</p>
                <p class="mt-1 font-semibold">{{ heroCard.title }}</p>
                <p class="mt-2 text-gray-600 dark:text-gray-300">{{ heroCard.description }}</p>
              </div>
            </div>
            <div class="mt-6 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-[1px]">
              <div class="rounded-[0.70rem] bg-white dark:bg-gray-950 p-4">
                <p class="text-sm font-medium">{{ heroOutcome.title }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">{{ heroOutcome.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Logos / Social Proof 
    <section class="py-10 border-y border-gray-100 dark:border-gray-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-center text-xs uppercase tracking-wider text-gray-500">Inspired by trusted practices across GLAM</p>
        <div class="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 opacity-70">
          <div v-for="(logoPlaceholder, logoIndex) in 6" :key="`logo-${logoIndex}`" class="h-10 rounded bg-gray-100 dark:bg-gray-800"></div>
        </div>
      </div>
    </section>-->

    <!-- Value Props -->
    <section class="py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight">Why a relational core?</h2>
          <p class="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Proven integrity and query power, with modern flexibility via JSONB and integrations.</p>
        </div>
        <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(featureItem, featureIndex) in featuresList"
            :key="`feature-${featureIndex}-${featureItem.title}`"
            class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 class="font-semibold">{{ featureItem.title }}</h3>
            <p class="mt-1 text-gray-600 dark:text-gray-300 text-sm">{{ featureItem.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture -->
    <section id="architecture" class="py-20 bg-gray-50 dark:bg-gray-900/40">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 class="text-3xl font-bold tracking-tight">Reference architecture</h2>
            <p class="mt-3 text-gray-600 dark:text-gray-300">Start with PostgreSQL; extend with search and graph when needed. Media lives in object storage with checksums tracked in‑DB.</p>
            <ul class="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-200">
              <li v-for="(architecturePoint, architecturePointIndex) in architecturePoints" :key="`architecture-${architecturePointIndex}`" class="flex gap-2">
                <span class="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
                <span>{{ architecturePoint }}</span>
              </li>
            </ul>
            <div class="mt-8">
              <NuxtLink to="#contact" class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow hover:bg-blue-700">Discuss your stack</NuxtLink>
            </div>
          </div>
          <div>
            <div class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 shadow-sm">
              <div class="grid grid-cols-6 gap-4 text-center text-xs">
                <div v-for="(architectureTile, architectureTileIndex) in architectureTiles" :key="`arch-tile-${architectureTileIndex}`" :class="architectureTile.areaClass + ' rounded-xl border p-4 dark:border-gray-800'">
                  <p class="font-semibold">{{ architectureTile.title }}</p>
                  <p class="text-gray-500 dark:text-gray-400">{{ architectureTile.subtitle }}</p>
                </div>
              </div>
            </div>
            <p class="mt-3 text-[11px] text-gray-500 dark:text-gray-400">Diagram is illustrative. Components can be tailored to in‑house or managed cloud.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Options (no custom components) -->
    <section class="py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-center">Choose the right core</h2>
        <div class="mt-10 grid lg:grid-cols-3 gap-6">
          <div
            v-for="(databaseOption, databaseOptionIndex) in databaseOptions"
            :key="`db-option-${databaseOptionIndex}-${databaseOption.title}`"
            class="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 shadow-sm flex flex-col"
          >
            <span v-if="databaseOption.badge" class="absolute -top-3 right-4 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 px-2 py-0.5 text-xs font-semibold text-white shadow">
              {{ databaseOption.badge }}
            </span>
            <h3 class="text-lg font-semibold">{{ databaseOption.title }}</h3>
            <ul class="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li v-for="(databasePoint, databasePointIndex) in databaseOption.points" :key="`db-point-${databaseOptionIndex}-${databasePointIndex}`" class="flex items-start gap-2">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                <span>{{ databasePoint }}</span>
              </li>
            </ul>
            <div class="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500">
              Good for: GLAM institutions, research groups, and private collections.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900/40">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold">FAQ</h2>
        <div class="mt-6 divide-y divide-gray-200 dark:divide-gray-800">
          <details v-for="(faqItem, faqIndex) in faqList" :key="`faq-${faqIndex}-${faqItem.question}`" class="group py-4">
            <summary class="flex cursor-pointer list-none items-center justify-between text-left font-medium">
              {{ faqItem.question }}
              <span class="ml-4 text-gray-400 group-open:rotate-180 transition">▾</span>
            </summary>
            <p class="mt-2 text-gray-600 dark:text-gray-300">{{ faqItem.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-2xl border border-blue-200/60 dark:border-sky-800/50 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-[1px] shadow-lg">
          <div class="rounded-[1rem] bg-white dark:bg-gray-950 p-8 text-center">
            <h3 class="text-2xl font-bold">Ready to future‑proof your archive?</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">Let’s map your data model and architecture in a focused discovery session.</p>
            <div class="mt-6 flex justify-center gap-3">
              <NuxtLink to="#contact" class="inline-flex items-center justify-center rounded-xl bg-white text-blue-700 border border-white px-5 py-3 font-semibold shadow-sm hover:bg-blue-50">
                Book a discovery call
              </NuxtLink>
              <NuxtLink to="/services" class="inline-flex items-center justify-center rounded-xl bg-blue-700 text-white px-5 py-3 font-semibold shadow hover:bg-blue-800">
                Explore services
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-gray-100 dark:border-gray-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {{ new Date().getFullYear() }} Headless Flower. All rights reserved.</p>
        <div class="flex items-center gap-4">
          <NuxtLink to="/privacy" class="hover:text-blue-600 dark:hover:text-sky-400">Privacy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-blue-600 dark:hover:text-sky-400">Terms</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: 'Archival Databases (SaaS Layout) | Headless Flower',
  meta: [
    {
      name: 'description',
      content:
        'Headless Flower builds PostgreSQL‑first archival databases with SaaS‑grade UX. Relational integrity, JSONB flexibility, search integration, and linked‑data readiness.'
    }
  ]
})

// Data via JSON objects/arrays and rendered with v-for. No single-letter variables; descriptive names only.
const heroBadges = ref<string[]>([
  'PostgreSQL + JSONB',
  'Elasticsearch / Solr',
  'EAD • DACS • AAT',
  'Cloud‑ready'
])

const heroCards = ref(
  [
    { category: 'Core', title: 'Relational (Postgres)', description: 'Transactions, foreign keys, recursive CTEs, and JSONB flexibility.' },
    { category: 'Search', title: 'Elasticsearch / Solr', description: 'OCR and descriptive full‑text search at scale.' },
    { category: 'Media', title: 'External storage', description: 'Checksums, paths, and renditions tracked in the database.' },
    { category: 'Interoperability', title: 'Standards‑aligned', description: 'DACS, ISAD(G), EAD, and linked data‑ready identifiers.' }
  ] as Array<{ category: string; title: string; description: string }>
)

const heroOutcome = ref({
  title: 'Outcome',
  description: 'A future‑proof archival platform that grows with your collection.'
})

const featuresList = ref(
  [
    { title: 'Integrity by design', description: 'Foreign keys and transactions prevent orphan records and partial updates.' },
    { title: 'Hierarchy aware', description: 'Recursive CTEs or ORMs reconstruct collection trees without losing context.' },
    { title: 'Flexible metadata', description: 'Use JSONB for variable technical fields without frequent schema changes.' },
    { title: 'Search at scale', description: 'Pair with Elasticsearch or Solr for OCR and keyword discovery.' },
    { title: 'Cloud‑ready', description: 'Managed Postgres or MySQL, and read replicas for public traffic.' },
    { title: 'Standards aligned', description: 'DACS, ISAD(G), EAD, and AAT integrated into schema and UI.' }
  ] as Array<{ title: string; description: string }>
)

const architecturePoints = ref<string[]>([
  'PostgreSQL core (foreign keys, CTEs, JSONB)',
  'Search index (Elasticsearch/Solr) refreshed on updates',
  'Optional graph/triple store for linked data',
  'Object storage for originals and derivatives; URLs and checksums in DB'
])

const architectureTiles = ref(
  [
    { areaClass: 'col-span-6', title: 'Admin & Public App', subtitle: 'Nuxt • API' },
    { areaClass: 'col-span-3', title: 'PostgreSQL', subtitle: 'Relational core + JSONB' },
    { areaClass: 'col-span-3', title: 'Elasticsearch', subtitle: 'Full‑text & OCR' },
    { areaClass: 'col-span-3', title: 'Object Storage', subtitle: 'S3/GCS + checksums' },
    { areaClass: 'col-span-3', title: 'Graph / RDF (optional)', subtitle: 'Linked data' },
    { areaClass: 'col-span-6', title: 'Observability', subtitle: 'Backups • Metrics • Alerts' }
  ] as Array<{ areaClass: string; title: string; subtitle: string }>
)

const databaseOptions = ref(
  [
    {
      title: 'PostgreSQL',
      badge: 'Recommended',
      points: [
        'Best default for bespoke systems',
        'JSONB for flexible metadata',
        'Great concurrency and extensions (PostGIS, text search)'
      ]
    },
    {
      title: 'MySQL / MariaDB',
      badge: '',
      points: [
        'Widely used (e.g., ArchivesSpace)',
        'Good replication and administrative simplicity',
        'Use InnoDB and integrity‑enforcing settings'
      ]
    },
    {
      title: 'SQLite',
      badge: '',
      points: [
        'Great for prototypes or single‑user workflows',
        'Not ideal for multi‑user web applications',
        'Migrate before public scale'
      ]
    }
  ] as Array<{ title: string; badge: string; points: string[] }>
)

const faqList = ref(
  [
    {
      question: 'How do you handle large media files?',
      answer: 'We store binaries in object storage (S3/GCS/Azure) and keep URIs, renditions, and checksums in the database to keep backups lean and integrity high.'
    },
    {
      question: 'Can you align with DACS, ISAD(G), and EAD?',
      answer: 'Yes. We design the schema and UI around these standards and can export EAD/MARC or publish linked data as needed.'
    },
    {
      question: 'What about search and discovery?',
      answer: 'We index descriptive metadata and OCR text in Elasticsearch or Solr for fast keyword and faceted search, while the RDBMS remains the source of truth.'
    }
  ] as Array<{ question: string; answer: string }>
)
</script>

<style scoped>
:focus-visible { outline: 2px solid rgba(59,130,246,.7); outline-offset: 2px; }
</style>

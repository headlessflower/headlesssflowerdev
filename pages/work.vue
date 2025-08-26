
<template>
  <main class="min-h-screen bg-neutral-950 text-neutral-100">
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div class="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="mb-3 inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300 ring-1 ring-emerald-400/30">Our Work</p>
            <h1 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Projects</h1>
            <p class="mt-4 max-w-2xl text-neutral-300">A selection of sites and apps we’ve designed and built. Click any card to view its project page.</p>
          </div>
        </div>
      </div>
      <div class="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl" aria-hidden="true" />
    </section>

    <!-- Grid -->
    <section class="mx-auto max-w-6xl px-6 pb-24">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="p in list"
          :key="p.id"
          :to="`/work/${p.link}`"
          class="group overflow-hidden rounded-2xl border border-neutral-800/60 bg-neutral-900 transition hover:border-emerald-400/40 hover:shadow-emerald-500/10"
        >
          <div class="relative">
            <img :src="p.img" :alt="`${p.name} thumbnail`" class="h-48 w-full object-cover" />
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent"></div>
          </div>
          <div class="p-5">
            <div class="flex items-center justify-between gap-3">
              <h3 class="text-lg font-semibold text-neutral-100 group-hover:text-emerald-300">{{ p.name }}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4 text-neutral-400 transition group-hover:translate-x-0.5 group-hover:text-emerald-300"><path d="M13.5 4.5L21 12l-7.5 7.5m7.5-7.5H3"/></svg>
            </div>
            <div class="mt-3 flex flex-wrap gap-2">
              <span v-for="(t, i) in p.tags" :key="i" class="rounded-full bg-neutral-800 px-2.5 py-1 text-xs text-neutral-300 ring-1 ring-neutral-700">{{ t }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Note / CTA -->
      <div class="mt-12 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
        <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 class="text-lg font-semibold">Want results like these?</h3>
            <p class="mt-1 text-neutral-300">We can tailor a project like these to your goals, brand, and budget.</p>
          </div>
          <NuxtLink to="/#contact" class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">Contact us</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import projects from '/data/projects.js'
import { computed, unref } from 'vue'

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const list = computed(() => {
  const arr = Array.isArray(unref(projects)) ? unref(projects) : []
  return arr.map((p: any) => ({
    id: p.id,
    name: p.name,
    img: p.img,
    tags: p.tags || [],
    link: p.link,
  }))
})

useHead({
  title: 'Work — Headless Flower',
  meta: [
    { name: 'description', content: 'Explore selected projects by Headless Flower. Built with Nuxt, Vue, and a focus on performance, security, and brand alignment.' },
    { property: 'og:title', content: 'Work — Headless Flower' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>

<style scoped>
</style>

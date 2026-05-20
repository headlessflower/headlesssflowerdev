<template>
  <main class="min-h-screen bg-neutral-950 text-neutral-100 pt-24 pb-20">
    <div class="relative mx-auto max-w-7xl px-6 lg:px-12">
      <!-- Glow background -->
      <div class="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-gradient-to-b from-red-500/10 to-transparent blur-3xl" aria-hidden="true" />

      <!-- Top Headline -->
      <div class="border-b border-neutral-900 pb-8 mb-12">
        <p class="text-[12px] font-semibold tracking-[0.2em] text-red-500 uppercase">Insights & Articles</p>
        <h1 class="font-serif font-normal leading-tight tracking-tight text-white text-[clamp(2.5rem,6vw,4.5rem)] mt-4">
          The Headless Flower Blog
        </h1>
        <p class="mt-4 max-w-xl text-sm leading-relaxed text-neutral-400">
          Thoughts on web performance, accessibility, headless CMS content modeling, conversion design, and business systems.
        </p>
      </div>

      <!-- Main Layout Grid -->
      <div class="grid gap-12 lg:grid-cols-[280px_1fr] items-start">
        
        <!-- Left Column: Side Nav -->
        <aside class="space-y-8 lg:sticky lg:top-28">
          
          <!-- Search Box -->
          <div class="rounded-2xl border border-neutral-900 bg-neutral-950/60 p-5 backdrop-blur-md">
            <h3 class="text-[11px] font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-3">Search</h3>
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search posts..."
                class="w-full rounded-xl border border-neutral-900 bg-neutral-900/50 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition"
              />
              <span v-if="searchQuery" @click="searchQuery = ''" class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500 hover:text-white cursor-pointer select-none">
                ✕
              </span>
            </div>
          </div>

          <!-- Categories Filter -->
          <div class="rounded-2xl border border-neutral-900 bg-neutral-950/60 p-5 backdrop-blur-md">
            <h3 class="text-[11px] font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-4">Categories</h3>
            <nav class="flex flex-wrap gap-2 lg:flex-col lg:gap-1" aria-label="Blog categories">
              <button
                v-for="cat in categories"
                :key="cat"
                @click="selectedCategory = cat"
                :class="[
                  'px-3.5 py-2 text-xs font-semibold rounded-xl text-left transition select-none outline-none',
                  selectedCategory === cat
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/10'
                    : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'
                ]"
              >
                {{ cat }}
              </button>
            </nav>
          </div>

          <!-- Recent Posts Links -->
          <div class="rounded-2xl border border-neutral-900 bg-neutral-950/60 p-5 backdrop-blur-md hidden lg:block">
            <h3 class="text-[11px] font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-4">Recent Posts</h3>
            <ul class="space-y-4">
              <li v-for="post in recentPosts" :key="post.slug">
                <NuxtLink :to="`/blog/${post.slug}`" class="group block">
                  <p class="text-xs text-neutral-400 group-hover:text-red-500 font-medium line-clamp-2 transition-colors duration-200">
                    {{ post.title }}
                  </p>
                  <span class="text-[10px] text-neutral-600 mt-1 block">
                    {{ post.published }}
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </aside>

        <!-- Right Column: Blog Grid -->
        <section class="space-y-6">
          <div v-if="filteredPosts.length === 0" class="rounded-2xl border border-neutral-900 bg-neutral-950/30 p-12 text-center">
            <p class="text-neutral-500 text-sm">No articles match your search or filter options.</p>
            <button @click="resetFilters" class="mt-4 inline-flex text-xs font-semibold text-red-500 hover:underline">
              Reset search & filters
            </button>
          </div>

          <div v-else class="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            <article
              v-for="post in filteredPosts"
              :key="post.slug"
              class="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-800 hover:bg-neutral-900/40 hover:shadow-2xl hover:shadow-neutral-950/80"
            >
              <div>
                <!-- Badge and Date info -->
                <div class="flex items-center justify-between text-[11px] text-neutral-500">
                  <span :class="['font-semibold uppercase tracking-wider', getBadgeColorClass(post.color)]">
                    {{ post.categoryShort }}
                  </span>
                  <span>{{ post.readingTime }}</span>
                </div>

                <!-- Headline -->
                <h2 class="mt-4 font-serif text-lg font-normal text-white group-hover:text-red-500 leading-snug transition-colors duration-200">
                  <NuxtLink :to="`/blog/${post.slug}`">
                    {{ post.title }}
                  </NuxtLink>
                </h2>

                <!-- Description -->
                <p class="mt-3 text-xs leading-relaxed text-neutral-400 line-clamp-3">
                  {{ post.description }}
                </p>
              </div>

              <!-- Read Link Footer -->
              <div class="mt-6 flex items-center justify-between border-t border-neutral-900/60 pt-4">
                <span class="text-[11px] text-neutral-500">{{ post.published }}</span>
                <NuxtLink :to="`/blog/${post.slug}`" class="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 group-hover:text-white">
                  Read article
                  <span class="text-[10px] transform group-hover:translate-x-0.5 transition-transform" aria-hidden="true">→</span>
                </NuxtLink>
              </div>
            </article>
          </div>
        </section>

      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import posts from "~/data/posts";

useHead({
  title: "Blog — Headless Flower",
  meta: [
    { name: "description", content: "Explore insights, technical deep dives, and advice on building high-converting websites, web performance, accessibility, headless CMS, and security." },
    { property: "og:title", content: "Blog — Headless Flower" },
    { property: "og:type", content: "website" }
  ]
});

// Search & Filter State
const searchQuery = ref("");
const selectedCategory = ref("All");

// Categories lists
const categories = ["All", "Conversions", "CMS", "Security", "Performance", "Accessibility"];

// Recent posts (3 max)
const recentPosts = computed(() => {
  return posts.slice(0, 3);
});

// Reset filters convenience
const resetFilters = () => {
  searchQuery.value = "";
  selectedCategory.value = "All";
};

// Filtered posts calculation
const filteredPosts = computed(() => {
  return posts.filter(post => {
    const matchesSearch = searchQuery.value
      ? post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.value.toLowerCase())
      : true;

    const matchesCategory = selectedCategory.value === "All"
      ? true
      : post.categoryShort.toLowerCase() === selectedCategory.value.toLowerCase();

    return matchesSearch && matchesCategory;
  });
});

// Helper to style badge based on post color scheme
const getBadgeColorClass = (color: string) => {
  switch (color) {
    case "teal": return "text-teal-400";
    case "amber": return "text-amber-400";
    case "emerald": return "text-emerald-400";
    case "sky": return "text-sky-400";
    case "fuchsia": return "text-fuchsia-400";
    default: return "text-red-400";
  }
};
</script>

<style scoped>
</style>

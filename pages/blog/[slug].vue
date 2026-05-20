<template>
  <main v-if="post" class="min-h-screen bg-neutral-950 text-neutral-100">
    <!-- Hero -->
    <section class="relative overflow-hidden pt-24">
      <div class="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div class="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p :class="['mb-3 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ring-1', getBadgeClass(post.color)]">
              {{ post.category }}
            </p>
            <h1 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {{ post.title }}
            </h1>
            <p class="mt-4 max-w-2xl text-neutral-300">
              {{ post.description }}
            </p>
          </div>
          
          <NuxtLink
            to="/#contact"
            :class="['group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-neutral-950 transition focus:outline-none focus-visible:ring-2', getButtonClass(post.color)]"
          >
            Talk to us
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4 transition-transform group-hover:translate-x-0.5">
              <path d="M13.5 4.5L21 12l-7.5 7.5m7.5-7.5H3"/>
            </svg>
          </NuxtLink>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
            <p class="text-sm font-semibold text-neutral-300">Published</p>
            <p class="mt-1 text-lg">{{ post.published }}</p>
          </div>
          <div class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6">
            <p class="text-sm font-semibold text-neutral-300">Reading time</p>
            <p class="mt-1 text-lg">{{ post.readingTime }}</p>
          </div>
        </div>
      </div>
      
      <!-- Color blurred background -->
      <div :class="['pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b to-transparent blur-3xl', getGradientClass(post.color)]" aria-hidden="true" />
    </section>

    <!-- Body -->
    <section class="mx-auto max-w-3xl px-6 pb-24">
      <article class="space-y-10 text-neutral-200">
        
        <div v-for="(sec, idx) in post.sections" :key="idx">
          <h2 v-if="sec.title" :class="['text-2xl font-bold font-serif leading-snug tracking-tight mb-4', getTitleColorClass(post.color)]">
            {{ sec.title }}
          </h2>
          
          <!-- Subtitle / paragraph -->
          <p v-if="sec.subtitle" class="mt-3 text-neutral-300 leading-relaxed" v-html="sec.subtitle"></p>
          
          <!-- Unordered List -->
          <ul v-if="sec.type === 'list' && sec.items" class="mt-4 list-disc space-y-3 pl-5 text-neutral-300 leading-relaxed">
            <li v-for="item in sec.items" :key="item" v-html="item"></li>
          </ul>

          <!-- Ordered List -->
          <ol v-if="sec.type === 'ordered-list' && sec.items" class="mt-4 list-decimal space-y-3 pl-5 text-neutral-300 leading-relaxed">
            <li v-for="item in sec.items" :key="item" v-html="item"></li>
          </ol>

          <!-- Footer Link inside Section -->
          <p v-if="sec.footerLink" class="mt-4">
            <NuxtLink :to="sec.footerLink.to" :class="['hover:underline font-semibold transition-colors duration-200', getTitleColorClass(post.color)]">
              {{ sec.footerLink.text }}
            </NuxtLink>
          </p>
        </div>

      </article>

      <!-- CTA card -->
      <div v-if="post.cta" :class="['mt-12 rounded-2xl border p-6 transition-all duration-300', getCtaCardClass(post.color)]">
        <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 class="text-lg font-semibold text-white">{{ post.cta.title }}</h3>
            <p class="mt-1 text-neutral-300 text-xs">{{ post.cta.subtitle }}</p>
          </div>
          <NuxtLink
            :to="post.cta.to"
            :class="['inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-neutral-950 transition focus:outline-none focus-visible:ring-2', getButtonClass(post.color)]"
          >
            {{ post.cta.label || 'Contact us' }}
          </NuxtLink>
        </div>
      </div>

      <!-- Navigation back to list -->
      <div class="mt-12 border-t border-neutral-900 pt-6">
        <NuxtLink to="/blog" class="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-white transition duration-200">
          ← Back to Blog
        </NuxtLink>
      </div>
    </section>
  </main>
  
  <!-- Post Not Found Fallback -->
  <main v-else class="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center p-6 pt-24">
    <div class="text-center max-w-md">
      <h1 class="text-3xl font-bold font-serif mb-4 text-red-500">Post Not Found</h1>
      <p class="text-sm text-neutral-400 leading-relaxed mb-6">
        We couldn't locate the blog article you're looking for. It may have been moved or had its URL updated.
      </p>
      <NuxtLink to="/blog" class="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-500 transition duration-200">
        Back to Blog Listing
      </NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import posts from "~/data/posts";

const route = useRoute();
const post = posts.find(p => p.slug === route.params.slug);

// Configure dynamic SEO head tag attributes
if (post) {
  useHead({
    title: `${post.title} — Headless Flower`,
    meta: [
      { name: "description", content: post.description },
      { property: "og:title", content: post.title },
      { property: "og:description", content: post.description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  });
} else {
  useHead({
    title: "Post Not Found — Headless Flower"
  });
}

// Styling Helpers for Dynamic Themes
const getBadgeClass = (color: string) => {
  switch (color) {
    case "teal": return "bg-teal-400/10 text-teal-300 ring-teal-400/30";
    case "amber": return "bg-amber-400/10 text-amber-300 ring-amber-400/30";
    case "emerald": return "bg-emerald-400/10 text-emerald-300 ring-emerald-400/30";
    case "sky": return "bg-sky-400/10 text-sky-300 ring-sky-400/30";
    case "fuchsia": return "bg-fuchsia-400/10 text-fuchsia-300 ring-fuchsia-400/30";
    default: return "bg-red-400/10 text-red-300 ring-red-400/30";
  }
};

const getButtonClass = (color: string) => {
  switch (color) {
    case "teal": return "bg-teal-500 hover:bg-teal-400 focus-visible:ring-teal-400";
    case "amber": return "bg-amber-500 hover:bg-amber-400 focus-visible:ring-amber-400";
    case "emerald": return "bg-emerald-500 hover:bg-emerald-400 focus-visible:ring-emerald-400";
    case "sky": return "bg-sky-500 hover:bg-sky-400 focus-visible:ring-sky-400";
    case "fuchsia": return "bg-fuchsia-500 hover:bg-fuchsia-400 focus-visible:ring-fuchsia-400";
    default: return "bg-red-500 hover:bg-red-400 focus-visible:ring-red-400";
  }
};

const getGradientClass = (color: string) => {
  switch (color) {
    case "teal": return "from-teal-500/10";
    case "amber": return "from-amber-500/10";
    case "emerald": return "from-emerald-500/10";
    case "sky": return "from-sky-500/10";
    case "fuchsia": return "from-fuchsia-500/10";
    default: return "from-red-500/10";
  }
};

const getTitleColorClass = (color: string) => {
  switch (color) {
    case "teal": return "text-teal-400";
    case "amber": return "text-amber-400";
    case "emerald": return "text-emerald-400";
    case "sky": return "text-sky-400";
    case "fuchsia": return "text-fuchsia-400";
    default: return "text-red-400";
  }
};

const getCtaCardClass = (color: string) => {
  switch (color) {
    case "teal": return "border-teal-400/30 bg-teal-400/10";
    case "amber": return "border-amber-400/30 bg-amber-400/10";
    case "emerald": return "border-emerald-400/30 bg-emerald-400/10";
    case "sky": return "border-sky-400/30 bg-sky-400/10";
    case "fuchsia": return "border-fuchsia-400/30 bg-fuchsia-400/10";
    default: return "border-red-400/30 bg-red-400/10";
  }
};
</script>

<style scoped>
</style>

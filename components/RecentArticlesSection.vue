<template>
  <section class="bg-neutral-950 px-6 py-16 text-white lg:px-12 lg:py-20">
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="text-[12px] font-semibold uppercase tracking-[0.18em] text-red-500">
            Recent articles
          </p>
          <h2 class="mt-4 font-serif text-[clamp(2.25rem,4.5vw,4rem)] leading-[0.95] tracking-tight">
            Latest thinking from the blog.
          </h2>
        </div>

        <NuxtLink
          to="/blog"
          class="inline-flex h-11 w-fit items-center justify-center rounded-full border border-white/15 px-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
        >
          View all articles
          <span class="ml-2 text-white/50" aria-hidden="true">→</span>
        </NuxtLink>
      </div>

      <div class="mt-8 grid gap-5 md:grid-cols-3">
        <article
          v-for="post in recentPosts"
          :key="post.slug"
          class="group flex min-h-[18rem] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
        >
          <div>
            <div class="flex items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.14em]">
              <span :class="badgeClass(post.color)">{{ post.categoryShort }}</span>
              <span class="text-white/40">{{ post.readingTime }}</span>
            </div>

            <h3 class="mt-5 font-serif text-2xl leading-tight tracking-tight text-white transition group-hover:text-red-500">
              <NuxtLink :to="`/blog/${post.slug}`">
                {{ post.title }}
              </NuxtLink>
            </h3>

            <p class="mt-4 line-clamp-3 text-sm leading-relaxed text-white/60">
              {{ post.description }}
            </p>
          </div>

          <div class="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
            <span class="text-xs text-white/45">{{ post.published }}</span>
            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="text-xs font-semibold uppercase tracking-[0.14em] text-white/70 transition group-hover:text-white"
            >
              Read
              <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import posts from "~/data/posts";

type BlogPost = {
  slug: string;
  categoryShort: string;
  color: string;
  title: string;
  description: string;
  published: string;
  readingTime: string;
};

function publishedTime(post: BlogPost) {
  const time = new Date(post.published).getTime();
  return Number.isNaN(time) ? 0 : time;
}

const recentPosts = [...(posts as BlogPost[])]
  .sort((a, b) => publishedTime(b) - publishedTime(a))
  .slice(0, 3);

function badgeClass(color: string) {
  switch (color) {
    case "teal":
      return "text-teal-400";
    case "amber":
      return "text-amber-400";
    case "emerald":
      return "text-emerald-400";
    case "sky":
      return "text-sky-400";
    case "fuchsia":
      return "text-fuchsia-400";
    default:
      return "text-red-400";
  }
}
</script>

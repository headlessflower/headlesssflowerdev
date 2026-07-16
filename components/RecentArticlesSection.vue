<script setup lang="ts">
import posts from "~/data/posts";

type BlogPost = {
  slug: string;
  categoryShort: string;
  title: string;
  description: string;
  published: string;
};

const articleImages = [
  "/solar-sustain-thumbnail.png",
  "/blog/solar-sustain/landing-hero.png",
  "/guava-preview.png",
];

function publishedTime(post: BlogPost) {
  const time = new Date(post.published).getTime();
  return Number.isNaN(time) ? 0 : time;
}

const recentPosts = [...(posts as BlogPost[])]
  .sort((a, b) => publishedTime(b) - publishedTime(a))
  .slice(0, 3)
  .map((post, index) => ({
    ...post,
    image: articleImages[index] || "/dev-hero-alt.png",
  }));
</script>

<template>
  <section class="bg-[#f7f7f4] px-5 py-20 text-[#080808] sm:px-8 lg:py-28">
    <div class="mx-auto max-w-[96rem]">
      <div class="flex items-start justify-between gap-8">
        <h2 class="text-2xl font-semibold">(Latest updates)</h2>
        <NuxtLink to="/blog" class="text-3xl font-semibold hf-link">
          Read all Articles
        </NuxtLink>
      </div>

      <div class="mt-20 grid gap-10 lg:grid-cols-3">
        <article v-for="post in recentPosts" :key="post.slug" class="group">
          <NuxtLink :to="`/blog/${post.slug}`" class="block">
            <img
              :src="post.image"
              :alt="`${post.title} article preview`"
              class="aspect-[1.25/1] w-full object-cover transition duration-500 group-hover:brightness-90"
            />
            <p class="mt-5 text-lg font-semibold text-black/48">
              {{ post.categoryShort }}
            </p>
            <h3 class="mt-4 text-[clamp(1.75rem,2.3vw,2.65rem)] font-semibold leading-[1.02] tracking-normal">
              {{ post.title }}
            </h3>
          </NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>

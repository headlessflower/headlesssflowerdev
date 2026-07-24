<template>
  <main v-if="post" class="min-h-screen bg-[#f7f7f4] text-[#080808]">
    <section class="px-5 pb-14 pt-32 sm:px-8 lg:pb-20 lg:pt-40">
      <div class="mx-auto grid max-w-[96rem] gap-14 lg:grid-cols-[0.24fr_0.76fr]">
        <aside class="text-2xl font-semibold">
          <p>({{ post.categoryShort || "Article" }})</p>
        </aside>

        <div>
          <div class="flex flex-wrap gap-x-8 gap-y-3 border-b border-black/10 pb-8 text-xl font-semibold text-black/48">
            <span>{{ post.published }}</span>
            <span>{{ post.readingTime }}</span>
            <span>{{ post.category }}</span>
          </div>

          <h1 class="mt-10 max-w-7xl text-[clamp(4rem,8vw,9.25rem)] font-bold leading-[0.9] tracking-normal">
            {{ post.title }}
          </h1>
          <p class="mt-10 max-w-4xl text-[clamp(1.45rem,2vw,2.35rem)] font-semibold leading-[1.12] text-black/56">
            {{ post.description }}
          </p>
        </div>
      </div>
    </section>

    <section class="px-5 sm:px-8">
      <div class="mx-auto grid max-w-[96rem] gap-12 border-t border-black/10 py-12 lg:grid-cols-[0.24fr_0.76fr]">
        <aside class="hidden lg:block">
          <div class="sticky top-28 space-y-8">
            <NuxtLink to="/blog" class="text-2xl font-semibold">
              Back to Blog
            </NuxtLink>
            <div class="border-t border-black/10 pt-6 text-xl font-semibold leading-tight text-black/44">
              <p>Published</p>
              <p class="mt-2 text-black/70">{{ post.published }}</p>
              <p class="mt-8">Read time</p>
              <p class="mt-2 text-black/70">{{ post.readingTime }}</p>
            </div>
          </div>
        </aside>

        <article class="article-copy">
          <section
            v-for="(sec, idx) in post.sections"
            :key="idx"
            class="border-b border-black/10 py-12 first:pt-0"
          >
            <h2
              v-if="sec.title"
              class="max-w-5xl text-[clamp(2.75rem,5vw,6.25rem)] font-bold leading-[0.92] tracking-normal"
            >
              {{ sec.title }}
            </h2>

            <div
              v-if="sec.subtitle"
              class="mt-7 max-w-4xl text-[clamp(1.35rem,1.75vw,2rem)] font-semibold leading-[1.2] text-black/58"
              v-html="sec.subtitle"
            />

            <figure v-if="sec.image" class="mt-10">
              <img
                :src="sec.image.src"
                :alt="sec.image.alt"
                class="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
              <figcaption
                v-if="sec.image.caption"
                class="border-b border-black/10 border-t border-black/10 py-4 text-xl font-semibold leading-tight text-black/44"
              >
                {{ sec.image.caption }}
              </figcaption>
            </figure>

            <ul
              v-if="sec.type === 'list' && sec.items"
              class="mt-8"
            >
              <li
                v-for="item in sec.items"
                :key="item"
                class="border-t border-black/10 py-5 text-[clamp(1.3rem,1.8vw,2.1rem)] font-semibold leading-[1.16] text-black/68 last:border-b"
                v-html="item"
              />
            </ul>

            <ol
              v-if="sec.type === 'ordered-list' && sec.items"
              class="mt-8 list-none"
            >
              <li
                v-for="(item, itemIndex) in sec.items"
                :key="item"
                class="grid gap-5 border-t border-black/10 py-5 text-[clamp(1.3rem,1.8vw,2.1rem)] font-semibold leading-[1.16] text-black/68 last:border-b sm:grid-cols-[4.5rem_1fr]"
              >
                <span class="text-black/32">
                  {{ String(itemIndex + 1).padStart(2, "0") }}
                </span>
                <span v-html="item" />
              </li>
            </ol>

            <p v-if="sec.footerLink" class="mt-8">
              <NuxtLink :to="sec.footerLink.to" class="text-2xl font-semibold">
                {{ sec.footerLink.text }}
              </NuxtLink>
            </p>
          </section>
        </article>
      </div>
    </section>

    <section v-if="post.cta" class="bg-[#080808] px-5 py-16 text-[#f7f7f4] sm:px-8 lg:py-24">
      <div class="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
        <h2 class="text-[clamp(3.4rem,7vw,8.5rem)] font-bold leading-[0.9] tracking-normal">
          {{ post.cta.title }}
        </h2>
        <div>
          <p class="text-[clamp(1.45rem,2vw,2.35rem)] font-semibold leading-[1.12] text-white/56">
            {{ post.cta.subtitle }}
          </p>
          <NuxtLink :to="post.cta.to" class="mt-8 inline-block text-2xl font-semibold">
            {{ post.cta.label || "Contact us" }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="px-5 py-12 sm:px-8">
      <div class="mx-auto flex max-w-[96rem] justify-between border-t border-black/10 pt-8 text-2xl font-semibold">
        <NuxtLink to="/blog">
          Back to Blog
        </NuxtLink>
        <NuxtLink to="/#contact">
          Start a project
        </NuxtLink>
      </div>
    </section>
  </main>

  <main v-else class="flex min-h-screen flex-col items-center justify-center bg-[#f7f7f4] p-6 pt-24 text-[#080808]">
    <div class="max-w-2xl text-center">
      <p class="text-2xl font-semibold">(Not found)</p>
      <h1 class="mt-6 text-[clamp(4rem,8vw,8rem)] font-bold leading-[0.9] tracking-normal">
        Article not found.
      </h1>
      <p class="mt-6 text-2xl font-semibold leading-tight text-black/56">
        We could not locate the blog article you are looking for. It may have been moved or had its URL updated.
      </p>
      <NuxtLink to="/blog" class="mt-8 inline-block text-2xl font-semibold">
        Back to Blog
      </NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import posts from "~/data/posts";

const route = useRoute();
const post = posts.find((p) => p.slug === route.params.slug);

if (post) {
  useHead({
    title: `${post.title} | Headless Flower`,
    meta: [
      { name: "description", content: post.description },
      { property: "og:title", content: post.title },
      { property: "og:description", content: post.description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  });
} else {
  useHead({
    title: "Article Not Found | Headless Flower",
  });
}
</script>

<style scoped>
.article-copy :deep(strong) {
  color: #080808;
  font-weight: 700;
}

.article-copy :deep(a) {
  color: #080808;
  font-weight: 700;
}

.article-copy :deep(br) {
  content: "";
  display: block;
  margin-top: 1em;
}
</style>

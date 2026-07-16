<script setup lang="ts">
import { computed, unref } from "vue";
import { projects } from "~/data/projects.js";

type Project = {
  id: string | number;
  name: string;
  img?: string;
  tags?: string[];
  link: string;
};

const projectList = computed<Project[]>(() => {
  const raw = unref(projects);
  return Array.isArray(raw) ? raw : [];
});

function tagLine(project: Project) {
  return project.tags?.join(" / ") || "Digital system";
}

function isExternal(link: string) {
  return /^https?:\/\//i.test(link);
}

useHead({
  title: "All Projects | Headless Flower",
  meta: [
    {
      name: "description",
      content:
        "Browse the full Headless Flower project archive: websites, business systems, brand-aligned tools, and digital products.",
    },
  ],
});
</script>

<template>
  <main class="bg-[#f7f7f4] text-[#080808]">
    <section class="px-5 pb-14 pt-32 sm:px-8 lg:pb-20 lg:pt-40">
      <div class="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[0.34fr_0.66fr]">
        <p class="text-2xl font-semibold">(All projects)</p>

        <div>
          <h1 class="max-w-6xl text-[clamp(4rem,8.8vw,10.5rem)] font-bold leading-[0.88] tracking-normal">
            Full project archive.
          </h1>
          <p class="mt-10 max-w-3xl text-[clamp(1.45rem,2vw,2.35rem)] font-semibold leading-[1.12] text-black/56">
            Websites, systems, tools, and experiments shaped around clarity, conversion, and maintainable execution.
          </p>
        </div>
      </div>
    </section>

    <section class="border-t border-black/10 px-5 py-14 sm:px-8 lg:py-20">
      <div class="mx-auto max-w-[96rem]">
        <div class="grid gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="project in projectList"
            :key="project.id"
            class="group"
          >
            <a
              v-if="isExternal(project.link)"
              :href="project.link"
              target="_blank"
              rel="noreferrer"
              class="block"
            >
              <img
                :src="project.img"
                :alt="`${project.name} project preview`"
                class="aspect-[1.08/1] w-full object-cover transition duration-500 group-hover:brightness-90"
              />
            </a>

            <NuxtLink v-else :to="project.link" class="block">
              <img
                :src="project.img"
                :alt="`${project.name} project preview`"
                class="aspect-[1.08/1] w-full object-cover transition duration-500 group-hover:brightness-90"
              />
            </NuxtLink>

            <div class="mt-5">
              <h2 class="text-[clamp(1.8rem,2.4vw,3rem)] font-semibold leading-none">
                {{ project.name }}
              </h2>
              <p class="mt-2 text-[clamp(1.25rem,1.6vw,1.8rem)] font-semibold leading-tight text-black/48">
                {{ tagLine(project) }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

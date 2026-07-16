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

const featured = computed<Project[]>(() => {
  const raw = unref(projects);
  return Array.isArray(raw) ? raw.slice(0, 4) : [];
});

function tagLine(project: Project) {
  return project.tags?.slice(0, 2).join(" / ") || "Digital system";
}

function isExternal(link: string) {
  return /^https?:\/\//i.test(link);
}
</script>

<template>
  <section class="bg-[#f7f7f4] px-5 py-16 text-[#080808] sm:px-8 lg:py-24">
    <div class="mx-auto max-w-[96rem]">
      <div class="grid items-start gap-8 lg:grid-cols-[1fr_0.45fr_auto]">
        <h2 class="text-[clamp(4.5rem,9.7vw,11rem)] font-bold leading-[0.82] tracking-normal">
          Featured Work
        </h2>

        <p class="max-w-md pt-3 text-3xl font-semibold leading-tight">
          Selected websites, systems, and brand-aligned tools.
        </p>

        <NuxtLink to="/work/projects" class="pt-4 text-3xl font-semibold hf-link">
          See all Projects
        </NuxtLink>
      </div>

      <div class="mt-16 grid gap-x-8 gap-y-16 lg:grid-cols-2">
        <article v-for="project in featured" :key="project.id" class="group">
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

          <div class="mt-6">
            <h3 class="text-3xl font-semibold leading-none">{{ project.name }}</h3>
            <p class="mt-1 text-3xl font-semibold leading-none text-black/48">
              {{ tagLine(project) }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

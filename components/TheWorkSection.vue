<template>
  <section class="bg-neutral-100 text-neutral-950">
    <div class="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
      <!-- Header -->
      <p class="text-[12px] font-semibold tracking-[0.18em] text-neutral-900/70">
        WORK
      </p>

      <!-- Preview + Rows -->
      <div class="mt-10 grid gap-10 lg:grid-cols-[420px_1fr]">
        <!-- Preview area (desktop only) -->
        <div class="hidden lg:block">
          <div class="sticky top-24">
            <div
                class="relative aspect-[4/3] w-full overflow-hidden rounded-2xl
                     ring-1 ring-black/5"
            >
              <!-- VIDEO PREVIEW -->
              <transition
                  enter-active-class="duration-200 ease-out"
                  enter-from-class="opacity-0"
                  enter-to-class="opacity-100"
                  leave-active-class="duration-150 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
              >
                <video
                    v-if="active?.video"
                    :key="`video-${active.id}`"
                    :src="active.video"
                    class="h-full w-full object-cover"
                    autoplay
                    muted
                    loop
                    playsinline
                />
              </transition>

              <!-- IMAGE FALLBACK -->
              <transition
                  enter-active-class="duration-200 ease-out"
                  enter-from-class="opacity-0"
                  enter-to-class="opacity-100"
                  leave-active-class="duration-150 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
              >
                <img
                    v-if="active && !active.video"
                    :key="`img-${active.id}`"
                    :src="active.img"
                    :alt="`${active.name} preview`"
                    class="h-full w-full object-cover"
                />
              </transition>
            </div>
          </div>
        </div>

        <!-- Project rows -->
        <div>
          <div class="border-t border-neutral-900/10">
            <div
                v-for="p in list"
                :key="p.id"
                class="group grid items-center gap-6 border-b border-neutral-900/10 py-6
                     md:grid-cols-[180px_1fr_auto]"
                @mouseenter="setActive(p)"
                @mouseleave="clearActive"
                @focusin="setActive(p)"
                @focusout="clearActive"
            >
              <!-- Tags -->
              <div class="text-[12px] font-semibold tracking-[0.14em] text-neutral-900/55 uppercase">
                {{ p.tags?.length ? tagLabel(p.tags) : "—" }}
              </div>

              <!-- Title -->
              <div
                  class="text-[18px] font-semibold leading-snug tracking-tight
                       text-neutral-900/35 transition-colors
                       group-hover:text-neutral-900"
              >
                {{ p.name }}
              </div>

              <!-- READ MORE -->
              <div v-if="isExternal(p.link)">
              <a
                  :href="p.link"
                  target="_blank"
                  rel="noreferrer"
                  class="flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em]
           text-neutral-900/35 hover:text-neutral-900/80"
              >
                EXPLORE
                <span class="inline-flex h-5 w-5 items-center justify-center rounded border border-neutral-900/15 text-[11px]" aria-hidden="true">
                     ↗
                </span>
              </a>
              </div>
      <div v-else>
          <NuxtLink
      :to="p.link"
      class="flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em]
           text-neutral-900/35 hover:text-neutral-900/80">
    EXPLORE
    <span class="inline-flex h-5 w-5 items-center justify-center rounded border border-neutral-900/15 text-[11px]" aria-hidden="true">
      ↗
    </span>
              </NuxtLink>
              </div>
              <div v-if="active?.id === p.id" class="md:col-span-3 lg:hidden" >
                <div
                    class="mt-3 overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
                  <video
                      v-if="p.video"
                      :src="p.video"
                      class="h-56 w-full object-cover sm:h-72"
                      autoplay
                      muted
                      loop
                      playsinline
                  />
                  <img
                      v-else
                      :src="p.img"
                      :alt="`${p.name} preview`"
                      class="h-56 w-full object-cover sm:h-72"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom CTA -->
          <div class="mt-10 flex justify-end">
            <NuxtLink
                to="/work"
                class="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em]
                     text-neutral-900/70 hover:text-neutral-900"
            >
              VIEW ALL PROJECTS
              <span
                  class="inline-flex h-5 w-5 items-center justify-center rounded border
                       border-neutral-900/20 text-[11px]"
                  aria-hidden="true"
              >
                ↗
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, unref } from "vue";
import { projects } from "~/data/projects.js";
import { NuxtLink } from "#components";

type Project = {
  id: string | number;
  name: string;
  img?: string;
  video?: string;
  tags?: string[];
  link: string;
};

const list = computed<Project[]>(() => {
  const raw = unref(projects);
  return Array.isArray(raw) ? raw : [];
});

const active = ref<Project | null>(null);

function setActive(project: Project) {
  active.value = project;
}

function clearActive() {
  active.value = null;
}

function tagLabel(tags: string[]) {
  const cleaned = tags.map((t) => t.trim()).filter(Boolean);
  const first = cleaned.slice(0, 2).join(" + ");
  const rest = cleaned.length - 2;
  return rest > 0 ? `${first} + ${rest}` : first;
}

function isExternal(link: string) {
  return /^https?:\/\//i.test(link);
}
</script>

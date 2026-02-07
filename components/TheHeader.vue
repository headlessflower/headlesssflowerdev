<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

const mobileOpen = ref(false);
const scrolled = ref(false);

const onKey = (e: KeyboardEvent) => {
  if (e.key === "Escape") mobileOpen.value = false;
};

const onScroll = () => {
  scrolled.value = window.scrollY > 8;
};

onMounted(() => {
  window.addEventListener("keydown", onKey);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKey);
  window.removeEventListener("scroll", onScroll);
});

const headerClass = computed(() => {
  return [
    "fixed top-0 left-0 right-0 z-50",
    "text-white",
    scrolled.value
        ? "bg-neutral-950/30 backdrop-blur-md border-b border-white/10"
        : "bg-transparent border-b border-transparent",
  ].join(" ");
});
</script>

<template>
  <header :class="headerClass">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
      <div class="flex h-16 items-center justify-between md:h-20">
        <!-- Left: Wordmark -->
        <NuxtLink
            to="/"
            class="text-2xl font-black tracking-tight sm:text-3xl"
            aria-label="Headless Flower home"
        >
          HEADLESSFLOWER
        </NuxtLink>

        <!-- Center: Stacked nav (desktop) -->
        <nav class="hidden md:block">
          <div class="grid grid-cols-[auto_auto] gap-x-8">
            <!-- Left column (stack) -->
            <ul class="space-y-1 text-[12px] font-medium leading-tight tracking-[0.18em] text-white/90">
              <li><NuxtLink to="/agency" class="hover:text-white">ABOUT</NuxtLink></li>
              <li><NuxtLink to="/services" class="hover:text-white">SERVICES</NuxtLink></li>
              <li><NuxtLink to="/work/projects" class="hover:text-white">WORK</NuxtLink></li>
            </ul>

            <!-- Right column (small aligned items like “EDA / ASICS”) -->

          </div>
        </nav>

        <!-- Right: CTA -->
        <div class="flex items-center gap-3">
          <NuxtLink
              to="#contact"
              class="hidden sm:inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-white/90 hover:text-white"
          >
            LET’S TALK
            <span
                class="inline-flex h-5 w-5 items-center justify-center rounded border border-white/30 text-[11px] text-white/80"
                aria-hidden="true"
            >
              ↗
            </span>
          </NuxtLink>

          <!-- Mobile toggle -->
          <button
              class="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:bg-white/10 md:hidden"
              @click="mobileOpen = !mobileOpen"
              :aria-expanded="mobileOpen"
              aria-controls="mobile-menu"
          >
            <span class="sr-only">Toggle menu</span>
            <svg v-if="!mobileOpen" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
    >
      <div
          v-if="mobileOpen"
          id="mobile-menu"
          class="md:hidden border-t border-white/10 bg-neutral-950/85 backdrop-blur-md"
      >
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-12">
          <div class="grid gap-3 text-sm font-semibold tracking-[0.16em] text-white/90">
            <NuxtLink to="/agency" class="rounded-lg px-3 py-3 hover:bg-white/10" @click="mobileOpen = false">ABOUT</NuxtLink>
            <NuxtLink to="/services" class="rounded-lg px-3 py-3 hover:bg-white/10" @click="mobileOpen = false">SERVICES</NuxtLink>
            <NuxtLink to="/work/projects" class="rounded-lg px-3 py-3 hover:bg-white/10" @click="mobileOpen = false">WORK</NuxtLink>
            <NuxtLink to="/agency#process" class="rounded-lg px-3 py-3 hover:bg-white/10" @click="mobileOpen = false">PROCESS</NuxtLink>
            <NuxtLink to="/agency#careers" class="rounded-lg px-3 py-3 hover:bg-white/10" @click="mobileOpen = false">CAREERS</NuxtLink>

            <div class="mt-3">
              <NuxtLink
                  to="#contact"
                  class="inline-flex w-full items-center justify-between rounded-full border border-white/20 bg-white/10 px-5 py-3 text-[12px] font-semibold tracking-[0.2em] text-white hover:bg-white/15"
                  @click="mobileOpen = false"
              >
                LET’S TALK
                <span class="inline-flex h-6 w-6 items-center justify-center rounded border border-white/30 text-[11px] text-white/80">
                  ↗
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const mobileOpen = ref(false);
const scrolled = ref(false);
const route = useRoute();

const navLinks = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/agency" },
  { label: "Services", to: "/services" },
  { label: "News", to: "/blog" },
];

function closeMenu() {
  mobileOpen.value = false;
}

function onKey(event: KeyboardEvent) {
  if (event.key === "Escape") closeMenu();
}

function onScroll() {
  scrolled.value = window.scrollY > 10;
}

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
  const startsOnDark = route.path === "/" || route.path === "/agency";
  return [
    "fixed left-0 right-0 top-0 z-50 transition-colors duration-200",
    scrolled.value || mobileOpen.value
      ? "bg-[#f7f7f4]/88 text-[#080808] backdrop-blur-xl"
      : startsOnDark
        ? "bg-transparent text-[#f7f7f4]"
        : "bg-transparent text-[#080808]",
  ].join(" ");
});
</script>

<template>
  <header :class="headerClass">
    <div class="mx-auto flex h-16 max-w-[96rem] items-center justify-between px-5 sm:px-8 lg:h-20">
      <NuxtLink
        to="/"
        class="text-[clamp(1.7rem,3vw,2.75rem)] font-bold leading-none tracking-normal"
        aria-label="Headless Flower home"
      >
        Headless Flower
      </NuxtLink>

      <nav class="hidden items-center gap-10 text-[clamp(1rem,1.35vw,1.45rem)] font-semibold md:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <NuxtLink
        to="#contact"
        class="hidden text-[clamp(1rem,1.35vw,1.45rem)] font-semibold md:inline-flex"
      >
        Start a project
      </NuxtLink>

      <button
        class="inline-flex h-10 w-10 items-center justify-center text-3xl leading-none md:hidden"
        type="button"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-menu"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="sr-only">Toggle menu</span>
        <span aria-hidden="true">{{ mobileOpen ? "×" : "+" }}</span>
      </button>
    </div>

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
        class="border-t border-black/10 bg-[#f7f7f4] px-5 pb-8 pt-4 text-[#080808] md:hidden"
      >
        <nav class="grid gap-2 text-4xl font-bold leading-tight">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.label"
            :to="link.to"
            class="border-b border-black/10 py-3"
            @click="closeMenu"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="#contact" class="py-3" @click="closeMenu">
            Start a project
          </NuxtLink>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

const mobileOpen = ref(false);
const serviceDropdownOpen = ref(false);
const serviceDropdown = ref<HTMLElement | null>(null);
const scrolled = ref(false);
const route = useRoute();

const navLinks = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/agency" },
];

const serviceLinks = [
  { label: "Services overview", to: "/services" },
  { label: "Web Design", to: "/web-design" },
  { label: "Lead Capture", to: "/lead-capture-booking" },
  { label: "Business Systems", to: "/white-label-business-apps" },
  { label: "Managed Presence", to: "/managed-web-presence" },
  { label: "Maintenance", to: "/maintenance-upkeep" },
  { label: "SEO & Analytics", to: "/seo-analytics" },
  { label: "Brand-Aligned Design", to: "/brand-aligned-design" },
];

function closeMenu() {
  mobileOpen.value = false;
  serviceDropdownOpen.value = false;
}

function onKey(event: KeyboardEvent) {
  if (event.key === "Escape") closeMenu();
}

function onServiceFocusOut(event: FocusEvent) {
  const nextTarget = event.relatedTarget;

  if (!(nextTarget instanceof Node) || !serviceDropdown.value?.contains(nextTarget)) {
    serviceDropdownOpen.value = false;
  }
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

watch(
  () => route.fullPath,
  () => closeMenu(),
);

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

        <div
          ref="serviceDropdown"
          class="relative"
          @mouseenter="serviceDropdownOpen = true"
          @mouseleave="serviceDropdownOpen = false"
          @focusin="serviceDropdownOpen = true"
          @focusout="onServiceFocusOut"
        >
          <NuxtLink
            to="/services"
            class="inline-flex items-center gap-1"
            aria-haspopup="true"
            :aria-expanded="serviceDropdownOpen"
            @click="closeMenu"
          >
            Services
            <span
              class="text-base leading-none transition duration-300"
              :class="serviceDropdownOpen ? 'rotate-180' : ''"
              aria-hidden="true"
            >
              ↓
            </span>
          </NuxtLink>

          <div
            class="absolute left-1/2 top-full w-[min(28rem,calc(100vw-2rem))] -translate-x-1/2 pt-5 transition duration-200"
            :class="serviceDropdownOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'"
          >
            <div class="border border-black/10 bg-[#f7f7f4] p-5 text-[#080808] shadow-[0_24px_60px_rgba(0,0,0,0.14)]">
              <div class="grid gap-1">
                <NuxtLink
                  v-for="service in serviceLinks"
                  :key="service.to"
                  :to="service.to"
                  class="block border-b border-black/10 py-3 text-xl font-semibold last:border-b-0"
                  @click="closeMenu"
                >
                  {{ service.label }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <NuxtLink to="/blog">
          News
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
          <div class="border-b border-black/10 py-3">
            <NuxtLink to="/services" @click="closeMenu">
              Services
            </NuxtLink>
            <div class="mt-4 grid gap-1 text-xl font-semibold leading-tight text-black/56">
              <NuxtLink
                v-for="service in serviceLinks.slice(1)"
                :key="service.to"
                :to="service.to"
                class="py-1"
                @click="closeMenu"
              >
                {{ service.label }}
              </NuxtLink>
            </div>
          </div>
          <NuxtLink
            to="/blog"
            class="border-b border-black/10 py-3"
            @click="closeMenu"
          >
            News
          </NuxtLink>
          <NuxtLink to="#contact" class="py-3" @click="closeMenu">
            Start a project
          </NuxtLink>
        </nav>
      </div>
    </transition>
  </header>
</template>

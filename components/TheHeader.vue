<script setup lang="ts">

import { ref, onMounted, onBeforeUnmount } from 'vue'

const mobileOpen = ref(false)
const mobileServicesOpen = ref(false)
const servicesOpen = ref(false) // kept for a11y events; desktop hover handles visibility

// Close mobile menu on route change (optional if you use a global watcher elsewhere)
const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    mobileOpen.value = false
    mobileServicesOpen.value = false
  }
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))

</script>
<template>
  <header class="w-full border-b border-neutral-200/20 fixed top-0 bg-white dark:bg-neutral-950 text-neutral-100 z-10">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <!-- Brand -->
      <NuxtLink to="/" class="text-lg font-bold tracking-tight">Headless Flower</NuxtLink>

      <!-- Mobile toggle -->
      <button
          class="inline-flex items-center rounded-md p-2 lg:hidden hover:bg-neutral-800/60 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          @click="mobileOpen = !mobileOpen"
          aria-controls="mobile-nav"
          :aria-expanded="mobileOpen"
      >
        <span class="sr-only">Open main menu</span>
        <svg class="size-6"  viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"/>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Desktop nav -->
      <nav class="hidden lg:flex lg:items-center lg:gap-8">
        <NuxtLink to="/" class="hover:text-yellow-300 duration-150">Home</NuxtLink>

        <!-- Services dropdown (desktop: hover/focus; mobile handled below) -->
        <div
            class="relative group"
            @keydown.escape="servicesOpen = false"
            @focusin="servicesOpen = true"
            @focusout="servicesOpen = false"
        >
          <button
              class="inline-flex items-center gap-1 hover:text-yellow-300 duration-150 focus:outline-none"
              @click.prevent
              aria-haspopup="true"
              aria-expanded="false"
          >
            Services
            <svg class="size-4 transition-transform group-hover:rotate-180" viewBox="0 0 20 20"  aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd"/>
            </svg>
          </button>

          <!-- Menu -->
          <div
              class="absolute dropdown-menu left-0  w-56 rounded-lg border border-neutral-800 bg-neutral-900 shadow-xl opacity-0 invisible
                   group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible
                   transition duration-150 z-50"
              role="menu"
          >
            <ul class="py-2 text-sm">
              <li><NuxtLink to="/services" class="block px-4 py-2 hover:bg-neutral-800" role="menuitem">All Services</NuxtLink></li>
              <li><NuxtLink to="/starter-package" class="block px-4 py-2 hover:bg-neutral-800" role="menuitem">Starter Package</NuxtLink></li>
              <li><NuxtLink to="/standard-package" class="block px-4 py-2 hover:bg-neutral-800" role="menuitem">Standard Package</NuxtLink></li>
              <li><NuxtLink to="/premium-package" class="block px-4 py-2 hover:bg-neutral-800" role="menuitem">Premium Package</NuxtLink></li>
            </ul>
          </div>
        </div>

        <NuxtLink to="/services" class="hover:text-yellow-300 duration-150">Work</NuxtLink>
        <NuxtLink to="/agency" class="hover:text-yellow-300 duration-150">About</NuxtLink>
        <NuxtLink to="#contact" class="rounded-lg bg-yellow-300 px-4 py-2 font-semibold text-neutral-900 hover:-translate-y-0.5 hover:shadow-lg duration-150">Get a Quote</NuxtLink>
      </nav>
    </div>

    <!-- Mobile nav -->
    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2"
                enter-to-class="opacity-100 translate-y-0" leave-active-class="duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
      <div v-if="mobileOpen" id="mobile-nav" class="lg:hidden border-t border-neutral-800 bg-neutral-950">
        <div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 space-y-2">
          <NuxtLink to="/" class="block rounded-md px-3 py-2 hover:bg-neutral-900">Home</NuxtLink>

          <!-- Mobile: Services accordion -->
          <div class="rounded-md">
            <button
                class="flex w-full items-center justify-between rounded-md px-3 py-2 hover:bg-neutral-900"
                @click="mobileServicesOpen = !mobileServicesOpen"
                :aria-expanded="mobileServicesOpen"
                aria-controls="mobile-services-menu"
            >
              <span>Services</span>
              <svg class="size-5 transition-transform" :class="mobileServicesOpen ? 'rotate-180' : ''" viewBox="0 0 20 20" >
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd"/>
              </svg>
            </button>
            <div v-show="mobileServicesOpen" id="mobile-services-menu" class="pl-3">
              <NuxtLink to="/services" class="block rounded-md px-3 py-2 hover:bg-neutral-900">All Services</NuxtLink>
              <NuxtLink to="/starter-package" class="block rounded-md px-3 py-2 hover:bg-neutral-900">Starter Package</NuxtLink>
              <NuxtLink to="/standard-package" class="block rounded-md px-3 py-2 hover:bg-neutral-900">Standard Package</NuxtLink>
              <NuxtLink to="/premium-package" class="block rounded-md px-3 py-2 hover:bg-neutral-900">Premium Package</NuxtLink>
            </div>
          </div>

          <NuxtLink to="/work" class="block rounded-md px-3 py-2 hover:bg-neutral-900">Work</NuxtLink>
          <NuxtLink to="/about" class="block rounded-md px-3 py-2 hover:bg-neutral-900">About</NuxtLink>
          <NuxtLink to="/contact" class="block rounded-md bg-yellow-300 px-3 py-2 font-semibold text-neutral-900">Get a Quote</NuxtLink>
        </div>
      </div>
    </transition>
  </header>
</template>

<style>


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
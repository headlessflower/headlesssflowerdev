<!-- components/admin/AdminNav.vue -->
<script setup lang="ts">
defineProps<{
  onLogout: () => void
  logoutLoading: boolean
}>()

const route = useRoute()

function isActive(path: string) {
  return route.path.startsWith(path)
}
</script>

<template>
  <header class="border-b border-neutral-900/10 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

      <!-- Left -->
      <div class="flex items-center gap-8">
        <NuxtLink to="/admin" class="text-sm font-semibold tracking-[0.2em] uppercase">
          Admin
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-6 text-sm">
          <NuxtLink
              to="/admin"
              :class="[
              'transition',
              isActive('/admin') ? 'text-neutral-950 font-semibold' : 'text-neutral-600 hover:text-neutral-950'
            ]"
          >
            Dashboard
          </NuxtLink>

          <NuxtLink
              to="/admin/universal"
              :class="[
              'transition',
              isActive('/admin/universal') ? 'text-neutral-950 font-semibold' : 'text-neutral-600 hover:text-neutral-950'
            ]"
          >
            Universal Forms
          </NuxtLink>

          <NuxtLink
              to="/admin/san-miguel"
              :class="[
              'transition',
              isActive('/admin/san-miguel') ? 'text-neutral-950 font-semibold' : 'text-neutral-600 hover:text-neutral-950'
            ]"
          >
            San Miguel
          </NuxtLink>
        </nav>
      </div>

      <!-- Right -->
      <button
          @click="onLogout"
          :disabled="logoutLoading"
          class="text-sm font-semibold text-neutral-700 hover:text-neutral-950 underline underline-offset-4 disabled:opacity-60"
      >
        {{ logoutLoading ? "Signing out…" : "Log out" }}
      </button>

    </div>
  </header>
</template>

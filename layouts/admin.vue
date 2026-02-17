<!-- layouts/admin.vue -->
<script setup lang="ts">
const supabase = useSupabaseClient()
const loading = ref(false)

async function logout() {
  loading.value = true
  try {
    await supabase.auth.signOut()
    navigateTo("/login")
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#f2f2f0] text-neutral-950 flex flex-col">

    <!-- Admin Nav -->
    <AdminNav :on-logout="logout" :logout-loading="loading" />

    <!-- Page Content -->
    <main class="flex-1">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <slot />
      </div>
    </main>

    <!-- Admin Footer -->
    <AdminFooter />

  </div>
</template>

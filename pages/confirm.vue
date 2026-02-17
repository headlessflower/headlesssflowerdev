<script setup lang="ts">
const supabase = useSupabaseClient()
const route = useRoute()

const err = ref<string | null>(null)

onMounted(async () => {
  try {
    // OAuth/PKCE style callback uses ?code=
    if (typeof route.query.code === "string" && route.query.code.length) {
      const { error } = await supabase.auth.exchangeCodeForSession(route.query.code)
      if (error) throw error
    }

    // Ensure we have a session
    const { data, error } = await supabase.auth.getSession()
    if (error) throw error
    if (!data.session) throw new Error("No session found. Please try logging in again.")

    navigateTo("/admin")
  } catch (e: any) {
    err.value = e?.message || "Could not confirm session."
  }
})
</script>

<template>
  <main class="min-h-[60vh] bg-[#f2f2f0] text-neutral-950">
    <div class="mx-auto max-w-md px-6 py-16">
      <h1 class="text-xl font-semibold">Signing you in…</h1>
      <p class="mt-2 text-sm text-neutral-700">One moment.</p>

      <p v-if="err" class="mt-6 text-sm text-red-700">
        {{ err }}
      </p>

      <NuxtLink v-if="err" to="/login" class="mt-4 inline-flex text-sm underline">
        Back to login
      </NuxtLink>
    </div>
  </main>
</template>

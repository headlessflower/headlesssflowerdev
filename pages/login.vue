<script setup lang="ts">
const supabase = useSupabaseClient()

const email = ref("")
const password = ref("")

const loading = ref(false)
const err = ref<string | null>(null)

async function login() {
  err.value = null
  loading.value = true
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value.trim(),
      password: password.value,
    })
    if (error) throw error

    navigateTo("/admin")
  } catch (e: any) {
    err.value = e?.message || "Login failed."
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <main class="min-h-[70vh] bg-[#f2f2f0] text-neutral-950">
    <div class="mx-auto max-w-md px-6 py-16">
      <h1 class="text-2xl font-semibold">Admin login</h1>

      <form class="mt-8 space-y-3" @submit.prevent="login">
        <input
            v-model="email"
            type="email"
            autocomplete="email"
            class="w-full rounded-xl border border-neutral-900/15 bg-white px-4 py-3 text-sm"
            placeholder="Email"
        />
        <input
            v-model="password"
            type="password"
            autocomplete="current-password"
            class="w-full rounded-xl border border-neutral-900/15 bg-white px-4 py-3 text-sm"
            placeholder="Password"
        />

        <button
            type="submit"
            class="h-12 w-full rounded-full bg-neutral-950 text-white text-sm font-semibold disabled:opacity-60"
            :disabled="loading"
        >
          {{ loading ? "Signing in…" : "Sign in" }}
        </button>

        <p v-if="err" class="text-sm text-red-700">{{ err }}</p>
      </form>
    </div>
  </main>
</template>

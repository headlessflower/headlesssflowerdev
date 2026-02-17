<script setup lang="ts">
definePageMeta({ middleware: "admin", layout: "admin" })

const supabase = useSupabaseClient()
const route = useRoute()

const loading = ref(true)
const err = ref<string | null>(null)
const item = ref<any | null>(null)

async function load() {
  loading.value = true
  err.value = null

  try {
    const id = String(route.params.id || "")
    const { data, error } = await supabase
        .from("web_inquiries")
        .select("*")
        .eq("id", id)
        .single()

    if (error) throw error
    item.value = data
  } catch (e: any) {
    err.value = e?.message || "Could not load inquiry."
  } finally {
    loading.value = false
  }
}

onMounted(load)

function fmtDate(iso: string) {
  try { return new Date(iso).toLocaleString() } catch { return iso }
}
</script>

<template>
  <main class="bg-[#f2f2f0] text-neutral-950">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <NuxtLink to="/admin" class="text-sm font-semibold underline underline-offset-4 text-neutral-700 hover:text-neutral-950">
        ← Back
      </NuxtLink>

      <div class="mt-6 rounded-2xl border border-neutral-900/10 bg-white p-6">
        <h1 class="text-xl font-semibold">San Miguel inquiry</h1>

        <p v-if="loading" class="mt-4 text-sm text-neutral-700">Loading…</p>
        <p v-if="err" class="mt-4 text-sm text-red-700">{{ err }}</p>

        <div v-if="item && !loading" class="mt-6 space-y-6">
          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <div class="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-600">Submitted</div>
              <div class="mt-1 text-sm">{{ fmtDate(item.created_at) }}</div>
            </div>
            <div>
              <div class="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-600">Email</div>
              <div class="mt-1 text-sm font-semibold">{{ item.email }}</div>
            </div>
            <div>
              <div class="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-600">Name</div>
              <div class="mt-1 text-sm">{{ item.name }}</div>
            </div>
            <div>
              <div class="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-600">Business</div>
              <div class="mt-1 text-sm">{{ item.business || "—" }}</div>
            </div>
          </div>

          <div class="rounded-xl border border-neutral-900/10 bg-neutral-50 p-4">
            <div class="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-600">Message</div>
            <p class="mt-3 whitespace-pre-wrap text-sm text-neutral-900">{{ item.message }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

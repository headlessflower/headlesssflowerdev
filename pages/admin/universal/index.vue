<script setup lang="ts">
import { globalContactSubmissionsTable } from "~/data/globalContactSubmission.schema";

definePageMeta({ layout: "admin", middleware: "admin" })

const supabase = useSupabaseClient()

const loading = ref(true)
const err = ref<string | null>(null)

const total = ref(0)
const rows = ref<any[]>([])

async function load() {
  loading.value = true
  err.value = null

  try {
    const [countRes, listRes] = await Promise.all([
      supabase.from(globalContactSubmissionsTable).select("id", { count: "exact", head: true }),
      supabase
          .from(globalContactSubmissionsTable)
          .select("id, created_at, form_key, form_version, full_name, email, service_interest, message")
          .order("created_at", { ascending: false })
          .limit(200),
    ])

    if (countRes.error) throw countRes.error
    if (listRes.error) throw listRes.error

    total.value = countRes.count || 0
    rows.value = listRes.data || []
  } catch (e: any) {
    err.value = e?.message || "Failed to load submissions."
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
  <div>
    <div class="flex items-end justify-between gap-4">
      <div>
        <h1 class="text-2xl font-semibold tracking-tight">Global contact forms</h1>
        <p class="mt-1 text-sm text-neutral-700">
          Total: <span class="font-semibold">{{ total }}</span>
        </p>
      </div>

      <button
          class="inline-flex h-10 items-center justify-center rounded-full border border-neutral-900/15 bg-white px-4 text-sm font-semibold hover:bg-neutral-50 disabled:opacity-60"
          @click="load"
          :disabled="loading"
      >
        {{ loading ? "Refreshing…" : "Refresh" }}
      </button>
    </div>

    <p v-if="err" class="mt-6 rounded-xl border border-red-900/20 bg-red-50 px-4 py-3 text-sm text-red-800">
      {{ err }}
    </p>

    <div class="mt-6 overflow-hidden rounded-2xl border border-neutral-900/10 bg-white">
      <div class="overflow-x-auto">
        <table class="min-w-full text-left text-sm">
          <thead class="border-b border-neutral-900/10 bg-neutral-50">
          <tr>
            <th class="px-4 py-3 font-semibold">Date</th>
            <th class="px-4 py-3 font-semibold">Name</th>
            <th class="px-4 py-3 font-semibold">Email</th>
            <th class="px-4 py-3 font-semibold">Interest</th>
            <th class="px-4 py-3 font-semibold">Message</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="row in rows" :key="row.id" class="border-b border-neutral-900/5">
            <td colspan="5" class="p-0">
              <NuxtLink
                  :to="`/admin/universal/${row.id}`"
                  class="grid grid-cols-1 gap-1 px-4 py-3 hover:bg-neutral-50 sm:grid-cols-[12rem_14rem_16rem_12rem_1fr] sm:items-center"
              >
                <div class="whitespace-nowrap text-neutral-700">{{ fmtDate(row.created_at) }}</div>
                <div class="font-semibold truncate">{{ row.full_name }}</div>
                <div class="truncate">{{ row.email }}</div>
                <div class="text-xs text-neutral-600">
                  <span class="font-semibold text-neutral-900">{{ row.service_interest }}</span>
                </div>
                <div class="text-neutral-800 line-clamp-2">{{ row.message || "—" }}</div>
              </NuxtLink>
            </td>
          </tr>

          <tr v-if="!loading && rows.length === 0">
            <td class="px-4 py-6 text-neutral-600" colspan="5">No submissions yet.</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

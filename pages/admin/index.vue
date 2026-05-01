<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "admin" })

const supabase = useSupabaseClient()

const loading = ref(true)
const err = ref<string | null>(null)

const totals = reactive({
  universal: 0,
  sanMiguel: 0,
})

const latestUniversal = ref<any[]>([])
const latestSanMiguel = ref<any[]>([])

async function load() {
  loading.value = true
  err.value = null

  try {
    const [uCount, sCount, uLatest, sLatest] = await Promise.all([
      supabase.from("form_submissions").select("id", { count: "exact", head: true }),
      supabase.from("web_inquiries").select("id", { count: "exact", head: true }),

      supabase
          .from("form_submissions")
          .select("id, created_at, form_key, form_version, fields")
          .order("created_at", { ascending: false })
          .limit(10),

      supabase
          .from("web_inquiries")
          .select("id, created_at, name, business, email, message")
          .order("created_at", { ascending: false })
          .limit(10),
    ])

    if (uCount.error) throw uCount.error
    if (sCount.error) throw sCount.error
    if (uLatest.error) throw uLatest.error
    if (sLatest.error) throw sLatest.error

    totals.universal = uCount.count || 0
    totals.sanMiguel = sCount.count || 0

    latestUniversal.value = uLatest.data || []
    latestSanMiguel.value = sLatest.data || []
  } catch (e: any) {
    err.value = e?.message || "Failed to load dashboard."
  } finally {
    loading.value = false
  }
}

onMounted(load)

function fmtDate(iso: string) {
  try {
    return new Date(iso).toLocaleString()
  } catch {
    return iso
  }
}

function pickName(fields: any) {
  return fields?.full_name || fields?.fullName || fields?.name || "—"
}
function pickEmail(fields: any) {
  return fields?.email || fields?.emailAddress || fields?.replyTo || "—"
}
function pickMessage(fields: any) {
  return fields?.message || fields?.notes || ""
}
</script>

<template>
  <div>
    <div class="flex items-start justify-between gap-6">
      <div>
        <h1 class="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p class="mt-1 text-sm text-neutral-700">
          Overview of form submissions across the site.
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

    <p
        v-if="err"
        class="mt-6 rounded-xl border border-red-900/20 bg-red-50 px-4 py-3 text-sm text-red-800"
    >
      {{ err }}
    </p>

    <!-- Totals -->
    <section class="mt-8 grid gap-4 sm:grid-cols-2">
      <div class="rounded-2xl border border-neutral-900/10 bg-white p-5">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-600">
              Universal contact forms
            </p>
            <p class="mt-2 text-3xl font-semibold">{{ totals.universal }}</p>
            <p class="mt-1 text-sm text-neutral-600">All schema-driven submissions</p>
          </div>

          <NuxtLink
              to="/admin/universal"
              class="inline-flex h-10 items-center justify-center rounded-full border border-neutral-900/15 bg-white px-4 text-sm font-semibold hover:bg-neutral-50"
          >
            View all
          </NuxtLink>
        </div>
      </div>

      <div class="rounded-2xl border border-neutral-900/10 bg-white p-5">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-600">
              San Miguel inquiries
            </p>
            <p class="mt-2 text-3xl font-semibold">{{ totals.sanMiguel }}</p>
            <p class="mt-1 text-sm text-neutral-600">web_inquiries table</p>
          </div>

          <NuxtLink
              to="/admin/san-miguel"
              class="inline-flex h-10 items-center justify-center rounded-full border border-neutral-900/15 bg-white px-4 text-sm font-semibold hover:bg-neutral-50"
          >
            View all
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Latest Universal -->
    <section class="mt-10">
      <div class="flex items-end justify-between gap-4">
        <h2 class="text-lg font-semibold">Latest universal submissions</h2>
        <NuxtLink
            to="/admin/universal"
            class="text-sm font-semibold text-neutral-700 hover:text-neutral-950 underline underline-offset-4"
        >
          View all →
        </NuxtLink>
      </div>

      <div class="mt-4 overflow-hidden rounded-2xl border border-neutral-900/10 bg-white">
        <div class="overflow-x-auto">
          <table class="min-w-full text-left text-sm">
            <thead class="border-b border-neutral-900/10 bg-neutral-50">
            <tr>
              <th class="px-4 py-3 font-semibold">Date</th>
              <th class="px-4 py-3 font-semibold">Name</th>
              <th class="px-4 py-3 font-semibold">Email</th>
              <th class="px-4 py-3 font-semibold">Form</th>
              <th class="px-4 py-3 font-semibold">Message</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="row in latestUniversal" :key="row.id" class="border-b border-neutral-900/5">
              <td colspan="5" class="p-0">
                <NuxtLink
                    :to="`/admin/universal/${row.id}`"
                    class="grid grid-cols-1 gap-1 px-4 py-3 hover:bg-neutral-50 sm:grid-cols-[12rem_14rem_16rem_12rem_1fr] sm:items-center"
                >
                  <div class="whitespace-nowrap text-neutral-700">{{ fmtDate(row.created_at) }}</div>
                  <div class="font-semibold truncate">{{ pickName(row.fields) }}</div>
                  <div class="truncate">{{ pickEmail(row.fields) }}</div>
                  <div class="text-xs text-neutral-600">
                    <span class="font-semibold text-neutral-900">{{ row.form_key }}</span>
                    <span class="text-neutral-500"> v{{ row.form_version }}</span>
                  </div>
                  <div class="text-neutral-800 line-clamp-2">{{ pickMessage(row.fields) || "—" }}</div>
                </NuxtLink>
              </td>
            </tr>

            <tr v-if="!loading && latestUniversal.length === 0">
              <td class="px-4 py-6 text-neutral-600" colspan="5">No submissions yet.</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Latest San Miguel -->
    <section class="mt-10">
      <div class="flex items-end justify-between gap-4">
        <h2 class="text-lg font-semibold">Latest San Miguel inquiries</h2>
        <NuxtLink
            to="/admin/san-miguel"
            class="text-sm font-semibold text-neutral-700 hover:text-neutral-950 underline underline-offset-4"
        >
          View all →
        </NuxtLink>
      </div>

      <div class="mt-4 overflow-hidden rounded-2xl border border-neutral-900/10 bg-white">
        <div class="overflow-x-auto">
          <table class="min-w-full text-left text-sm">
            <thead class="border-b border-neutral-900/10 bg-neutral-50">
            <tr>
              <th class="px-4 py-3 font-semibold">Date</th>
              <th class="px-4 py-3 font-semibold">Name</th>
              <th class="px-4 py-3 font-semibold">Business</th>
              <th class="px-4 py-3 font-semibold">Email</th>
              <th class="px-4 py-3 font-semibold">Message</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="row in latestSanMiguel" :key="row.id" class="border-b border-neutral-900/5">
              <td colspan="5" class="p-0">
                <NuxtLink
                    :to="`/admin/san-miguel/${row.id}`"
                    class="grid grid-cols-1 gap-1 px-4 py-3 hover:bg-neutral-50 sm:grid-cols-[12rem_14rem_14rem_16rem_1fr] sm:items-center"
                >
                  <div class="whitespace-nowrap text-neutral-700">{{ fmtDate(row.created_at) }}</div>
                  <div class="font-semibold truncate">{{ row.name }}</div>
                  <div class="truncate">{{ row.business || "—" }}</div>
                  <div class="truncate">{{ row.email }}</div>
                  <div class="text-neutral-800 line-clamp-2">{{ row.message || "—" }}</div>
                </NuxtLink>
              </td>
            </tr>

            <tr v-if="!loading && latestSanMiguel.length === 0">
              <td class="px-4 py-6 text-neutral-600" colspan="5">No inquiries yet.</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

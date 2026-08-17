<script setup lang="ts">
import {
  contactMessageReadStorageKey,
  contactMessagesTable,
  type ContactMessage,
} from "~/data/contactMessage.schema";

definePageMeta({ layout: "admin", middleware: "admin" })

const supabase = useSupabaseClient()

const loading = ref(true)
const err = ref<string | null>(null)

const total = ref(0)
const rows = ref<ContactMessage[]>([])
const deletingId = ref<number | null>(null)
const readIds = ref<Set<number>>(new Set())

const unreadTotal = computed(() => rows.value.filter(row => !isRead(row.id)).length)

function loadReadIds() {
  if (!import.meta.client) return

  try {
    const raw = window.localStorage.getItem(contactMessageReadStorageKey)
    const parsed = raw ? JSON.parse(raw) : []
    readIds.value = new Set(
        Array.isArray(parsed)
            ? parsed.map(Number).filter(Number.isFinite)
            : [],
    )
  } catch {
    readIds.value = new Set()
  }
}

function saveReadIds(ids = readIds.value) {
  if (!import.meta.client) return
  window.localStorage.setItem(contactMessageReadStorageKey, JSON.stringify([...ids]))
}

function isRead(id: number) {
  return readIds.value.has(id)
}

async function load() {
  loading.value = true
  err.value = null

  try {
    const [countRes, listRes] = await Promise.all([
      supabase.from(contactMessagesTable).select("id", { count: "exact", head: true }),
      supabase
          .from(contactMessagesTable)
          .select("id, created_at, name, email, organization, message")
          .order("created_at", { ascending: false })
          .limit(200),
    ])

    if (countRes.error) throw countRes.error
    if (listRes.error) throw listRes.error

    total.value = countRes.count || 0
    rows.value = listRes.data || []
  } catch (e: any) {
    err.value = e?.message || "Failed to load contact messages."
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadReadIds()
  load()
})

function fmtDate(iso: string) {
  try { return new Date(iso).toLocaleString() } catch { return iso }
}

async function deleteMessage(row: ContactMessage) {
  if (!window.confirm(`Delete the message from ${row.name}?`)) return

  deletingId.value = row.id
  err.value = null

  try {
    const { error } = await supabase
        .from(contactMessagesTable)
        .delete()
        .eq("id", row.id)

    if (error) throw error

    rows.value = rows.value.filter(item => item.id !== row.id)
    total.value = Math.max(0, total.value - 1)

    const nextReadIds = new Set(readIds.value)
    nextReadIds.delete(row.id)
    readIds.value = nextReadIds
    saveReadIds(nextReadIds)
  } catch (e: any) {
    err.value = e?.message || "Failed to delete contact message."
  } finally {
    deletingId.value = null
  }
}
</script>

<template>
  <div>
    <div class="flex items-end justify-between gap-4">
      <div>
        <h1 class="text-2xl font-semibold tracking-tight">Contact messages</h1>
        <p class="mt-1 text-sm text-neutral-700">
          Jennifer Collections contact form. Total: <span class="font-semibold">{{ total }}</span>
          <span v-if="unreadTotal" class="ml-2 font-semibold text-neutral-950">{{ unreadTotal }} new</span>
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
            <th class="px-4 py-3 font-semibold">Organization</th>
            <th class="px-4 py-3 font-semibold">Email</th>
            <th class="px-4 py-3 font-semibold">Message</th>
            <th class="px-4 py-3 font-semibold"><span class="sr-only">Actions</span></th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="row in rows" :key="row.id" class="border-b border-neutral-900/5">
            <td colspan="6" class="p-0">
              <div
                  :class="[
                    'grid grid-cols-1 gap-1 px-4 py-3 hover:bg-neutral-50 sm:grid-cols-[12rem_14rem_14rem_16rem_1fr_6rem] sm:items-center',
                    isRead(row.id) ? 'text-neutral-700' : 'bg-white font-semibold text-neutral-950'
                  ]"
              >
                <NuxtLink
                    :to="`/admin/contact-messages/${row.id}`"
                    class="contents"
                >
                  <div class="whitespace-nowrap">
                    {{ fmtDate(row.created_at) }}
                    <span
                        v-if="!isRead(row.id)"
                        class="ml-2 inline-flex rounded-full bg-neutral-950 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white"
                    >
                      New
                    </span>
                  </div>
                  <div class="truncate">{{ row.name }}</div>
                  <div class="truncate">{{ row.organization || "—" }}</div>
                  <div class="truncate">{{ row.email }}</div>
                  <div :class="['line-clamp-2', isRead(row.id) ? 'text-neutral-700' : 'text-neutral-950']">
                    {{ row.message || "—" }}
                  </div>
                </NuxtLink>

                <button
                    class="inline-flex h-9 items-center justify-center rounded-full border border-red-900/20 bg-white px-3 text-xs font-semibold text-red-700 hover:bg-red-50 disabled:opacity-60"
                    @click="deleteMessage(row)"
                    :disabled="deletingId === row.id"
                >
                  {{ deletingId === row.id ? "Deleting…" : "Delete" }}
                </button>
              </div>
            </td>
          </tr>

          <tr v-if="!loading && rows.length === 0">
            <td class="px-4 py-6 text-neutral-600" colspan="6">No contact messages yet.</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

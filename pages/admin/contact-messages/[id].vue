<script setup lang="ts">
import {
  contactMessageReadStorageKey,
  contactMessagesTable,
  type ContactMessage,
} from "~/data/contactMessage.schema";

definePageMeta({ middleware: "admin", layout: "admin" })

const supabase = useSupabaseClient()
const route = useRoute()

const loading = ref(true)
const deleting = ref(false)
const err = ref<string | null>(null)
const item = ref<ContactMessage | null>(null)

function markRead(id: number) {
  if (!import.meta.client) return

  try {
    const raw = window.localStorage.getItem(contactMessageReadStorageKey)
    const parsed = raw ? JSON.parse(raw) : []
    const ids = new Set(
        Array.isArray(parsed)
            ? parsed.map(Number).filter(Number.isFinite)
            : [],
    )

    ids.add(id)
    window.localStorage.setItem(contactMessageReadStorageKey, JSON.stringify([...ids]))
  } catch {
    window.localStorage.setItem(contactMessageReadStorageKey, JSON.stringify([id]))
  }
}

async function load() {
  loading.value = true
  err.value = null

  try {
    const id = String(route.params.id || "")
    const { data, error } = await supabase
        .from(contactMessagesTable)
        .select("*")
        .eq("id", id)
        .single()

    if (error) throw error
    item.value = data
    if (data?.id) markRead(data.id)
  } catch (e: any) {
    err.value = e?.message || "Could not load contact message."
  } finally {
    loading.value = false
  }
}

onMounted(load)

function fmtDate(iso: string) {
  try { return new Date(iso).toLocaleString() } catch { return iso }
}

async function deleteMessage() {
  if (!item.value) return
  if (!window.confirm(`Delete the message from ${item.value.name}?`)) return

  deleting.value = true
  err.value = null

  try {
    const { error } = await supabase
        .from(contactMessagesTable)
        .delete()
        .eq("id", item.value.id)

    if (error) throw error
    await navigateTo("/admin/contact-messages")
  } catch (e: any) {
    err.value = e?.message || "Failed to delete contact message."
  } finally {
    deleting.value = false
  }
}
</script>

<template>
  <main class="bg-[#f2f2f0] text-neutral-950">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <div class="flex items-center justify-between gap-4">
        <NuxtLink to="/admin/contact-messages" class="text-sm font-semibold underline underline-offset-4 text-neutral-700 hover:text-neutral-950">
          ← Back to Contact messages
        </NuxtLink>

        <button
            v-if="item && !loading"
            class="inline-flex h-10 items-center justify-center rounded-full border border-red-900/20 bg-white px-4 text-sm font-semibold text-red-700 hover:bg-red-50 disabled:opacity-60"
            @click="deleteMessage"
            :disabled="deleting"
        >
          {{ deleting ? "Deleting…" : "Delete" }}
        </button>
      </div>

      <div class="mt-6 rounded-2xl border border-neutral-900/10 bg-white p-6">
        <h1 class="text-xl font-semibold">Contact message</h1>

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
              <div class="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-600">Organization</div>
              <div class="mt-1 text-sm">{{ item.organization || "—" }}</div>
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

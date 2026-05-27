<script setup lang="ts">
import type { AuditListItem } from "~/data/audits";
import { formatAuditDate } from "~/data/audits";

definePageMeta({ layout: "admin", middleware: "admin" });

const supabase = useSupabaseClient();

const loading = ref(true);
const err = ref<string | null>(null);
const rows = ref<AuditListItem[]>([]);

async function load() {
  loading.value = true;
  err.value = null;

  try {
    const { data, error } = await supabase
      .from("audits")
      .select("id, slug, business_name, website_url, status, overall_score, created_at, expires_at")
      .order("created_at", { ascending: false });

    if (error) throw error;
    rows.value = data || [];
  } catch (e: any) {
    err.value = e?.message || "Failed to load audits.";
  } finally {
    loading.value = false;
  }
}

onMounted(load);

function statusClasses(status: string) {
  const base = "inline-flex rounded-full px-2.5 py-1 text-xs font-semibold capitalize";
  if (status === "published") return `${base} bg-emerald-100 text-emerald-900`;
  if (status === "draft") return `${base} bg-neutral-100 text-neutral-800`;
  if (status === "expired") return `${base} bg-amber-100 text-amber-900`;
  return `${base} bg-slate-200 text-slate-800`;
}

async function copyLink(slug: string) {
  const url = `${window.location.origin}/audit/${slug}`;
  await navigator.clipboard.writeText(url);
}

async function archiveAudit(id: string) {
  const { error } = await supabase
    .from("audits")
    .update({ status: "archived" })
    .eq("id", id);

  if (error) {
    err.value = error.message;
    return;
  }

  await load();
}
</script>

<template>
  <div>
    <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 class="text-2xl font-semibold tracking-tight">Website audits</h1>
        <p class="mt-1 text-sm text-neutral-700">
          Create and manage private local lead-generation audit reports.
        </p>
      </div>

      <div class="flex gap-3">
        <button
          class="inline-flex h-10 items-center justify-center rounded-full border border-neutral-900/15 bg-white px-4 text-sm font-semibold hover:bg-neutral-50 disabled:opacity-60"
          :disabled="loading"
          @click="load"
        >
          {{ loading ? "Refreshing..." : "Refresh" }}
        </button>
        <NuxtLink
          to="/admin/audits/new"
          class="inline-flex h-10 items-center justify-center rounded-full bg-neutral-950 px-4 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          New audit
        </NuxtLink>
      </div>
    </div>

    <p v-if="err" class="mt-6 rounded-xl border border-red-900/20 bg-red-50 px-4 py-3 text-sm text-red-800">
      {{ err }}
    </p>

    <div class="mt-6 overflow-hidden rounded-2xl border border-neutral-900/10 bg-white">
      <div class="overflow-x-auto">
        <table class="min-w-full text-left text-sm">
          <thead class="border-b border-neutral-900/10 bg-neutral-50">
            <tr>
              <th class="px-4 py-3 font-semibold">Business</th>
              <th class="px-4 py-3 font-semibold">Website</th>
              <th class="px-4 py-3 font-semibold">Status</th>
              <th class="px-4 py-3 font-semibold">Score</th>
              <th class="px-4 py-3 font-semibold">Created</th>
              <th class="px-4 py-3 font-semibold">Expires</th>
              <th class="px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="row in rows" :key="row.id" class="border-b border-neutral-900/5 align-top">
              <td class="px-4 py-4">
                <NuxtLink :to="`/admin/audits/${row.id}`" class="font-semibold underline underline-offset-4">
                  {{ row.business_name }}
                </NuxtLink>
                <div class="mt-1 text-xs text-neutral-600">/audit/{{ row.slug }}</div>
              </td>
              <td class="px-4 py-4 text-neutral-700">
                <a :href="row.website_url" target="_blank" rel="noreferrer" class="underline underline-offset-4">
                  {{ row.website_url }}
                </a>
              </td>
              <td class="px-4 py-4">
                <span :class="statusClasses(row.status)">{{ row.status }}</span>
              </td>
              <td class="px-4 py-4 font-semibold">{{ row.overall_score ?? "-" }}/100</td>
              <td class="px-4 py-4 text-neutral-700">{{ formatAuditDate(row.created_at) }}</td>
              <td class="px-4 py-4 text-neutral-700">{{ formatAuditDate(row.expires_at) }}</td>
              <td class="px-4 py-4">
                <div class="flex flex-wrap gap-2">
                  <NuxtLink
                    :to="`/admin/audits/${row.id}`"
                    class="rounded-full border border-neutral-900/15 px-3 py-1.5 text-xs font-semibold hover:bg-neutral-50"
                  >
                    Edit
                  </NuxtLink>
                  <NuxtLink
                    :to="`/audit/${row.slug}?preview=1`"
                    class="rounded-full border border-neutral-900/15 px-3 py-1.5 text-xs font-semibold hover:bg-neutral-50"
                  >
                    Preview
                  </NuxtLink>
                  <button
                    class="rounded-full border border-neutral-900/15 px-3 py-1.5 text-xs font-semibold hover:bg-neutral-50"
                    @click="copyLink(row.slug)"
                  >
                    Copy link
                  </button>
                  <button
                    class="rounded-full border border-neutral-900/15 px-3 py-1.5 text-xs font-semibold hover:bg-neutral-50 disabled:opacity-50"
                    :disabled="row.status === 'archived'"
                    @click="archiveAudit(row.id)"
                  >
                    Archive
                  </button>
                </div>
              </td>
            </tr>

            <tr v-if="!loading && rows.length === 0">
              <td class="px-4 py-8 text-neutral-600" colspan="7">
                No audits yet. Create the first draft to get started.
              </td>
            </tr>
            <tr v-if="loading">
              <td class="px-4 py-8 text-neutral-600" colspan="7">Loading audits...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

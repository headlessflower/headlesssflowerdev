<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "admin" })

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
        .from("form_submissions")
        .select("*")
        .eq("id", id)
        .single()
    if (error) throw error
    item.value = data
  } catch (e: any) {
    err.value = e?.message || "Could not load submission."
  } finally {
    loading.value = false
  }
}

onMounted(load)

function fmtDate(iso: string) {
  try { return new Date(iso).toLocaleString() } catch { return iso }
}

// label map + ordering for your schema keys
const fieldLabels: Record<string, string> = {
  full_name: "Name",
  email: "Email",
  phone: "Phone",
  company: "Company",
  service_interest: "Service interest",
  budget_range: "Budget range",
  timeline: "Timeline",
  message: "Message",
  newsletter_opt_in: "Newsletter opt-in",
}

const orderedKeys = [
  "full_name",
  "email",
  "phone",
  "company",
  "service_interest",
  "budget_range",
  "timeline",
  "message",
  "newsletter_opt_in",
]

function formatValue(key: string, v: any) {
  if (v === null || v === undefined || v === "") return "—"
  if (typeof v === "boolean") return v ? "Yes" : "No"

  // Optional: humanize coded ranges
  if (key === "timeline") {
    const map: Record<string, string> = {
      "0-1": "ASAP (0–1 month)",
      "1-2": "1–2 months",
      "2-3": "2–3 months",
      "3+": "3+ months",
    }
    return map[String(v)] || String(v)
  }

  if (key === "budget_range") {
    const map: Record<string, string> = {
      "0-1": "Under $1k",
      "1-3": "$1k–$3k",
      "3-5": "$3k–$5k",
      "5+": "$5k+",
    }
    return map[String(v)] || String(v)
  }

  if (typeof v === "string") return v.trim() || "—"
  return String(v)
}

const knownKeySet = new Set(orderedKeys)

const extras = computed(() => {
  const fields = item.value?.fields || {}
  const out: Array<{ key: string; label: string; value: any }> = []
  for (const k of Object.keys(fields)) {
    if (!knownKeySet.has(k)) {
      out.push({ key: k, label: k.replace(/_/g, " "), value: fields[k] })
    }
  }
  return out
})
</script>

<template>
  <main class="bg-[#f2f2f0] text-neutral-950">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <NuxtLink to="/admin/universal" class="text-sm font-semibold underline underline-offset-4 text-neutral-700 hover:text-neutral-950">
        ← Back to Universal
      </NuxtLink>

      <div class="mt-6 rounded-2xl border border-neutral-900/10 bg-white p-6">
        <h1 class="text-xl font-semibold">Universal submission</h1>

        <p v-if="loading" class="mt-4 text-sm text-neutral-700">Loading…</p>
        <p v-if="err" class="mt-4 text-sm text-red-700">{{ err }}</p>

        <div v-if="item && !loading" class="mt-6 space-y-8">
          <div class="grid gap-3 sm:grid-cols-2">
            <div>
              <div class="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-600">Submitted</div>
              <div class="mt-1 text-sm">{{ fmtDate(item.created_at) }}</div>
            </div>
            <div>
              <div class="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-600">Form</div>
              <div class="mt-1 text-sm font-semibold">
                {{ item.form_key }} <span class="text-neutral-500 font-normal">v{{ item.form_version }}</span>
              </div>
            </div>
          </div>

          <!-- Clean fields -->
          <section class="rounded-2xl border border-neutral-900/10 bg-neutral-50 p-5">
            <h2 class="text-sm font-semibold">Details</h2>

            <dl class="mt-4 grid gap-4 sm:grid-cols-2">
              <div v-for="k in orderedKeys" :key="k" class="rounded-xl bg-white border border-neutral-900/10 p-4">
                <dt class="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-600">
                  {{ fieldLabels[k] || k }}
                </dt>

                <dd class="mt-2 text-sm text-neutral-900 whitespace-pre-wrap">
                  {{ formatValue(k, item.fields?.[k]) }}
                </dd>
              </div>
            </dl>
          </section>

          <!-- Extras -->
          <section v-if="extras.length" class="rounded-2xl border border-neutral-900/10 bg-white p-5">
            <h2 class="text-sm font-semibold">Other fields</h2>
            <dl class="mt-4 grid gap-3 sm:grid-cols-2">
              <div v-for="x in extras" :key="x.key" class="rounded-xl border border-neutral-900/10 bg-neutral-50 p-4">
                <dt class="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-600">{{ x.label }}</dt>
                <dd class="mt-2 text-sm text-neutral-900 whitespace-pre-wrap">{{ formatValue(x.key, x.value) }}</dd>
              </div>
            </dl>
          </section>

          <!-- Meta (optional, collapsed look) -->
          <section class="rounded-2xl border border-neutral-900/10 bg-white p-5">
            <h2 class="text-sm font-semibold">Meta</h2>
            <pre class="mt-3 overflow-auto text-xs leading-relaxed text-neutral-900">{{ JSON.stringify(item.meta || {}, null, 2) }}</pre>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

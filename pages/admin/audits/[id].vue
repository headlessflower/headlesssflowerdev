<script setup lang="ts">
import type { Audit, AuditFinding, AuditScore } from "~/data/audits";
import {
  auditEffortOptions,
  auditImpactOptions,
  auditPriorityOptions,
  auditScoreCategories,
  calculateOverallScore,
  formatAuditDate,
  slugifyAuditName,
} from "~/data/audits";

definePageMeta({ layout: "admin", middleware: "admin" });

type SimpleItem = {
  id: string;
  audit_id: string;
  title: string;
  description: string | null;
  sort_order: number;
};

type Competitor = {
  id: string;
  audit_id: string;
  name: string;
  website_url: string | null;
  notes: string | null;
  has_clear_cta: boolean | null;
  has_city_pages: boolean | null;
  has_reviews_visible: boolean | null;
  has_mobile_call_button: boolean | null;
  has_service_pages: boolean | null;
  has_faq_section: boolean | null;
  has_schema: boolean | null;
  sort_order: number;
};

const route = useRoute();
const supabase = useSupabaseClient();

const id = String(route.params.id || "");
const loading = ref(true);
const saving = ref(false);
const notice = ref<string | null>(null);
const err = ref<string | null>(null);

const audit = ref<Audit | null>(null);
const scores = ref<AuditScore[]>([]);
const findings = ref<AuditFinding[]>([]);
const quickWins = ref<SimpleItem[]>([]);
const growthOpportunities = ref<SimpleItem[]>([]);
const competitors = ref<Competitor[]>([]);

const computedScore = computed(() => calculateOverallScore(scores.value) ?? 0);
const publicLink = computed(() => audit.value ? `/audit/${audit.value.slug}` : "");
const previewLink = computed(() => audit.value ? `/audit/${audit.value.slug}?preview=1` : "");

async function load() {
  loading.value = true;
  err.value = null;

  try {
    const [
      auditRes,
      scoresRes,
      findingsRes,
      quickWinsRes,
      growthRes,
      competitorsRes,
    ] = await Promise.all([
      supabase.from("audits").select("*").eq("id", id).single(),
      supabase.from("audit_scores").select("*").eq("audit_id", id).order("sort_order"),
      supabase.from("audit_findings").select("*").eq("audit_id", id).order("sort_order"),
      supabase.from("audit_quick_wins").select("*").eq("audit_id", id).order("sort_order"),
      supabase.from("audit_growth_opportunities").select("*").eq("audit_id", id).order("sort_order"),
      supabase.from("audit_competitors").select("*").eq("audit_id", id).order("sort_order"),
    ]);

    if (auditRes.error) throw auditRes.error;
    if (scoresRes.error) throw scoresRes.error;
    if (findingsRes.error) throw findingsRes.error;
    if (quickWinsRes.error) throw quickWinsRes.error;
    if (growthRes.error) throw growthRes.error;
    if (competitorsRes.error) throw competitorsRes.error;

    audit.value = auditRes.data;
    scores.value = scoresRes.data || [];
    findings.value = findingsRes.data || [];
    quickWins.value = quickWinsRes.data || [];
    growthOpportunities.value = growthRes.data || [];
    competitors.value = competitorsRes.data || [];

    if (!scores.value.length) {
      await supabase.from("audit_scores").insert(
        auditScoreCategories.map((category, index) => ({
          audit_id: id,
          category,
          score: 3,
          max_score: 5,
          sort_order: index,
        })),
      );
      const { data } = await supabase
        .from("audit_scores")
        .select("*")
        .eq("audit_id", id)
        .order("sort_order");
      scores.value = data || [];
    }
  } catch (e: any) {
    err.value = e?.message || "Could not load audit.";
  } finally {
    loading.value = false;
  }
}

onMounted(load);

function nullable(value: string | null | undefined) {
  const trimmed = String(value || "").trim();
  return trimmed ? trimmed : null;
}

function cleanDateInput(value: string | null) {
  if (!value) return "";
  return value.slice(0, 10);
}

function makeSlug() {
  if (!audit.value) return;
  audit.value.slug = slugifyAuditName(audit.value.business_name);
}

async function saveAll(message = "Audit saved.") {
  if (!audit.value) return;

  saving.value = true;
  err.value = null;
  notice.value = null;

  try {
    const overallScore = calculateOverallScore(scores.value);

    const { error: auditError } = await supabase
      .from("audits")
      .update({
        slug: audit.value.slug,
        business_name: audit.value.business_name,
        website_url: audit.value.website_url,
        business_type: nullable(audit.value.business_type),
        primary_service: nullable(audit.value.primary_service),
        service_area: nullable(audit.value.service_area),
        contact_name: nullable(audit.value.contact_name),
        contact_email: nullable(audit.value.contact_email),
        expires_at: audit.value.expires_at ? new Date(audit.value.expires_at).toISOString() : null,
        summary: nullable(audit.value.summary),
        biggest_opportunity: nullable(audit.value.biggest_opportunity),
        fastest_fix: nullable(audit.value.fastest_fix),
        long_term_play: nullable(audit.value.long_term_play),
        recommended_plan: nullable(audit.value.recommended_plan),
        implementation_offer: nullable(audit.value.implementation_offer),
        overall_score: overallScore,
      })
      .eq("id", id);

    if (auditError) throw auditError;

    if (scores.value.length) {
      const { error } = await supabase.from("audit_scores").upsert(
        scores.value.map((row, index) => ({
          id: row.id,
          audit_id: id,
          category: row.category,
          score: Number(row.score),
          max_score: Number(row.max_score || 5),
          summary: nullable(row.summary),
          sort_order: index,
        })),
      );
      if (error) throw error;
    }

    if (findings.value.length) {
      const { error } = await supabase.from("audit_findings").upsert(
        findings.value.map((row, index) => ({
          id: row.id,
          audit_id: id,
          category: row.category,
          title: row.title,
          problem: row.problem,
          recommendation: row.recommendation,
          priority: row.priority,
          impact: row.impact,
          effort: row.effort,
          sort_order: index,
        })),
      );
      if (error) throw error;
    }

    if (quickWins.value.length) {
      const { error } = await supabase.from("audit_quick_wins").upsert(
        quickWins.value.map((row, index) => ({
          id: row.id,
          audit_id: id,
          title: row.title,
          description: nullable(row.description),
          sort_order: index,
        })),
      );
      if (error) throw error;
    }

    if (growthOpportunities.value.length) {
      const { error } = await supabase.from("audit_growth_opportunities").upsert(
        growthOpportunities.value.map((row, index) => ({
          id: row.id,
          audit_id: id,
          title: row.title,
          description: nullable(row.description),
          sort_order: index,
        })),
      );
      if (error) throw error;
    }

    if (competitors.value.length) {
      const { error } = await supabase.from("audit_competitors").upsert(
        competitors.value.map((row, index) => ({
          id: row.id,
          audit_id: id,
          name: row.name,
          website_url: nullable(row.website_url),
          notes: nullable(row.notes),
          has_clear_cta: row.has_clear_cta,
          has_city_pages: row.has_city_pages,
          has_reviews_visible: row.has_reviews_visible,
          has_mobile_call_button: row.has_mobile_call_button,
          has_service_pages: row.has_service_pages,
          has_faq_section: row.has_faq_section,
          has_schema: row.has_schema,
          sort_order: index,
        })),
      );
      if (error) throw error;
    }

    notice.value = message;
    await load();
  } catch (e: any) {
    err.value = e?.message || "Could not save audit.";
  } finally {
    saving.value = false;
  }
}

async function publishAudit() {
  await saveAll("Changes saved.");
  if (!audit.value || err.value) return;

  saving.value = true;
  try {
    const { error } = await supabase
      .from("audits")
      .update({
        status: "published",
        visibility: "private",
        published_at: new Date().toISOString(),
        overall_score: calculateOverallScore(scores.value),
      })
      .eq("id", id);
    if (error) throw error;
    notice.value = "Audit published.";
    await load();
  } catch (e: any) {
    err.value = e?.message || "Could not publish audit.";
  } finally {
    saving.value = false;
  }
}

async function setStatus(status: string) {
  saving.value = true;
  err.value = null;
  try {
    const { error } = await supabase
      .from("audits")
      .update({ status, published_at: status === "published" ? new Date().toISOString() : null })
      .eq("id", id);
    if (error) throw error;
    notice.value = `Audit marked ${status}.`;
    await load();
  } catch (e: any) {
    err.value = e?.message || "Could not update status.";
  } finally {
    saving.value = false;
  }
}

async function copyLink() {
  if (!audit.value) return;
  await navigator.clipboard.writeText(`${window.location.origin}/audit/${audit.value.slug}`);
  notice.value = "Client link copied.";
}

async function addFinding() {
  const { error } = await supabase.from("audit_findings").insert({
    audit_id: id,
    category: "Mobile Conversion",
    title: "New lead leak",
    problem: "Describe what is making it harder for a local visitor to call, trust, or request a quote.",
    recommendation: "Describe the practical fix.",
    priority: "Medium",
    impact: "Medium",
    effort: "Low",
    sort_order: findings.value.length,
  });
  if (error) err.value = error.message;
  await load();
}

async function addSimple(table: string, rows: Ref<SimpleItem[]>, title: string) {
  const { error } = await supabase.from(table).insert({
    audit_id: id,
    title,
    sort_order: rows.value.length,
  });
  if (error) err.value = error.message;
  await load();
}

async function addCompetitor() {
  const { error } = await supabase.from("audit_competitors").insert({
    audit_id: id,
    name: `Competitor ${competitors.value.length + 1}`,
    sort_order: competitors.value.length,
  });
  if (error) err.value = error.message;
  await load();
}

async function deleteRow(table: string, rowId: string) {
  const { error } = await supabase.from(table).delete().eq("id", rowId);
  if (error) {
    err.value = error.message;
    return;
  }
  await load();
}

const competitorChecks = [
  ["has_clear_cta", "Clear CTA"],
  ["has_city_pages", "City pages"],
  ["has_reviews_visible", "Reviews visible"],
  ["has_mobile_call_button", "Mobile call button"],
  ["has_service_pages", "Service pages"],
  ["has_faq_section", "FAQ section"],
  ["has_schema", "Schema"],
] as const;
</script>

<template>
  <div>
    <NuxtLink to="/admin/audits" class="text-sm font-semibold text-neutral-700 underline underline-offset-4 hover:text-neutral-950">
      Back to audits
    </NuxtLink>

    <p v-if="loading" class="mt-6 rounded-2xl border border-neutral-900/10 bg-white p-6 text-sm text-neutral-700">
      Loading audit...
    </p>

    <div v-if="audit && !loading" class="mt-6 space-y-8">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div class="flex flex-wrap items-center gap-3">
            <h1 class="text-2xl font-semibold tracking-tight">{{ audit.business_name }}</h1>
            <span class="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold capitalize text-neutral-800">
              {{ audit.status }}
            </span>
            <span class="rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold text-white">
              {{ computedScore }}/100
            </span>
          </div>
          <p class="mt-2 text-sm text-neutral-700">
            Admin preview:
            <NuxtLink :to="previewLink" class="font-semibold underline underline-offset-4">{{ previewLink }}</NuxtLink>
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <button class="h-10 rounded-full border border-neutral-900/15 bg-white px-4 text-sm font-semibold hover:bg-neutral-50" @click="copyLink">
            Copy link
          </button>
          <button class="h-10 rounded-full border border-neutral-900/15 bg-white px-4 text-sm font-semibold hover:bg-neutral-50" @click="setStatus('draft')">
            Unpublish
          </button>
          <button class="h-10 rounded-full bg-neutral-950 px-4 text-sm font-semibold text-white hover:bg-neutral-800 disabled:opacity-60" :disabled="saving" @click="publishAudit">
            {{ saving ? "Saving..." : "Publish" }}
          </button>
        </div>
      </div>

      <p v-if="notice" class="rounded-xl border border-emerald-900/20 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
        {{ notice }}
      </p>
      <p v-if="err" class="rounded-xl border border-red-900/20 bg-red-50 px-4 py-3 text-sm text-red-800">
        {{ err }}
      </p>

      <section class="rounded-2xl border border-neutral-900/10 bg-white p-6">
        <div class="flex items-center justify-between gap-4">
          <h2 class="text-lg font-semibold">Audit settings</h2>
          <button class="text-sm font-semibold underline underline-offset-4" @click="makeSlug">Regenerate slug</button>
        </div>
        <div class="mt-5 grid gap-5 md:grid-cols-2">
          <label class="block">
            <span class="text-sm font-semibold">Business name</span>
            <input v-model="audit.business_name" class="mt-2 h-11 w-full rounded-xl border border-neutral-900/15 px-3 text-sm" />
          </label>
          <label class="block">
            <span class="text-sm font-semibold">Slug</span>
            <input v-model="audit.slug" class="mt-2 h-11 w-full rounded-xl border border-neutral-900/15 px-3 text-sm" />
          </label>
          <label class="block">
            <span class="text-sm font-semibold">Website URL</span>
            <input v-model="audit.website_url" class="mt-2 h-11 w-full rounded-xl border border-neutral-900/15 px-3 text-sm" />
          </label>
          <label class="block">
            <span class="text-sm font-semibold">Expiration date</span>
            <input :value="cleanDateInput(audit.expires_at)" type="date" class="mt-2 h-11 w-full rounded-xl border border-neutral-900/15 px-3 text-sm" @input="audit.expires_at = ($event.target as HTMLInputElement).value" />
          </label>
          <label class="block">
            <span class="text-sm font-semibold">Business type</span>
            <input v-model="audit.business_type" class="mt-2 h-11 w-full rounded-xl border border-neutral-900/15 px-3 text-sm" />
          </label>
          <label class="block">
            <span class="text-sm font-semibold">Primary service</span>
            <input v-model="audit.primary_service" class="mt-2 h-11 w-full rounded-xl border border-neutral-900/15 px-3 text-sm" />
          </label>
          <label class="block">
            <span class="text-sm font-semibold">Service area</span>
            <input v-model="audit.service_area" class="mt-2 h-11 w-full rounded-xl border border-neutral-900/15 px-3 text-sm" />
          </label>
          <label class="block">
            <span class="text-sm font-semibold">Contact email</span>
            <input v-model="audit.contact_email" class="mt-2 h-11 w-full rounded-xl border border-neutral-900/15 px-3 text-sm" />
          </label>
        </div>
      </section>

      <section class="rounded-2xl border border-neutral-900/10 bg-white p-6">
        <h2 class="text-lg font-semibold">Executive summary</h2>
        <div class="mt-5 grid gap-5">
          <label>
            <span class="text-sm font-semibold">Summary</span>
            <textarea v-model="audit.summary" rows="5" class="mt-2 w-full rounded-xl border border-neutral-900/15 px-3 py-3 text-sm" />
          </label>
          <div class="grid gap-5 md:grid-cols-3">
            <label>
              <span class="text-sm font-semibold">Biggest opportunity</span>
              <input v-model="audit.biggest_opportunity" class="mt-2 h-11 w-full rounded-xl border border-neutral-900/15 px-3 text-sm" />
            </label>
            <label>
              <span class="text-sm font-semibold">Fastest fix</span>
              <input v-model="audit.fastest_fix" class="mt-2 h-11 w-full rounded-xl border border-neutral-900/15 px-3 text-sm" />
            </label>
            <label>
              <span class="text-sm font-semibold">Long-term play</span>
              <input v-model="audit.long_term_play" class="mt-2 h-11 w-full rounded-xl border border-neutral-900/15 px-3 text-sm" />
            </label>
          </div>
        </div>
      </section>

      <section class="rounded-2xl border border-neutral-900/10 bg-white p-6">
        <h2 class="text-lg font-semibold">Scorecard</h2>
        <div class="mt-5 grid gap-4">
          <div v-for="score in scores" :key="score.id" class="grid gap-3 rounded-xl border border-neutral-900/10 bg-neutral-50 p-4 lg:grid-cols-[1fr_8rem_1fr] lg:items-center">
            <input v-model="score.category" class="h-10 rounded-xl border border-neutral-900/15 px-3 text-sm font-semibold" />
            <select v-model.number="score.score" class="h-10 rounded-xl border border-neutral-900/15 px-3 text-sm">
              <option v-for="n in 5" :key="n" :value="n">{{ n }}/5</option>
            </select>
            <input v-model="score.summary" placeholder="Short note" class="h-10 rounded-xl border border-neutral-900/15 px-3 text-sm" />
          </div>
        </div>
      </section>

      <section class="rounded-2xl border border-neutral-900/10 bg-white p-6">
        <div class="flex items-center justify-between gap-4">
          <h2 class="text-lg font-semibold">Top lead leaks</h2>
          <button class="h-10 rounded-full border border-neutral-900/15 px-4 text-sm font-semibold hover:bg-neutral-50" @click="addFinding">
            Add finding
          </button>
        </div>
        <div class="mt-5 space-y-4">
          <div v-for="finding in findings" :key="finding.id" class="rounded-xl border border-neutral-900/10 bg-neutral-50 p-4">
            <div class="grid gap-3 md:grid-cols-4">
              <input v-model="finding.title" class="h-10 rounded-xl border border-neutral-900/15 px-3 text-sm font-semibold md:col-span-2" />
              <select v-model="finding.priority" class="h-10 rounded-xl border border-neutral-900/15 px-3 text-sm">
                <option v-for="option in auditPriorityOptions" :key="option">{{ option }}</option>
              </select>
              <input v-model="finding.category" class="h-10 rounded-xl border border-neutral-900/15 px-3 text-sm" />
            </div>
            <div class="mt-3 grid gap-3 md:grid-cols-2">
              <textarea v-model="finding.problem" rows="4" placeholder="Problem" class="rounded-xl border border-neutral-900/15 px-3 py-3 text-sm" />
              <textarea v-model="finding.recommendation" rows="4" placeholder="Recommendation" class="rounded-xl border border-neutral-900/15 px-3 py-3 text-sm" />
            </div>
            <div class="mt-3 flex flex-wrap items-center gap-3">
              <select v-model="finding.impact" class="h-10 rounded-xl border border-neutral-900/15 px-3 text-sm">
                <option :value="null">Impact</option>
                <option v-for="option in auditImpactOptions" :key="option">{{ option }}</option>
              </select>
              <select v-model="finding.effort" class="h-10 rounded-xl border border-neutral-900/15 px-3 text-sm">
                <option :value="null">Effort</option>
                <option v-for="option in auditEffortOptions" :key="option">{{ option }}</option>
              </select>
              <button class="ml-auto text-sm font-semibold text-red-700 underline underline-offset-4" @click="deleteRow('audit_findings', finding.id)">
                Delete
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="grid gap-8 lg:grid-cols-2">
        <div class="rounded-2xl border border-neutral-900/10 bg-white p-6">
          <div class="flex items-center justify-between gap-4">
            <h2 class="text-lg font-semibold">Quick wins</h2>
            <button class="h-10 rounded-full border border-neutral-900/15 px-4 text-sm font-semibold hover:bg-neutral-50" @click="addSimple('audit_quick_wins', quickWins, 'New quick win')">
              Add
            </button>
          </div>
          <div class="mt-5 space-y-3">
            <div v-for="item in quickWins" :key="item.id" class="rounded-xl border border-neutral-900/10 bg-neutral-50 p-4">
              <input v-model="item.title" class="h-10 w-full rounded-xl border border-neutral-900/15 px-3 text-sm font-semibold" />
              <textarea v-model="item.description" rows="2" placeholder="Description" class="mt-3 w-full rounded-xl border border-neutral-900/15 px-3 py-3 text-sm" />
              <button class="mt-2 text-sm font-semibold text-red-700 underline underline-offset-4" @click="deleteRow('audit_quick_wins', item.id)">Delete</button>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-neutral-900/10 bg-white p-6">
          <div class="flex items-center justify-between gap-4">
            <h2 class="text-lg font-semibold">Growth opportunities</h2>
            <button class="h-10 rounded-full border border-neutral-900/15 px-4 text-sm font-semibold hover:bg-neutral-50" @click="addSimple('audit_growth_opportunities', growthOpportunities, 'New growth opportunity')">
              Add
            </button>
          </div>
          <div class="mt-5 space-y-3">
            <div v-for="item in growthOpportunities" :key="item.id" class="rounded-xl border border-neutral-900/10 bg-neutral-50 p-4">
              <input v-model="item.title" class="h-10 w-full rounded-xl border border-neutral-900/15 px-3 text-sm font-semibold" />
              <textarea v-model="item.description" rows="2" placeholder="Description" class="mt-3 w-full rounded-xl border border-neutral-900/15 px-3 py-3 text-sm" />
              <button class="mt-2 text-sm font-semibold text-red-700 underline underline-offset-4" @click="deleteRow('audit_growth_opportunities', item.id)">Delete</button>
            </div>
          </div>
        </div>
      </section>

      <section class="rounded-2xl border border-neutral-900/10 bg-white p-6">
        <div class="flex items-center justify-between gap-4">
          <h2 class="text-lg font-semibold">Competitor comparison</h2>
          <button class="h-10 rounded-full border border-neutral-900/15 px-4 text-sm font-semibold hover:bg-neutral-50" @click="addCompetitor">
            Add competitor
          </button>
        </div>
        <div class="mt-5 space-y-4">
          <div v-for="competitor in competitors" :key="competitor.id" class="rounded-xl border border-neutral-900/10 bg-neutral-50 p-4">
            <div class="grid gap-3 md:grid-cols-2">
              <input v-model="competitor.name" class="h-10 rounded-xl border border-neutral-900/15 px-3 text-sm font-semibold" />
              <input v-model="competitor.website_url" placeholder="Website URL" class="h-10 rounded-xl border border-neutral-900/15 px-3 text-sm" />
            </div>
            <div class="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              <label v-for="[key, label] in competitorChecks" :key="key" class="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm">
                <input v-model="competitor[key]" type="checkbox" />
                <span>{{ label }}</span>
              </label>
            </div>
            <textarea v-model="competitor.notes" rows="2" placeholder="Notes" class="mt-3 w-full rounded-xl border border-neutral-900/15 px-3 py-3 text-sm" />
            <button class="mt-2 text-sm font-semibold text-red-700 underline underline-offset-4" @click="deleteRow('audit_competitors', competitor.id)">Delete</button>
          </div>
        </div>
      </section>

      <section class="rounded-2xl border border-neutral-900/10 bg-white p-6">
        <h2 class="text-lg font-semibold">Action plan and offer</h2>
        <div class="mt-5 grid gap-5">
          <label>
            <span class="text-sm font-semibold">Recommended action plan</span>
            <textarea v-model="audit.recommended_plan" rows="7" class="mt-2 w-full rounded-xl border border-neutral-900/15 px-3 py-3 text-sm" />
          </label>
          <label>
            <span class="text-sm font-semibold">Implementation offer</span>
            <textarea v-model="audit.implementation_offer" rows="4" class="mt-2 w-full rounded-xl border border-neutral-900/15 px-3 py-3 text-sm" />
          </label>
        </div>
      </section>

      <div class="sticky bottom-4 flex justify-end">
        <button class="h-12 rounded-full bg-neutral-950 px-6 text-sm font-semibold text-white shadow-lg hover:bg-neutral-800 disabled:opacity-60" :disabled="saving" @click="saveAll()">
          {{ saving ? "Saving..." : "Save changes" }}
        </button>
      </div>
    </div>
  </div>
</template>

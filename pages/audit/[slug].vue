<script setup lang="ts">
import type { Audit, AuditFinding, AuditScore } from "~/data/audits";
import { calculateOverallScore, formatAuditDate } from "~/data/audits";

type SimpleItem = {
  id: string;
  title: string;
  description: string | null;
  sort_order: number;
};

type Competitor = {
  id: string;
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
};

const route = useRoute();
const supabase = useSupabaseClient();
const slug = String(route.params.slug || "");
const isPreview = computed(() => route.query.preview === "1");

definePageMeta({ layout: "no-contact" });

const loading = ref(true);
const expired = ref(false);
const err = ref<string | null>(null);

const audit = ref<Audit | null>(null);
const scores = ref<AuditScore[]>([]);
const findings = ref<AuditFinding[]>([]);
const quickWins = ref<SimpleItem[]>([]);
const growthOpportunities = ref<SimpleItem[]>([]);
const competitors = ref<Competitor[]>([]);

const overallScore = computed(() => audit.value?.overall_score ?? calculateOverallScore(scores.value) ?? 0);

useSeoMeta({
  title: () => audit.value ? `${audit.value.business_name} Website Audit` : "Website Audit",
  description: "A local website growth audit focused on calls, quote requests, trust signals, and local search visibility.",
  robots: "noindex,nofollow",
});

async function load() {
  loading.value = true;
  err.value = null;
  expired.value = false;

  try {
    let auditQuery = supabase
      .from("audits")
      .select("*")
      .eq("slug", slug);

    if (!isPreview.value) {
      auditQuery = auditQuery.eq("status", "published");
    }

    const { data, error } = await auditQuery.maybeSingle();

    if (error) throw error;

    if (!data || (!isPreview.value && data.expires_at && new Date(data.expires_at) <= new Date())) {
      expired.value = true;
      return;
    }

    audit.value = data;

    const [
      scoresRes,
      findingsRes,
      quickWinsRes,
      growthRes,
      competitorsRes,
    ] = await Promise.all([
      supabase.from("audit_scores").select("*").eq("audit_id", data.id).order("sort_order"),
      supabase.from("audit_findings").select("*").eq("audit_id", data.id).order("sort_order"),
      supabase.from("audit_quick_wins").select("*").eq("audit_id", data.id).order("sort_order"),
      supabase.from("audit_growth_opportunities").select("*").eq("audit_id", data.id).order("sort_order"),
      supabase.from("audit_competitors").select("*").eq("audit_id", data.id).order("sort_order"),
    ]);

    if (scoresRes.error) throw scoresRes.error;
    if (findingsRes.error) throw findingsRes.error;
    if (quickWinsRes.error) throw quickWinsRes.error;
    if (growthRes.error) throw growthRes.error;
    if (competitorsRes.error) throw competitorsRes.error;

    scores.value = scoresRes.data || [];
    findings.value = findingsRes.data || [];
    quickWins.value = quickWinsRes.data || [];
    growthOpportunities.value = growthRes.data || [];
    competitors.value = competitorsRes.data || [];
  } catch (e: any) {
    err.value = e?.message || "Could not load audit.";
  } finally {
    loading.value = false;
  }
}

onMounted(load);

function priorityClasses(priority: string) {
  if (priority === "High") return "bg-neutral-950 text-white";
  if (priority === "Medium") return "bg-neutral-200 text-neutral-900";
  return "bg-white text-neutral-700 border border-neutral-900/15";
}

function yesNo(value: boolean | null) {
  if (value === true) return "Yes";
  if (value === false) return "No";
  return "-";
}

const competitorRows = [
  ["has_clear_cta", "Clear CTA"],
  ["has_city_pages", "City pages"],
  ["has_reviews_visible", "Reviews visible"],
  ["has_mobile_call_button", "Mobile call button"],
  ["has_service_pages", "Service pages"],
  ["has_faq_section", "FAQ section"],
  ["has_schema", "LocalBusiness schema"],
] as const;

const bookingUrl = "/contact";
</script>

<template>
  <main class="min-h-screen bg-[#f6f5f1] text-neutral-950">
    <div v-if="loading" class="mx-auto max-w-4xl px-4 py-16 text-sm text-neutral-700">
      Loading audit...
    </div>

    <div v-else-if="expired || err" class="mx-auto flex min-h-screen max-w-3xl items-center px-4 py-16">
      <section class="rounded-2xl border border-neutral-900/10 bg-white p-8 shadow-sm">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">Website audit</p>
        <h1 class="mt-3 text-3xl font-semibold tracking-tight">This audit has been archived.</h1>
        <p class="mt-4 text-neutral-700">
          Contact us to reopen access or schedule a walkthrough.
        </p>
        <NuxtLink
          :to="bookingUrl"
          class="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-neutral-950 px-5 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Book Audit Walkthrough
        </NuxtLink>
      </section>
    </div>

    <div v-else-if="audit">
      <section class="border-b border-neutral-900/10 bg-white">
        <div class="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_20rem] lg:px-8">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">Local Website Growth Audit</p>
            <h1 class="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Prepared for {{ audit.business_name }}
            </h1>
            <p class="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">
              {{ audit.summary || "We reviewed your website for local visibility, mobile usability, trust signals, and lead conversion opportunities." }}
            </p>
            <div class="mt-7 flex flex-wrap gap-3">
              <NuxtLink
                :to="bookingUrl"
                class="inline-flex h-12 items-center justify-center rounded-full bg-neutral-950 px-6 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Book Audit Walkthrough
              </NuxtLink>
              <a
                :href="audit.website_url"
                target="_blank"
                rel="noreferrer"
                class="inline-flex h-12 items-center justify-center rounded-full border border-neutral-900/15 bg-white px-6 text-sm font-semibold hover:bg-neutral-50"
              >
                Reviewed Website
              </a>
            </div>
          </div>

          <aside class="rounded-2xl border border-neutral-900/10 bg-neutral-50 p-5">
            <div class="text-sm text-neutral-700">Overall score</div>
            <div class="mt-2 text-5xl font-semibold">{{ overallScore }}<span class="text-2xl text-neutral-500">/100</span></div>
            <dl class="mt-6 space-y-3 text-sm">
              <div class="flex justify-between gap-4">
                <dt class="text-neutral-600">Audit date</dt>
                <dd class="font-semibold">{{ formatAuditDate(audit.audit_date) }}</dd>
              </div>
              <div class="flex justify-between gap-4">
                <dt class="text-neutral-600">Available until</dt>
                <dd class="font-semibold">{{ formatAuditDate(audit.expires_at) }}</dd>
              </div>
              <div class="flex justify-between gap-4">
                <dt class="text-neutral-600">Service area</dt>
                <dd class="font-semibold text-right">{{ audit.service_area || "Local market" }}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <div class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <section class="grid gap-4 md:grid-cols-4">
          <div class="rounded-2xl border border-neutral-900/10 bg-white p-5">
            <p class="text-sm text-neutral-600">Overall Score</p>
            <p class="mt-2 text-2xl font-semibold">{{ overallScore }}/100</p>
          </div>
          <div class="rounded-2xl border border-neutral-900/10 bg-white p-5">
            <p class="text-sm text-neutral-600">Biggest Opportunity</p>
            <p class="mt-2 font-semibold">{{ audit.biggest_opportunity || "Clarify the path to call or quote" }}</p>
          </div>
          <div class="rounded-2xl border border-neutral-900/10 bg-white p-5">
            <p class="text-sm text-neutral-600">Fastest Fix</p>
            <p class="mt-2 font-semibold">{{ audit.fastest_fix || "Improve the primary CTA" }}</p>
          </div>
          <div class="rounded-2xl border border-neutral-900/10 bg-white p-5">
            <p class="text-sm text-neutral-600">Best Long-Term Play</p>
            <p class="mt-2 font-semibold">{{ audit.long_term_play || "Service and city landing pages" }}</p>
          </div>
        </section>

        <section class="mt-10 rounded-2xl border border-neutral-900/10 bg-white p-6">
          <h2 class="text-2xl font-semibold tracking-tight">Scorecard</h2>
          <div class="mt-6 grid gap-4 md:grid-cols-2">
            <div v-for="score in scores" :key="score.id" class="rounded-xl border border-neutral-900/10 bg-neutral-50 p-4">
              <div class="flex items-center justify-between gap-4">
                <h3 class="font-semibold">{{ score.category }}</h3>
                <span class="rounded-full bg-white px-3 py-1 text-sm font-semibold">{{ score.score }}/{{ score.max_score }}</span>
              </div>
              <p v-if="score.summary" class="mt-3 text-sm leading-6 text-neutral-700">{{ score.summary }}</p>
            </div>
          </div>
        </section>

        <section class="mt-10">
          <h2 class="text-2xl font-semibold tracking-tight">Top lead leaks</h2>
          <div class="mt-6 space-y-4">
            <article v-for="finding in findings" :key="finding.id" class="rounded-2xl border border-neutral-900/10 bg-white p-6">
              <div class="flex flex-wrap items-center gap-3">
                <span :class="['rounded-full px-3 py-1 text-xs font-semibold', priorityClasses(finding.priority)]">
                  {{ finding.priority }} priority
                </span>
                <span class="text-sm font-semibold text-neutral-600">{{ finding.category }}</span>
              </div>
              <h3 class="mt-4 text-xl font-semibold">{{ finding.title }}</h3>
              <div class="mt-4 grid gap-5 md:grid-cols-2">
                <div>
                  <p class="text-sm font-semibold">Problem</p>
                  <p class="mt-2 leading-7 text-neutral-700">{{ finding.problem }}</p>
                </div>
                <div>
                  <p class="text-sm font-semibold">Recommendation</p>
                  <p class="mt-2 leading-7 text-neutral-700">{{ finding.recommendation }}</p>
                </div>
              </div>
              <div class="mt-5 flex flex-wrap gap-3 text-sm">
                <span v-if="finding.impact" class="rounded-full bg-neutral-100 px-3 py-1 font-semibold">Impact: {{ finding.impact }}</span>
                <span v-if="finding.effort" class="rounded-full bg-neutral-100 px-3 py-1 font-semibold">Effort: {{ finding.effort }}</span>
              </div>
            </article>
            <p v-if="findings.length === 0" class="rounded-2xl border border-neutral-900/10 bg-white p-6 text-neutral-700">
              No lead leaks have been added yet.
            </p>
          </div>
        </section>

        <section class="mt-10 grid gap-8 lg:grid-cols-2">
          <div class="rounded-2xl border border-neutral-900/10 bg-white p-6">
            <h2 class="text-2xl font-semibold tracking-tight">Quick wins</h2>
            <ul class="mt-5 space-y-3">
              <li v-for="item in quickWins" :key="item.id" class="rounded-xl bg-neutral-50 p-4">
                <p class="font-semibold">{{ item.title }}</p>
                <p v-if="item.description" class="mt-2 text-sm leading-6 text-neutral-700">{{ item.description }}</p>
              </li>
            </ul>
          </div>

          <div class="rounded-2xl border border-neutral-900/10 bg-white p-6">
            <h2 class="text-2xl font-semibold tracking-tight">Growth opportunities</h2>
            <ul class="mt-5 space-y-3">
              <li v-for="item in growthOpportunities" :key="item.id" class="rounded-xl bg-neutral-50 p-4">
                <p class="font-semibold">{{ item.title }}</p>
                <p v-if="item.description" class="mt-2 text-sm leading-6 text-neutral-700">{{ item.description }}</p>
              </li>
            </ul>
          </div>
        </section>

        <section v-if="competitors.length" class="mt-10 rounded-2xl border border-neutral-900/10 bg-white p-6">
          <h2 class="text-2xl font-semibold tracking-tight">Competitor snapshot</h2>
          <div class="mt-6 overflow-x-auto">
            <table class="min-w-full text-left text-sm">
              <thead>
                <tr class="border-b border-neutral-900/10">
                  <th class="py-3 pr-4 font-semibold">Area</th>
                  <th v-for="competitor in competitors" :key="competitor.id" class="px-4 py-3 font-semibold">
                    {{ competitor.name }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="[key, label] in competitorRows" :key="key" class="border-b border-neutral-900/5">
                  <td class="py-3 pr-4 font-semibold">{{ label }}</td>
                  <td v-for="competitor in competitors" :key="competitor.id" class="px-4 py-3">
                    {{ yesNo(competitor[key]) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="mt-10 grid gap-8 lg:grid-cols-[1fr_24rem]">
          <div class="rounded-2xl border border-neutral-900/10 bg-white p-6">
            <h2 class="text-2xl font-semibold tracking-tight">Recommended action plan</h2>
            <p class="mt-5 whitespace-pre-line leading-8 text-neutral-700">
              {{ audit.recommended_plan || "Start with the changes most likely to improve calls, quote requests, and local search visibility." }}
            </p>
          </div>

          <aside class="rounded-2xl bg-neutral-950 p-6 text-white">
            <h2 class="text-2xl font-semibold tracking-tight">Fix the highest-impact gaps</h2>
            <p class="mt-4 leading-7 text-white/75">
              {{ audit.implementation_offer || "We already found the highest-impact gaps. Now we can help you fix the ones most likely to improve calls, quote requests, and local search visibility." }}
            </p>
            <NuxtLink
              :to="bookingUrl"
              class="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-neutral-950 hover:bg-neutral-100"
            >
              Get a 30-Day Improvement Plan
            </NuxtLink>
          </aside>
        </section>
      </div>
    </div>
  </main>
</template>

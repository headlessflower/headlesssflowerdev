<script setup lang="ts">
import {
  auditScoreCategories,
  defaultImplementationOffer,
  defaultRecommendedPlan,
  slugifyAuditName,
} from "~/data/audits";

definePageMeta({ layout: "admin", middleware: "admin" });

const supabase = useSupabaseClient();
const router = useRouter();

const saving = ref(false);
const err = ref<string | null>(null);

const form = reactive({
  business_name: "",
  website_url: "",
  business_type: "",
  primary_service: "",
  service_area: "",
  contact_name: "",
  contact_email: "",
  competitor_urls: "",
  expires_at: "",
});

function cleanUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

function nullable(value: string) {
  const trimmed = value.trim();
  return trimmed ? trimmed : null;
}

async function createAudit() {
  saving.value = true;
  err.value = null;

  try {
    const businessName = form.business_name.trim();
    const websiteUrl = cleanUrl(form.website_url);

    if (!businessName || !websiteUrl) {
      throw new Error("Business name and website URL are required.");
    }

    const slug = `${slugifyAuditName(businessName)}-${Math.random().toString(36).slice(2, 7)}`;

    const { data: audit, error: auditError } = await supabase
      .from("audits")
      .insert({
        slug,
        business_name: businessName,
        website_url: websiteUrl,
        business_type: nullable(form.business_type),
        primary_service: nullable(form.primary_service),
        service_area: nullable(form.service_area),
        contact_name: nullable(form.contact_name),
        contact_email: nullable(form.contact_email),
        expires_at: form.expires_at ? new Date(form.expires_at).toISOString() : null,
        summary: "Most local service websites do not fail because they look bad. They fail because customers cannot quickly understand the service, trust the company, or take action. This audit identifies where your site may be losing local leads and gives you a practical plan to improve calls, quote requests, and booked jobs.",
        recommended_plan: defaultRecommendedPlan(),
        implementation_offer: defaultImplementationOffer(),
      })
      .select("id")
      .single();

    if (auditError) throw auditError;

    const scoreRows = auditScoreCategories.map((category, index) => ({
      audit_id: audit.id,
      category,
      score: 3,
      max_score: 5,
      sort_order: index,
    }));

    const { error: scoresError } = await supabase.from("audit_scores").insert(scoreRows);
    if (scoresError) throw scoresError;

    const competitorRows = form.competitor_urls
      .split("\n")
      .map((url) => url.trim())
      .filter(Boolean)
      .map((url, index) => ({
        audit_id: audit.id,
        name: `Competitor ${index + 1}`,
        website_url: cleanUrl(url),
        sort_order: index,
      }));

    if (competitorRows.length) {
      const { error: competitorsError } = await supabase
        .from("audit_competitors")
        .insert(competitorRows);
      if (competitorsError) throw competitorsError;
    }

    await router.push(`/admin/audits/${audit.id}`);
  } catch (e: any) {
    err.value = e?.message || "Could not create audit draft.";
  } finally {
    saving.value = false;
  }
}
</script>

<template>
  <div class="max-w-4xl">
    <NuxtLink to="/admin/audits" class="text-sm font-semibold text-neutral-700 underline underline-offset-4 hover:text-neutral-950">
      Back to audits
    </NuxtLink>

    <div class="mt-6">
      <h1 class="text-2xl font-semibold tracking-tight">New website audit</h1>
      <p class="mt-1 text-sm text-neutral-700">
        Create a manual draft, then fill out findings and recommendations in the editor.
      </p>
    </div>

    <p v-if="err" class="mt-6 rounded-xl border border-red-900/20 bg-red-50 px-4 py-3 text-sm text-red-800">
      {{ err }}
    </p>

    <form class="mt-6 rounded-2xl border border-neutral-900/10 bg-white p-6" @submit.prevent="createAudit">
      <div class="grid gap-5 sm:grid-cols-2">
        <label class="block">
          <span class="text-sm font-semibold">Business name</span>
          <input v-model="form.business_name" required class="mt-2 h-11 w-full rounded-xl border border-neutral-900/15 px-3 text-sm" />
        </label>

        <label class="block">
          <span class="text-sm font-semibold">Website URL</span>
          <input v-model="form.website_url" required placeholder="example.com" class="mt-2 h-11 w-full rounded-xl border border-neutral-900/15 px-3 text-sm" />
        </label>

        <label class="block">
          <span class="text-sm font-semibold">Business type</span>
          <input v-model="form.business_type" placeholder="Roofing company" class="mt-2 h-11 w-full rounded-xl border border-neutral-900/15 px-3 text-sm" />
        </label>

        <label class="block">
          <span class="text-sm font-semibold">Primary service</span>
          <input v-model="form.primary_service" placeholder="Roof repair" class="mt-2 h-11 w-full rounded-xl border border-neutral-900/15 px-3 text-sm" />
        </label>

        <label class="block">
          <span class="text-sm font-semibold">Service area</span>
          <input v-model="form.service_area" placeholder="Austin, TX" class="mt-2 h-11 w-full rounded-xl border border-neutral-900/15 px-3 text-sm" />
        </label>

        <label class="block">
          <span class="text-sm font-semibold">Expiration date</span>
          <input v-model="form.expires_at" type="date" class="mt-2 h-11 w-full rounded-xl border border-neutral-900/15 px-3 text-sm" />
        </label>

        <label class="block">
          <span class="text-sm font-semibold">Contact name</span>
          <input v-model="form.contact_name" class="mt-2 h-11 w-full rounded-xl border border-neutral-900/15 px-3 text-sm" />
        </label>

        <label class="block">
          <span class="text-sm font-semibold">Contact email</span>
          <input v-model="form.contact_email" type="email" class="mt-2 h-11 w-full rounded-xl border border-neutral-900/15 px-3 text-sm" />
        </label>
      </div>

      <label class="mt-5 block">
        <span class="text-sm font-semibold">Competitor URLs</span>
        <textarea
          v-model="form.competitor_urls"
          rows="4"
          placeholder="One URL per line"
          class="mt-2 w-full rounded-xl border border-neutral-900/15 px-3 py-3 text-sm"
        />
      </label>

      <div class="mt-6 flex justify-end">
        <button
          type="submit"
          class="inline-flex h-11 items-center justify-center rounded-full bg-neutral-950 px-5 text-sm font-semibold text-white hover:bg-neutral-800 disabled:opacity-60"
          :disabled="saving"
        >
          {{ saving ? "Creating..." : "Create Audit Draft" }}
        </button>
      </div>
    </form>
  </div>
</template>

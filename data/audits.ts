export const auditStatusOptions = ["draft", "published", "archived", "expired"] as const;

export const auditScoreCategories = [
  "First Impression",
  "Mobile Conversion",
  "Local SEO",
  "Trust Signals",
  "Service Pages",
  "Tracking",
  "Speed & Technical",
  "Follow-Up",
];

export const auditPriorityOptions = ["High", "Medium", "Low"] as const;
export const auditImpactOptions = ["High", "Medium", "Low"] as const;
export const auditEffortOptions = ["Low", "Medium", "High"] as const;

export type AuditStatus = (typeof auditStatusOptions)[number];

export type Audit = {
  id: string;
  slug: string;
  business_name: string;
  website_url: string;
  business_type: string | null;
  primary_service: string | null;
  service_area: string | null;
  contact_name: string | null;
  contact_email: string | null;
  status: AuditStatus;
  visibility: string;
  overall_score: number | null;
  audit_date: string | null;
  expires_at: string | null;
  published_at: string | null;
  summary: string | null;
  biggest_opportunity: string | null;
  fastest_fix: string | null;
  long_term_play: string | null;
  recommended_plan: string | null;
  implementation_offer: string | null;
  created_at: string;
  updated_at: string | null;
};

export type AuditScore = {
  id: string;
  audit_id: string;
  category: string;
  score: number;
  max_score: number;
  summary: string | null;
  sort_order: number;
};

export type AuditFinding = {
  id: string;
  audit_id: string;
  category: string;
  title: string;
  problem: string;
  recommendation: string;
  priority: "High" | "Medium" | "Low";
  impact: "High" | "Medium" | "Low" | null;
  effort: "Low" | "Medium" | "High" | null;
  sort_order: number;
};

export type AuditListItem = {
  id: string;
  slug: string;
  business_name: string;
  website_url: string;
  status: AuditStatus;
  overall_score: number | null;
  created_at: string;
  expires_at: string | null;
};

export function slugifyAuditName(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64) || "audit";
}

export function calculateOverallScore(scores: Array<{ score: number; max_score: number }>) {
  const earned = scores.reduce((total, item) => total + Number(item.score || 0), 0);
  const possible = scores.reduce((total, item) => total + Number(item.max_score || 0), 0);
  if (!possible) return null;
  return Math.round((earned / possible) * 100);
}

export function formatAuditDate(value: string | null | undefined) {
  if (!value) return "Not set";
  try {
    return new Date(value).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return value;
  }
}

export function defaultImplementationOffer() {
  return "Want help fixing the highest-impact items from this audit? We can turn this report into a 30-day website improvement plan focused on calls, quote requests, and local search visibility.";
}

export function defaultRecommendedPlan() {
  return [
    "Phase 1: Improve the conversion path with clearer calls to action, stronger mobile phone access, shorter quote steps, and proof near the decision points.",
    "Phase 2: Strengthen local SEO with dedicated service pages, city/service-area content, FAQs, and schema markup.",
    "Phase 3: Add tracking and follow-up so phone clicks, form submissions, and lead sources become measurable.",
  ].join("\n\n");
}

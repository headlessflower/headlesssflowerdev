export const globalContactSubmissionsTable = "global_contact_submissions";

export type GlobalContactSubmissionInsert = {
    form_key: "contact";
    form_version: number;
    full_name: string;
    email: string;
    phone: string | null;
    company: string | null;
    city: string | null;
    website_url: string | null;
    service_interest: string;
    budget_range: string;
    timeline: string | null;
    message: string;
    newsletter_opt_in: boolean;
    page: string | null;
    source: string | null;
    booking_url: string | null;
    user_agent: string | null;
    elapsed_ms: number | null;
    raw_fields: Record<string, any>;
    meta: Record<string, any>;
};

type SchemaFormPayload = {
    form_key: string;
    form_version: number;
    fields: Record<string, any>;
    meta: Record<string, any>;
};

function textOrNull(value: unknown) {
    if (typeof value !== "string") return null;
    const trimmed = value.trim();
    return trimmed ? trimmed : null;
}

function requiredText(value: unknown) {
    return textOrNull(value) || "";
}

export function toGlobalContactSubmission(
    payload: SchemaFormPayload,
): GlobalContactSubmissionInsert {
    const fields = payload.fields || {};
    const meta = payload.meta || {};

    return {
        form_key: "contact",
        form_version: payload.form_version,
        full_name: requiredText(fields.full_name || fields.fullName || fields.name),
        email: requiredText(fields.email || fields.emailAddress).toLowerCase(),
        phone: textOrNull(fields.phone),
        company: textOrNull(fields.company || fields.companyName),
        city: textOrNull(fields.city),
        website_url: textOrNull(fields.website_url || fields.websiteUrl),
        service_interest: requiredText(
            fields.service_interest || fields.projectType,
        ),
        budget_range: requiredText(fields.budget_range || fields.budgetRange),
        timeline: textOrNull(fields.timeline),
        message: requiredText(fields.message || fields.notes),
        newsletter_opt_in: Boolean(
            fields.newsletter_opt_in || fields.marketingConsent,
        ),
        page: textOrNull(meta.page),
        source: textOrNull(meta.source),
        booking_url: textOrNull(meta.booking_url),
        user_agent: textOrNull(meta.user_agent),
        elapsed_ms:
            typeof meta.elapsed_ms === "number" && Number.isFinite(meta.elapsed_ms)
                ? meta.elapsed_ms
                : null,
        raw_fields: fields,
        meta,
    };
}

export const globalContactFieldLabels: Record<string, string> = {
    full_name: "Name",
    email: "Email",
    phone: "Phone",
    company: "Company",
    city: "City",
    website_url: "Website",
    service_interest: "Service interest",
    budget_range: "Budget range",
    timeline: "Timeline",
    message: "Message",
    newsletter_opt_in: "Newsletter opt-in",
};

export const globalContactOrderedKeys = [
    "full_name",
    "email",
    "phone",
    "company",
    "city",
    "website_url",
    "service_interest",
    "budget_range",
    "timeline",
    "message",
    "newsletter_opt_in",
];

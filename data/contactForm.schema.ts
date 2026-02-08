// ~/data/contactForm.schema.ts
export type ContactFieldType =
    | "text"
    | "email"
    | "tel"
    | "textarea"
    | "select"
    | "checkbox"
    | "radio";

export type ContactFieldOption = {
    label: string;
    value: string;
};

export type ContactField = {
    key: string; // stable db column key later
    type: ContactFieldType;
    label: string;
    placeholder?: string;
    required?: boolean;
    maxLength?: number;
    options?: ContactFieldOption[];
    help?: string;
    // For conditional fields later
    dependsOn?: { key: string; value: string };
};

export type ContactFormSchema = {
    formKey: "contact";
    version: 1;
    fields: ContactField[];
};

export const contactFormSchema: ContactFormSchema = {
    formKey: "contact",
    version: 1,
    fields: [
        {
            key: "full_name",
            type: "text",
            label: "Full name",
            placeholder: "Your name",
            required: true,
            maxLength: 80,
        },
        {
            key: "email",
            type: "email",
            label: "Email",
            placeholder: "you@company.com",
            required: true,
            maxLength: 120,
        },
        {
            key: "phone",
            type: "tel",
            label: "Phone (optional)",
            placeholder: "(323) 555-0123",
            required: false,
            maxLength: 30,
        },
        {
            key: "company",
            type: "text",
            label: "Company (optional)",
            placeholder: "Business name",
            required: false,
            maxLength: 120,
        },
        {
            key: "service_interest",
            type: "select",
            label: "What do you need?",
            required: true,
            options: [
                { label: "Website (design + build)", value: "website" },
                { label: "Landing page (conversion)", value: "landing" },
                { label: "SEO + performance tuning", value: "seo_performance" },
                { label: "Automation / forms / systems", value: "automation" },
                { label: "Maintenance plan", value: "maintenance" },
                { label: "Not sure yet", value: "not_sure" },
            ],
        },
        {
            key: "budget_range",
            type: "select",
            label: "Budget range",
            required: true,
            options: [
                { label: "$1k–$3k", value: "1-3" },
                { label: "$3k–$6k", value: "3-6" },
                { label: "$6k–$10k", value: "6-10" },
                { label: "$10k+", value: "10+" },
            ],
        },
        {
            key: "timeline",
            type: "select",
            label: "Timeline",
            required: true,
            options: [
                { label: "ASAP (2–3 weeks)", value: "asap" },
                { label: "This month", value: "month" },
                { label: "Next 1–2 months", value: "1-2" },
                { label: "Flexible", value: "flexible" },
            ],
        },
        {
            key: "message",
            type: "textarea",
            label: "Project details",
            placeholder: "Share goals, pages needed, examples you like, and anything important.",
            required: true,
            maxLength: 2000,
        },
        {
            key: "newsletter_opt_in",
            type: "checkbox",
            label: "Send me occasional updates (optional).",
            required: false,
        },
    ],
};

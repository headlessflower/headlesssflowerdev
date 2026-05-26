<script setup lang="ts">
import {
    globalContactSubmissionsTable,
    toGlobalContactSubmission,
} from "~/data/globalContactSubmission.schema";

type ContactFormState = {
    fullName: string;
    emailAddress: string;
    companyName: string;
    city: string;
    websiteUrl: string;
    projectType: string;
    budgetRange: string;
    message: string;
    marketingConsent: boolean;
};

const runtimeConfig = useRuntimeConfig();
const supabase = useSupabaseClient();

// Set these in nuxt.config.ts runtimeConfig.public for real values
const contactEmailAddress = computed(
    () =>
        runtimeConfig.public?.contactEmailAddress ||
        "headlessflowerdev@gmail.com",
);
const contactPhoneNumber = computed(
    () => runtimeConfig.public?.contactPhoneNumber || "213-294-8744",
);
const bookingUrl = computed(
    () => runtimeConfig.public?.bookingUrl || "/contact",
);

const projectTypes = [
    "New website",
    "Redesign",
    "Landing page",
    "SEO improvements",
    "Performance optimization",
    "Care plan / maintenance",
];

const budgetRanges = ["Under $2k", "$2k–$5k", "$5k–$10k", "$10k+"];

const formState = ref<ContactFormState>({
    fullName: "",
    emailAddress: "",
    companyName: "",
    city: "",
    websiteUrl: "",
    projectType: "New website",
    budgetRange: "$2k–$5k",
    message: "",
    marketingConsent: false,
});

const formErrorMessage = ref<string>("");
const isSubmitting = ref(false);
const isSubmitted = ref(false);

function isValidEmail(emailAddress: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress.trim());
}

function validateForm() {
    formErrorMessage.value = "";

    if (!formState.value.fullName.trim()) {
        formErrorMessage.value = "Please add your name.";
        return false;
    }

    if (!isValidEmail(formState.value.emailAddress)) {
        formErrorMessage.value = "Please enter a valid email address.";
        return false;
    }

    if (!formState.value.message.trim()) {
        formErrorMessage.value = "Tell us a bit about what you want to build.";
        return false;
    }

    return true;
}

async function submitContactForm() {
    if (!validateForm()) return;

    isSubmitting.value = true;
    formErrorMessage.value = "";

    try {
        const payload = {
            form_key: "contact",
            form_version: 2,
            fields: {
                full_name: formState.value.fullName.trim(),
                email: formState.value.emailAddress.trim().toLowerCase(),
                company: formState.value.companyName.trim() || "",
                city: formState.value.city.trim() || "",
                website_url: formState.value.websiteUrl.trim() || "",
                service_interest: formState.value.projectType,
                budget_range: formState.value.budgetRange,
                message: formState.value.message.trim(),
                newsletter_opt_in: formState.value.marketingConsent,
            },
            meta: {
                page: "/contact",
                source: "contact_page",
                booking_url: bookingUrl.value || "",
                user_agent:
                    typeof navigator !== "undefined" ? navigator.userAgent : "",
            },
        };

        const { error } = await supabase
            .from(globalContactSubmissionsTable)
            .insert(toGlobalContactSubmission(payload));

        if (error) {
            throw error;
        }

        isSubmitted.value = true;
        formState.value = {
            fullName: "",
            emailAddress: "",
            companyName: "",
            city: "",
            websiteUrl: "",
            projectType: "New website",
            budgetRange: "$2k–$5k",
            message: "",
            marketingConsent: false,
        };
    } catch (error: any) {
        formErrorMessage.value =
            error?.message ||
            "Something went wrong submitting the form. Please email us directly.";
    } finally {
        isSubmitting.value = false;
    }
}
</script>

<template>
    <div class="min-h-screen bg-white">
        <main>
            <!-- Hero -->
            <section class="px-6 mt-16">
                <div class="mx-auto max-w-6xl pt-16 pb-10">
                    <p class="text-sm uppercase tracking-widest text-zinc-500">
                        Headless Flower • Contact
                    </p>

                    <div class="mt-4 grid gap-8 lg:grid-cols-12 lg:items-start">
                        <div class="lg:col-span-7">
                            <h1
                                class="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl"
                            >
                                Let’s build something that converts.
                            </h1>

                            <p class="mt-4 max-w-2xl text-lg text-zinc-600">
                                Tell us what you’re working on. We’ll reply with
                                clear next steps — scope, timeline, and a
                                recommended approach.
                            </p>

                            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                                <a
                                    v-if="bookingUrl"
                                    :href="bookingUrl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-white hover:bg-zinc-800"
                                >
                                    Book a 15-min Strategy Call
                                </a>

                                <NuxtLink
                                    to="/work"
                                    class="inline-flex items-center justify-center rounded-xl border border-zinc-200 px-6 py-3 text-zinc-900 hover:bg-zinc-50"
                                >
                                    View Recent Work
                                </NuxtLink>
                            </div>

                            <div class="mt-6 flex flex-wrap gap-2">
                                <span
                                    class="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700"
                                >
                                    Nuxt + Tailwind
                                </span>
                                <span
                                    class="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700"
                                >
                                    Mobile-first
                                </span>
                                <span
                                    class="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700"
                                >
                                    SEO foundations
                                </span>
                                <span
                                    class="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700"
                                >
                                    Performance-focused
                                </span>
                            </div>
                        </div>

                        <!-- Contact methods -->
                        <div class="lg:col-span-5">
                            <div
                                class="rounded-2xl border border-zinc-200 bg-zinc-50 p-6"
                            >
                                <h2 class="text-lg font-semibold text-zinc-900">
                                    Reach us directly
                                </h2>
                                <p class="mt-2 text-sm text-zinc-600">
                                    Prefer email or a quick call? Use the
                                    details below.
                                </p>

                                <div class="mt-6 space-y-3">
                                    <div
                                        class="rounded-xl bg-white p-4 ring-1 ring-zinc-200"
                                    >
                                        <p
                                            class="text-xs uppercase tracking-widest text-zinc-500"
                                        >
                                            Email
                                        </p>
                                        <p class="mt-1 text-sm text-zinc-900">
                                            <span v-if="contactEmailAddress">{{
                                                contactEmailAddress
                                            }}</span>
                                            <span v-else class="text-zinc-500"
                                                >Set in
                                                runtimeConfig.public.contactEmailAddress</span
                                            >
                                        </p>
                                    </div>

                                    <div
                                        class="rounded-xl bg-white p-4 ring-1 ring-zinc-200"
                                    >
                                        <p
                                            class="text-xs uppercase tracking-widest text-zinc-500"
                                        >
                                            Phone
                                        </p>
                                        <p class="mt-1 text-sm text-zinc-900">
                                            <span v-if="contactPhoneNumber">{{
                                                contactPhoneNumber
                                            }}</span>
                                            <span v-else class="text-zinc-500"
                                                >Set in
                                                runtimeConfig.public.contactPhoneNumber</span
                                            >
                                        </p>
                                    </div>

                                    <div
                                        class="rounded-xl bg-white p-4 ring-1 ring-zinc-200"
                                    >
                                        <p
                                            class="text-xs uppercase tracking-widest text-zinc-500"
                                        >
                                            Response time
                                        </p>
                                        <p class="mt-1 text-sm text-zinc-900">
                                            Typically within 1–2 business days.
                                        </p>
                                    </div>
                                </div>

                                <div class="mt-6 text-xs text-zinc-500">
                                    By reaching out, you’re not committing to
                                    anything — we’ll simply recommend the best
                                    next step.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Trust row -->
            <section class="px-6">
                <div class="mx-auto max-w-6xl pb-10">
                    <div
                        class="grid gap-3 rounded-2xl border border-zinc-200 p-4 sm:grid-cols-3 sm:p-6"
                    >
                        <div class="rounded-xl bg-zinc-50 p-4">
                            <p class="text-sm font-semibold text-zinc-900">
                                Clarity first
                            </p>
                            <p class="mt-1 text-sm text-zinc-600">
                                We help you scope the right build, not oversell.
                            </p>
                        </div>
                        <div class="rounded-xl bg-zinc-50 p-4">
                            <p class="text-sm font-semibold text-zinc-900">
                                Fast + maintainable
                            </p>
                            <p class="mt-1 text-sm text-zinc-600">
                                Clean Nuxt code that’s easy to evolve.
                            </p>
                        </div>
                        <div class="rounded-xl bg-zinc-50 p-4">
                            <p class="text-sm font-semibold text-zinc-900">
                                Conversion-driven
                            </p>
                            <p class="mt-1 text-sm text-zinc-600">
                                Messaging, layout, and CTAs that drive action.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Form -->
            <section class="px-6">
                <div class="mx-auto max-w-6xl pb-16">
                    <div class="grid gap-6 lg:grid-cols-12">
                        <div class="lg:col-span-7">
                            <div
                                class="rounded-2xl border border-zinc-200 p-6 sm:p-8"
                            >
                                <h2
                                    class="text-2xl font-semibold tracking-tight text-zinc-900"
                                >
                                    Project inquiry
                                </h2>
                                <p class="mt-2 text-sm text-zinc-600">
                                    Share the basics. We’ll follow up with
                                    questions if needed.
                                </p>

                                <div
                                    v-if="isSubmitted"
                                    class="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-5"
                                >
                                    <p
                                        class="text-sm font-semibold text-zinc-900"
                                    >
                                        Thanks — we got it.
                                    </p>
                                    <p class="mt-1 text-sm text-zinc-600">
                                        We’ll reply soon with next steps.
                                    </p>
                                </div>

                                <form
                                    v-else
                                    class="mt-6 space-y-4"
                                    @submit.prevent="submitContactForm"
                                >
                                    <div class="grid gap-4 sm:grid-cols-2">
                                        <div>
                                            <label
                                                class="text-sm font-medium text-zinc-900"
                                                >Full name</label
                                            >
                                            <input
                                                v-model="formState.fullName"
                                                type="text"
                                                autocomplete="name"
                                                class="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                class="text-sm font-medium text-zinc-900"
                                                >Email</label
                                            >
                                            <input
                                                v-model="formState.emailAddress"
                                                type="email"
                                                autocomplete="email"
                                                class="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none"
                                                placeholder="you@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div class="grid gap-4 sm:grid-cols-2">
                                        <div>
                                            <label
                                                class="text-sm font-medium text-zinc-900"
                                                >Company (optional)</label
                                            >
                                            <input
                                                v-model="formState.companyName"
                                                type="text"
                                                class="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none"
                                                placeholder="Business name"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                class="text-sm font-medium text-zinc-900"
                                                >City (optional)</label
                                            >
                                            <input
                                                v-model="formState.city"
                                                type="text"
                                                class="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none"
                                                placeholder="Los Angeles"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            class="text-sm font-medium text-zinc-900"
                                            >Website (optional)</label
                                        >
                                        <input
                                            v-model="formState.websiteUrl"
                                            type="url"
                                            class="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none"
                                            placeholder="https://example.com"
                                        />
                                    </div>

                                    <div class="grid gap-4 sm:grid-cols-2">
                                        <div>
                                            <label
                                                class="text-sm font-medium text-zinc-900"
                                                >Project type</label
                                            >
                                            <select
                                                v-model="formState.projectType"
                                                class="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 focus:border-zinc-400 focus:outline-none"
                                            >
                                                <option
                                                    v-for="projectType in projectTypes"
                                                    :key="projectType"
                                                    :value="projectType"
                                                >
                                                    {{ projectType }}
                                                </option>
                                            </select>
                                        </div>

                                        <div>
                                            <label
                                                class="text-sm font-medium text-zinc-900"
                                                >Budget range</label
                                            >
                                            <select
                                                v-model="formState.budgetRange"
                                                class="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 focus:border-zinc-400 focus:outline-none"
                                            >
                                                <option
                                                    v-for="budgetRange in budgetRanges"
                                                    :key="budgetRange"
                                                    :value="budgetRange"
                                                >
                                                    {{ budgetRange }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            class="text-sm font-medium text-zinc-900"
                                            >Message</label
                                        >
                                        <textarea
                                            v-model="formState.message"
                                            rows="6"
                                            class="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none"
                                            placeholder="What are you building? What’s your timeline? What’s working / not working right now?"
                                        />
                                    </div>

                                    <label class="flex items-start gap-3">
                                        <input
                                            v-model="formState.marketingConsent"
                                            type="checkbox"
                                            class="mt-1 h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-400"
                                        />
                                        <span class="text-sm text-zinc-600">
                                            It’s okay to email me occasional
                                            updates (optional).
                                        </span>
                                    </label>

                                    <p
                                        v-if="formErrorMessage"
                                        class="text-sm text-red-600"
                                    >
                                        {{ formErrorMessage }}
                                    </p>

                                    <button
                                        type="submit"
                                        :disabled="isSubmitting"
                                        class="inline-flex w-full items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-white hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        <span v-if="isSubmitting"
                                            >Sending…</span
                                        >
                                        <span v-else>Send message</span>
                                    </button>

                                    <p class="text-xs text-zinc-500">
                                        If the form fails, email us directly
                                        using the address in the sidebar.
                                    </p>
                                </form>
                            </div>
                        </div>

                        <!-- What happens next -->
                        <div class="lg:col-span-5">
                            <div
                                class="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8"
                            >
                                <h3 class="text-lg font-semibold text-zinc-900">
                                    What happens next
                                </h3>

                                <ol
                                    class="mt-5 space-y-3 text-sm text-zinc-700"
                                >
                                    <li
                                        class="rounded-xl bg-white p-4 ring-1 ring-zinc-200"
                                    >
                                        <span
                                            class="font-semibold text-zinc-900"
                                            >1) Quick review</span
                                        >
                                        <div class="mt-1 text-zinc-600">
                                            We read your message and identify
                                            the fastest path to impact.
                                        </div>
                                    </li>
                                    <li
                                        class="rounded-xl bg-white p-4 ring-1 ring-zinc-200"
                                    >
                                        <span
                                            class="font-semibold text-zinc-900"
                                            >2) Scope + options</span
                                        >
                                        <div class="mt-1 text-zinc-600">
                                            You’ll get a recommended scope,
                                            timeline, and package starting
                                            point.
                                        </div>
                                    </li>
                                    <li
                                        class="rounded-xl bg-white p-4 ring-1 ring-zinc-200"
                                    >
                                        <span
                                            class="font-semibold text-zinc-900"
                                            >3) Kickoff</span
                                        >
                                        <div class="mt-1 text-zinc-600">
                                            If it’s a fit, we schedule kickoff
                                            and start with structure +
                                            messaging.
                                        </div>
                                    </li>
                                </ol>

                                <div
                                    class="mt-6 rounded-xl border border-zinc-200 bg-white p-5"
                                >
                                    <p
                                        class="text-sm font-semibold text-zinc-900"
                                    >
                                        Tip
                                    </p>
                                    <p class="mt-1 text-sm text-zinc-600">
                                        Include your goal (calls, bookings,
                                        inquiries) and a rough timeline. That’s
                                        enough to start.
                                    </p>
                                </div>

                                <NuxtLink
                                    to="/web-design/los-angeles"
                                    class="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 py-3 text-zinc-900 hover:bg-zinc-50"
                                >
                                    See city landing page example
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<!-- components/WhyUsSection.vue -->
<template>
    <section id="why-us" class="relative w-full bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <!-- Heading -->
            <div class="max-w-3xl">
                <h2
                    class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900"
                >
                    {{ heading }}
                </h2>
                <p class="mt-4 text-lg text-gray-600">
                    {{ subheading }}
                </p>
            </div>

            <!-- Grid -->
            <div class="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <!-- Left: Value Props -->
                <div class="lg:col-span-7">
                    <div
                        class="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm"
                    >
                        <h3 class="text-xl font-semibold text-gray-900">
                            The Value I Bring
                        </h3>
                        <ul class="mt-6 space-y-4">
                            <li
                                v-for="(item, idx) in valueBulletsResolved"
                                :key="idx"
                                class="flex gap-3"
                            >
                                <span
                                    class="mt-1.5 h-2.5 w-2.5 rounded-full bg-blue-600 shrink-0"
                                ></span>
                                <p class="text-gray-700 leading-relaxed">
                                    {{ item }}
                                </p>
                            </li>
                        </ul>

                        <!-- CTA -->
                        <div class="mt-8 flex flex-wrap items-center gap-3">
                            <NuxtLink
                                :to="primaryCtaHrefResolved"
                                class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                {{ primaryCtaTextResolved }}
                            </NuxtLink>
                            <NuxtLink
                                :to="secondaryCtaHrefResolved"
                                class="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-gray-800 font-medium hover:border-gray-400 hover:bg-gray-50"
                            >
                                {{ secondaryCtaTextResolved }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Right: Comparison Highlights -->
                <div class="lg:col-span-5 space-y-6">
                    <!-- Budget Dev -->
                    <article
                        class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:-translate-y-0.5 transition-transform"
                    >
                        <h4 class="text-lg font-semibold text-gray-900">
                            Why Not a “Budget Dev”?
                        </h4>
                        <ul class="mt-4 space-y-3">
                            <li
                                v-for="(item, idx) in budgetConsResolved"
                                :key="'b-' + idx"
                                class="flex gap-3"
                            >
                                <span
                                    class="mt-2 h-2 w-2 rounded-full bg-rose-600 shrink-0"
                                ></span>
                                <p class="text-gray-700">{{ item }}</p>
                            </li>
                        </ul>
                    </article>

                    <!-- DIY Platforms -->
                    <article
                        class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:-translate-y-0.5 transition-transform"
                    >
                        <h4 class="text-lg font-semibold text-gray-900">
                            Why Not DIY (Webflow/Squarespace)?
                        </h4>
                        <ul class="mt-4 space-y-3">
                            <li
                                v-for="(item, idx) in diyConsResolved"
                                :key="'d-' + idx"
                                class="flex gap-3"
                            >
                                <span
                                    class="mt-2 h-2 w-2 rounded-full bg-rose-600 shrink-0"
                                ></span>
                                <p class="text-gray-700">{{ item }}</p>
                            </li>
                        </ul>
                    </article>

                    <!-- Full-time Hire -->
                    <article
                        class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:-translate-y-0.5 transition-transform"
                    >
                        <h4 class="text-lg font-semibold text-gray-900">
                            Why Not a Full-Time Hire?
                        </h4>
                        <ul class="mt-4 space-y-3">
                            <li
                                v-for="(item, idx) in fulltimeConsResolved"
                                :key="'f-' + idx"
                                class="flex gap-3"
                            >
                                <span
                                    class="mt-2 h-2 w-2 rounded-full bg-amber-500 shrink-0"
                                ></span>
                                <p class="text-gray-700">{{ item }}</p>
                            </li>
                        </ul>
                    </article>
                </div>
            </div>

            <!-- Bottom Blurb -->
            <div
                class="mt-12 rounded-2xl bg-blue-50 border border-blue-100 p-6 sm:p-8"
            >
                <p class="text-gray-900 text-lg font-semibold">
                    The difference?
                </p>
                <p class="mt-2 text-gray-700">
                    Get professional quality at a sustainable cost — a site
                    that’s built to last, designed to scale, and uniquely yours.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    heading: String,
    subheading: String,
    valueBullets: Array,
    budgetCons: Array,
    diyCons: Array,
    fulltimeCons: Array,
    primaryCtaText: String,
    primaryCtaHref: String,
    secondaryCtaText: String,
    secondaryCtaHref: String,
});

const heading =
    props.heading ??
    "Why choose a freelance developer over other alternatives?";
const subheading =
    props.subheading ??
    "Get expert help without the overhead, platform lock-in, or bloated templates. Pay only for what you need.";

const valueBulletsResolved = props.valueBullets ?? [
    "Custom, not cookie-cutter — built around your needs with clean, lean code.",
    "Pay only for what you need — no salaries, no retainers you won’t use.",
    "Direct communication — talk to the person actually building your site.",
    "Quality & accountability — my work is my reputation and your growth.",
    "Flexible engagement — small updates to full builds, on your schedule.",
    "Experience-backed guidance across SEO, accessibility, security, and performance.",
];

const budgetConsResolved = props.budgetCons ?? [
    "Inconsistent quality control and higher risk of bugs.",
    "Little to no strategy for SEO, accessibility, or performance.",
    "Hidden costs for rework and long-term maintenance.",
    "Template bloat that slows down your site and hurts conversions.",
];

const diyConsResolved = props.diyCons ?? [
    "Limited customization and scalability as your needs grow.",
    "Recurring fees for features you may not need.",
    "“Template look” that dilutes your brand.",
    "Harder to migrate away later; platform lock-in.",
    "Performance and SEO trade-offs without expert oversight.",
];

const fulltimeConsResolved = props.fulltimeCons ?? [
    "High total cost (salary, benefits, taxes, tools).",
    "Downtime risk when workload slows.",
    "Management overhead and longer onboarding.",
    "Harder to scale up/down quickly.",
];

const primaryCtaTextResolved = props.primaryCtaText ?? "Get a Quote";
const primaryCtaHrefResolved = props.primaryCtaHref ?? "#contact";
const secondaryCtaTextResolved = props.secondaryCtaText ?? "See Services";
const secondaryCtaHrefResolved = props.secondaryCtaHref ?? "/services";
</script>

<style scoped>
article {
    transition: transform 150ms ease;
}
</style>

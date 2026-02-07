<script setup lang="ts">
type Props = { cityName: string };
defineProps<Props>();

const faqs = [
    {
        question: "How long does a typical website take?",
        answer: "Most projects take 2–6 weeks depending on scope, content readiness, and feedback cycles.",
    },
    {
        question: "Do you help with copy and messaging?",
        answer: "Yes — we can refine your messaging, page structure, and CTAs so the site is clear and conversion-focused.",
    },
    {
        question: "Will my site be fast and SEO-ready?",
        answer: "We build with Nuxt and performance in mind, plus solid technical SEO foundations (metadata, structure, schema as needed).",
    },
    {
        question: `Do you work with businesses in ${"${cityName}"} specifically?`,
        answer: "Yes — we tailor the strategy for your local audience and service area, including neighborhood targeting if useful.",
    },
];
</script>

<template>
    <section class="px-6">
        <div class="mx-auto max-w-6xl py-14">
            <div class="max-w-2xl">
                <h2
                    class="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
                >
                    FAQ
                </h2>
                <p class="mt-3 text-zinc-600">
                    A few quick answers. If you want a direct recommendation,
                    book a short call.
                </p>
            </div>

            <div class="mt-10 grid gap-4 md:grid-cols-2">
                <div
                    v-for="faqItem in faqs"
                    :key="faqItem.question"
                    class="rounded-2xl border border-zinc-200 p-6"
                >
                    <h3 class="text-base font-semibold text-zinc-900">
                        {{ faqItem.question }}
                    </h3>
                    <p class="mt-2 text-sm text-zinc-600">
                        {{ faqItem.answer }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

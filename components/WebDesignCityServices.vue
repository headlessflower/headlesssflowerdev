<script setup lang="ts">
const services = [
    {
        title: "Web Design (UI/UX)",
        description:
            "Modern design systems that feel premium and guide users to act.",
    },
    {
        title: "Nuxt Development",
        description:
            "Fast, maintainable Vue builds using the Composition API and Tailwind.",
    },
    {
        title: "Landing Pages & Funnels",
        description:
            "High-converting pages for ads, promos, services, and launches.",
    },
    {
        title: "SEO Foundations",
        description:
            "Technical SEO basics done right: structure, schema, speed, and on-page.",
    },
    {
        title: "Performance Optimization",
        description:
            "Core Web Vitals improvements and lightweight, production-ready delivery.",
    },
    {
        title: "Care Plans",
        description:
            "Updates, monitoring, tweaks, and support so your site stays sharp.",
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
                    What we do
                </h2>
                <p class="mt-3 text-zinc-600">
                    Headless Flower builds sites that look great, load fast, and
                    convert visitors into inquiries.
                </p>
            </div>

            <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="service in services"
                    :key="service.title"
                    class="rounded-2xl border border-zinc-200 p-6 hover:bg-zinc-50"
                >
                    <h3 class="text-base font-semibold text-zinc-900">
                        {{ service.title }}
                    </h3>
                    <p class="mt-2 text-sm text-zinc-600">
                        {{ service.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

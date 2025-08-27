<template>
    <div>
        <!-- Hero -->
        <section
            class="relative overflow-hidden bg-neutral-950 text-neutral-100"
        >
            <div class="mx-auto max-w-6xl px-6 py-16 lg:py-20">
                <div
                    class="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between"
                >
                    <div>
                        <p
                            class="mb-3 inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300 ring-1 ring-emerald-400/30"
                        >
                            Our Work
                        </p>
                        <h1
                            class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
                        >
                            Projects
                        </h1>
                        <p class="mt-4 max-w-2xl text-neutral-300">
                            A selection of sites and apps we’ve designed and
                            built. Click any card to view its project page.
                        </p>
                    </div>
                </div>
            </div>
            <div
                class="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl"
                aria-hidden="true"
            />
        </section>
        <NuxtPage />
        <Timeline />
        <SubscriptionServiceBanner />
    </div>
</template>

<script setup>
import projects from "/data/projects.js";

useHead({
    title: "Work — Headless Flower",
    meta: [
        {
            name: "description",
            content:
                "Explore selected projects by Headless Flower. Built with Nuxt, Vue, and a focus on performance, security, and brand alignment.",
        },
        { property: "og:title", content: "Work — Headless Flower" },
        { property: "og:type", content: "website" },
    ],
});
</script>

<style scoped></style>

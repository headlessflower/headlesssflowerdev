<script setup lang="ts">
const steps = [
    {
        title: "Strategy",
        description: "Goals, audience, competitors, and offer clarity.",
    },
    {
        title: "Structure",
        description: "Sitemap + wireframe that supports conversion.",
    },
    {
        title: "Design",
        description: "Clean UI, strong hierarchy, and brand alignment.",
    },
    {
        title: "Build",
        description: "Nuxt + Tailwind implementation with mobile-first QA.",
    },
    {
        title: "Launch",
        description: "SEO essentials, tracking, and deployment checklist.",
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
                    How it works
                </h2>
                <p class="mt-3 text-zinc-600">
                    A simple, transparent process — designed to move fast
                    without sacrificing quality.
                </p>
            </div>

            <ol class="mt-10 grid gap-4 md:grid-cols-5">
                <li
                    v-for="step in steps"
                    :key="step.title"
                    class="rounded-2xl border border-zinc-200 p-6"
                >
                    <p class="text-xs uppercase tracking-widest text-zinc-500">
                        Step
                    </p>
                    <h3 class="mt-2 text-base font-semibold text-zinc-900">
                        {{ step.title }}
                    </h3>
                    <p class="mt-2 text-sm text-zinc-600">
                        {{ step.description }}
                    </p>
                </li>
            </ol>
        </div>
    </section>
</template>

<script setup lang="ts">
type Props = { cityName: string };
defineProps<Props>();

const packages = [
    {
        name: "Starter",
        price: "From $1,500",
        bestFor: "A clean, modern presence",
        bullets: [
            "1 landing page",
            "Mobile-first design",
            "Basic SEO setup",
            "Contact form",
        ],
    },
    {
        name: "Growth",
        price: "From $3,500",
        bestFor: "Service businesses that need leads",
        bullets: [
            "Up to 5 pages",
            "Conversion layout",
            "On-page SEO",
            "Analytics + tracking",
        ],
        featured: true,
    },
    {
        name: "Premium",
        price: "From $6,500",
        bestFor: "Brands that need depth + polish",
        bullets: [
            "Custom design system",
            "Content structure help",
            "Performance tuning",
            "Launch support",
        ],
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
                    Packages for {{ cityName }}
                </h2>
                <p class="mt-3 text-zinc-600">
                    Simple starting points. We’ll scope the exact build based on
                    your goals and content.
                </p>
            </div>

            <div class="mt-10 grid gap-4 lg:grid-cols-3">
                <div
                    v-for="servicePackage in packages"
                    :key="servicePackage.name"
                    class="rounded-2xl border p-6"
                    :class="
                        servicePackage.featured
                            ? 'border-zinc-900 bg-zinc-50'
                            : 'border-zinc-200'
                    "
                >
                    <div class="flex items-start justify-between gap-3">
                        <div>
                            <h3 class="text-lg font-semibold text-zinc-900">
                                {{ servicePackage.name }}
                            </h3>
                            <p class="mt-1 text-sm text-zinc-600">
                                {{ servicePackage.bestFor }}
                            </p>
                        </div>
                        <span class="text-sm font-semibold text-zinc-900">{{
                            servicePackage.price
                        }}</span>
                    </div>

                    <ul class="mt-5 space-y-2 text-sm text-zinc-700">
                        <li
                            v-for="bulletItem in servicePackage.bullets"
                            :key="bulletItem"
                        >
                            ✓ {{ bulletItem }}
                        </li>
                    </ul>

                    <NuxtLink
                        to="/contact"
                        class="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-white hover:bg-zinc-800"
                    >
                        Get a quote
                    </NuxtLink>
                </div>
            </div>

            <p class="mt-6 text-sm text-zinc-500">
                Pricing varies based on content, integrations, and timelines.
            </p>
        </div>
    </section>
</template>

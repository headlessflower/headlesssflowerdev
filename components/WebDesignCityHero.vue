<script setup lang="ts">
type Cta = { label: string; to: string };

type Props = {
    cityName: string;
    state: string;
    headline: string;
    subheadline: string;
    primaryCta: Cta;
    secondaryCta: Cta;
};

defineProps<Props>();
</script>

<template>
    <section class="px-6">
        <div class="mx-auto max-w-6xl pt-16 pb-10">
            <p class="text-sm uppercase tracking-widest text-zinc-500">
                Headless Flower • Web Design in {{ cityName }}, {{ state }}
            </p>

            <div class="mt-4 grid gap-8 lg:grid-cols-12 lg:items-center">
                <div class="lg:col-span-7">
                    <h1
                        class="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl"
                    >
                        {{ headline }}
                    </h1>

                    <p class="mt-4 max-w-2xl text-lg text-zinc-600">
                        {{ subheadline }}
                    </p>

                    <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                        <NuxtLink
                            :to="primaryCta.to"
                            class="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-white hover:bg-zinc-800"
                        >
                            {{ primaryCta.label }}
                        </NuxtLink>

                        <NuxtLink
                            :to="secondaryCta.to"
                            class="inline-flex items-center justify-center rounded-xl border border-zinc-200 px-6 py-3 text-zinc-900 hover:bg-zinc-50"
                        >
                            {{ secondaryCta.label }}
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

                <div class="lg:col-span-5">
                    <div
                        class="rounded-2xl border border-zinc-200 bg-zinc-50 p-6"
                    >
                        <h2 class="text-lg font-semibold text-zinc-900">
                            Free Strategy Snapshot
                        </h2>
                        <p class="mt-2 text-sm text-zinc-600">
                            Tell us what you do and we’ll reply with quick wins:
                            site structure, CTA placement, and SEO priorities.
                        </p>

                        <div class="mt-5 space-y-3">
                            <div
                                class="rounded-xl bg-white p-4 text-sm text-zinc-700 ring-1 ring-zinc-200"
                            >
                                ✓ Ideal for local services, studios, and small
                                teams in {{ cityName }}
                            </div>
                            <div
                                class="rounded-xl bg-white p-4 text-sm text-zinc-700 ring-1 ring-zinc-200"
                            >
                                ✓ Fast builds with clean, maintainable code
                            </div>
                            <div
                                class="rounded-xl bg-white p-4 text-sm text-zinc-700 ring-1 ring-zinc-200"
                            >
                                ✓ Designed to convert: calls, forms, bookings
                            </div>
                        </div>

                        <NuxtLink
                            :to="primaryCta.to"
                            class="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-white hover:bg-zinc-800"
                        >
                            {{ primaryCta.label }}
                        </NuxtLink>

                        <p class="mt-3 text-center text-xs text-zinc-500">
                            No pressure — just clarity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

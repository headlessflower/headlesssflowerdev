<script setup lang="ts">
type Props = {
    cityName: string;
    neighborhoods: string[];
    industries: string[];
};

defineProps<Props>();
</script>

<template>
    <section class="px-6">
        <div class="mx-auto max-w-6xl py-14">
            <div class="grid gap-8 lg:grid-cols-12">
                <div class="lg:col-span-7">
                    <h2
                        class="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
                    >
                        Built for {{ cityName }} businesses
                    </h2>
                    <p class="mt-3 text-zinc-600">
                        We design around what actually drives leads: clear
                        messaging, strong CTA placement, and pages that load
                        fast on mobile.
                    </p>

                    <div class="mt-8 grid gap-4 sm:grid-cols-2">
                        <div class="rounded-2xl border border-zinc-200 p-6">
                            <p class="text-sm font-semibold text-zinc-900">
                                Great fit for
                            </p>
                            <ul class="mt-3 space-y-2 text-sm text-zinc-700">
                                <li
                                    v-for="industry in industries"
                                    :key="industry"
                                >
                                    • {{ industry }}
                                </li>
                            </ul>
                        </div>

                        <div class="rounded-2xl border border-zinc-200 p-6">
                            <p class="text-sm font-semibold text-zinc-900">
                                Neighborhoods served
                            </p>
                            <ul class="mt-4 flex flex-wrap gap-2">
                                <li
                                    v-for="neighborhood in neighborhoods"
                                    :key="neighborhood"
                                    class="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700"
                                >
                                    {{ neighborhood }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-5">
                    <div
                        class="rounded-2xl border border-zinc-200 bg-zinc-50 p-6"
                    >
                        <h3 class="text-base font-semibold text-zinc-900">
                            Recent outcomes
                        </h3>
                        <p class="mt-2 text-sm text-zinc-600">
                            Swap these with real metrics as you collect them.
                        </p>

                        <div class="mt-6 space-y-3">
                            <div
                                class="rounded-xl bg-white p-4 text-sm text-zinc-700 ring-1 ring-zinc-200"
                            >
                                ✓ Faster load times and cleaner navigation
                            </div>
                            <div
                                class="rounded-xl bg-white p-4 text-sm text-zinc-700 ring-1 ring-zinc-200"
                            >
                                ✓ Stronger CTA placement for calls and forms
                            </div>
                            <div
                                class="rounded-xl bg-white p-4 text-sm text-zinc-700 ring-1 ring-zinc-200"
                            >
                                ✓ SEO-ready structure for local search
                                visibility
                            </div>
                        </div>

                        <NuxtLink
                            to="/work"
                            class="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 py-3 text-zinc-900 hover:bg-zinc-50"
                        >
                            See examples
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

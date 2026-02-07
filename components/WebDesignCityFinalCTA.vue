<script setup lang="ts">
type Cta = { label: string; to: string };
type Props = { cityName: string; primaryCta: Cta };

defineProps<Props>();
</script>

<template>
    <section class="px-6">
        <div class="mx-auto max-w-6xl py-14">
            <div
                class="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 sm:p-10"
            >
                <div class="max-w-2xl">
                    <h2
                        class="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
                    >
                        Ready to launch a better site in {{ cityName }}?
                    </h2>
                    <p class="mt-3 text-zinc-600">
                        Let’s map your best next step — whether that’s a landing
                        page, redesign, or a full Nuxt build.
                    </p>
                </div>

                <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                    <NuxtLink
                        :to="primaryCta.to"
                        class="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-white hover:bg-zinc-800"
                    >
                        {{ primaryCta.label }}
                    </NuxtLink>

                    <NuxtLink
                        to="/contact"
                        class="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 py-3 text-zinc-900 hover:bg-zinc-50"
                    >
                        Request a quote
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

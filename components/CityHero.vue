<script setup lang="ts">
type Props = {
    cityName: string;
    state: string;
    heroHeadline: string;
    heroSubheadline: string;
};

defineProps<Props>();
</script>

<template>
    <section class="mx-auto max-w-6xl pt-16 pb-10">
        <p class="text-sm uppercase tracking-widest text-zinc-500">
            Headless Flower • {{ cityName }}, {{ state }}
        </p>

        <h1
            class="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl"
        >
            {{ heroHeadline }}
        </h1>

        <p class="mt-4 max-w-2xl text-lg text-zinc-600">
            {{ heroSubheadline }}
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-white hover:bg-zinc-800"
            >
                Book a 15-min Strategy Call
            </NuxtLink>

            <NuxtLink
                to="/work"
                class="inline-flex items-center justify-center rounded-xl border border-zinc-200 px-6 py-3 text-zinc-900 hover:bg-zinc-50"
            >
                View Recent Work
            </NuxtLink>
        </div>
    </section>
</template>

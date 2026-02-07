<script setup lang="ts">
type Props = {
    citySlugs: string[];
};

defineProps<Props>();

function formatCitySlug(citySlug: string) {
    return citySlug.replace(/-/g, " ");
}
</script>

<template>
    <section class="mx-auto max-w-6xl pb-16">
        <div class="rounded-2xl border border-zinc-200 p-6">
            <h2 class="text-lg font-semibold text-zinc-900">
                Explore other cities
            </h2>
            <div class="mt-4 flex flex-wrap gap-2">
                <NuxtLink
                    v-for="citySlug in citySlugs"
                    :key="citySlug"
                    :to="`/locations/${citySlug}`"
                    class="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-800 hover:bg-zinc-50"
                >
                    {{ formatCitySlug(citySlug) }}
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

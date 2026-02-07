<script setup lang="ts">
type Props = {
    neighborhoods: string[];
    industries: string[];
};

defineProps<Props>();
</script>

<template>
    <section class="mx-auto max-w-6xl pb-16">
        <div class="grid gap-6 md:grid-cols-2">
            <div class="rounded-2xl border border-zinc-200 p-6">
                <h2 class="text-lg font-semibold text-zinc-900">
                    Neighborhoods we serve
                </h2>
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

            <div class="rounded-2xl border border-zinc-200 p-6">
                <h2 class="text-lg font-semibold text-zinc-900">
                    Great fit for
                </h2>
                <ul class="mt-4 space-y-2 text-zinc-700">
                    <li v-for="industry in industries" :key="industry">
                        • {{ industry }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

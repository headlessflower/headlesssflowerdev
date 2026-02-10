<template>
    <div>
        <!-- Hero -->
        <section
            class="relative overflow-hidden bg-neutral-950 text-neutral-100"
        >

            <div
                class="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl"
                aria-hidden="true"
            />
        </section>
      <NuxtPage />

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

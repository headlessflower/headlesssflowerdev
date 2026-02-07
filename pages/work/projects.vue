<template>
    <main class="min-h-screen bg-neutral-950 text-neutral-100">
        <!-- Grid -->
      <TheWorkSection/>
    </main>
</template>

<script setup lang="ts">
import projects from "~/data/projects.js";
import { computed, unref } from "vue";


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

<style scoped>
/* Matches site style */
</style>

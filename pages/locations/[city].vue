<script setup lang="ts">
import { getCityBySlug, citySlugs } from "~/data/cities";

const route = useRoute();

const citySlug = String(route.params.city ?? "").toLowerCase();
const city = getCityBySlug(citySlug);

if (!city) {
    throw createError({
        statusCode: 404,
        statusMessage: "City not found",
    });
}

useHead(() => ({
    title: city.seoTitle,
    meta: [
        { name: "description", content: city.seoDescription },
        { property: "og:title", content: city.seoTitle },
        { property: "og:description", content: city.seoDescription },
    ],
    script: [
        {
            type: "application/ld+json",
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "Headless Flower",
                areaServed: { "@type": "City", name: city.name },
                serviceType: [
                    "Web Design",
                    "Web Development",
                    "SEO",
                    "Landing Pages",
                ],
            }),
        },
    ],
}));
</script>

<template>
    <div class="min-h-screen">
        <main class="px-6 mt-16">
            <CityHero
                :city-name="city.name"
                :state="city.state"
                :hero-headline="city.heroHeadline"
                :hero-subheadline="city.heroSubheadline"
            />

            <CityFit
                :neighborhoods="city.neighborhoods"
                :industries="city.industries"
            />

            <CityNav :city-slugs="citySlugs" />
        </main>

        <TheFooter />
    </div>
</template>

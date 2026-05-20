<script setup lang="ts">
import { getCityBySlug, citySlugs } from "~/data/cities";

const route = useRoute();

const citySlug = String(route.params.city ?? "").toLowerCase();
const city = getCityBySlug(citySlug);

if (!city) {
    throw createError({ statusCode: 404, statusMessage: "City not found" });
}

const primaryCta = {
    label: "Book a 15-min Strategy Call",
    to: "/contact",
};

const secondaryCta = {
    label: "View Recent Work",
    to: "/work",
};

useHead(() => ({
    title: city.seoTitle,
    meta: [
        { name: "description", content: city.seoDescription },
        { property: "og:title", content: city.seoTitle },
        { property: "og:description", content: city.seoDescription },
    ],
    link: [
        // if this is your primary SEO URL structure, set canonical to itself
        {
            rel: "canonical",
            href: `https://headlessflower.dev/web-design/${citySlug}`,
        },
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
                    "Landing Pages",
                    "SEO",
                ],
            }),
        },
    ],
}));
</script>

<template>
    <div class="min-h-screen bg-white">
        <main class="mt-16">
            <WebDesignCityHero
                :city-name="city.name"
                :state="city.state"
                :headline="city.heroHeadline"
                :subheadline="city.heroSubheadline"
                :primary-cta="primaryCta"
                :secondary-cta="secondaryCta"
            />

            <WebDesignTrustRow />

            <WebDesignCityServices />

            <WebDesignCityProcess />

            <WebDesignCityProof
                :city-name="city.name"
                :neighborhoods="city.neighborhoods"
                :industries="city.industries"
            />

            <WebDesignCityPackages :city-name="city.name" />

            <WebDesignCityFaq :city-name="city.name" />

            <WebDesignCityFinalCta
                :city-name="city.name"
                :primary-cta="primaryCta"
            />

            <WebDesignCityNav :city-slugs="citySlugs" />
        </main>
    </div>
</template>

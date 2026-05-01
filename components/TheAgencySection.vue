<template>
    <main class="min-h-screen bg-neutral-950 text-neutral-100">
        <!-- Hero -->
        <section class="relative overflow-hidden">
            <div class="mx-auto max-w-6xl px-6 py-16 lg:py-20">
                <div
                    class="grid grid-cols-1 items-center gap-10 md:grid-cols-2"
                >
                    <div>
                        <p
                            class="mb-3 inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300 ring-1 ring-emerald-400/30"
                        >
                            About Us
                        </p>
                        <h1
                            class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
                        >
                            We Are Headless Flower
                        </h1>
                        <p class="mt-4 text-lg text-neutral-300">
                            A small-business technology partner focused on
                            conversion, maintenance, and operational clarity. We
                            create white-label websites and customer-facing
                            systems that help businesses turn attention into
                            leads, bookings, and repeatable growth.
                        </p>
                        <NuxtLink
                            to="/contact"
                            class="mt-6 inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                        >
                            Work with us
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="ml-2 h-4 w-4"
                            >
                                <path d="M13.5 4.5L21 12l-7.5 7.5m7.5-7.5H3" />
                            </svg>
                        </NuxtLink>
                    </div>
                    <div>
                        <img
                            src="/profile_pic_2.png"
                            alt="Team working at creative agency"
                            class="w-full rounded-2xl border border-neutral-800/60 object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
            <div
                class="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl"
                aria-hidden="true"
            />
        </section>

        <!-- Mission -->
        <section class="mx-auto max-w-6xl px-6 py-20">
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
                <div>
                    <h2 class="text-2xl font-bold text-emerald-400">
                        Our Mission
                    </h2>
                    <p class="mt-4 text-neutral-300">
                        We believe small businesses need more than a nice-looking
                        site. They need a managed system that captures demand,
                        supports customers, and stays reliable over time. That is
                        why we combine strategy, design, development, and
                        monthly upkeep into one ongoing service.
                    </p>
                    <ul class="mt-6 list-disc space-y-2 pl-5 text-neutral-300">
                        <li>Conversion-focused pages and booking flows</li>
                        <li>Managed website updates and monthly upkeep</li>
                        <li>Admin dashboards and customer data tools</li>
                        <li>White-label systems tailored to your brand</li>
                        <li>Ongoing reporting and growth recommendations</li>
                    </ul>
                </div>
                <div>
                    <img
                        src="/dev-hero-alt.png"
                        alt="Collaborative creative meeting"
                        class="w-full rounded-2xl border border-neutral-800/60 object-cover shadow-lg"
                    />
                </div>
            </div>
        </section>

        <!-- Values -->
        <section class="mx-auto max-w-6xl px-6 py-20">
            <h2 class="text-2xl font-bold text-emerald-400">Our Values</h2>
            <div
                class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
                <div
                    class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6"
                >
                    <h3 class="text-lg font-semibold text-neutral-100">
                        Collaboration
                    </h3>
                    <p class="mt-2 text-neutral-300">
                        We work as an ongoing partner, shaping the system around
                        your workflow and improving it as your business grows.
                    </p>
                </div>
                <div
                    class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6"
                >
                    <h3 class="text-lg font-semibold text-neutral-100">
                        Innovation
                    </h3>
                    <p class="mt-2 text-neutral-300">
                        We use modern tools to simplify operations, reduce manual
                        work, and give small businesses capabilities that usually
                        require a larger team.
                    </p>
                </div>
                <div
                    class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6"
                >
                    <h3 class="text-lg font-semibold text-neutral-100">
                        Integrity
                    </h3>
                    <p class="mt-2 text-neutral-300">
                        We prioritize clear scope, dependable upkeep, and systems
                        you can actually rely on instead of flashy one-time
                        builds that get neglected.
                    </p>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="mx-auto max-w-6xl px-6 py-20">
            <div
                class="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-10 text-center"
            >
                <h2 class="text-2xl font-bold text-neutral-100">
                    Let’s build the system behind your next stage of growth
                </h2>
                <p class="mt-3 text-neutral-300">
                    We align positioning, website management, lead capture, and
                    operational tooling so your business has one clear platform
                    to grow on.
                </p>
                <NuxtLink
                    to="/contact"
                    class="mt-6 inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                    Get in touch
                </NuxtLink>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
useHead({
    title: "About Headless Flower — Managed Growth Systems for Small Businesses",
    meta: [
        {
            name: "description",
            content:
                "Headless Flower builds managed websites, booking flows, dashboards, and white-label business systems for small businesses that want more customers and less operational friction.",
        },
        { property: "og:title", content: "We Are Headless Flower" },
        {
            property: "og:description",
            content:
                "A small-business technology partner focused on customer conversion, maintenance, and white-label systems.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
    ],
});
</script>

<style scoped>
/* Matches the dark theme and accent style of the site */
</style>

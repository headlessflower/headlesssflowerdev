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
                            A creative web agency that designs, builds, and
                            maintains websites with a focus on performance,
                            security, and brand alignment. We empower businesses
                            with modern technology and timeless design
                            principles.
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
                        We believe your website should be more than just a
                        presence—it should be a growth engine. By combining
                        strategy, design, and development, we deliver sites that
                        don’t just look beautiful but work hard for your
                        business every day.
                    </p>
                    <ul class="mt-6 list-disc space-y-2 pl-5 text-neutral-300">
                        <li>Security‑first development practices</li>
                        <li>Performance tuned to Core Web Vitals</li>
                        <li>Accessible, inclusive experiences</li>
                        <li>Clear brand alignment across devices</li>
                        <li>Ongoing monthly maintenance & reporting</li>
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
                        We work closely with clients, treating your goals as our
                        own and keeping communication open throughout the
                        process.
                    </p>
                </div>
                <div
                    class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6"
                >
                    <h3 class="text-lg font-semibold text-neutral-100">
                        Innovation
                    </h3>
                    <p class="mt-2 text-neutral-300">
                        We stay current with modern frameworks, hosting, and
                        best practices so your website stays ahead of the curve.
                    </p>
                </div>
                <div
                    class="rounded-2xl border border-neutral-800/60 bg-neutral-900 p-6"
                >
                    <h3 class="text-lg font-semibold text-neutral-100">
                        Integrity
                    </h3>
                    <p class="mt-2 text-neutral-300">
                        Transparency and trust are at the heart of every
                        project. We prioritize long‑term partnerships over
                        short‑term wins.
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
                    Let’s grow your online presence together
                </h2>
                <p class="mt-3 text-neutral-300">
                    We’ll align strategy, design, and technology to create a
                    website that delivers measurable results for your business.
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
    title: "About Headless Flower — Creative Web Agency",
    meta: [
        {
            name: "description",
            content:
                "Headless Flower is a creative web agency building secure, fast, and brand‑aligned websites with ongoing maintenance and support.",
        },
        { property: "og:title", content: "We Are Headless Flower" },
        {
            property: "og:description",
            content:
                "Creative agency specializing in secure, fast, and brand‑aligned websites. Learn about our mission, values, and approach.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
    ],
});
</script>

<style scoped>
/* Matches the dark theme and accent style of the site */
</style>

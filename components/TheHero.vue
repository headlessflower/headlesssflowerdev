<template>
    <section class="relative bg-gray-50" id="hero">
        <!-- Background -->
        <div class="absolute inset-0">
            <img
                src="/dev-hero-alt.png"
                alt="Creative agency background"
                class="w-full h-full object-cover opacity-30"
            />
            <div
                class="absolute inset-0 bg-gradient-to-b from-white/70 to-gray-50"
            ></div>
        </div>

        <!-- Content -->
        <div
            class="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-40 text-center"
        >
            <h1
                class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
            >
                Building Modern Websites <br class="hidden sm:block" />
                That Reflect Your Brand
            </h1>
            <p class="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
                We create secure, accessible, and user-friendly websites that
                showcase your identity and help you connect with the right
                audience.
            </p>

            <div class="mt-10 flex justify-center gap-4">
                <NuxtLink
                    to="/services"
                    class="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
                >
                    View Services
                </NuxtLink>
                <NuxtLink
                    to="#contact"
                    class="px-6 py-3 rounded-xl bg-white border border-gray-300 text-gray-800 font-medium shadow hover:bg-gray-50 transition"
                >
                    Get a Quote
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
useHead({
    title: "Headless Flower | Web Development Agency",
    meta: [
        {
            name: "description",
            content:
                "We build modern, accessible, and secure websites for businesses that want to stand out. Headless Flower helps you create your brand’s digital identity with best practices in mind.",
        },
    ],
});
</script>

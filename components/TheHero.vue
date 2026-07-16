<template>
  <section id="hero" class="relative min-h-screen overflow-hidden bg-[#080808] text-[#f7f7f4]">
    <div class="hf-container px-5 pb-8 pt-24 sm:px-8 lg:pt-28">
      <div class="grid min-h-[calc(100vh-9rem)] grid-rows-[1fr_auto]">
        <div class="grid gap-12 lg:grid-cols-[0.48fr_0.52fr]">
          <div class="hidden lg:block" />

          <div class="max-w-2xl pt-[clamp(5rem,13vh,9rem)] lg:justify-self-start">
            <h1 class="text-[clamp(2.15rem,3vw,4.35rem)] font-regular leading-[1.08] tracking-normal">
              We design websites and business systems that turn attention into trust, leads, and useful momentum.
            </h1>
          </div>
        </div>

        <div class="mt-16 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <p class="select-none text-[clamp(5.5rem,20vw,22rem)] font-bold leading-[0.72] tracking-normal text-white/90">
            Headless<br class="sm:hidden" /> Flower
          </p>

          <p class="pb-2 text-xl font-semibold text-white/78">
            Scroll to explore ↓
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: "Headless Flower | Web Design and Business Systems",
  meta: [
    {
      name: "description",
      content:
        "Headless Flower designs high-trust websites, lead capture flows, and business systems for service brands that need clarity and momentum.",
    },
  ],
});
</script>

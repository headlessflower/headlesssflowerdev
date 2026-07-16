<script setup lang="ts">
const primaryCta = {
  label: "Start a project",
  to: "/contact",
};

const secondaryCta = {
  label: "View recent work",
  to: "/work",
};

useHead({
  title: "Web Design | Headless Flower",
  meta: [
    {
      name: "description",
      content:
        "Headless Flower designs and builds high-trust websites for service businesses, creative teams, and operators who need a clearer digital presence.",
    },
  ],
});
</script>

<template>
  <main class="bg-[#f7f7f4] text-[#080808]">
    <section class="px-5 pb-20 pt-32 sm:px-8 lg:pb-28 lg:pt-40">
      <div class="mx-auto grid max-w-[96rem] gap-14 lg:grid-cols-[0.34fr_0.66fr]">
        <p class="text-2xl font-semibold">(Web design)</p>

        <div>
          <h1 class="max-w-5xl text-[clamp(4rem,8vw,9rem)] font-bold leading-[0.9] tracking-normal">
            Websites built for trust, clarity, and momentum.
          </h1>
          <p class="mt-10 max-w-3xl text-[clamp(1.45rem,2vw,2.35rem)] font-semibold leading-[1.12] text-black/56">
            We shape the structure, messaging, interface, and implementation so your site feels calm, credible, and useful from the first visit.
          </p>

          <div class="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-2xl font-semibold">
            <NuxtLink :to="primaryCta.to">{{ primaryCta.label }}</NuxtLink>
            <NuxtLink :to="secondaryCta.to">{{ secondaryCta.label }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <WebDesignTrustRow />
    <WebDesignCityServices />
    <WebDesignCityProcess />
    <WebDevPricing />
    <TheWorkSection />
  </main>
</template>

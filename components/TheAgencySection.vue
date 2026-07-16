<script setup lang="ts">
const principles = [
  {
    title: "Clarity before production",
    body: "We start by understanding what your customers need to believe, what your team needs to manage, and where the current experience creates friction.",
  },
  {
    title: "Systems over one-off pages",
    body: "A site should not be a static brochure. We shape reusable patterns, lead paths, content structure, and workflows that can keep improving after launch.",
  },
  {
    title: "Measured upkeep",
    body: "The work continues through updates, maintenance, reporting, and small improvements that compound into a more useful web presence.",
  },
];

const process = [
  {
    number: "01",
    title: "Creative Research",
    body: "We learn the offer, audience, service model, existing tools, and practical constraints before deciding what to design or build.",
  },
  {
    number: "02",
    title: "Strategy & Concept",
    body: "We define the core message, page structure, conversion paths, and operational pieces needed to support the customer journey.",
  },
  {
    number: "03",
    title: "Design & Build",
    body: "We turn the direction into a polished interface, production code, integrations, and content patterns your business can actually use.",
  },
  {
    number: "04",
    title: "Refine & Maintain",
    body: "We keep the system healthy with updates, measurement, iteration, and clear recommendations for what should improve next.",
  },
];

useHead({
  title: "About Headless Flower | Web Design and Business Systems",
  meta: [
    {
      name: "description",
      content:
        "Headless Flower designs high-trust websites, lead capture flows, and operational tools for service businesses that need clarity and momentum.",
    },
    { property: "og:title", content: "About Headless Flower" },
    {
      property: "og:description",
      content:
        "A practical design and development partner for clearer digital growth.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
</script>

<template>
  <main class="bg-[#f7f7f4] text-[#080808]">
    <section class="bg-[#080808] px-5 pb-20 pt-28 text-[#f7f7f4] sm:px-8 lg:pb-28 lg:pt-36">
      <div class="mx-auto max-w-[96rem]">
        <div class="grid min-h-[72vh] grid-rows-[1fr_auto] gap-16">
          <div class="grid gap-12 lg:grid-cols-[0.48fr_0.52fr]">
            <div>
              <p class="text-2xl font-semibold">(About)</p>
            </div>

            <div class="max-w-4xl lg:pt-16">
              <h1 class="text-[clamp(3.2rem,7vw,8rem)] font-bold leading-[0.94] tracking-normal">
                We design the systems behind clearer digital growth.
              </h1>
              <p class="mt-8 max-w-3xl text-2xl font-semibold leading-tight text-white/44">
                Headless Flower is a small web studio building high-trust websites, lead capture flows, and operational tools for service businesses that need less noise and more useful momentum.
              </p>
            </div>
          </div>

          <p class="select-none text-[clamp(4.7rem,17vw,18rem)] font-bold leading-[0.78] tracking-normal text-white/90">
            About<br class="sm:hidden" /> HF
          </p>
        </div>
      </div>
    </section>

    <section class="px-5 py-20 sm:px-8 lg:py-28">
      <div class="mx-auto max-w-[96rem]">
        <div class="grid gap-12 lg:grid-cols-[0.38fr_0.62fr]">
          <p class="text-2xl font-semibold">(Who we are)</p>

          <div>
            <h2 class="max-w-5xl text-[clamp(2.8rem,5.6vw,6.25rem)] font-bold leading-[0.96] tracking-normal">
              A practical design partner for businesses that depend on trust, clarity, and follow-through.
            </h2>
            <div class="mt-14 grid gap-8 md:grid-cols-2">
              <img
                src="/profile_pic_2.png"
                alt="Headless Flower studio portrait"
                class="aspect-[4/5] w-full object-cover"
              />
              <div class="flex flex-col justify-end border-t border-black/12 pt-8">
                <p class="text-2xl font-semibold leading-tight text-black/52">
                  We combine positioning, interface design, Nuxt development, forms, dashboards, and ongoing upkeep into one managed web presence. The goal is simple: make your business easier to understand, easier to contact, and easier to run.
                </p>
                <NuxtLink to="#contact" class="mt-8 w-fit text-2xl font-semibold">
                  Start a project
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-5 py-20 sm:px-8 lg:py-28">
      <div class="mx-auto max-w-[96rem] border-t border-black/12 pt-10">
        <div class="grid gap-12 lg:grid-cols-[0.38fr_0.62fr]">
          <p class="text-2xl font-semibold">(Principles)</p>

          <div class="grid border-t border-black/12 md:grid-cols-3 md:border-t-0">
            <article
              v-for="principle in principles"
              :key="principle.title"
              class="border-b border-black/12 py-8 md:border-b-0 md:border-l md:border-black/12 md:px-8 md:first:border-l-0 md:first:pl-0"
            >
              <h3 class="text-3xl font-bold leading-none">
                {{ principle.title }}
              </h3>
              <p class="mt-6 text-xl font-semibold leading-tight text-black/46">
                {{ principle.body }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="px-5 py-20 sm:px-8 lg:py-28">
      <div class="mx-auto max-w-[96rem]">
        <div class="grid gap-12 lg:grid-cols-[0.38fr_0.62fr]">
          <p class="text-2xl font-semibold">(Our process)</p>

          <div>
            <p class="max-w-5xl text-[clamp(2.75rem,5vw,5.5rem)] font-bold leading-[1] tracking-normal">
              We approach each project with curiosity and structure, balancing creative direction with practical business outcomes.
            </p>

            <div class="mt-20 border-t border-black/12">
              <article
                v-for="step in process"
                :key="step.number"
                class="grid gap-8 border-b border-black/12 py-10 lg:grid-cols-[0.16fr_0.44fr_0.4fr]"
              >
                <p class="text-3xl font-semibold">
                  {{ step.number }}
                </p>
                <h3 class="text-[clamp(2rem,3.4vw,4rem)] font-bold leading-none">
                  {{ step.title }}
                </h3>
                <p class="text-2xl font-semibold leading-tight text-black/46">
                  {{ step.body }}
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

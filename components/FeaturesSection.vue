<script setup lang="ts">
const values = [
  {
    title: "Human Experience",
    body: "People are at the heart of our work, so every page, flow, and system is shaped around the questions, doubts, and decisions real customers bring with them.",
  },
  {
    title: "Design With Purpose",
    body: "We keep the structure clear and the visual language intentional, balancing brand expression with the practical job each screen needs to do.",
  },
  {
    title: "Sustainable Momentum",
    body: "A good website should stay useful after launch. We build systems that can be measured, maintained, and improved without starting over.",
  },
];
</script>

<template>
  <section class="bg-[#080808] px-5 py-20 text-[#f7f7f4] sm:px-8 lg:py-28">
    <div class="mx-auto max-w-[96rem] border-t border-white/12 pt-10">
      <div class="grid gap-16 lg:grid-cols-[0.48fr_0.52fr]">
        <div>
          <p class="text-2xl font-semibold">(Studio)</p>
        </div>

        <div>
          <p class="max-w-4xl text-[clamp(2.4rem,3vw,5.2rem)] font-bold leading-[1.02] tracking-normal">
            We help small businesses turn clear ideas into useful digital experiences that feel deliberate, trustworthy,
            and easy to act on.
          </p>
        </div>
      </div>

      <div class="mt-24 grid gap-16 border-t border-white/12 pt-10 lg:grid-cols-[0.48fr_0.36fr_auto]">
        <p class="text-2xl font-semibold">(Our values)</p>

        <div class="space-y-14">
          <article v-for="value in values" :key="value.title">
            <h2 class="text-2xl font-semibold">{{ value.title }}</h2>
            <p class="mt-5 text-2xl font-semibold leading-tight text-white/36">
              {{ value.body }}
            </p>
          </article>
        </div>

        <NuxtLink to="/agency" class="text-2xl font-semibold hf-link">
          Learn more
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

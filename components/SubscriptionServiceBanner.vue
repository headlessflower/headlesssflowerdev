<template>
  <section class="bg-[#080808] px-5 py-20 text-[#f7f7f4] sm:px-8 lg:py-28">
    <div class="mx-auto max-w-[96rem]">
      <div class="grid gap-14 border-b border-white/14 pb-14 lg:grid-cols-[0.34fr_0.66fr]">
        <p class="text-2xl font-semibold">(Maintenance)</p>

        <div>
          <h2 class="max-w-6xl text-[clamp(3.8rem,8vw,9.5rem)] font-bold leading-[0.88] tracking-normal">
            Keep the system healthy after launch.
          </h2>
          <p class="mt-8 max-w-3xl text-[clamp(1.35rem,1.9vw,2.2rem)] font-semibold leading-[1.14] text-white/56">
            Ongoing updates, monitoring, testing, and practical content support so your site stays current without becoming another thing to babysit.
          </p>

          <div class="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-2xl font-semibold">
            <NuxtLink :to="primaryLink">Start maintenance</NuxtLink>
            <NuxtLink :to="secondaryLink">See plan details</NuxtLink>
          </div>
        </div>
      </div>

      <div class="grid gap-12 py-14 lg:grid-cols-[0.34fr_0.66fr]">
        <div>
          <p class="text-[clamp(4rem,8vw,9rem)] font-bold leading-none text-white/16">
            Care
          </p>
          <p class="mt-6 max-w-sm text-2xl font-semibold leading-tight text-white/64">
            Built for small teams that want the site looked after without a scattered support chain.
          </p>
        </div>

        <div>
          <div
            v-for="(point, index) in points"
            :key="point"
            class="grid gap-5 border-b border-white/14 py-7 md:grid-cols-[5rem_1fr]"
            :class="index === 0 ? 'border-t' : ''"
          >
            <span class="text-2xl font-semibold text-white/36">
              {{ String(index + 1).padStart(2, "0") }}
            </span>
            <p class="text-[clamp(1.65rem,2.7vw,3.25rem)] font-semibold leading-[0.98] tracking-normal">
              {{ point }}
            </p>
          </div>
        </div>
      </div>

      <div class="grid gap-10 border-t border-white/14 pt-14 lg:grid-cols-[0.34fr_0.66fr]">
        <div>
          <p class="text-2xl font-semibold">Basic managed website</p>
          <p class="mt-3 text-xl font-semibold text-white/48">
            Monthly support for the parts of the site that quietly matter.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2">
          <div>
            <p class="text-7xl font-bold leading-none">$150</p>
            <p class="mt-2 text-2xl font-semibold text-white/48">per month</p>
            <NuxtLink :to="primaryLink" class="mt-8 inline-block text-2xl font-semibold">
              Get started
            </NuxtLink>
          </div>

          <ul class="space-y-4">
            <li
              v-for="feature in features"
              :key="feature"
              class="border-b border-white/12 pb-4 text-xl font-semibold leading-tight text-white/64"
            >
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  primaryLink?: string;
  secondaryLink?: string;
}>();

const primaryLink = props.primaryLink ?? "#contact";
const secondaryLink = props.secondaryLink ?? "/monthly-maintenance-subscription";

const points = [
  "Updates, checks, and rollback planning",
  "Backups, uptime monitoring, and form testing",
  "Performance review and practical fixes",
  "Small content edits and conversion cleanups",
  "Plain-language reporting with next steps",
];

const features = [
  "Monthly update cycle",
  "Broken link and form checks",
  "Image and cache review",
  "Priority email support",
  "Emergency hotfix, fair use",
];
</script>

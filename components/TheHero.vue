<template>
  <section id="hero" class="relative overflow-hidden bg-neutral-950">
    <!-- Background media -->
    <div class="absolute inset-0">
      <img
          src="/dev-hero-alt.png"
          alt="Abstract ocean texture"
          class="h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
      />
      <div class="absolute inset-0 bg-neutral-950/45"></div>
      <div
          class="absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/20 to-neutral-950/80"
      ></div>
      <div class="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.65)]"></div>
    </div>


    <!-- Content -->
    <div class="relative mx-auto max-w-7xl px-6 lg:px-12">
      <div class="min-h-[88vh] md:min-h-screen pb-14 pt-28 md:pb-20 md:pt-36">
        <div class="flex h-full items-end">
          <div class="max-w-4xl">
            <!-- small “kicker” label -->
            <p class="text-[11px] font-medium tracking-[0.32em] text-white/65">
              CUSTOMER CONVERSION SYSTEMS FOR SMALL BUSINESSES
            </p>

            <h1
                class="mt-6 font-serif font-normal leading-[0.88] tracking-tightest text-white
         text-[clamp(3rem,6.2vw,6.8rem)]"
            >
              Turn more traffic
              <br />
              into real customers.
            </h1>

            <p class="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              We build and manage white-label business systems for small businesses:
              websites, lead capture, booking flows, and admin tools that help you
              win more qualified customers without adding more busywork.
            </p>

            <div class="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <NuxtLink
                  to="/services"
                  class="inline-flex items-center justify-center rounded-full border border-white/20
                       bg-white/10 px-6 py-3 text-sm font-semibold text-white
                       backdrop-blur-md transition hover:bg-white/15 hover:border-white/30"
              >
                View services
              </NuxtLink>

              <NuxtLink
                  to="#contact"
                  class="inline-flex items-center justify-center rounded-full border border-white/15
                       bg-transparent px-6 py-3 text-sm font-semibold text-white/90
                       transition hover:border-white/25 hover:text-white"
              >
                Let’s talk
                <span class="ml-2 text-white/60">↗</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pointer-events-none absolute bottom-6 right-6">
      <NuxtLink
          to="/agency"
          class="pointer-events-auto inline-flex items-center gap-2 text-xs font-medium tracking-[0.22em] text-white/70
               transition hover:text-white"
      >
        ABOUT <span class="text-white/50">↗</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: "Headless Flower | Customer Conversion Systems for Small Businesses",
  meta: [
    {
      name: "description",
      content:
          "We build and manage white-label websites, booking flows, and customer systems that help small businesses convert more traffic into paying customers.",
    },
  ],
});
</script>

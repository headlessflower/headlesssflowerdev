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
              DIGITAL PRODUCTS FOR SERVICE BUSINESSES
            </p>

            <h1
                class="mt-6 font-serif font-normal leading-[0.88] tracking-tightest text-white
         text-[clamp(3rem,6.2vw,6.8rem)]"
            >
              Modern websites
              <br />
              with real-world performance.
            </h1>

            <p class="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              We design and build fast, accessible Nuxt sites with clean systems behind them—
              so your business looks premium and converts.
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
  title: "Headless Flower | Web Development Agency",
  meta: [
    {
      name: "description",
      content:
          "We design and build fast, accessible Nuxt websites for service businesses—clean systems, premium visuals, and real conversions.",
    },
  ],
});
</script>

<script setup lang="ts">
const brand = "HF"; // change to "HEADLESS FLOWER" if you want, but the big-top treatment works best with 1 word

const primaryLinks = [
  { label: "ABOUT", to: "/agency" },
  { label: "WORK", to: "/work" },
  { label: "SERVICES", to: "/services" },
  { label: "BLOG", to: "/blog" },
  { label: "MAINTENANCE", to: "/monthly-maintenance-subscription" },
];



const socials = [

  { label: "EM", href: "mailto:headlessflowerdev@gmail.com" },
];

function submitNewsletter(e: Event) {
  e.preventDefault();
  // wire up later (Mailchimp/Buttondown/etc)
}
</script>

<template>
  <footer class="relative overflow-hidden rounded-2xl bg-red-600 text-white">
    <!-- Giant wordmark across the top -->
    <div class="relative mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-12">
      <h2
          class="select-none font-sans font-black uppercase tracking-tight text-white/95 leading-none
               text-[clamp(4.5rem,14vw,12rem)]"
      >
        {{ brand }}
      </h2>

      <!-- Top row: nav + CTA -->
      <div class="mt-6 grid grid-cols-1 gap-10 md:grid-cols-[auto_1fr_auto] md:items-start">
        <!-- Stacked nav (like screenshot) -->
        <div class="flex gap-10">
          <nav aria-label="Footer navigation">
            <ul class="space-y-1 text-[12px] font-semibold leading-tight tracking-[0.18em] text-white/90">
              <li v-for="l in primaryLinks" :key="l.label">
                <NuxtLink :to="l.to" class="hover:text-white">
                  {{ l.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>


        </div>

        <!-- Spacer column to mimic lots of empty red -->
        <div class="hidden md:block" />

        <!-- LET'S TALK -->
        <div class="md:justify-self-end">
          <NuxtLink
              to="#contact"
              class="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-white/90 hover:text-white"
          >
            LET’S TALK
            <span
                class="inline-flex h-5 w-5 items-center justify-center rounded border border-white/30 text-[11px] text-white/90"
                aria-hidden="true"
            >
              ↗
            </span>
          </NuxtLink>
        </div>
      </div>

      <!-- Socials row -->
      <div class="mt-10 flex items-center gap-3">
        <a
            v-for="s in socials"
            :key="s.label"
            :href="s.href"
            target="_blank"
            rel="noreferrer"
            class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20
                 text-[11px] font-semibold tracking-[0.12em] text-white/90 hover:bg-white/10"
            :aria-label="s.label"
        >
          {{ s.label }}
        </a>
      </div>

      <!-- Newsletter block (bottom-mid like screenshot) -->
      <div class="mt-24 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div class="hidden md:block" />

        <div class="max-w-md md:justify-self-start">
          <p class="text-[12px] font-semibold tracking-[0.18em] text-white/90">
            SIGN UP FOR THE
            <br />
            LATEST NEWS & INSIGHTS
          </p>

          <form class="mt-6" @submit="submitNewsletter">
            <label class="block text-[12px] font-semibold tracking-[0.18em] text-white/85">
              EMAIL ADDRESS
              <input
                  type="email"
                  required
                  placeholder=""
                  class="mt-3 w-full border-b border-white/35 bg-transparent pb-3
                       text-sm text-white placeholder:text-white/40
                       outline-none focus:border-white"
              />
            </label>

            <button
                type="submit"
                class="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-white/90 hover:text-white"
            >
              SUBMIT
              <span
                  class="inline-flex h-5 w-5 items-center justify-center rounded border border-white/30 text-[11px]"
                  aria-hidden="true"
              >
                ↗
              </span>
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom legal -->
      <div class="mt-16 pb-10">
        <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div class="text-[12px] font-semibold tracking-[0.18em] text-white/85">
            <p>© {{ new Date().getFullYear() }} HEADLESS FLOWER.</p>
            <p class="mt-2 underline underline-offset-4 decoration-white/40">
              <NuxtLink to="/privacy" class="hover:text-white">PRIVACY POLICY</NuxtLink>
              <span class="mx-2 text-white/60">|</span>
              <NuxtLink to="/terms" class="hover:text-white">TERMS &amp; CONDITIONS</NuxtLink>
            </p>
          </div>

          <div class="text-[12px] font-semibold tracking-[0.18em] text-white/75">
            headlessflowerdev@gmail.com · (323) 709-5357
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

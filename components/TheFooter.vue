<script setup lang="ts">
const sitemap = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/agency" },
  { label: "Services", to: "/services" },
  { label: "News", to: "/blog" },
  { label: "Contact", to: "#contact" },
];

const services = [
  { label: "Web Design", to: "/web-design" },
  { label: "Lead Capture", to: "/lead-capture-booking" },
  { label: "Managed Presence", to: "/managed-web-presence" },
  { label: "Business Apps", to: "/white-label-business-apps" },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <footer class="bg-[#080808] px-5 py-12 text-[#f7f7f4] sm:px-8 lg:py-16">
    <div class="mx-auto max-w-[96rem]">
      <div class="grid gap-12 md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[0.8fr_0.8fr_1fr]">
        <nav aria-label="Footer sitemap">
          <h2 class="text-2xl font-semibold">Sitemap</h2>
          <ul class="mt-5 space-y-1 text-2xl font-semibold leading-tight text-white/42">
            <li v-for="link in sitemap" :key="link.label">
              <NuxtLink :to="link.to" class="transition hover:text-white">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <nav aria-label="Footer services">
          <h2 class="text-2xl font-semibold">Services</h2>
          <ul class="mt-5 space-y-1 text-2xl font-semibold leading-tight text-white/42">
            <li v-for="link in services" :key="link.label">
              <NuxtLink :to="link.to" class="transition hover:text-white">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div>
          <h2 class="text-2xl font-semibold">Social</h2>
          <div class="mt-5 space-y-1 text-2xl font-semibold leading-tight text-white/42">
            <a class="block transition hover:text-white" href="mailto:headlessflowerdev@gmail.com">
              Email
            </a>
            <a class="block transition hover:text-white" href="tel:+13237095357">
              Phone
            </a>
          </div>
        </div>
      </div>

      <div class="mt-24 lg:mt-32">
        <p class="select-none text-[clamp(4.7rem,17vw,18rem)] font-bold leading-[0.78] tracking-normal text-white/90">
          Headless<br class="sm:hidden" /> Flower
        </p>
      </div>

      <div class="mt-10 flex flex-col gap-4 border-t border-white/12 pt-6 text-xl font-semibold text-white/72 sm:flex-row sm:items-center sm:justify-between">
        <button type="button" class="hf-link w-fit text-left" @click="scrollToTop">
          Back to top ↑
        </button>
        <p>Copyright © Headless Flower {{ new Date().getFullYear() }}</p>
      </div>
    </div>
  </footer>
</template>

// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [ "@nuxt/icon", "@nuxtjs/seo", "@nuxtjs/sitemap"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  site: {
    url: "https://www.headlessflower.dev",
    name: "HeadlessFlower is a full-stack web developer specializing in building solutions for service businesses",
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
        tailwindcss()
    ],
  },
});
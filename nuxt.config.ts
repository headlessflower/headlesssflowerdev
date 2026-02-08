// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/icon",
    "@nuxtjs/seo",
    "@nuxtjs/sitemap",
    "@nuxtjs/i18n"
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href:
              "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..700&display=swap",
        },
      ],
    },
  },
  site: {
    url: "https://www.headlessflower.dev",
    name: "HeadlessFlower is a full-stack web developer specializing in building solutions for service businesses",
  },
  css: ["~/assets/css/main.css"],
  postcss:{
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },

  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en",
    locales: [
      { code: "en", iso: "en-US", name: "English" },
      { code: "es", iso: "es-MX", name: "Español" }
    ],

    // This enables <i18n> blocks inside Vue SFC files (like the page I sent)
    vueI18n: "./i18n.config.ts"
  }

});

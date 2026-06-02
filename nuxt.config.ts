// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/icon",
    "@nuxtjs/seo",
    "@nuxtjs/sitemap",
    "@nuxtjs/i18n",
    "@nuxtjs/supabase",
    "nuxt-gtag",
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
  },
  runtimeConfig: {
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,

    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
      adminEmails: process.env.ADMIN_EMAILS || "",
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID || "G-NG3LHEM1JD",
    },
  },

  gtag: {
    enabled: process.env.NODE_ENV === "production",
    id: process.env.NUXT_PUBLIC_GTAG_ID || "G-NG3LHEM1JD",
  },

  nitro: {
    prerender: {
      routes: [
        "/admin",
        "/admin/audits",
        "/admin/audits/new",
      ],
    },
  },

  supabase: {
    // optional, only if you’re using auth redirects
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY,
    redirect: false,
  },

});

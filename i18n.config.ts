// i18n.config.ts
export default defineI18nConfig(() => ({
    legacy: false, // required for Composition API usage: useI18n()
    locale: "en",
    fallbackLocale: "en"
}));

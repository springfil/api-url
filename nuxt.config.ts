// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    css: ["~/assets/styles/main.css"],
    icon: {
        customCollections: [
            {
                prefix: "icons",
                dir: "./assets/icons",
            },
        ],
    },
    modules: ["@nuxt/icon"],
});

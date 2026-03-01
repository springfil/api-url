// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: {
        enabled: true,

        timeline: {
            enabled: true,
        },
    },
    experimental: { appManifest: false },
    runtimeConfig: {
        public: {
            apiurl: "",
        },
    },
    css: ["~/assets/styles/main.css"],
    app: {
        head: {
            title: "Приложение VoteApp",
            titleTemplate: "%s | VoteApp",
            htmlAttrs: {
                lang: "ru",
            },
            link: [
                { rel: "icon", type: "image/png", href: "/favicon-32x32.png" },
                {
                    rel: "manifest",
                    crossorigin: "anonymous",
                    href: "/manifest.webmanifest",
                },
            ],
        },
    },
    icon: {
        customCollections: [
            {
                prefix: "icons",
                dir: "./assets/icons",
            },
        ],
    },
    modules: ["@nuxt/icon", "@pinia/nuxt", "pinia-plugin-persistedstate/nuxt"],
});

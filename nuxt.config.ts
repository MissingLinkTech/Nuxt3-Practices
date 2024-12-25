// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/image"],
  app: {
    head: {
      title: "My Nuxt App",
      meta: [
        { name: "description", content: "Everything abount nuxt" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_APP_API_BASE_URL
    }
  }
});
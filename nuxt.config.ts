// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: ''
  },
  app: {
    head: {
      bodyAttrs: {
        class: 'min-h-screen bg-very-light-gray dark:bg-very-dark-blue',
      },
    },
  },
})
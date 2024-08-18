// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    ["@nuxtjs/google-fonts", {
      display: "swap",
      preload: true,
      preconnect: true,
      prefetch: true,
      subsets: 'latin',
      families: {
        'Nunito+Sans': {
          wght: [300, 600, 800],
        }
      }}
    ],
    "@nuxt/icon"
  ],
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
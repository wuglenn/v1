export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  css: ['~/assets/css/main.css', '~/assets/css/fonts.css', '~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', "@pinia/nuxt", "@nuxt/image"],
  app: {
    // buildAssetsDir: '/public/',
    head: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        htmlAttrs: { lang: 'en' },
        link: [{ rel: 'icon', type: 'image/png', href: "/portrait.png" }]
    },
},
});
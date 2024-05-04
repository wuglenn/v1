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
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', "@pinia/nuxt"],
  app: {
    // buildAssetsDir: '/public/',
    head: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        // htmlAttrs: { dir: 'rtl', lang: 'fa' },
        link: [{ rel: 'icon', type: 'image/png', href: "/portrait_500px.png" }]
    },
},
});
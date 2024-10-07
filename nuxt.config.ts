// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-09-27",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image"],
  colorMode: {
    preference: 'dark',
  },
  app:{
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    head: {
      meta: [
        { property: 'og:title', content: 'CV - Elmer Muguerza' },
        { property: 'og:description', content: 'CV - Elmer Muguerza' },
        { property: 'og:image', content: '/miniatura.png' },
        { property: 'og:url', content: 'https://alexmp-dev.pages.dev' },
        { property: 'og:type', content: 'website' },
        { property: 'twitter:card', content: 'CV - Elmer Muguerza' },
        { property: 'twitter:title', content: 'CV - Elmer Muguerza' },
        { property: 'twitter:description', content: 'CV - Elmer Muguerza' },
        { property: 'twitter:image', content: '/miniatura.png' }
      ],title: 'CV - Elmer Muguerza'
    }
    
  },
  css: ['~/assets/css/style.css'],
  nitro: {
    preset: "cloudflare-pages"
  }
})
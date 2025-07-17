// Nuxt config file
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module'
  ],
  css: [
    'aos/dist/aos.css',
    '@/assets/styles/global.css'
  ],
  plugins: [
    { src: '~/plugins/aos.client.js', mode: 'client' }
  ]
})

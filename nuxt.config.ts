// nuxt.config.ts
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: ['~/styles/main.scss',
  "@mdi/font/css/materialdesignicons.css",
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    plugins: [
      vuetify(),
    ],
  },
})

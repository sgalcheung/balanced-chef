import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sanity from 'astro-sanity'

export default defineConfig({
  integrations: [
    tailwind(),

    sanity({
      projectId: 'rd0jbcna',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2021-03-25' // use a UTC date string
    })
  ],

})

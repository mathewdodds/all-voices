import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'The Vue Point',
  description: 'The offical blog for the Vue.js project',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      'link',
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      
    ]
  ],
  vite: {
    build: {
      minify: 'terser'
    }
  }
})
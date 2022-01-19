import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'All Voices',
  description: 'All Voices is a graduate planning project that will eventually become an open source web application',
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
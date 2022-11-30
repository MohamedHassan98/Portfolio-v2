import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const getCache = ({ name, pattern }: any) => ({
  urlPattern: pattern,
  handler: "CacheFirst" as const,
  options: {
    cacheName: name,
    expiration: {
      maxEntries: 500,
      maxAgeSeconds: 60 * 60 * 24
    },
    cacheableResponse: {
      statuses: [200]
    }
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: {
        enabled: true
      },
      workbox: {
        globPatterns: ['**/**/*.{js,css,html,ico,png,svg,webp,ttf}'],
        sourcemap: true,
        maximumFileSizeToCacheInBytes: 15000000,   
      },
      manifest: {
        name: 'Mohamed Hassan',
        short_name: 'Mohamed Hassan',
        description: 'My Portfolio Website',
        start_url: '/',
        id:'/',
        dir: 'ltr',
        display: 'standalone',
        display_override: ['fullscreen'],
        background_color: '#000000',
        lang: 'en',
        orientation: 'portrait',
        scope: '/',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        theme_color: '#000000',
      },
    }),
  ],
})
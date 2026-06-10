import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically update service worker
      includeAssets: [], // Files to cache
      workbox: { // Workbox is Google's Service Worker Library
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'], // Specific file file patterns to cache, ** means all directories, * means all files
        runtimeCaching: [
          {
            // API request caching
            urlPattern: /^https:\/\/api\.example\.com\/.*/i, // Cache API requests matching this pattern
            handler: 'NetworkFirst', // NetworkFirst: Try network first, use cache if it fails, CacheFirst: Check cache first make network request if not found, StaleWhileRevalidate: Show cache first, update in background
            options: {
              cacheName: 'api-cache', // Name for this cache
              expiration: {
                maxEntries: 50, // Store maximum of 50 items in cache
                maxAgeSeconds: 60 * 60 * 24, // Cache expires after 24 hours (86400 seconds)
              },
              cacheableResponse: {
                statuses: [0, 200], // Only cache status codes 0 (CORS) and 200 (success)
              }
            }
          },
          {
            // Image Caching
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/, // Cache requests for image file extensions
            handler: 'CacheFirst', //Images don't change often, so prioritize cache
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              }
            }
          }
        ]
      },
      manifest : {
        "short_name": "Weather App",
        "name": "Weather App PWA",
        "icons": [
            {
                "src": "/images/logo.png",
                "type": "image/png",
                "sizes": "1024x1024"
            }
        ],
        "screenshots": [
            {
                "src": "/images/desktop-screenshot.png",
                "type": "image/png",
                "sizes": "2536x1230",
                "form_factor": "wide",
                "label": "Desktop view of pwa"
            },
            {
                "src": "/images/mobile-screenshot.png",
                "type": "image/png",
                "sizes": "558x1003",
                "form_factor": "narrow",
                "label": "Mobile view of pwa"
            }
        ],
        "start_url": ".",
        "display": "standalone",
        "theme_color": "#000000",
        "background_color": "#ffffff"
      }
    })
  ],
  server: { // for ngrok
    host: true,
    allowedHosts: true
  }
})

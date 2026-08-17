import { defineConfig } from 'vite'
import path from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  base: '/spec-trans/', // <-- замените на имя вашего репо
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    ViteImageOptimizer({
      webp: { quality: 80 }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop();

          if (['png', 'jpg', 'jpeg', 'svg', 'webp', 'gif'].includes(ext)) {
            return 'assets/img/[name]-[hash][extname]';
          }

          if (['css'].includes(ext)) {
            return 'assets/css/[name]-[hash][extname]';
          }

          if (['woff', 'woff2', 'ttf', 'otf'].includes(ext)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }

          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
})



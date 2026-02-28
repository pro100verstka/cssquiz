import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      webp: { quality: 80 }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (asset) => {
          if (/img/i.test(asset.name)) {
            return 'assets/img/[name]-[hash][extname]'
          }
          if (/css/i.test(asset.name)) {
            return 'assets/css/[name]-[hash][extname]'
          }
          if (/woff2?|ttf|otf/i.test(asset.name)) {
            return 'assets/fonts/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})



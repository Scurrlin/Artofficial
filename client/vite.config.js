import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'syntax-hl': ['react-syntax-highlighter'],
          'markdown': ['react-markdown', 'rehype-raw'],
          'lottie': ['lottie-react'],
        },
      },
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createServer } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 10000,
    middlewareMode: 'html'
  },
})

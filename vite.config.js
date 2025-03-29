import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // eslint-disable-next-line no-undef
    port: parseInt(process.env.VITE_PORT) || 3000, // Port setup
  },
})

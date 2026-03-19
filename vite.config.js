import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Server configuration
  server: {
    port: 3000,        // Change port (default is 5173)
    host: true,        // Allow external access (use your IP address)
    // host: '0.0.0.0' // Alternative way to allow external access
  },
  // For GitHub Pages deployment - update 'your-repo-name' with your actual repository name
  // If deploying to username.github.io, remove the base path entirely
  base: '/One-Page-Portfolio/',
})

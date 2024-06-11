import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    proxy: {
      '/api' : {
        target : 'http'
      }

    }
  }
  //add proxy to listen on server on port 3000 or whatever port you setup
})

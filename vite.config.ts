import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3100,
    host:"0.0.0.0",
    allowedHosts:["localhost","stylehub","stylehub.com"]
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})

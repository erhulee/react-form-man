import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "src": path.resolve(__dirname, "./src"),
      "@render": path.resolve(__dirname, "./src/render"),
      "@hooks":  path.resolve(__dirname, "./src/hooks"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@code-gen": path.resolve(__dirname,"./src/code-generator")
    }
  }
})

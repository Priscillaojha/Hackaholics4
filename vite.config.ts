import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Only this ONE export block
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // optional: fixed port
  },
})


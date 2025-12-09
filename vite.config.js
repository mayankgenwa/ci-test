import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // This connects to User Story 3 (Full Test Execution)
    globals: true,
    environment: 'jsdom', // CRITICAL: 'jsdom' is required to test React components like Login.jsx
    setupFiles: [],
    reporters: ['verbose'], 
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
})
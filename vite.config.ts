import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext'
  },
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 5172,
  },
});

console.log(`Navegando el el puerto: ${process.env.PORT}`);

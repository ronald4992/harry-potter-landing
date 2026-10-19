import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base =
  process.env.GITHUB_ACTIONS && repository && !repository.toLowerCase().endsWith('.github.io')
    ? `/${repository}/`
    : '/';

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});

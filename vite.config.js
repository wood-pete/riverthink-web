import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/riverthink-web/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
});

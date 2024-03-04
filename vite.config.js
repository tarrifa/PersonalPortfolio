import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PersonalPortfolio/',
  build: {
    outDir: 'docs', // Specify the output directory for the build files
  },
})

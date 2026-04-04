import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwind()],
  },
});
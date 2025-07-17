import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: [
      'strapi-production-a6a4.up.railway.app',
      'localhost',
      '127.0.0.1'
    ],
    host: '0.0.0.0',
    port: 1337
  }
}); 
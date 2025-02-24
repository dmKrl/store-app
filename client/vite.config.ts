import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    root: './',
    build: {
        outDir: 'dist',
    },
    resolve: {
        alias: {
            src: "/src",
        },
    },
    publicDir: 'assets',
    base: '/store-app/',
});

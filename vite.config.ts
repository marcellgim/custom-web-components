import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: "./src/main.ts",
            name: "Custom Web Components",
            formats: ['es']
        },
        rollupOptions: {
            output: {
                intro: '// Made by me'
            }
        }
    },
    plugins: [
        svelte({
            compilerOptions: {
                customElement: true,
            },
        }),
    ],
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    base: '/vignesh-ai-portfolio/',
    plugins: [react()],
});

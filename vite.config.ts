import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), eslintPlugin({})],
	css: {
		postcss: {
			plugins: [autoprefixer],
		},
	},
});

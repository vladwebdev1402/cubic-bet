import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: { port: 3000 },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src/') }],
  },
  base: 'https://vladwebdev1402.github.io/cubic-bet/',
});

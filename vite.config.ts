import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base ('./') makes the built assets work from any sub-path,
// which is what GitHub Pages uses for project sites (username.github.io/repo/).
// Combined with HashRouter, deep links and refreshes work with no server config.
export default defineConfig({
  plugins: [react()],
  base: './',
});

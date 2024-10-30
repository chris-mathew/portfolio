import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-netlify';

export default {
  // Configure the preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // Add the Netlify adapter here
    adapter: adapter(),
    // Other kit options can be added here as needed
  }
};

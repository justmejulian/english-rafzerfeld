import { getViteConfig } from 'astro/config';

// getViteConfig gives us Astro's resolved Vite config, so tests resolve the
// `@`-path aliases (incl. `.ts`-suffixed imports) and the `astro:content`
// virtual module the same way the app does.
export default getViteConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});

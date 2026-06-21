import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  integrations: [
    starlight({
      title: 'Braindump',
      description: 'A personal knowledge base for software engineering and machine learning.',
      logo: {
        src: './src/assets/braindump-mark.svg',
        alt: 'Braindump',
      },
      favicon: '/favicon.svg?v=2',
      customCss: ['./src/styles/starlight.css'],
      pagefind: true,
      sidebar: [
        { label: 'Home', link: '/' },
        { label: 'Programming Languages', link: '/programming-languages/' },
        { label: 'Generative AI', link: '/generative-ai/' },
        { label: 'DSA', link: '/dsa/' },
      ],
    }),
  ],
});

import { fontFamily } from './src/styles/font';
import { colors } from './src/styles/color';
import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily,
      colors,
    },
  },
  plugins: [animate],
};

export default config;

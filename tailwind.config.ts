import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        blueLight: '#d0eaf5',
        blue1: '#2ea1d1',
        blue2: '#0f5e89',
        blue3: '#0a3c57',
        blue4: '#051f2d'
      },
      fontFamily: {
        josefin: ['var(--josefin-sans)', 'sans-serif'],
        roboto: ['var(--roboto)', 'sans-serif']
      }
    }
  },
  plugins: []
};
export default config;

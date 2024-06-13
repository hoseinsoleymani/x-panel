import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      tprimary: {
        100: 'rgb(18 32 49/1)',
        200: 'rgb(39 48 62/1)',
        300: 'rgb(87 80 241/1)',
        400: 'rgb(2 13 26/1)',
      },
      tgray: {
        100: 'rgb(255 255 255/1)',
        200: 'rgb(156 163 175/1)',
        300: 'hsla(0,0%,100%,.1)',
      },
      tgreen: {
        100: 'rgb(63, 217, 127)',
        200: 'rgb(34 173 92/1)',
      },
      tred: {
        100: 'rgb(242 48 48/1)'
      },
      white: '#fff'
    },
  },
  plugins: [netxtui()],
};
export default config;

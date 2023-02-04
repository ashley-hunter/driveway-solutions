const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Readex Pro', 'sans-serif'],
        inter: ['Inter var', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#edf9ff',
          100: '#d7efff',
          200: '#b7e5ff',
          300: '#86d7ff',
          400: '#4dbfff',
          500: '#239eff',
          600: '#0c80ff',
          700: '#0E3F82',
          800: '#0c52c1',
          900: '#0e3e82',
        },
      },
    },
  },
  plugins: [],
};

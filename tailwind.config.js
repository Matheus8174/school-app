import fontFamily from './src/styles/fontFamily';

import colors from './src/styles/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    fontSize: {
      sm: 12,
      base: 14,
      xl: 20,
      '2xl': 24,
      '3xl': 32
    },
    extend: {
      fontFamily,
      colors
    }
  },
  plugins: []
};

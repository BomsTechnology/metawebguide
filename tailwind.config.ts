/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme')

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      colors: {
        'pridark': '#2F2C2A',
        'pridark2': '#3F3F3F'
      },
      fontFamily: {
        'sans': ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
}


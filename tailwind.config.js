/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  purge: ['./src/**/*.{js,ts,jsx,tsx}',
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  './lib/**/*.{js,ts,jsx,tsx,mdx}',
  './utils/**/*.{js,ts,jsx,tsx,mdx}',
  './styles/**/*.{js,ts,jsx,tsx,mdx}',

],
  theme: {
    extend: { 
      spacing: {
        '5vw': '5vw',
      },
      gridTemplateRows: {
        '6': 'repeat(2, 5vw)',
      },
      colors: {
        'primary': '#006aa1',
        'secondary': '#567C8F',
        'tertiary': '#002162',
        'accent': '#02100E',
        'off': '#F1F4FA',
        'footer': '#466D7E',
      },     
      fontFamily: {
        'Marcellus': ['Marcellus', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif'],
        'Roboto Slab': ['Roboto Slab', 'serif'],
        'Roboto Condensed': ['Roboto Condensed', 'sans-serif'],
        'Roboto Mono': ['Roboto Mono', 'monospace'],
        'Roboto Mono Slab': ['Roboto Mono Slab', 'monospace'],
      },
      fontSize: {
        'large': '5.5rem',
      }

    },
  },
  plugins: [],
}

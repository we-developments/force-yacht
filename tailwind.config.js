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
        '8': 'repeat(8, 5vw)',
      },
      gridTemplateColumns: {
        '8': 'repeat(8, 1fr)',
      },
      gridGap: {
        '15': '15px',
      },
      colors: {
        'primary': '#006aa1',
        'secondary': '#567C8F',
        'tertiary': '#002162',
        'accent': '#02100E',
        'off': '#F1F4FA',
        'footer': '#122442',
      },     
      fontFamily: {
        'Adoha': ['Adoha', 'sans-serif'],
        'Marcellus': ['Marcellus', 'sans-serif'],
      },
      fontSize: {
        'large': '5.5rem',
      }

    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}

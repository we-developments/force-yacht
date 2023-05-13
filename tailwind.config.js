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
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { 
      colors: {
        'primary': '#006aa1',
        'secondary': '#bcb28b',
        'tertiary': '#002162'
      },     
    },
  },
  plugins: [],
}

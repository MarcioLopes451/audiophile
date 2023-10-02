/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'manrope':['Manrope', 'sans-serif'],
      },
      colors: {
        'caramel': '#D87D4A',
        'night': '#101010',
        'anti-flash-white': '#F1F1F1',
        'seasalt': '#FAFAFA',
        'tangerine': '#fbaf85',
        'white': '#FFFFFF',
        'black': '#000000',
        'background':'#000000bf',
        'asparagus':'#589F40',
        'gray':'#4C4C4C',
        'trans':'#00000099',
      },
    },
  },
  plugins: [],
}

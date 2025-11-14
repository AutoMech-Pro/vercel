/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-page': '#0A0A0A',
        'text-primary': '#E4E4E7',
        'text-secondary': '#A1A1AA',
        'primary-500': '#007BFF',
        'primary-600': '#0056B3',
        'primary-700': '#004085',
        'accent-500': '#17A2B8',
        'accent-600': '#138496',
        'surface-card': '#1A1A1A',
        'surface-hover': '#262626',
      },
      fontSize: {
        'base': '1rem',
        '5xl': '3rem',
        '7xl': '4.5rem',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background-page': '#0A0A0A',
        'background-surface': '#1A1A1A',
        'text-primary': '#E4E4E7',
        'text-secondary': '#A1A1AA',
        'primary-500': '#007BFF',
        'primary-600': '#0056B3',
        'accent-green': '#28A745',
        'accent-purple': '#6F42C1',
        'accent-cyan': '#17A2B8',
      },
      fontFamily: {
        'body': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        'heading': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        'mono': ['SF Mono', 'Monaco', 'Consolas', 'Liberation Mono', 'monospace'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem', 
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'float-up': 'float-up 6s ease-in-out infinite',
        'cursor-glow': 'cursor-glow 3s ease-in-out infinite',
        'slow-glow': 'slow-glow 8s ease-in-out infinite',
        'background-pulse': 'background-pulse 12s ease-in-out infinite',
        'bounce': 'bounce 1s infinite',
      },
      backdropBlur: {
        '4xl': '72px',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        'subly-pink': '#FFDDEE',
        'subly-pink-hover': '#FFB8DD',
        'subly-black': '#1A1A1A',
      },
    },
  },
  plugins: [],
};
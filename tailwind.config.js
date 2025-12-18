/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        riverRed: '#b5151b',
        riverNavy: '#1f2f4a',
        riverGray: '#484848',
      },
      fontFamily: {
        display: ['"Source Sans 3"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['"Source Sans 3"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

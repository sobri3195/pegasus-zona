/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#22d3ee',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};

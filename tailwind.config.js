/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#18181B',
        secondary: '#eaeaeb',
      },
      fontFamily: {
        heading: 'DMsans',
      },
    },
  },
  plugins: [],
};

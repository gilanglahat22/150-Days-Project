/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7c5cfc',
          light: '#8c6ffe',
          dark: '#6c4aec'
        },
        secondary: {
          DEFAULT: '#F87171',
          light: '#FECACA',
          dark: '#EF4444'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 
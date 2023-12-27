/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#5D37F3",
        primary: "#F3F2FA",
        black: '#1A1A1F',
        gray: '#E4E3EB',
        darkGray: '#85858D',
        lightGray: '#F4F3FF',
        green: '#14D81C',
        lightGreen: '#F8FFF8',
        red: '#EF5353',
        lightRed: '#FAF2F3'
      },
    },
  },
  plugins: [],
}
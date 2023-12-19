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
        black: '#1A1A1F'
      },
    },
  },
  plugins: [],
}
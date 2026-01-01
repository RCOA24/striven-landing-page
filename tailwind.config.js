/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3ECF8E', // Supabase green
        secondary: '#61DAFB', // React blue
        dark: '#0F0F0F',
        light: '#F9FAFB',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
